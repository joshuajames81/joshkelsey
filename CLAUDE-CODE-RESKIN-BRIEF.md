# joshkelsey.org — Full Site Reskin Brief for Claude Code

Paste this whole file to Claude Code, running inside the joshkelsey repo on the `redesign` branch. It reskins the entire live site to the new design while protecting the SEO that already ranks. The visual source of truth is the file `joshkelsey-mockup-v10.html` (open it, read its CSS and JS, and match it). Placeholder photos in the mockup are embedded as base64 only for preview. In the real repo, wire the design to the actual image and content files already in place.

## Binding rules for the entire job

1. Reskin only. Keep every page, route, heading, and word. Nothing removed, nothing rewritten for content. This is a new skin over the same site.
2. Do not lose SEO. Titles, descriptions, canonicals, Open Graph, and JSON-LD stay exactly as they are, except for the six specific fixes listed at the end. The set of URLs stays the same, plus one new route, `/running`.
3. Apply the new design system across the whole site, not just the home page. The look is defined below and demonstrated in the mockup.
4. Motion must never hide content. Every reveal plays on load and ends visible. Scroll may only drive parallax and count ups, never visibility. If a script fails, the page still reads.
5. All photographs are black and white. Color lives only in the typography.
6. Work on the `redesign` branch. Build locally, prove it, push, review the Vercel preview, then merge to main.

## The design system

Encode this in the Tailwind theme and `globals.css`, then build components from it.

Color tokens
- ink `#121110`, paper `#ecebe4`, deep `#0a0908`
- red `#e8371a` (primary accent in type), amber `#f0a52a` (secondary, times and one closing word), blue `#2f5bd0` (only inside the chromatic gradient)
- muted `#6f6b60`, line `#d1cdc0`

Type
- Display: Bricolage Grotesque, weight 800, very tight tracking, sizes up to `clamp(3rem, 13vw, 13rem)`.
- Editorial serif: Fraunces, italic especially, used for accent words, quotes, and body reading.
- Labels and metadata: Geist Mono, small, uppercase, letter spacing about `.14em`.
- All three are on Google Fonts, which is what the mockup loads. If Josh later licenses Miller or GT Super or Neue Haas, swap the three variables and nothing else changes.

Color rule for images
- Every photo renders grayscale: `filter: grayscale(1) contrast(1.03)`. Do this in CSS so the source files can stay as they are.
- Never put color in a photo. The only color on the page is in type: red accents, amber for the marathon times and one closing word, and a single animated gradient word using red to amber to blue.

Motion primitives (all in the mockup, copy them)
- Reveals: a CSS `rvl` keyframe that plays on load with `both`, so content is visible whether or not anything else runs.
- Parallax: CSS `animation-timeline: view()` inside an `@supports` block, base state is a plain scaled image, so an unsupported or stalled timeline can never blank it.
- Rotating hero quotes: a small `setInterval` that toggles an `on` class. The first quote carries `on` in the markup, so if the script never runs, one quote still shows.
- Word cycler: pure CSS keyframes cycling stacked words.
- Marathon count up: numbers animate from zero when the section enters view, with the final value already in the markup as the fallback.
- Custom cursor on pointer devices only. Respect `prefers-reduced-motion` everywhere.

## The components, section by section (home page)

Match the mockup exactly, then reuse these patterns on inner pages.

1. Header. Fixed, white wordmark and mono nav with a soft top scrim and text shadow so it reads over the black and white hero. Nav order: Writing, Dinner Parties, Church Planting, For Leaders, Running, About. The red dot after the wordmark is the only header color.
2. Hero. Full bleed grayscale photo, dark gradient at the base, and a single rotating quote in large Fraunces italic with one word in red. Structure the quotes as an array so Josh can add more. Current three: "Worry is the misuse of your imagination." / "Grace is given to be given." / "The oil of joy is the oil of crushing."
3. Banner. A word cycler: "Good ideas arrive" holds while the final word cycles through slowly, uninvited, at the table, mid run, each in the animated chromatic gradient. No kicker line above it.
4. Interactive index. The bodies of work as large hoverable rows: number, huge title, one line description, a mono call to action, and the section photograph that floats in only on hover at a slight tilt. Rows: Writing, Dinner Parties, Church Planting, For Leaders. On touch devices the hover image is hidden and the list stands alone.
5. Running. Type only, dark section. Heading, one line, then the three marathons as a list with the times counting up on scroll: Paris 3:23:11, Berlin 3:06:44, New York 3:21:29. Below it a link to training plans and race notes.
6. Jolt. One full width red section, "It all still starts at a table."
7. Featured essay. Split, grayscale photo and large title. Currently "You Can't Make It Grow."
8. Close. Full bleed grayscale photo with one line, "The work outlasts the worry," amber on the word outlasts.
9. Footer. A statement, "Pull up a chair," at giant scale, then compact link columns and a small monogram.

## Applying the reskin to every route

Keep all existing content and metadata on each page. Change only layout, type, color, motion, and image treatment.

- Home `/`. The layout above.
- Writing `/writing` and each essay. Index uses the interactive index or a stacked editorial list. Essay pages get the reading treatment: a large Bricolage title, Fraunces body at a comfortable measure, mono metadata (date, read time), grayscale images, generous space. Keep every essay's words, title, and metadata.
- Church Planting `/church-planting` and its ten chapters. A chapter reading layout with big numbered folios and the same reading treatment. Keep all chapter content. Fix the canonicals here (see fixes).
- Dinner Parties `/dinner-parties` and its pages. Apply the index and reading patterns. This is the method, framed for anyone gathering people.
- For Leaders `/for-leaders` and the three weeks. Apply the same patterns. Make sure For Leaders is in the nav and the sitemap.
- Press `/press`. Apply the reading and list treatment. Fix its canonical.
- Podcast `/podcast`. Apply the list and player treatment.
- About `/about`. This is where the longer, more personal writing lives, since the home page is now stripped. Full reading treatment.
- Running `/running`. New route. Build it from the Running section plus a training plans and race notes area. Add it to the nav and the sitemap. Content: the three marathons and their times above, plus a placeholder training plans block for Josh to fill.

Global tone note: keep the site readable for any thinker or leader, not only a church audience. The copy on inner pages stays as written, but any new connective copy you add should follow the universal register of the mockup.

## SEO: do not touch, and the six fixes

Do not change, on any page:
- URL paths and slugs. The only new URL is `/running`.
- Each page's title, meta description, canonical, Open Graph, and JSON-LD, except the fixes below.
- The heading hierarchy and the words that carry keywords. The reskin restyles headings, it does not remove them.
- robots and the existing sitemap URLs.

Fold in exactly these six fixes while reskinning (they raise ranking, they do not risk it):
1. Ten Church Planting chapter canonicals point at `joshkelsey.com`, which is now a stranger's site returning 404. Change them to `joshkelsey.org`. Chapters: beginning, culture, generations, people, person, personal-health, practical, reach, strategy, trials.
2. `/press` canonicals to the home page. Give it a self canonical, `https://joshkelsey.org/press`.
3. The string `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` is live on every page. Remove it, or paste the real Search Console code if verifying that way.
4. The sitemap omits the ten Church Planting chapters and the three For Leaders weeks. Generate the sitemap from the full route list so it cannot drift, and include the new `/running`.
5. Every page ships a second Person block with no `@id` that contradicts the canonical `/#person` on job title and on Georgie's URL. Remove the duplicate, make author references point to `{"@id":"https://joshkelsey.org/#person"}`, define one canonical job title, and give Georgie one `@id` and one URL.
6. Titles double the brand, for example "About Josh Kelsey | Josh Kelsey". Fix the template so the brand appears once.

## Build, prove, deploy

1. `git checkout -b redesign` if not already on it.
2. Install and run locally. Confirm every route renders and the home page matches the mockup.
3. `npm run build`. Confirm all routes prerender with no errors, including the new `/running`.
4. Verify the six fixes after deploy with these checks:
   - Every church-planting chapter canonical shows `href="https://joshkelsey.org/church-planting/..."`.
   - `/press` canonical is `https://joshkelsey.org/press`.
   - `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` returns zero matches sitewide.
   - `sitemap.xml` count matches the true page total and includes `church-planting/beginning`, `for-leaders/week-1`, and `running`.
   - No page carries a second unlinked Person block, and no author URL points at `joshkelsey.com`.
   - No page title repeats "Josh Kelsey".
5. Push the branch. Review the Vercel preview URL. Only merge to main once Josh signs off on the preview.

## What is still open for Josh

- Marathon times are set and real. Training plan content on `/running` is a placeholder for him to fill.
- Hero quotes are three for now, structured to add more.
- Premium fonts (Miller, GT Super, Neue Haas) are an optional later swap; the three Google faces are the shipping default.
- He expects to push several sections further after seeing the whole site designed and working. Keep the components clean and token driven so those changes are quick.
