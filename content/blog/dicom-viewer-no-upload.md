---
title: "A DICOM viewer that never uploads your scan"
date: "2026-11-25"
video: "wHNhZLXDuJk"
summary: "dicompeek opens DICOM files in the browser and draws them on your own device. Nothing is uploaded, and you can check that yourself in ten seconds."
---

Most "free online DICOM viewers" want you to upload the file first. For a medical scan that is the wrong default, so I built [dicompeek](https://dicompeek.com), a viewer that never does.

**What it does.** You drop a `.dcm` file, or a whole series, onto the page. The browser reads the file and draws it on your device. Several files are stacked by instance number, you drag on the image to change window and level, and the wheel or the arrow keys move through the series. The tag viewer lists every tag, and those tags are only shown on your screen. There are also tools to export to JPG and to anonymize a file.

**How you can check it.** "Private" is easy to claim, so I made it easy to verify:
- Open your browser's developer tools, go to the Network tab, load a file and watch. No request carries the file.
- The site's security policy only lets the page connect to its own address, so the browser itself would block an upload to anywhere else.
- After the first load the page works offline in your tab.

**Compressed scans.** Uncompressed pixel data, RLE and baseline JPEG open directly. For JPEG 2000 and JPEG-LS, two small WebAssembly modules (OpenJPEG and CharLS) are part of the site. They are fetched from dicompeek.com the first time such a file is opened, and nothing is sent anywhere. A file in a format it can't decode yet is not rejected: its tags are still listed, and the message names the transfer syntax so you know what to ask for.

**What it is not.** It is a convenience viewer for looking at a file, not for diagnosis. Clinical reading belongs in a certified viewer, and the site says so up front.

**Takeaways.**
1. For sensitive files, local-first is the default, not a feature.
2. Make the privacy claim checkable: the Network tab plus a strict security policy.
3. Ship heavy codecs as small WebAssembly modules from your own origin, loaded only when needed.

Try it at [dicompeek.com](https://dicompeek.com).
