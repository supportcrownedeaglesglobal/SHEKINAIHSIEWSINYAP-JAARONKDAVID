# Shekinaih Siew Sin Yap & J Aaron K David

Personal brand and humanitarian presence website.

**Live site:** shekinaih-jaaronkdavid.com
**Repository:** github.com/jjcheng9296/shekinaih-jaaronkdavid
**Deployment:** Vercel — auto-deploys from `main`

---

## Project Purpose

This is a high-end personal brand and humanitarian presence website for Shekinaih Siew Sin Yap and J Aaron K David, co-founders of Crowned Eagles Global.

The site exists to establish:

- spiritual credibility and prophetic leadership identity
- humanitarian and international recognition
- editorial-level public presence for diplomatic and global audiences
- personal IP branding distinct from any single organisation
- long-term legacy positioning

The visual and content identity is intentionally editorial, cinematic, and refined. It must not move toward corporate, startup, ministry template, or aggressive marketing directions. See `PROJECT_RULES.md` and `AGENTS.md` for the full list of forbidden directions.

---

## Technology Stack

- Static HTML, CSS, vanilla JavaScript — no build system
- Hosted on Vercel via GitHub auto-deployment
- Google Fonts: Cormorant Garamond, Cinzel, DM Sans, Playfair Display
- No frameworks, no package managers, no bundlers

---

## Repository Structure

```
/
├── index.html                 Main single-page website
├── magazine-article.html      Magazine feature sub-page
├── images/                    Production images in active use
│   └── imported/              Staged media, not yet placed in HTML
│       ├── 2026-03-29/        5 photos awaiting owner review
│       └── 2026-05-24/        2 photos awaiting owner review
├── videos/                    Production videos in active use
│   └── imported/              Staged media, not yet placed in HTML
│       └── 2026-05-24/        3 videos awaiting owner review
├── docs/                      PDFs and supporting documents
├── AGENTS.md                  AI agent workflow governance
├── README.md                  This file
├── PROJECT_RULES.md           Absolute editing and deployment rules
├── TASKS.md                   Task tracking
├── CHANGELOG.md               Change history
└── .gitignore
```

---

## Deployment Flow

1. All work is done on a named feature branch — never on `main`.
2. Changes are pushed to GitHub.
3. Vercel automatically generates a preview deployment for every branch push.
4. The preview URL is reviewed by the owner before a pull request is opened.
5. A pull request is opened against `main`.
6. Human approval is required before any merge.
7. Merging to `main` triggers automatic Vercel production deployment.

Do not push directly to `main`.
Do not merge without explicit human approval.
Do not rely on AI self-review as sufficient for production merge.

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production only. Auto-deploys to Vercel. Never edit directly. |
| `claude/editorial-polish` | Active Claude Code agent feature branch |
| `codex/testimonial-update` | Codex agent branch — merged to main |

Claude Code and Codex branches are intentionally separated. This preserves clear attribution, independent review history, and clean rollback paths. Each agent works on its own prefixed branch.

New Claude Code work: prefix `claude/`
New Codex work: prefix `codex/`

---

## Git Workflow

```bash
git checkout main
git pull origin main
git checkout -b claude/<task-name>

# make changes

git add <specific-files-only>
git commit -m "concise, specific description"
git push -u origin claude/<task-name>

# open pull request on GitHub
# wait for owner review and approval
# do not self-merge
```

Do not use `git add .` or `git add -A` without explicitly inspecting staged content.
Do not commit videos, PDFs, or binary files over 5 MB without owner approval.
Do not commit temporary files, exports, screenshots, or generated scratch outputs.

---

## Warning: Do Not Edit Main Directly

`main` is the production branch. Every push to `main` triggers a live Vercel deployment that is immediately public.

Direct edits to `main` bypass review, bypass preview testing, and risk publishing broken or unreviewed content to a live public site.

All changes — including documentation, copy edits, and single-line fixes — must go through a feature branch and pull request.

---

## Required Reading for AI Agents

Before making any change, read in this order:

1. `AGENTS.md`
2. `PROJECT_RULES.md`
3. `CHANGELOG.md`
4. `TASKS.md`

Summarize your understanding before editing. Work one task at a time. Update `CHANGELOG.md` after meaningful changes.

---

## Missing Governance Files

The following files are referenced in `AGENTS.md` but do not yet exist in this repository:

- `BRAND.md` — design system reference (exists in a separate Astro project folder, not yet ported here)
- `CLAUDE.md` — project intelligence file (same situation)

Until these files are created here, follow the design decisions visible in the existing production code and defer to `AGENTS.md` for editorial direction.
