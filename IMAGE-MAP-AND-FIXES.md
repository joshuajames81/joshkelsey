# Image map and build review for Claude Code

The photos were never in the repo, so the home build guessed and used a speaking shot for the hero. Here are the real files, already grayscale and optimized. Put the whole `site-images` folder into the repo (for example `public/images/`) and wire each slot to the exact file below. Do not guess images anywhere. Every photo stays grayscale (color lives only in type).

## Exact image map

Home page
- Hero, full bleed: `home-hero.jpg`  (a lone figure against a wall of light). This is the correct hero. It is NOT a microphone or speaking photo. Replace whatever the current home hero is with this.
- Index row Writing: `writing.jpg`
- Index row Dinner Parties: `dinner-parties.jpg`
- Index row Church Planting: `church-planting.jpg`
- Index row For Leaders: `for-leaders.jpg`
- Featured essay: `featured-worry.jpg`
- Closing full bleed: `close-chair.jpg`

Worry essay article page
- Lead image: `worry-lead.jpg`

Library for the inner pages (use sparingly, do not overuse, all grayscale)
- `nyc-williamsburg-bridge.jpg`, `nyc-bible-sidewalk.jpg`, `nyc-follow-jesus-sign.jpg`, `nyc-brick-graffiti.jpg`, `family-shadows.jpg`, `bible-silhouettes.jpg`, `rome-columns.jpg`, `paris-eiffel.jpg`, `paris-louvre.jpg`, `paris-aerial.jpg`, `airplane-window.jpg`, `land-regrowth.jpg`

Give every image real, descriptive alt text for SEO and accessibility.

## Review the home build against the mockup (v15)

Check each of these and fix any that drifted:
1. Hero uses `home-hero.jpg`, grayscale, with the rotating quote and the red accent word. The three quotes, in order, first one visible by default: "Worry is the misuse of your imagination." then "Grace is given to be given." then "The oil of joy is the oil of crushing." One key word red in each.
2. Banner word cycler reads "Good ideas arrive" with the last word cycling through slowly, uninvited, at the table, mid run, in the animated chromatic gradient. No kicker line above it.
3. Interactive index rows and their exact descriptions:
   - Writing: Essays on ideas, leadership, and creativity.
   - Dinner Parties: A course for gathering people around a table, and multiplying it.
   - Church Planting: A training course for building a church from nothing, drawn from three cities over thirteen years.
   - For Leaders: Culture, teams, and how they get built.
   Each row reveals its photo only on hover. No word full or complete anywhere.
4. Running: outlined marquee of the three cities (Paris, Berlin, New York), the offer copy ("Leadership and long distance run on the same discipline ... Yours to take."), and the hover interaction: hovering a city climbs its time from zero to the finish while a pace bar runs out in sync, resetting on mouse out. Touch devices animate once on scroll in. Times: Paris 3:23:11, Berlin 3:06:44, New York 3:21:29. No Fastest tag.
5. Jolt: "It all still starts at a table."
6. Featured essay is "Worry Is the Misuse of Your Imagination" with `featured-worry.jpg`.
7. Close: "The work outlasts the worry." over `close-chair.jpg`.
8. Substack signup with an email field appears before the footer, at the end of every article, and as a footer link.
9. Every photo is grayscale, color appears only in type, and no motion hides content.
10. Home SEO: a visible H1 containing "Josh Kelsey," a short visible keyword paragraph naming Josh Kelsey, Georgie Kelsey, FOUNT, and New York, and the full Person and WebSite JSON-LD, all styled into the design, nothing hidden.

## Then keep going

Continue the checklist to the inner pages, fold in the six SEO fixes and the entity schema for Josh Kelsey, Georgie Kelsey, and Fount on every page, regenerate the sitemap, build, re count to 43 routes, run the SEO verification, and push to the redesign branch for the Vercel preview. Do not merge.
