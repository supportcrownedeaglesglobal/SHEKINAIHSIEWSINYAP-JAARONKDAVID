#!/usr/bin/env python
"""Extract a still frame from a video as a poster/cover image, using PyAV.

Usage:
    python extract_frame.py <video_path> <out_image_path> [timestamp_seconds]

    timestamp_seconds : where to grab the frame (default 1.0)

Decodes forward to the requested time and saves that frame as a JPEG.
No separate FFmpeg binary required (PyAV bundles the libs).
"""
import sys
import av


def main() -> int:
    if len(sys.argv) < 3:
        print("usage: python extract_frame.py <video> <out.jpg> [ts_seconds]", file=sys.stderr)
        return 2
    video, out = sys.argv[1], sys.argv[2]
    ts = float(sys.argv[3]) if len(sys.argv) > 3 else 1.0

    container = av.open(video)
    stream = container.streams.video[0]
    chosen = None
    for frame in container.decode(stream):
        chosen = frame
        if frame.time is not None and frame.time >= ts:
            break
    if chosen is None:
        print("no frames decoded", file=sys.stderr)
        return 1
    img = chosen.to_image()
    img.save(out, quality=92)
    container.close()
    print(f"saved {out}  ({img.width}x{img.height})  at t={chosen.time:.2f}s")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
