---
title: "Meet Titli: the AI chief of staff I built to run a team of agents"
date: "2026-11-21"
summary: "One message becomes a plan, short-lived agents do the work on a shared board, a reviewer gates every change, and anything risky waits for my passkey."
video: "3uqjHJVhUmk"
---

One message. A whole team gets to work. That is the idea behind Titli, and the three-minute video above walks through one day with her.

**The problem.** I lead a development team, run a small company and keep a lot of side projects alive. The work was never the hard part. The hard part was the glue: remembering what was half done, turning a quick idea into a proper task, checking that nothing shipped without a second pair of eyes, and doing it all from my phone between meetings. A single chat assistant did not help much. It forgot everything between sessions, it could not run work in parallel, and I could not let it do anything risky on its own.

**What I built.** Titli is a chief of staff, not a chatbot. I reach her on WhatsApp, Telegram, her own web app or a phone call (in English or Bangla, and I can cut in mid-sentence). Every channel reaches the same Titli, and she answers where I wrote.

**How the work flows.**
1. **Size it.** A two-minute job she just does herself, right away. Anything bigger becomes a card on a shared board with the goal, the context and what done looks like.
2. **One short-lived agent per job.** Titli starts a fresh agent just for that card. It reads the project's memory first, so it never starts from zero, and it ends when the job is done.
3. **Plan before code.** The agent writes a plan, and a separate reviewer with no memory of the agent's reasoning checks only that plan. New eyes catch what tired eyes miss.
4. **Build in small steps,** with tests at each step. Agents talk only through a central hub, so every step is traced and Titli can see when one is stuck.
5. **Review gate.** A second reviewer gates the merge. Nothing ships until it says the change is ready and every check is green.
6. **My approval for risky actions.** Money, anything public, deleting data or messaging someone new is never automatic. Those wait for my yes, confirmed with a passkey.
7. **Results, then memory.** The result comes back to me in a few short lines on the channel I am using. Before the agent ends, it writes what it learned to memory.

Around that loop, a few "desks" run side by side: growth, operations, content and home. A desk is just a lane of work with its own board, memory and schedule. Questions from the desks come to Titli first; she answers what she can find herself and only brings me what truly needs me.

**What I learned.**
- **Short-lived agents beat one long-lived one.** A fresh agent per job, fed the right memory, stays focused. Long-running sessions drift.
- **Review the plan, not just the code.** Most expensive mistakes are already visible in the plan. A reviewer that has not seen the author's reasoning is the cheapest bug filter I have found.
- **Put the human gate where the risk is.** I do not approve every step, only the ones that touch money, people or the public. Everything else moves on its own.
- **Corrections must become rules.** Every time I correct Titli, the correction is written down as a rule or a skill. That is the only reason she gets better instead of repeating herself.
- **Answer on the channel, in a few lines.** If a result does not fit on a phone screen, I will not read it.

Titli keeps growing every day. If you are building agent systems and want to compare notes, reach out.
