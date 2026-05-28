---
name: transcribe-video
description: Transcribe the spoken audio of a local video or audio file to text, and/or extract a still frame as a cover/poster image. Use when the user asks to transcribe a video, get a video's transcript, caption a clip, pull the spoken words out of an .mp4/.mov/.mp3, or grab a poster frame from a video. Runs fully offline via faster-whisper (no cloud upload).
---

# Transcribe Video (offline)

Local, offline speech-to-text using **faster-whisper** (CTranslate2 Whisper). Audio is
decoded straight from the container by **PyAV** (bundled FFmpeg libraries) — **no separate
FFmpeg install is required**. Nothing is uploaded anywhere.

## One-time setup
```
python -m pip install --user faster-whisper av Pillow
```
- `faster-whisper` — the transcription engine (model auto-downloads on first run, then cached).
- `av` (PyAV) — decodes audio/video frames (bundles FFmpeg).
- `Pillow` — only needed for frame extraction (`extract_frame.py`).

Verified working on Windows + Python 3.14 (ctranslate2 ships a `cp314` wheel).

## Transcribe a file
```
python <skill_dir>/transcribe.py "<path-to-video>" [model] [language]
```
- `model`: `tiny` | `base` | `small` (default) | `medium` | `large-v3`. Bigger = more
  accurate, larger download, slower. `small` is a good default; use `medium`/`large-v3`
  when accuracy matters (e.g. a quote to publish).
- `language`: e.g. `en` to force English (skips auto-detect). Omit to auto-detect.

Prints: detected language + confidence, the full text, and timestamped segments.

## Extract a cover/poster frame
```
python <skill_dir>/extract_frame.py "<path-to-video>" "<out.jpg>" [timestamp_seconds]
```
Saves the frame nearest the given timestamp as a JPEG (good for a `<video poster>`).

## IMPORTANT — accuracy & integrity
- Auto-transcripts contain **mishearings** (proper nouns, names, religious terms are
  frequently wrong — e.g. "Heavenly Father" can come out as "dizzy father"). **Never
  publish a raw transcript verbatim as someone's exact spoken words** without a human
  reviewing it. Surface the raw transcript to the user and have them confirm wording
  before treating any quote as authoritative. The source video/audio is the ground truth.
- A clip may be only a fragment of a longer speech (it can start/stop mid-sentence).
