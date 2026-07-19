# joshkelsey.org — Reskin Checklist

Built from the filesystem on the `redesign` branch. Design source of truth: `joshkelsey-mockup-v15.html` (home) + `joshkelsey-article-worry.html` (reading layout). Binding brief: `CLAUDE-CODE-RESKIN-BRIEF.md`.

**Rule:** design layer only. Preserve every route, heading, word, title, description, canonical, OG, and JSON-LD — except the six SEO fixes in §E. Photos grayscale, color only in type, motion never hides content.

Route accounting: **41 existing routes + 2 new (`/running`, `/writing/worry-is-the-misuse-of-your-imagination`) = 43 total.** Re-count at the end must equal 43.

---

## A. Design-system foundation (do first — everything builds on it)

- [x] `tailwind.config.ts` — encode tokens: `ink #121110`, `paper #ecebe4`, `deep #0a0908`, `red #e8371a`, `amber #f0a52a`, `blue #2f5bd0`, `muted #6f6b60`, `line #d1cdc0`. Font families `disp` (Bricolage Grotesque), `serif` (Fraunces), `mono` (Geist Mono). Keep existing token names that pages already use (`accent`, `border`, `soft`, `max-content`, `display-lg/xl`) aliased to the new palette so inner pages don't break.
- [x] `src/app/layout.tsx` — swap Google Fonts link from Cormorant/Source Serif to **Bricolage Grotesque + Fraunces + Geist Mono** (exact `<link>` from the mockup). (Also carries SEO fixes #3, #5, #6 — see §E.)
- [x] `src/app/globals.css` — port the mockup's design primitives as reusable classes/keyframes: `rvl` reveal (plays on load, ends visible), `par` parallax inside `@supports (animation-timeline: view())` with scaled base state, `hue` chroma gradient, `cyc` word-cycler, grayscale image filter `grayscale(1) contrast(1.03)`, custom-cursor rules `@media (hover:hover)`, full `prefers-reduced-motion` block. Base body = paper/ink/Fraunces.

## B. Shared components

- [x] `src/components/Nav.tsx` — reskin to the fixed header: white wordmark `Josh Kelsey` + red dot, mono nav, top scrim + text-shadow, red underline hover, mobile burger. **Nav order (per brief/mockup): Writing · Dinner Parties · Church Planting · For Leaders · Running · About.** (Sermons/Podcast/Contact drop out of the header but stay reachable in the footer — no page or SEO lost. **Decision to confirm — see plan.**) Provide a dark-on-paper variant for inner/reading pages (matches article file's sticky header).
- [x] `src/components/Footer.tsx` — reskin to the "Pull up a chair." giant statement + link columns + `JK.` monogram. **Remove the duplicate `personSchema` JSON-LD entirely (SEO fix #5).** Keep the Substack embed (see §F). Ensure link columns cover every route incl. Sermons, Podcast, Contact, Press, Running.
- [x] `src/components/ChapterHeader.tsx` — restyle to the reading treatment (Bricolage folio number + title, Fraunces intro, mono kicker). Keep all props/behavior.
- [x] `src/components/ChapterNav.tsx` — restyle prev/next to mono labels + Bricolage titles, red hover. Keep props.
- [x] `src/components/PullQuote.tsx` — restyle to the mockup/article `.pull` (Fraunces italic, red left-border, red accent word). Keep props.
- [x] **NEW** `src/components/Cursor.tsx` (client) — custom cursor, pointer-only, reduced-motion off. Shared by all pages.
- [x] **NEW** `src/components/Subscribe.tsx` — the mockup's Substack signup block (mono kicker + Bricolage head + Fraunces copy + form → Substack). Reused on home, every article end, footer. (See §F.)
- [x] **NEW** `src/components/ArticleLayout.tsx` (+ `ProseArticle`) — the reusable reading template from `joshkelsey-article-worry.html`: `.lede` (mono kick, Bricolage h1, Fraunces stand-first, byline), grayscale `.figure`, `.col` measure, `.para`, `.pull`, trailing Subscribe. Template for **every essay + chapter + reading page.**
- [x] **NEW** home section components (client where motion needed): `Hero` (rotating quotes array), `WordCycler` banner, `IndexRows` (hover-peek), `RunningSection` (marquee + count-up marathons), `Jolt`, `FeaturedEssay`, `Close`.

## C. Existing routes — reskin each (design only; keep metadata/JSON-LD except §E)

Each route: apply design system, grayscale imagery, motion-safe reveals. Metadata/canonical/JSON-LD stay put unless flagged. Home + church-planting chapters + press carry SEO fixes.

**Top-level**
- [x] `/` — `src/app/page.tsx` — rebuild to the mockup home (hero, banner, index, running, jolt, featured essay = **Worry**, close, subscribe). **Preserve an accessible H1 + keyword text + the layout's Person/WebSite JSON-LD for SEO** (mockup is visual-forward; see plan decision). Home has no metadata export — inherits layout.
- [x] `/about` — `src/app/about/page.tsx` — full reading treatment; this now holds the longer personal writing. Title "About Josh Kelsey" → fix #6.
- [x] `/contact` — `src/app/contact/page.tsx` — reading/list treatment. Title carries brand → fix #6.
- [x] `/sermons` — `src/app/sermons/page.tsx` — list treatment. Title "Sermons by Josh Kelsey" → fix #6.
- [x] `/podcast` — `src/app/podcast/page.tsx` — list + player treatment.
- [x] `/press` — `src/app/press/page.tsx` — reading/list treatment. **Canonical → self `https://joshkelsey.org/press` (fix #2).** Title "Press & Media" (brand appended by template — OK, verify).
- [x] `/press/eternity-news-dinner-party-church` — reading treatment. Has Article JSON-LD → point author to `#person` (fix #5).

**Writing** (index + 6 essays; reading template)
- [x] `/writing` — `src/app/writing/page.tsx` — editorial list / interactive index.
- [x] `/writing/you-cant-make-it-grow`
- [x] `/writing/the-press`
- [x] `/writing/the-first-and-the-last`
- [x] `/writing/the-church-is-not-the-fount`
- [x] `/writing/thirteen-years-in-nyc`
- [x] `/writing/on-preaching-the-whole-text`
  - All 6 use ArticleLayout; each has `#person` author ref already — keep/normalize (fix #5).

**Church Planting** (index + 10 chapters; reading template + numbered folios)
- [x] `/church-planting` — `src/app/church-planting/page.tsx`
- [x] `/church-planting/beginning` — **canonical .com → .org (fix #1)** · title fix #6
- [x] `/church-planting/person` — fix #1 · #6
- [x] `/church-planting/personal-health` — fix #1 · #6
- [x] `/church-planting/strategy` — fix #1 · #6
- [x] `/church-planting/culture` — fix #1 · #6
- [x] `/church-planting/reach` — fix #1 · #6
- [x] `/church-planting/people` — fix #1 · #6
- [x] `/church-planting/practical` — fix #1 · #6
- [x] `/church-planting/generations` — fix #1 · #6
- [x] `/church-planting/trials` — fix #1 · #6
  - Each chapter also has Person JSON-LD → normalize author to `#person` (fix #5).

**Dinner Parties** (index + 11 pages; index + reading templates)
- [x] `/dinner-parties` — `src/app/dinner-parties/page.tsx`
- [x] `/dinner-parties/vision`
- [x] `/dinner-parties/the-night`
- [x] `/dinner-parties/leadership-roles`
- [x] `/dinner-parties/culture`
- [x] `/dinner-parties/heart-of-a-leader`
- [x] `/dinner-parties/raising-leaders`
- [x] `/dinner-parties/multiplication`
- [x] `/dinner-parties/sustainability`
- [x] `/dinner-parties/invitation`
- [x] `/dinner-parties/menu-ideas`
- [x] `/dinner-parties/leaders-guide`
  - 9 of these carry Person JSON-LD → normalize author to `#person` (fix #5).

**For Leaders** (index + 3 weeks)
- [x] `/for-leaders` — `src/app/for-leaders/page.tsx` — title "· Josh Kelsey" → fix #6
- [x] `/for-leaders/week-1`
- [x] `/for-leaders/week-2`
- [x] `/for-leaders/week-3`

## D. New routes

- [x] **`/running`** — `src/app/running/page.tsx` — build from the mockup Running section: dark section, Bricolage heading, marquee, three marathons (Paris 3:23:11, Berlin 3:06:44 PB, New York 3:21:29) with count-up-on-view + fallback values in markup, plus a **placeholder training-plans / race-notes block** for Josh. Add `export const metadata` (title/description/self-canonical) + optional JSON-LD.
- [x] **`/writing/worry-is-the-misuse-of-your-imagination`** — new essay page using ArticleLayout, full text from `joshkelsey-article-worry.html`. `export const metadata` (title, description = stand-first, self-canonical, OG) + Article JSON-LD with author `#person`. **Set as the home Featured Essay.**

## E. The six SEO fixes (verify each after build)

- [x] **#1** 10 church-planting chapter canonicals `joshkelsey.com` → `joshkelsey.org`. Files: beginning, culture, generations, people, person, personal-health, practical, reach, strategy, trials. Check: every chapter canonical shows `https://joshkelsey.org/church-planting/...`.
- [x] **#2** `/press` self-canonical `https://joshkelsey.org/press` (currently → home). File: `press/page.tsx`.
- [x] **#3** Remove `REPLACE_WITH_GOOGLE_VERIFICATION_CODE`. File: `layout.tsx` (`verification.google`). Check: zero matches sitewide.
- [x] **#4** Generate `sitemap.ts` from the full route list (no hand-maintained drift). Must include all 10 church-planting chapters, 3 for-leaders weeks, `/running`, the new Worry essay, and all existing URLs. Check: `sitemap.xml` count = true page total; includes `church-planting/beginning`, `for-leaders/week-1`, `running`.
- [x] **#5** Remove the duplicate unlinked Person block (`Footer.tsx`). Point all per-page article `author` refs to `{"@id":"https://joshkelsey.org/#person"}`. One canonical jobTitle (layout = "Lead Pastor"). Georgie: one `@id`, one URL (pick `https://georgiekelsey.com`, used in layout). Check: no second unlinked Person block; no author URL points at `joshkelsey.com`.
- [x] **#6** Fix brand doubling. Strip embedded brand from page `title` fields so the template `%s | Josh Kelsey` adds it once (or adjust template). Affected titles include About, Sermons, Contact, church-planting chapters ("… | Josh Kelsey" in title field), for-leaders/church-planting indexes ("· Josh Kelsey"). Check: no page `<title>` repeats "Josh Kelsey".

## F. Substack signup placements (per user instruction)

- [x] Home page — Subscribe section (mockup `.subscribe`).
- [x] End of every article/reading page — Subscribe (article file's `.subscribe`).
- [x] Footer — keep Substack embed/link.
  - Use one shared `Subscribe` component pointing at `https://joshuakelsey.substack.com`.

## G. Build, verify, ship

- [x] `npm run build` after each major section; confirm all routes prerender (incl. `/running` + Worry essay).
- [x] Re-count routes = **43**; confirm nothing skipped.
- [x] Run all six SEO verification checks (§E).
- [x] Grep sitewide: `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` = 0; `joshkelsey.com` = 0.
- [x] Commit to `redesign`, push. **Do not merge to main.** Report changes + what needs Josh's input.
