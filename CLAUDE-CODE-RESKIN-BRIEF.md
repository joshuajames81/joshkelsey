# joshkelsey.org — Full Site Reskin Brief for Claude Code

Paste this whole file to Claude Code, running inside the joshkelsey repo on the `redesign` branch. It reskins the entire live site to the new design while protecting the SEO that already ranks. The visual source of truth is the file `joshkelsey-velocity-14.html` (open it, read its CSS and JS, and match it exactly). This is a dark, electric, kinetic direction, not the earlier editorial one. Placeholder photos in the mockup are embedded as base64 only for preview. In the real repo, wire the design to the actual image and content files already in place.

## Binding rules for the entire job

1. Reskin only. Keep every page, route, heading, and word. Nothing removed, nothing rewritten for content. This is a new skin over the same site.
2. Do not lose SEO. Titles, descriptions, canonicals, Open Graph, and JSON-LD stay exactly as they are, except for the six specific fixes listed at the end. The set of URLs stays the same, plus one new route, `/running`.
3. Apply the new design system across the whole site, not just the home page. The look is defined below and demonstrated in the mockup.
4. Motion must never hide content. Every reveal plays on load and ends visible. Scroll may only drive parallax and count ups, never visibility. If a script fails, the page still reads.
5. All photographs are black and white. Color lives only in the typography.
6. Work on the `redesign` branch. Build locally, prove it, push, review the Vercel preview, then merge to main.

## The design system (dark, electric, kinetic)

Encode this in the Tailwind theme and `globals.css`, then build everything from it.

Color tokens
- Background near black `#090a08`, deepest `#050603`, foreground warm off white `#f1efe6`
- Signature accent electric lime `#c9ff2e`, used boldly and everywhere, not a timid dot: big type, marquees, running bars, buttons, hover states, the signature. Commit to it the way a driver's site commits to one colour.
- Muted `#8a857a`, hairline `rgba(241,239,230,.14)`, amber `#f0a52a` only inside the one animated gradient.

Type
- Display: Archivo, weight 900, uppercase for the big slabs, very tight tracking, architectural scale.
- Editorial serif: Instrument Serif, italic, for the rotating hero quotes and accent words.
- Labels and metadata: Space Mono, small, uppercase, tracked.
- All three are on Google Fonts, which the mockup loads.

Colour and image rule
- Every photograph is black and white on the dark canvas. Colour lives only in type and in the lime.
- Exactly one animated gradient word (lime to amber to white) is the single loud gradient moment.

Motion primitives (all in the mockup, copy them; all robust, none may hide content, every reveal ends visible, reduced motion fully honoured)
- Intro as one continuous moment: the hero starts on black, Josh's real signature draws itself in lime over that black, then the black veil lifts to reveal the hero photograph with the signature already resting on it. No separate loading screen, no jump from black to photo. The signature is the through-line.
- Cursor light: a warm light follows the cursor across the dark, with a lime cursor dot.
- Rotating hero quotes: a setInterval toggling an `on` class, first quote in the markup so it can never blank.
- Header: solid white over a dark top scrim so it is always legible, nav staggers in after the loader, and each item decodes on hover (letters scramble and resolve).
- Statement: the line rises word by word on load and the whole line tilts in 3D toward the cursor.
- The Work (torch): the bodies of work sit in darkness as giant outlined titles, and a beam of light following the cursor reveals the photography behind them while each title ignites lime.
- Writing feed: titles decode on hover, each essay's cover reveals inside its own row on the right and fades into the black so the title stays readable (switched off on small screens), and the arrow fires.
- Running: hover a marathon and its time climbs from zero while a pace bar runs out in sync; the three cities stream as an outlined marquee.
- Close: the final line is cut from a photograph with background-clip text so the words are a window into the image, and the picture shifts inside the letters as the cursor moves. Solid white fallback where clip text is unsupported.

## The signature

Josh's real signature is provided as `signature-white.png` and `signature-lime.png`, both transparent. Colour it by using the white asset as a CSS mask over a coloured element, so it renders lime or off white anywhere. It is the site's signature motif and it appears three ways. One, the intro: it draws itself in lime over the black hero, then the black lifts to the photo with the mark on it. Two, over the hero after the intro it is cursor aware, it pulls off when the pointer leaves the shot and draws back on when the pointer moves over the figure (on touch, where there is no pointer, leave it drawn). Three, a small static mark in the footer. It replaces a typed name as the intro. Match the exact draw, position, and hover behaviour in `joshkelsey-velocity-14.html`. Do not vectorise or re-trace the signature into a scribble; use the clean asset as provided.

## The components, section by section (home)

Match `joshkelsey-velocity-14.html` exactly.

1. Intro. On the black hero, the signature draws itself in lime, then the black veil lifts to reveal the photograph with the signature already on it. One moment, no separate loader.
2. Header. Fixed, solid white wordmark with a lime dot, Space Mono nav, over a dark scrim so it reads over any frame. Nav staggers in after the loader and decodes on hover.
3. Hero. The fixed silhouette photograph (`home-hero`) full bleed, a dark gradient, faint lime light streaks drifting, the cursor-aware signature over the shot (see The signature), and a single rotating quote in large Instrument Serif italic with one word in lime, sitting above the signature so it is never obscured. Quotes, first visible by default: "Worry is the misuse of your imagination." then "Grace is given to be given." then "The oil of joy is the oil of crushing." Built to accept more.
4. Statement. A huge line that rises word by word and tilts to the cursor in 3D, with the closing phrase in the animated lime gradient.
5. The Work, as the torch section. Four bodies of work as giant outlined titles in darkness, the photography revealed only under a cursor beam, each title igniting lime on hover: Writing, Dinner Parties, Church Planting, For Leaders. Descriptions are terse mono tags, not sentences. Dinner Parties and Church Planting are both courses.
6. Running. Type only, dark. The offer copy (leadership and long distance, the free training plans), an outlined marquee of the three cities, and the hover race: a marathon's time climbs from zero while its bar runs out in sync. Times: Paris 3:23:11, Berlin 3:06:44, New York 3:21:29. No fastest tag.
7. Writing feed. A large featured essay (Worry) with a hover that scales the image and fires a lime Read tab, then a scrollable list of more essays, each decoding to lime with a cover that reveals inside its own row, all clicking through to the article.
8. Close. The final line cut from a photograph, shifting under the cursor, over a dark room.
9. Footer. A giant "Pull up a chair.", the signature mark, and compact link columns.

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

## New this round: the essay and the newsletter

The essay. Publish "Worry Is the Misuse of Your Imagination" (source file `worry-is-the-misuse-of-your-imagination.md`) as a full article page under Writing, and set it as the featured essay on the home page. Build the article page in the same dark velocity skin: an Archivo title with one word in the accent, a Space Mono meta line, an italic Instrument Serif standfirst, one grayscale lead image, the body in a readable serif at about a 40rem measure on the dark canvas, one pull quote ("Anxiety is not a failure of nerve. It is a failure of tense."), the signature and newsletter signup at the end. `joshkelsey-article-worry.html` shows the structure, but the skin follows the velocity mockup, not that earlier light version. Keep the full text verbatim. Give it real metadata consistent with the other essays: title, description, self canonical, and Article JSON-LD referencing the canonical `/#person` as author. This same article layout is the template for every essay under Writing, so build it as a reusable component.

The newsletter. A Substack email signup must be clearly available to everyone. Place the signup form, an email field plus a Subscribe button, on the home page before the footer and at the end of every article page, and keep a Subscribe link in the footer. Wire it to Josh's Substack. Do not gate any content behind it.

## SEO that lifts ranking and never risks it (do this in full)

Overriding rule: improve, never compromise. Every SEO change only adds or enriches. Do not remove, weaken, or rename any existing title, description, canonical, Open Graph, or JSON-LD that already ranks. Only fill gaps and strengthen. URLs never change (except adding /running).

No black hat, ever. Do not use visually hidden text, off screen keyword blocks, cloaking, or keyword stuffing. Those trigger penalties and would drop the site, which is the opposite of the goal. All entity reinforcement is done through legitimate structured data in the head, real metadata, natural on page copy, and internal links.

Entity dominance for three names, on every page. The goal is that search engines and AI answer engines bind this whole site, page by page, to Josh Kelsey, Georgie Kelsey, and Fount. On every route, output a consistent JSON-LD graph in the head:
- Josh Kelsey: exactly one Person node at `https://joshkelsey.org/#person`, with name, url, a single agreed jobTitle, image, and sameAs pointing to every real profile (Substack, Instagram, X, LinkedIn, FOUNT, and any others Josh confirms). worksFor references Fount. spouse references Georgie.
- Georgie Kelsey: exactly one Person node at `https://joshkelsey.org/#georgie`, with name, url `https://georgiekelsey.com`, sameAs, and spouse referencing Josh. Defined once, referenced everywhere else by `@id`, never redefined.
- Fount: exactly one Organization or Church node (for example `https://joshkelsey.org/#fount`), with name FOUNT, url `https://fount.nyc`, location, founders referencing Josh and Georgie, and sameAs.
- Every page also emits WebSite and WebPage nodes with the site name and a per page `@id`, and a publisher that references the Person or the Organization by `@id`.
- Everywhere these entities appear on any page (author, publisher, about, mentions), reference them by `@id`. Never redefine them. One Josh, one Georgie, one Fount, site wide.
- Natural on page presence, not stuffing: the name stays in the masthead wordmark and the footer, Georgie and Fount are named where they genuinely belong (About, the Fount and Dinner Parties areas). Where it reads naturally, titles and descriptions include the relevant entity: home and About lead with Josh Kelsey, the Fount and Dinner Parties pages name Fount, pages about Georgie name her. Never force it.

Best in class SEO for every essay and article. Each essay under Writing must output:
- A unique title, a meta description written from the standfirst, and a self canonical.
- Open Graph and Twitter Card tags: title, description, type article, the grayscale lead image with real width and height, and the url.
- Article or BlogPosting JSON-LD: headline, description, author `@id` = `/#person`, publisher referencing Fount or the site, datePublished and dateModified with real dates, wordCount, articleSection, keywords pulled from the piece, image, mainEntityOfPage, and inLanguage.
- BreadcrumbList JSON-LD: Home, Writing, this essay.
- A real slug, real descriptive alt text on the image, and internal links from the essay back to Writing and out to two or three related essays.
Build this as one reusable essay component so every current and future essay inherits it.

Preserve and heal the existing graph. The current site already carries much of this, which is why it ranks. Keep all of it. The only structural change is the entity de duplication from fix 5: collapse the duplicate un `@id` Person block, settle the one jobTitle, fix Georgie's url, and remove any author url pointing at `joshkelsey.com`. After that, every page should expose Josh by `@id`, and Georgie and Fount by `@id` where relevant, with no duplicates and no contradictions.

Verify SEO before merge:
- Every page exposes the Person for Josh, and where relevant Georgie and Fount, each by `@id`, with no duplicate or contradictory nodes.
- Google Rich Results passes for Person, Organization, Article, and Breadcrumb.
- Every essay has a canonical, a description, Open Graph, and Article schema with real dates.
- A sitewide check finds no hidden text and no stuffed keywords.
- Compare the live titles, descriptions, and canonicals before and after: nothing that ranked was removed, only added to.

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

- The Writing feed on the home page shows one real essay, "Worry Is the Misuse of Your Imagination". The other four rows (The Press, You Can't Make It Grow, The Song at Night, What the Long Run Teaches) and their cover images are placeholders. Pull the real recent essays, titles, links, and covers from the live Writing section so every row clicks through to the real article. Do not invent essays.
- The newsletter signup should point at Josh's real Substack URL. Wire the form to it on the home page, at the end of every article, and in the footer.
- Marathon times on `/running` are real (Paris 3:23:11, Berlin 3:06:44, New York 3:21:29). The training plan content is a placeholder for Josh to fill; build the page to hold it.
- Hero quotes are three for now, structured to add more.
- The header wordmark is the typed name "Josh Kelsey" for nav legibility; the drawn signature is used in the intro, over the hero, and in the footer. Using the signature in the header too is an open option, not built yet.
- Keep every component clean and token driven. Josh expects to push several sections further after seeing the whole site working, so make those changes cheap.
