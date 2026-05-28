# Media Rename Plan — Generic-Named Files Audit

**45 files** with generic names (`photo_<timestamp>.jpg`, `video_<timestamp>.mp4`) found across the project. Each was opened and inspected. Proposed new names follow the existing project convention:

```
<event-slug>-<year>-<subject>-<short-description>.<ext>
```

> ⚠️ Several files in `imported/` are **duplicates** of files already in their proper destination folders. Those are flagged below — recommend deletion rather than rename.

---

## ✅ OMAN (NEW folder — 13 photos + 2 videos)

Event: **IISA 2026 · 5th Edition** — Sheraton Oman Hotel, 12 Feb 2026  
Theme: *Oman Vision 2040 — Global Partnerships Beyond Borders, Trade Talent & Technology*  
Organisers: I.I.I Group · Gulf Skill Pioneers · BCI

| Current | → Proposed |
|---|---|
| `oman/photo_2026-02-10_04-12-45.jpg` | `oman-2026-iisa-shekinaih-delegate-event-poster.jpg` |
| `oman/photo_2026-02-10_04-13-04.jpg` | `oman-2026-iisa-aaron-delegate-event-poster.jpg` |
| `oman/photo_2026-03-01_23-55-59.jpg` | `oman-2026-iisa-event-signage-oman-ballroom-2.jpg` |
| `oman/photo_2026-03-29_08-08-41.jpg` | `oman-2026-iisa-shekinaih-receiving-award-plaque-on-stage.jpg` |
| `oman/photo_2026-05-25_08-23-35.jpg` | `oman-2026-iisa-award-plaque-close-up.jpg` |
| `oman/photo_2026-05-25_08-23-35 (2).jpg` | `oman-2026-iisa-gold-trophy-close-up.jpg` |
| `oman/photo_2026-05-25_09-09-07.jpg` | `oman-2026-iisa-shekinaih-aaron-on-stage-with-delegate-holding-awards.jpg` |
| `oman/photo_2026-05-25_09-42-54.jpg` | `oman-2026-iisa-shekinaih-aaron-seated-at-gala-ballroom.jpg` |
| `oman/photo_2026-05-27_09-58-36.jpg` | `oman-2026-iisa-shekinaih-receiving-plaque-wide-stage.jpg` |
| `oman/photo_2026-05-27_09-59-25.jpg` | `oman-2026-iisa-shekinaih-speaking-on-stage-with-delegates.jpg` |
| `oman/photo_2026-05-27_09-59-46.jpg` | `oman-2026-iisa-aaron-speaking-on-stage-international-panel.jpg` |
| `oman/photo_2026-05-27_10-00-08.jpg` | `oman-2026-iisa-aaron-shekinaih-with-young-flag-bearer-at-gala.jpg` |
| `oman/photo_2026-05-27_10-00-32.jpg` | `oman-2026-iisa-aaron-speaking-on-stage-with-delegate-panel-wide.jpg` |
| `oman/video_2026-05-27_11-27-32.mp4` | `oman-2026-iisa-event-video-01.mp4` |
| `oman/video_2026-05-27_11-27-43.mp4` | `oman-2026-iisa-event-video-02.mp4` |

---

## 🟡 NEPAL (folder is mis-named — content is actually NAGPUR)

The single photo here is a Hindi/Marathi newspaper clipping ("Navbharat", *Nagpur Metro* edition, 29 Jan 2026) reporting on the **151 Buddha statue distribution at Buddha Park, Kanhan, Nagpur** — with J Aaron K David as Chief Guest. **Not Nepal content.**

| Current | → Proposed |
|---|---|
| `nepal/photo_2026-02-07_06-48-59.jpg` | **MOVE to `nagpur-kolkata-2026/`** → `nagpur-kolkata-2026-navbharat-newspaper-coverage-buddha-park-kanhan.jpg` |
| `nepal/video_2026-05-27_11-37-38.mp4` | **Need clarification** — is this actually Nepal content? If not, suggest moving to the correct folder. |

➡️ **Suggest deleting the `images/nepal/` folder** once the photo is moved (unless the video is genuinely Nepal content).

---

## ✅ MUMBAI-BOLLYWOOD (6 photos + 1 video)

Event: **DMGP Global Diplomacy Awards** — Lakeside Marriott Hotel, Powai, Mumbai · Jan 2026

| Current | → Proposed |
|---|---|
| `mumbai-bollywood/photo_2026-01-28_18-31-42.jpg` | `mumbai-bollywood-2026-shekinaih-press-conference-with-dmgp-certificate-and-medal.jpg` |
| `mumbai-bollywood/photo_2026-01-28_18-32-27.jpg` | `mumbai-bollywood-2026-aaron-press-conference-with-dmgp-certificate-and-medal.jpg` |
| `mumbai-bollywood/photo_2026-01-28_18-35-31.jpg` | `mumbai-bollywood-2026-dmgp-four-awardees-group-with-certificates.jpg` |
| `mumbai-bollywood/photo_2026-03-12_16-53-59.jpg` | `mumbai-bollywood-2026-niche-magazine-dmgp-coverage-article.jpg` |
| `mumbai-bollywood/photo_2026-05-25_10-03-16.jpg` | `mumbai-bollywood-2026-aaron-shekinaih-with-bollywood-host-and-guest-hotel-lobby.jpg` |
| `mumbai-bollywood/photo_2026-05-25_10-03-16 (2).jpg` | `mumbai-bollywood-2026-shekinaih-selfie-with-female-guest.jpg` |
| `mumbai-bollywood/video_2026-05-26_12-32-51.mp4` | `mumbai-bollywood-2026-shekinaih-aaron-event-video-02.mp4` |

---

## ✅ NAGPUR-KOLKATA-2026 (2 photos + 6 videos)

| Current | → Proposed |
|---|---|
| `nagpur-kolkata-2026/photo_2026-05-25_10-06-59.jpg` | `nagpur-kolkata-2026-kolkata-shekinaih-with-buddhist-monk-and-dignitaries-sister-nivedita-university.jpg` |
| `nagpur-kolkata-2026/photo_2026-05-25_10-06-59 (2).jpg` | `nagpur-kolkata-2026-kolkata-shekinaih-aaron-delegation-with-monk-sister-nivedita-university-wide.jpg` |
| `nagpur-kolkata-2026/video_2026-05-27_11-31-33.mp4` | `nagpur-kolkata-2026-event-video-01.mp4` |
| `nagpur-kolkata-2026/video_2026-05-27_11-32-17.mp4` | `nagpur-kolkata-2026-event-video-02.mp4` |
| `nagpur-kolkata-2026/video_2026-05-27_11-32-52.mp4` | `nagpur-kolkata-2026-event-video-03.mp4` |
| `nagpur-kolkata-2026/video_2026-05-27_11-32-58.mp4` | `nagpur-kolkata-2026-event-video-04.mp4` |
| `nagpur-kolkata-2026/video_2026-05-27_11-33-02.mp4` | `nagpur-kolkata-2026-event-video-05.mp4` |
| `nagpur-kolkata-2026/video_2026-05-27_11-33-36.mp4` | `nagpur-kolkata-2026-event-video-06.mp4` |

➡️ **Video naming caveat:** I can't view video content with my tools. The numbered names above are placeholders. Once you tell me what each video shows (Buddha statue distribution / alms ceremony / monk procession / Walk for Peace / etc.) I can re-rename with descriptive names.

---

## ✅ MANILA-UP-2025 (1 new photo)

| Current | → Proposed |
|---|---|
| `manila-up-2025/photo_2025-11-22_22-05-01.jpg` | `manila-up-2025-aaron-shekinaih-with-lisa-lew-and-gala-hosts-group-photo.jpg` |

---

## ⚠️ IMPORTED ROOT — 4 to rename, 3 are DUPLICATES

### Rename + Move to proper folder:
| Current | → Proposed (with new folder) |
|---|---|
| `imported/photo_2026-05-25_18-52-08.jpg` | `unpkfc-2024/unpkfc-2024-aaron-shekinaih-receiving-certificates-with-aphinita.jpg` *(NEW)* |
| `imported/Aaron_Shekinaih_Group_Photo_Social_Event.jpeg` | `manila-up-2025/manila-up-2025-aaron-shekinaih-with-lisa-lew-and-hosts-evening-gathering.jpeg` |
| `imported/fire_ministries.jpg` | `his-presence-fire-cathedral-2025/his-presence-fire-2025-shekinaih-aaron-with-pastor-sikaala-cathedral-portrait.jpg` |
| `imported/manila up award.jpg` | `manila-up-2025/manila-up-2025-aaron-shekinaih-with-trophies-formal-portrait.jpg` |

### Duplicates of existing files (recommend **delete**, not rename):
| File | Duplicate of |
|---|---|
| `imported/photo_2025-11-21_14-31-20.jpg` | `la-hollywood-2025/Aaron_Shekinaih_Hollywood_Red_Carpet_Interview_01.jpg` *(the head-cropped one)* |
| `imported/photo_2025-11-21_14-31-21.jpg` | `la-hollywood-2025/Aaron_Shekinaih_Hollywood_Red_Carpet_Interview_02.jpg` |
| `imported/qr_img_1.jpg` | Same as already-deployed `images/qr-codes/` content (4 QR codes for breakthrough / Heaven Broadcast / Billionaire Destiny) — verify and decide |

---

## ⚠️ IMPORTED/2026-03-29 — All 5 are DUPLICATES of Oman content

Every file in this folder is the same Oman IISA event. Some are duplicates of files already in `images/oman/`, others are alternate angles that could be kept.

| File | Analysis | Action |
|---|---|---|
| `imported/2026-03-29/photo_2026-03-29_08-08-39.jpg` | Aaron receiving award — slight angle variation of `oman/photo_2026-05-27_09-58-36.jpg` | **Keep, move to `oman/`** as `oman-2026-iisa-aaron-receiving-award-on-stage.jpg` |
| `imported/2026-03-29/photo_2026-03-29_08-08-40.jpg` | Shekinaih speaking on stage — same scene as `oman/photo_2026-05-27_09-59-25.jpg`, different frame | **Likely duplicate, suggest delete** |
| `imported/2026-03-29/photo_2026-03-29_08-08-40 (2).jpg` | Same scene, tighter crop | **Likely duplicate, suggest delete** |
| `imported/2026-03-29/photo_2026-03-29_08-08-40 (3).jpg` | Aaron speaking on stage with award plaque — alternate of `oman/photo_2026-05-27_10-00-32.jpg` | **Keep, move to `oman/`** as `oman-2026-iisa-aaron-speaking-on-stage-with-plaque-medium-shot.jpg` |
| `imported/2026-03-29/photo_2026-03-29_08-08-41.jpg` | Identical to `oman/photo_2026-03-29_08-08-41.jpg` | **Duplicate, DELETE** |

➡️ **Then delete the `images/imported/2026-03-29/` folder** entirely.

---

## ⚠️ IMPORTED/2026-05-24 — Both are DUPLICATES of Oman posters

| File | Duplicate of | Action |
|---|---|---|
| `imported/2026-05-24/photo_2026-05-24_20-23-04.jpg` | `oman/photo_2026-02-10_04-12-45.jpg` (Shekinaih IISA delegate poster) | **DELETE** |
| `imported/2026-05-24/photo_2026-05-24_20-23-08.jpg` | `oman/photo_2026-02-10_04-13-04.jpg` (Aaron IISA delegate poster) | **DELETE** |

➡️ **Then delete the `images/imported/2026-05-24/` folder** entirely.

---

## ⚠️ VIDEOS/IMPORTED/2026-05-24 — 3 videos, content unknown

| File | Size | Likely candidate |
|---|---|---|
| `videos/imported/2026-05-24/video_2026-05-24_20-21-42.mp4` | 1.3 MB | Short clip — likely from Mumbai/Oman event |
| `videos/imported/2026-05-24/video_2026-05-24_20-22-00.mp4` | 13 MB | Medium — likely event speech |
| `videos/imported/2026-05-24/video_2026-05-24_20-22-09.mp4` | 40 MB | Long — likely full event coverage |

➡️ **Need your input** — what's in each? Once I know, I'll propose proper names and target folders.

---

## Summary — what to do next

| Action | Count |
|---|---|
| **Rename in place** | 22 photos + 9 videos = 31 files |
| **Move to different folder + rename** | 5 files |
| **Delete (confirmed duplicates)** | 7 files |
| **Delete empty folder** | `imported/2026-03-29/`, `imported/2026-05-24/`, possibly `nepal/` |
| **Needs your input** | 4 videos (3 in `videos/imported/2026-05-24/` + 1 in `nepal/`) |

---

## ▶️ How would you like me to proceed?

Reply with one of:

1. **"Apply all"** — I'll execute every rename/move/delete above. Safe — no overwrites, will skip any file already present at the destination.
2. **"Apply renames only, no deletes"** — I rename + move, but leave duplicates alone for you to manually delete.
3. **"Generate a PowerShell script"** — I produce a `rename-media.ps1` file you can review line-by-line and run yourself.
4. **"Let me adjust some names first"** — Tell me which proposed names to change and I'll update this plan.

I'll wait for your call before touching any files.
