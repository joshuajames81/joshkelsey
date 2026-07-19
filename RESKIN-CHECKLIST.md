# joshkelsey.org — Velocity Reskin Checklist

**Supersedes the earlier editorial (cream/serif) plan entirely.** Visual source of truth: `joshkelsey-velocity-14.html` (dark, electric lime, kinetic). Reading template reference: `joshkelsey-article-worry.html` (structure only; skin follows velocity). Essay text: `worry-is-the-misuse-of-your-imagination.md`. Binding brief: `CLAUDE-CODE-RESKIN-BRIEF.md`.

## Hard rules (apply throughout)
- **Reskin only.** Preserve every route, every heading, every word of existing copy, and all SEO — except the six fixes + the entity-graph enrichment in §C.
- **No dashes anywhere in new copy.** All connective/UI/nav/label copy I author uses no `-`, `–`, or `—` (use middots `·`, slashes `/`, or rewording). Existing page prose is preserved verbatim per rule 1 — see Open Item 2 for the one tension.
- **Never invent quotes or essays.** Hero quotes are Josh's three real lines. The Writing feed maps to **real** essays only (the mockup's "The Song at Night" / "What the Long Run Teaches" are placeholders and are dropped).
- **All photos black and white** via CSS (`grayscale(1) contrast(1.05) brightness(.92)`). Colour lives only in type and the lime.
- **Motion never hides content.** Every reveal ends visible; scroll drives only parallax/count-ups; reduced-motion fully honoured; if JS fails the page still reads.
- **Do not re-trace the signature.** Use `signature-white.png` as a CSS mask over a coloured element (lime on hero, off-white in footer).

Route accounting: **41 existing + `/running` + `/writing/worry-is-the-misuse-of-your-imagination` = 43.** Re-count at the end must equal 43.

---

## 0. Base branch + assets (CONFIRMED)
- [x] **New branch, no reset/force-push:** `git checkout main && git pull && git checkout -b velocity-reskin`. Build the velocity skin on `velocity-reskin`. The editorial `redesign` branch is left untouched. Do not merge to main; ship a Vercel preview.
- [x] Move `signature-white.png` + `signature-lime.png` into `public/site-images/`; commit them.
- [x] Commit `public/site-images/` (26 photos) so Vercel can serve them.
- [x] Photo files are authoritative per `IMAGE-MAP-AND-FIXES.md` (its "Exact image map" only; its home "review" section describes the old editorial layout and is ignored). Do not guess images; real descriptive alt text everywhere.

## A. Design system foundation
- [x] `npm i -D @tailwindcss/typography` and enable the plugin (so for-leaders week pages using `prose` render correctly — CONFIRMED).
- [x] `tailwind.config.ts` — dark/lime tokens: `bg #090a08`, `deep #050603`, `fg #f1efe6`, `flare #c9ff2e` (lime), `ice #9fb4c9`, `dim #8a857a`, `line rgba(234,231,223,.14)`, `amber #f0a52a` (gradient only). Fonts `disp` = Archivo (900), `serif` = Instrument Serif (italic), `mono` = Space Mono. Re-alias legacy token names (`accent`→flare, `paper`→bg, `ink`→fg, `border`→line, `soft`, `muted`→dim, `display`/`sans`→Archivo/Space Mono) so inner pages auto-reskin dark.
- [x] `src/app/globals.css` — port every velocity primitive verbatim: body dark canvas + Instrument Serif; `.ph` grayscale filter; `#glow` cursor light + `#cur` lime dot; `.topscrim`; header nav stagger + decode base; `rvl` reveal, `par` parallax (`@supports view()`), `mqx` marquee, `hue`/`.chroma` gradient; hero `.qrow` quotes; `.stmt` word-rise `.w>span` + `.chroma`; `.mq` marquee; `.torch` mask beam + `.wtitle` outline/ignite; `.run` marathons + bars; `.writing` feed (`.wfeat`, `.wrow`, `.cover`); `.sub` form; `.close` background-clip cut + fallback; `.streaks`; signature masks (`.herosig`, `.sigmark`, `.introveil` + keyframes); footer; full `prefers-reduced-motion` block. (Vestigial `#loader`/`.index`/`.reel`/`.stack` CSS in the mockup is **not** used — the real intro is the hero veil + signature draw.)
- [x] `src/app/layout.tsx` — swap Google Fonts to Archivo + Instrument Serif + Space Mono; dark `<body>`; mount `Cursor` (glow + dot); inject the site-wide entity graph (§C); remove the Google verification placeholder (fix 3); title template emits brand once (fix 6).

## B. Shared components
- [x] `Nav.tsx` — fixed velocity header: `Josh Kelsey` wordmark + lime dot, Space Mono nav (Writing · Dinner Parties · Church Planting · For Leaders · Running · About), stagger-in, **decode-on-hover**, topscrim, mobile burger. Solid variant for inner pages. (Sermons/Podcast/Press/Contact stay in footer.)
- [x] `Footer.tsx` — velocity: giant "Pull up a chair.", static `.sigmark` (masked signature), four link columns covering **every** route (incl. Sermons, Podcast, Press, Contact, Running, Substack), `© 2026`. **Remove the duplicate Person JSON-LD** (fix 5).
- [x] `Cursor.tsx` (client) — `#glow` warm light following pointer + lime `#cur` dot, `.big` on `[data-h]` hover; pointer-only; reduced-motion off.
- [x] `Signature.tsx` — masked signature (uses `signature-white.png` as mask over a coloured element). Variants: hero (lime, cursor-aware draw/undraw via `sig-off` after intro; on touch stays drawn) and footer (static off-white).
- [x] `ChapterHeader.tsx`, `ChapterNav.tsx`, `PullQuote.tsx` — restyle to dark/lime velocity; keep all props/behaviour.
- [x] **NEW** `DecodeText.tsx` (or hook) — letters scramble and resolve on hover; used by nav + feed titles (`data-dec`).
- [x] **NEW** `Subscribe.tsx` — Substack email field + lime Subscribe button, wired to Josh's Substack. Reused: home (before footer), end of every essay, footer link.
- [x] **NEW** `EssayLayout.tsx` — reusable **dark velocity reading template** for every essay: Archivo title (one word lime), Space Mono meta line, Instrument Serif standfirst, one grayscale lead image (real alt), serif body at ~40rem on dark, one pull quote, trailing Subscribe + signature, Article + Breadcrumb schema (§C).
- [x] **NEW** home section components (client where motion is needed):
  - [x] `HomeHero.tsx` — fixed `home-hero` bg + parallax, vignette + lime radial, `.streaks`, **intro** (`introveil` lift + `herosig` lime draw), cursor-aware signature, rotating quotes (3, first `on`), tagno, scroll cue.
  - [x] `Statement.tsx` — word-by-word rise + 3D tilt to cursor; closing phrase in `.chroma` gradient.
  - [x] `Marquee.tsx` — outlined scrolling section labels.
  - [x] `TorchWork.tsx` — four outlined titles (Writing/Dinner Parties/Church Planting/For Leaders), cursor **beam mask** reveals the photo behind, title ignites lime; touch fallback (dim photo, no beam). Links to the four sections.
  - [x] `RunningSection.tsx` — offer copy, outlined city marquee, **hover race** (time climbs from 0 + pace bar in sync; IntersectionObserver on touch); reused on `/running`.
  - [x] `WritingFeed.tsx` — featured essay (Worry) with image-scale + lime Read tab, then a list of real essays with **in-row cover reveal**, decode titles, firing arrow; all click to real articles.
  - [x] `CloseCut.tsx` — final line as background-clip text cut from a photo, shifting under cursor; solid-white fallback.

## C. SEO + entity graph (enrich, never weaken)
- [x] **NEW** `lib/schema.ts` — canonical nodes referenced by `@id` everywhere: `#person` (Josh: one jobTitle, image, full `sameAs`, worksFor→`#fount`, spouse→`#georgie`), `#georgie` (url `https://georgiekelsey.com`, spouse→`#person`), `#fount` (Organization/Church, url `https://fount.nyc`, founders→Josh+Georgie), `#website`; helpers `webPage(url,name,desc)`, `article(...)`, `breadcrumb([...])`. No node ever redefined.
- [x] Layout emits `#person` + `#georgie` + `#fount` + `#website` on every route; each page adds its own `WebPage` (+ `Article` + `BreadcrumbList` for essays) referencing entities by `@id`. No hidden text, no stuffing.
- [x] **Fix 1** — 10 church-planting chapter canonicals `joshkelsey.com` → `.org` (beginning, culture, generations, people, person, personal-health, practical, reach, strategy, trials); also fix their `mainEntityOfPage`/`isPartOf`/author url off `.com`.
- [x] **Fix 2** — `/press` self-canonical `https://joshkelsey.org/press`.
- [x] **Fix 3** — remove `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` (layout). Note `public/googlecace…html` already file-verifies Search Console.
- [x] **Fix 4** — `sitemap.ts` generated from the filesystem route list (includes 10 chapters, 3 weeks, `/running`, Worry). Verify 43 URLs.
- [x] **Fix 5** — remove the duplicate un-`@id` Person (Footer + eternity `mainEntity`); author/publisher → `{"@id":".../#person"}`; one jobTitle; Georgie one `@id` + one url; zero `joshkelsey.com` author urls.
- [x] **Fix 6** — strip embedded brand from page `title` fields so the template adds it once (About, Sermons, Contact, church-planting + for-leaders indexes, writing index, for-leaders weeks, eternity via `absolute`).
- [x] Per-essay schema (via `EssayLayout`): unique title, description from standfirst, self-canonical, OG + Twitter (article, grayscale image w/h, url), Article/BlogPosting (headline, author `@id`, publisher, real datePublished/dateModified, wordCount, articleSection, keywords, image, mainEntityOfPage, inLanguage), BreadcrumbList (Home › Writing › essay), real alt text, internal links back to Writing + 2–3 related essays.

## D. Home page (`src/app/page.tsx`) — velocity layout
- [x] Rebuild to the mockup order: Hero (intro + quotes) → Statement → Marquee → Torch (The Work) → Running → Writing feed (featured Worry + real essays) → Subscribe → Close → Footer. Keep a keyword-bearing accessible H1 + the entity JSON-LD for SEO (home leads with Josh Kelsey). Home has no metadata export (inherits layout).

## E. New routes
- [x] `/running` — `src/app/running/page.tsx`: RunningSection (Paris 3:23:11, Berlin 3:06:44, New York 3:21:29, no fastest tag) + a **training-plans / race-notes placeholder** block for Josh. Metadata + self-canonical + schema.
- [x] `/writing/worry-is-the-misuse-of-your-imagination` — full essay from the `.md`, verbatim, via `EssayLayout`; pull quote "Anxiety is not a failure of nerve. It is a failure of tense."; lead `worry-lead.jpg`. Set as home featured essay. Full essay metadata + Article + Breadcrumb schema.

## F. Reskin every existing route (design only; content + metadata preserved)
Inner pages inherit the dark system via re-aliased tokens + reskinned Nav/Footer; the listed SEO fixes fold in per file. Essays adopt `EssayLayout`.
- [x] `/` home · `/about` (full reading; holds the longer personal writing; title fix 6) · `/contact` (fix 6) · `/sermons` (fix 6) · `/podcast` · `/press` (fix 2) · `/press/eternity-news-dinner-party-church` (fix 5 mainEntity)
- [x] **Writing** index (fix 6) + 6 existing essays → `EssayLayout`: you-cant-make-it-grow · the-press · the-first-and-the-last · the-church-is-not-the-fount · thirteen-years-in-nyc · on-preaching-the-whole-text
- [x] **Church Planting** index (fix 6) + 10 chapters (fix 1 canonicals + fix 5 author) — chapter reading layout, numbered folios
- [x] **Dinner Parties** index + 11 pages (fix 5 author on 9) — index + reading patterns
- [x] **For Leaders** index (fix 6) + week-1/2/3 (fix 6) — note: week pages use `prose` classes with no typography plugin (pre-existing); will read plain unless addressed (Open Item 4)

## G. Writing feed data + image map
- [x] **NEW** `lib/essays.ts` — registry of real essays (slug, title, description, date, image, tag, readTime, keywords) powering the feed, related links, and schema. Featured: Worry. Rows: The Press, You Can't Make It Grow, The First and the Last, The Church is Not the Fount, Thirteen Years in NYC, On Preaching the Whole Text. **No invented essays.**
- [x] Image map (authoritative, from `IMAGE-MAP-AND-FIXES.md`; files in `public/site-images/`, referenced `/site-images/<name>.jpg`):
  - Hero: `home-hero.jpg` (lone figure against a wall of light — NOT the speaking/mic shot).
  - Torch "The Work": Writing `writing.jpg` · Dinner Parties `dinner-parties.jpg` · Church Planting `church-planting.jpg` · For Leaders `for-leaders.jpg`.
  - Writing feed featured (Worry): `featured-worry.jpg`. Close: `close-chair.jpg`. Worry article lead: `worry-lead.jpg`.
  - Inner-page / essay-cover library (use sparingly): `nyc-williamsburg-bridge`, `nyc-bible-sidewalk`, `nyc-follow-jesus-sign`, `nyc-brick-graffiti`, `family-shadows`, `bible-silhouettes`, `rome-columns`, `paris-eiffel`, `paris-louvre`, `paris-aerial`, `airplane-window`, `land-regrowth`.
  - Every image grayscale, every image real descriptive alt text. Do not guess.

## H. Newsletter (Substack)
- [x] Signup (email + Subscribe) on home before the footer, at the end of every article, and a Subscribe link in the footer. Wired to **https://joshuakelsey.substack.com** (CONFIRMED). No content gated.

## I. Build, verify, deploy
- [x] `npm run build` after each section; all 43 routes prerender incl. `/running` + Worry.
- [x] Re-count routes = 43.
- [x] Six SEO checks: church canonicals `.org`; `/press` self-canonical; zero `REPLACE_WITH_GOOGLE…`; sitemap = 43 incl. `church-planting/beginning`, `for-leaders/week-1`, `running`; no second unlinked Person, no `joshkelsey.com` author; no title repeats brand.
- [x] Entity graph check: every page exposes `#person` (+ `#georgie`/`#fount` where relevant) by `@id`, no duplicates/contradictions; Article + Breadcrumb valid; before/after diff shows nothing that ranked was removed, only added.
- [x] No-dashes sweep on new copy; no hidden text / stuffing.
- [x] Visual pass in-browser (home intro + torch + running + writing feed + close; one essay; one inner page). Commit to `redesign`, push. **Do not merge to main.** Report + open items.

## Decisions (all CONFIRMED)
1. **Branch:** `velocity-reskin` off `main` (no reset, no force-push). Do not merge; ship Vercel preview.
2. **No-dashes:** applies ONLY to new/connective copy I write. Never edit existing essay/chapter prose; preserve all published text verbatim, dashes included.
3. **Substack:** https://joshuakelsey.substack.com.
4. **For-leaders:** install `@tailwindcss/typography` so those pages render correctly.
5. **Close line:** keep "You become what you pay attention to." as is.
6. **Writing feed:** feature Worry, then fill from the six real existing essays under `/writing` (real titles, links, lead images as covers). No invented essays.

## Report back when done
Preview URL · route count (expect 43) · results of the six SEO checks. Do not merge to main.
