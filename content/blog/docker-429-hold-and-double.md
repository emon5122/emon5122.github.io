---
title: "A 429 is not an outage: how DockWarden stopped hammering Docker Hub"
date: "2026-11-21"
video: "VpNIEbvAbvk"
summary: "My auto-updater retried every pass after Docker Hub rate-limited it, so it never got out from under the limit. The fix was a hold that doubles."
---

DockWarden, my Docker auto-update and health monitor, kept getting rate limited by Docker Hub, and it was my own code making it worse.

**What was wrong.** Every pass the updater asks the registry about each image and pulls when the digest changed. When Docker Hub answered `429 toomanyrequests`, the code treated it as an ordinary pull failure. The next pass retried, so the host stayed at the anonymous per-IP limit and the limit never reset.

**The fix (v2.1.1, 2026-11-15).**
- A 429 puts the whole registry host on hold: 10 minutes, doubling on each consecutive 429, capped at 1 hour. The Docker daemon API does not expose the rate-limit reset header, so waiting for an exact time was not possible.
- A 401, 403, "denied" or unknown-repository pull holds only that one image, so a bad private token does not stop public images updating.
- Held images keep answering with the image already on disk, and the health watcher keeps restarting unhealthy containers.
- docker.io images are checked at most once an hour by default.

**The follow-up bug.** A cheap manifest `HEAD` request can succeed while pulls are still limited. That success cleared the hold, so the 10-minute to 1-hour escalation never happened. A good check must not clear a 429 hold.

**Takeaways.**
1. A rate limit is a signal to slow down, not a failure to retry.
2. Back off per registry host for 429s, per image for auth errors.
3. Check that your recovery signal measures the same thing that failed.

Code: [github.com/emon5122/dockwarden](https://github.com/emon5122/dockwarden). The 70-second Short: [youtube.com/shorts/3S7mhT29B0w](https://youtube.com/shorts/3S7mhT29B0w).
