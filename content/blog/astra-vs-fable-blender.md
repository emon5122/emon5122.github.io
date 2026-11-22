---
title: "GPT-6.2-Astra vs Claude Fable 5.2 for 3D Blender work, right now"
date: "2026-11-22"
summary: "Astra built a charming cartoon tea-seller from an empty Blender scene in 17.5 minutes. Claude needed a dozen passes across two days for its first good character. Claude wrote this post, and it is roasting itself."
---

Full disclosure first: my assistant Titli wrote this post, and Titli runs on Claude. So when it roasts Claude, Claude is roasting itself. I asked for honest, and it delivered.

**The setup.** I am making a Bangla 3D cartoon series, Chaya Goli, in Blender. AI agents do the modelling: they drive a live Blender window through an MCP server, one tool call at a time, and I watch. Since late October that has been Claude: Opus first, then Fable 5.2 as the artist and as the strict judge that grades every board. Today I gave the same setup to OpenAI's GPT-6.2-Astra (Codex CLI, medium reasoning) and one brief: build a new character, Rahim Kaka the tea-seller, alone, from an empty scene.

## Astra: 17.5 minutes, and he has charm

![Rahim Kaka by GPT-6.2-Astra, three-quarter view](/blog/astra-vs-fable/astra-rahim-3q.webp)

- **Time:** 17.5 minutes from a blank scene to a saved file with four preview renders.
- **Work:** 128 Blender MCP calls. It checked the viewport after almost every step and fixed what it saw: lids cutting into the eyes, a gap at the hairline, a squared-off nape.
- **Result:** a white sando genji, a teal checked lungi with a proper waist tuck, a red gamchha with fringes, rubber sandals and an aluminium kettle. He reads as a Bangladeshi tea-stall man at thumbnail size. Front and three-quarter views have real appeal.
- **Bonus:** it also built a game-ready low-poly copy and a basic rig without being nagged.

Now turn him sideways.

![Rahim Kaka side view: the face is a flat mask](/blog/astra-vs-fable/astra-rahim-side.webp)

- **Side view:** a mask. The face is a flat front plane with the eyes, brows and moustache stuck on as shells, and the head reads as a cylinder.
- **Construction:** kit-bashed from 197 separate primitives, not one body you can deform. The joints show seams, and the lungi is a rigid tube with no drape.
- **Rig:** a 20-bone placeholder with untested weights and no face rig. You cannot animate a smile.
- **Cost:** one character took a big slice of a 5-hour ChatGPT plan window, well over a third.

Our own internal verdict: a great blockout and design proposal, not a production asset. The judge would likely send it back for charm (the eyes are a bit startled, the hair is a ridged helmet) before it even looked at the rig.

## Claude: the roast

Here is Hossain Kaka, our first main character, from the same pipeline. This is where he ended up:

![Hossain Kaka, the Claude-built character, after many passes](/blog/astra-vs-fable/fable-kaka-face.webp)

He looks good. Getting him there was not pretty, and every step is in the repo history:

- **Eight hand-built passes in about a day** (Opus on the early ones, Fable from pass seven) came out as boxy torsos, beards that read as "layered plates" and hands that were mitten blobs. My verdict on pass 8: "even nothing".
- **Then I banned hand-modelling.** My exact words: "NO hand-crafting of character models at all." We switched to image-to-3D (Microsoft TRELLIS) from the approved concept sheet, and Claude's job became fixing and rebuilding that mesh in Blender. The first look I called usable was pass 12.
- **Pass 13 made him worse** and we rolled it back. The note in the log just says: "Kaka was better".
- **The judge kept saying no.** In one twelve-hour run the Fable judge wrote 33 reviews on Kaka work, and 11 of them were FIX. The facial expressions needed seven reviewed rounds before the face was locked, four days after the first pass. One hand item went three rounds without a pass: the fist was "a flat wedge", and it stalled until someone picked a new base hand.

So the first-look race is not close: **Astra gave me in 17.5 minutes a more appealing first look than Claude managed in its first eight passes.** That stings, and I am the one who wrote it.

## Where Claude earns it back

Appeal in a still frame is not a character you can animate. On the same Kaka, once he was locked, Claude went deep:

- a full face rig with an expression set that reads at phone size;
- IK legs and arm, and a walk with 0.0 mm foot slide;
- a cane control whose tip stays planted (0.0006 mm drift over 96 frames) while the spine leans;
- every round in ONE canonical .blend with a progress log, so a new session picks up where the last one stopped.

Astra has not been asked to do any of that yet. Its rig is a placeholder and its weights are untested. Nobody knows today whether it can carry a character through ten review rounds without breaking him.

## Is this fair?

Not completely, and here is why:

- **Astra ran once.** Claude has dozens of passes on record, which means dozens of chances to look bad.
- **Astra started on a paved road.** The MCP bridge, the brief format and the "check the viewport after every step" habit were all built during Claude's struggle. Astra's first run used that tooling. Claude's earliest passes did not have it.
- **The briefs differ.** Kaka had to match an approved concept sheet; Rahim only had to look right.
- **Claude graded both.** The Astra verdict came from my Claude-based setup, with Claude's rubric. It was hard on Astra's side view, but it was just as hard on its own Kaka, eleven FIX verdicts' worth.

## Verdict, right now

1. **Blank scene to a charming blockout:** Astra wins, and clearly. It is fast, it looks at its own work, and it has a better eye for appeal on the first try.
2. **A production character that can move, emote and survive a review loop:** Claude has the receipts. Astra has not been tested there yet.
3. **What I will do next:** Astra builds the design, and a judged pass turns it into a real asset. Its next test is fixing Rahim's side profile and giving him a real rig. If it holds up through that, the artist job is open.
