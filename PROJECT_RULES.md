# PROJECT_RULES.md

Absolute rules for this repository. These apply to all contributors, human and AI, on every branch.

---

## Absolute Editing Restrictions

- Do not edit `main` directly under any circumstances.
- Do not rewrite `index.html` or `magazine-article.html` from scratch.
- Do not replace the CSS stylesheet or JavaScript block wholesale.
- Do not change the global typography system unless the owner explicitly requests it.
- Do not change the global color palette unless the owner explicitly requests it.
- Do not alter sections outside the scope of the current task.
- Do not introduce new external fonts, libraries, or frameworks without explicit approval.
- Do not add placeholder, lorem ipsum, or filler content anywhere.
- Do not add emojis to body copy, headings, section labels, or navigation elements.

---

## UI Preservation Rules

The following have been established in production and must not be reverted, replaced, or altered:

- Typography: Cormorant Garamond, Cinzel, DM Sans, Playfair Display
- Color tokens: `--ink`, `--ink2`, `--gold`, `--gold2`, `--cream`, `--warm`, `--muted`, `--border`
- Gold metallic name treatment for Shekinaih Siew Sin Yap
- Silver metallic name treatment for J Aaron K David
- Full uppercase display for both names on all identity surfaces
- Testimonial section editorial archive structure
- Awards section formal archive card layout with lightbox integration
- Press interview poster on video card and video modal
- Personal IP identity: `shekinaih-jaaronkdavid.com` across all identity surfaces
- Fade-up scroll-reveal animation system
- Cinematic hero layout with split photo composition
- QR card grid with local PNG images

---

## Minimal-Change Policy

- Make the smallest complete change that satisfies the task.
- Keep changes scoped to the section, element, or file specified.
- Do not refactor adjacent code that is not part of the task.
- Do not reformat or clean up HTML/CSS in sections you are not editing.
- Do not reorganise the DOM structure unless the task requires it.
- One task per commit. Do not mix unrelated changes in a single commit.

---

## No Full-Rewrite Policy

- Do not rewrite any production HTML file from scratch.
- Do not replace the embedded stylesheet with a new one.
- Do not replace the embedded JavaScript with a rewrite.
- If a section requires substantial change, edit only that section.
- If a rewrite is genuinely necessary, raise it explicitly and wait for owner decision.

---

## Branch Governance

| Rule | Detail |
|---|---|
| Production branch | `main` — auto-deploys to Vercel on every push |
| Claude Code prefix | `claude/<task-name>` |
| Codex prefix | `codex/<task-name>` |
| Human feature prefix | `feature/<task-name>` or `fix/<task-name>` |
| Branch reuse | Do not reuse a branch across unrelated tasks |
| Merge authority | Human owner only — no self-merge by AI agents |
| PR requirement | All branches must go through a pull request before merging to `main` |

Claude Code and Codex branches are intentionally separated. Do not merge one agent's branch into another's. Keep attribution and review history clean.

---

## Deployment Safety

- `main` triggers automatic Vercel production deployment on every push. There is no staging buffer.
- Never force-push to `main`.
- Never rebase `main` after it has been deployed.
- Vercel generates a preview deployment for every branch push — always inspect the preview URL before opening a pull request.
- Confirm the preview renders correctly on both desktop and mobile before requesting a merge.

---

## Asset Discipline

- Do not commit video files without explicit owner approval for each file.
- Do not commit files over 5 MB without explicit owner approval.
- `images/imported/` and `videos/imported/` are staging areas only. Assets there are not approved for page placement.
- Do not reference imported assets in any HTML file until the owner selects them for final placement.
- Keep original filenames in the staging folders. Do not rename until a production-ready name is confirmed.
- Do not commit PDF documents, DOCX files, or exports to the repository root. Place them in `docs/`.

---

## Forbidden Visual Directions

Do not move the site toward any of the following:

- SaaS dashboard or admin panel interface
- Startup or tech company visual language
- Aggressive conversion funnels or sales-page layouts
- Excessive animation, parallax, or motion effects
- Prosperity gospel visual language or aesthetic
- Generic testimonial slider patterns
- Generic church or ministry template design
- Stock-photo brochure layout
- Cartoon-style award or recognition treatment
- Loud hero graphics with oversized CTAs

---

## Forbidden Content Directions

Do not introduce any of the following:

- Manipulative religious language or emotional pressure copy
- Miracle marketing, sensationalist claims, or unverifiable superlatives
- Corporate boilerplate or generic leadership language
- Hype-driven testimonial formatting
- Excessive exclamation points, countdown urgency, or conversion pressure language
- Filler adjectives that do not add information

---

## Production Safety Summary

| Rule | Classification |
|---|---|
| Never edit `main` directly | Absolute |
| Never self-merge as an AI agent | Absolute |
| Never commit large media without owner approval | Absolute |
| Never rewrite whole files | Absolute |
| Always scope changes to the current task | Absolute |
| Always inspect Vercel preview before requesting merge | Required |
| Always update `CHANGELOG.md` after meaningful edits | Required |
| Always read `AGENTS.md` before editing | Required |
| Always summarize understanding before editing | Required |
