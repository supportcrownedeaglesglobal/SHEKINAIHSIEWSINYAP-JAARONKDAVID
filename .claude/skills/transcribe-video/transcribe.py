#!/usr/bin/env python
"""Transcribe a video (or audio) file's speech to text using faster-whisper.

Audio is decoded directly from the container via PyAV (bundled FFmpeg libs),
so no separate FFmpeg install is required.

Usage:
    python transcribe.py <video_path> [model_size] [language]

    model_size : tiny | base | small | medium | large-v3   (default: small)
    language   : e.g. "en" to force English, or omit to auto-detect

Output: prints a header line, the full text, and timestamped segments.
First run downloads the chosen model from Hugging Face (cached afterwards).
"""
import sys
from faster_whisper import WhisperModel


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: python transcribe.py <video_path> [model_size] [language]", file=sys.stderr)
        return 2
    path = sys.argv[1]
    model_size = sys.argv[2] if len(sys.argv) > 2 else "small"
    language = sys.argv[3] if len(sys.argv) > 3 else None

    # int8 on CPU is fast and accurate enough for speech.
    model = WhisperModel(model_size, device="cpu", compute_type="int8")
    segments, info = model.transcribe(
        path, beam_size=5, language=language, vad_filter=True
    )

    print(f"### LANGUAGE: {info.language} (confidence {info.language_probability:.2f})")
    print(f"### MODEL: {model_size}")
    print("\n--- FULL TEXT ---")
    seg_list = list(segments)
    full = " ".join(s.text.strip() for s in seg_list).strip()
    print(full)
    print("\n--- TIMESTAMPED SEGMENTS ---")
    for s in seg_list:
        print(f"[{s.start:6.1f} - {s.end:6.1f}]  {s.text.strip()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
