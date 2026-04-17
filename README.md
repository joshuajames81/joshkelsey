# joshkelsey.com

A comprehensive, SEO-maximized personal site for Josh Kelsey, founding and lead pastor of FOUNT Church NYC. Built with Next.js 14, TypeScript, and Tailwind CSS. Deploys to Vercel in about 10 minutes.

---

## What's here

```
joshkelsey/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout metadata, schema, fonts
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Editorial design tokens, animations
│   │   ├── sitemap.ts          # Dynamic sitemap.xml
│   │   ├── robots.ts           # robots.txt directives
│   │   ├── not-found.tsx       # 404 page
│   │   ├── icon.png            # Favicon
│   │   ├── apple-icon.png      # Apple touch icon
│   │   ├── about/
│   │   ├── sermons/
│   │   ├── writing/
│   │   │   ├── page.tsx        # Writing index
│   │   │   ├── the-church-is-not-the-fount/
│   │   │   ├── thirteen-years-in-nyc/
│   │   │   └── on-preaching-the-whole-text/
│   │   ├── podcast/
│   │   └── contact/
│   └── components/
│       ├── Nav.tsx
│       └── Footer.tsx
├── public/
│   ├── josh-kelsey.jpg         # REPLACE with real headshot
│   └── og-image.jpg            # REPLACE with real OG image
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## Quickstart: get it live in 10 minutes

### 1. Install dependencies and test locally

```bash
cd joshkelsey
npm install
npm run dev
```

Open http://localhost:3000 to see the site.

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
# Create a new repo at github.com, then:
git remote add origin https://github.com/YOUR-USERNAME/joshkelsey.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Import the GitHub repo
- Click **Deploy** (Vercel auto-detects Next.js no config needed)
- Site is live at `joshkelsey.vercel.app` within 60 seconds

### 4. Connect the joshkelsey.com domain

- In Vercel dashboard → Project → Settings → Domains
- Add `joshkelsey.com` and `www.joshkelsey.com`
- Vercel will show you either nameservers or A/CNAME records
- If you bought the domain through Vercel: it just works
- If you bought it elsewhere: update DNS at your registrar per Vercel's instructions
- SSL certificate is automatic

---

## Before you launch: the essential swaps

These must happen before the site is public.

### Replace placeholder images

- `public/josh-kelsey.jpg` high-quality headshot, ideally 1200×1600 or larger, shot vertically
- `public/og-image.jpg` social share image, exactly 1200×630. Used when the site is shared on Twitter/X, Facebook, LinkedIn, iMessage, Slack, etc.

Both are currently generated placeholders they work, but they're not your face or brand.

### Add the Google Search Console verification

After deploying, go to [search.google.com/search-console](https://search.google.com/search-console) and add `joshkelsey.com` as a property. Google will give you a verification code. Find this line in `src/app/layout.tsx`:

```ts
verification: {
  google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
},
```

Replace the string and redeploy. Then in Search Console, submit your sitemap: `https://joshkelsey.com/sitemap.xml`.

### Set up contact form handling (optional for now)

The `/contact` page submits to `/api/contact`, which doesn't exist yet. Options:

- **Simplest:** swap the form for a mailto link to `hello@joshkelsey.com`
- **Formspree:** free, 5-minute setup change form `action` to your Formspree endpoint
- **Resend / custom API route:** build a Next.js API route using `resend.com` or similar

Same for the newsletter subscribe form on the homepage point it at ConvertKit, Mailchimp, Substack, or whatever list provider you prefer.

---

## SEO what's already been done

This site is built SEO-first. Here's the full list of what's in place:

### Technical SEO
- ✅ Server-side rendered pages (Next.js App Router)
- ✅ Full metadata API implementation on every page (title, description, OG, Twitter)
- ✅ Canonical URLs on every page
- ✅ Dynamic `sitemap.xml` with all pages listed
- ✅ `robots.txt` allowing all indexing
- ✅ Mobile-responsive, accessible HTML5 semantic structure
- ✅ Fast initial paint, lazy loading, AVIF/WebP image formats
- ✅ Proper H1/H2/H3 hierarchy on every page

### Structured data (JSON-LD schema)
- ✅ **Person schema** on every page teaches Google the knowledge graph facts about Josh (name, role, spouse, employer, sameAs links, knowsAbout)
- ✅ **Organization schema** for FOUNT Church founded 2013, New York, both Kelseys as founders
- ✅ **Website schema** identifying the site publisher
- ✅ **Article schema** on every writing post headline, author, dates, publisher

### Content SEO
- ✅ Name variants naturally woven through every page ("Josh Kelsey," "Pastor Josh Kelsey," "Joshua Kelsey")
- ✅ Co-reference to Georgie Kelsey across the site strengthens both names in Google's knowledge graph
- ✅ Internal linking between all pages
- ✅ External `rel="me"` links to all owned social/podcast properties (fount.nyc, Apple Podcasts, Spotify, Instagram, etc.) this is a critical signal for identity verification
- ✅ Three substantive writing posts with 500+ words each gives Google real content to index
- ✅ Alt text with names on images

### What happens now
Google typically indexes a new domain within 1–4 weeks after it's live and has inbound links. To accelerate:

1. After deploying, submit the sitemap in Search Console (see above).
2. From fount.nyc, link to joshkelsey.com in the About or pastor bio section.
3. From any existing owned properties (social profiles, Instagram bio, podcast descriptions), link to joshkelsey.com.
4. Post the new site once on your main social channels a few inbound signals is all it takes.

Expected timeline: site ranks for "Josh Kelsey" searches within 30–60 days, position 1–5 for exact-name queries within 60–90 days if content keeps updating.

---

## How to add a new writing post

Each post is a Next.js page. Copy the pattern from existing posts:

1. Create a new folder: `src/app/writing/your-post-slug/`
2. Add `page.tsx` copy one of the existing posts and edit
3. Update the post's metadata (title, description, canonical URL, OG)
4. Update the Article JSON-LD schema
5. Add the post to `src/app/writing/page.tsx` (the index) by adding an entry to the `posts` array
6. Add it to the sitemap in `src/app/sitemap.ts`
7. Commit and push Vercel redeploys automatically

Each new piece of writing is a new SEO asset. Aim for one per month minimum.

---

## How to update sermons

Edit `src/app/sermons/page.tsx` the `featured` array at the top. Add or replace entries. Each entry shows on the page.

For the full sermon catalog, the page currently links out to Apple Podcasts and Spotify. That's fine long-term. If you ever want a fully on-site sermon library with individual pages per sermon, the structure mirrors the writing posts.

---

## Design system in case you want to tweak

Design tokens live in `tailwind.config.ts` and `src/app/globals.css`:

| Token | Value | Purpose |
|-------|-------|---------|
| `paper` | `#F5F1E8` | Background warm off-white, editorial |
| `ink` | `#1A2541` | Primary text deep navy/ink |
| `accent` | `#8B2E1E` | Accent oxblood / theological red |
| `muted` | `#6B6456` | Secondary text |
| `soft` | `#EDE6D3` | Soft section backgrounds |
| `border` | `#D4CAB5` | Subtle dividers |

Typography: **Cormorant Garamond** (display, italics) + **Source Serif 4** (body) + system sans for UI chrome. Loaded from Google Fonts.

The paper-grain texture, drop-caps, and link-underline animation are all defined in `globals.css`.

---

## Ongoing maintenance

This site does not require much. A reasonable cadence:

- **Weekly:** Check Search Console for crawl errors and impression data
- **Monthly:** Publish one new writing post; update featured sermons if relevant
- **Quarterly:** Review all pages for outdated info (service times, links, bio details)
- **As needed:** Replace the OG image if you have a better photo

---

## Cross-site linking important

This is the hidden SEO win. Once georgiekelsey.com is also live:

1. Both sites should link back to each other from their footers
2. This site already links to georgiekelsey.com from the footer
3. Google reads reciprocal links between owned, related domains as a strong authenticity signal
4. The `sameAs` schema in `layout.tsx` lists related properties that already tells Google they're related

Same pattern for fount.nyc add a link to joshkelsey.com in the staff/pastor bio section.

---

## Questions

Contact Josh directly at hello@joshkelsey.com or if this is a technical handoff, refer back to the conversation history where this site was designed and built.
