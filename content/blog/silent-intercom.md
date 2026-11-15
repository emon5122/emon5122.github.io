---
title: "Why our camera intercom went silent: a cgroup page-cache story"
date: "2026-11-08"
summary: "Every call worked, yet the speaker sent 0 bytes. The cause was a 256 MB container limit evicting a cold encoder, and the fix was a warm spare."
---

Our front-door intercom stopped talking. Every call "worked": the logs showed 0 bytes sent, no errors, no crash.

**Ruling things out.** The camera SDK was fine. The microphone path was fine. The silence was in the speaker direction, and only on talks that came after a quiet period.

**Measuring cold vs warm.** Each talk started a fresh audio encoder process. I timed that start in three conditions: warm (0.15 s), after the kernel had reclaimed page cache (2.3 s), and while the host was swapping (20+ s). The hang-up arrived before the first audio frame in the slow cases.

**Why.** The encoder's image linked about 212 shared libraries. The container had a 256 MB memory limit and no swap. Page cache counts against a cgroup's limit, so the file pages of a thing we "only run occasionally" were the first to be evicted. A cold start meant re-reading hundreds of files from disk.

**The fix.** Keep one encoder started and primed with silence (a warm spare). A talk takes the spare; the end of the talk refills it. First frame: 0.15 s even with the cache evicted. Review caught two bugs in my first version: a stale spare that outlived its input format, and crash cleanup that left a zombie spare behind. Both fixed.

**Proof.** After the release, the intercom check passed three times in a row on two extensions, the first clean run since the failure began.

**One honest note.** A test that flaked during development never reproduced for me afterwards. I am not claiming I understand it.

**Takeaways.**
1. Memory limits include page cache. Things you run occasionally pay for it.
2. Measure cold start, not warm start.
3. "No error, 0 bytes" is a timing bug until proven otherwise.
