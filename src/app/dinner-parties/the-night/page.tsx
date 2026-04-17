import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Night: Welcome, Party, Discussion, Prayer",
  description:
    "The rhythm of a Dinner Party. What actually happens from the moment people arrive to the final prayer, and why every part matters.",
  alternates: { canonical: "https://joshkelsey.com/dinner-parties/the-night" },
  openGraph: {
    title: "The Night: Welcome, Party, Discussion, Prayer | Josh Kelsey",
    description:
      "The rhythm of a Dinner Party, from the first welcome to the closing prayer.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Night: Welcome, Party, Discussion, Prayer",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/dinner-parties/the-night",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Dinner Parties Training Library",
    url: "https://joshkelsey.com/dinner-parties",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <ChapterHeader
            partNumber="Two"
            partName="The Model"
            chapterNumber="02"
            title="The Night: Welcome, Party, Discussion, Prayer."
            intro="What actually happens across a Dinner Party, from the moment people walk through the door to the final prayer. Four parts, one purpose."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              Small groups are not about having a mini church. They&rsquo;re not about a
              message preached. Small groups are about vulnerability. Authenticity. Human
              beings sharing their failings, their victories, their ups and downs. Why
              did sixty strangers come together in the first couple of months of us
              starting our church? They were hungry for authentic relationships. They
              hadn&rsquo;t experienced the vulnerability of shared stories.
            </p>
            <p>
              The atmosphere is vital. We have to create an experience people actually
              want to be at. And the one thing to keep in mind is this is a party. Why do
              we call our groups Dinner Parties? Yes, it&rsquo;s a common name for a
              gathering among friends. But also, fifty percent of the word is party. We
              want the atmosphere, the heart of the night, and the structure to be
              intentional and purposeful. We want people to leave feeling uplifted and
              encouraged, carrying a lasting memory that this night was fun.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Part one: welcome and party
            </h2>
            <p>
              The first part of the night is for connecting, food, and fun. It&rsquo;s
              not a library. It&rsquo;s not a Bible study. This is the time to catch up
              with friends, meet new people, and break bread.
            </p>
            <p>
              Our heart is to create an atmosphere of welcome where everyone feels the
              presence of God. The goal is to leave a positive memory. The space
              doesn&rsquo;t have to be a perfect place, but it should be a safe place.
              Our leaders set a culture of being prepared before guests arrive. That
              looks like music already on, creating a party vibe. The table set. Candles
              lit. The sense of preparation sets an atmosphere of welcome so that every
              guest walks in and feels at peace.
            </p>
            <p>
              Once everyone is welcomed in, that first hour is all about connection.
              You&rsquo;re sharing food, sharing stories, building friendships. It&rsquo;s
              like any gathering of friends. Joyful. Vibrant. This sets the stage for
              everything that follows. People&rsquo;s walls come down because they feel
              safe. They&rsquo;re willing to open up more in the discussion because
              they&rsquo;ve built genuine relationship from the start.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Part two: discussion
            </h2>
            <p>
              After the party, there is a time set for discussion. This is the time where
              we gather around the Word and discuss Sunday&rsquo;s message. Where we let
              the Word become flesh in our lives. It should start after everyone&rsquo;s
              had a chance to connect and eat. The purpose is to create a safe space to
              digest Scripture, encourage, and learn from one another.
            </p>
            <p>
              Open the discussion by sharing the heart behind Dinner Parties. Introduce
              yourselves. Let everyone else in the room introduce themselves with an ice
              breaker. It&rsquo;s a great way to open up before diving into the Word. By
              setting the stage and sharing the why behind gathering, you bring purpose
              and intentionality to the night.
            </p>
            <p>
              One practical tip. Don&rsquo;t say <em>it&rsquo;s time to start</em> when
              you transition to discussion. Because then you&rsquo;ve implied that the
              start wasn&rsquo;t when the party, connection, and food happened. The start
              was when people arrived. The moment they walked in. That was spiritual just
              as much as the discussion will be. Transition into the discussion, but let
              it flow naturally. People should sense that the first part was just as
              important as the second.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Part three: prayer
            </h2>
            <p>
              Following discussion, Dinner Parties close in prayer. This is a moment for
              people to break into smaller groups and share what&rsquo;s on their hearts.
              What they need prayer for. If it&rsquo;s a large group, break into smaller
              groups. If it&rsquo;s a smaller group, pray all together. This builds
              community and connection, and it invites the Holy Spirit into the room.
            </p>
            <p>
              In Galatians 6:2, Paul talks about bearing one another&rsquo;s burdens. When
              we pray together, we are actually lifting weights off of each other and
              casting our cares, as a community, to the cross.
            </p>
          </div>

          <PullQuote attribution="James 5:16">
            Make this your common practice: confess your sins to each other and pray for
            each other so that you can live together whole and healed.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              When we&rsquo;re open and honest in prayer, when we intercede for each
              other, this leads us to live together whole and healed. Praying together at
              a Dinner Party is so important to being unified and experiencing wholeness
              in community. As people take off the mask and find freedom in the small
              group setting, Sundays become even more powerful and built upon. Small
              groups always build the whole.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The shape of the night at a glance
            </h2>

            <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
              <div className="border border-border p-6 bg-soft/40">
                <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
                  First hour
                </p>
                <h3 className="font-display text-2xl text-ink mb-3">Welcome and Party</h3>
                <ul className="font-serif text-ink/80 space-y-2 leading-relaxed">
                  <li>Space clean, music on, candles lit, food and drink set</li>
                  <li>Welcome people at every threshold</li>
                  <li>Help people connect. Watch for new faces</li>
                  <li>Make it fun. Make it the highlight of someone&rsquo;s week</li>
                </ul>
              </div>
              <div className="border border-border p-6 bg-soft/40">
                <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
                  Second hour
                </p>
                <h3 className="font-display text-2xl text-ink mb-3">Discussion and Prayer</h3>
                <ul className="font-serif text-ink/80 space-y-2 leading-relaxed">
                  <li>Open with the heart of why we gather</li>
                  <li>Discuss Sunday&rsquo;s message together</li>
                  <li>Create a safe space for honesty and encouragement</li>
                  <li>Close in prayer. Bear burdens together</li>
                </ul>
              </div>
            </div>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/vision",
              part: "Part One: Vision",
              title: "The Temple, the Home, and the Power of the Table",
            }}
            next={{
              href: "/dinner-parties/leadership-roles",
              part: "Part Two: The Model",
              title: "Leadership Roles: The 2x2 Blueprint of Jesus",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
