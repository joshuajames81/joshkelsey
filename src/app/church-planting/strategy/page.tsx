import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Strategy: The Plan, the Timing, and the Core Team",
  description:
    "Your team is you and God. How we built our first plant with no launch team, why Dinner Parties emerged, how to know when to launch, and what to look for when you're building your core.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/strategy" },
  openGraph: {
    title: "The Strategy: The Plan, the Timing, and the Core Team | Josh Kelsey",
    description:
      "Your team is you and God. How we built our first plant, and what to look for in your core team.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Strategy: The Plan, the Timing, and the Core Team",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/strategy",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Church Planting Training Library",
    url: "https://joshkelsey.com/church-planting",
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
            partName="The Plant"
            chapterNumber="03"
            title="The plan, the timing, and the core team."
            intro="Your team is you and God. If that isn't enough, you shouldn't plant. How Dinner Parties emerged out of having no launch team, what our eight-month rhythm looked like, and how to spot the gold God is already bringing you."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Your team is you and God
            </h2>

            <p className="drop-cap">
              When we were first planting and moving to New York, I can look back
              now and see that my trust was more in a team of people than it was in
              God. Building a great team is key. But first and foremost you have to
              have the revelation that your team is you and God. From that place,
              you can then build a great launch team.
            </p>
            <p>
              God had to take me on a journey to get that. I was used to being on
              staff in a church that already had a team, people who were gifted and
              skilled to run services. Before we moved I wrote down the names of
              everyone I believed was coming with us, about thirty or forty people.
              None of them came. No one got their visas. No one got their jobs. The
              doors just kept slamming shut. What ended up starting the church was
              just Georgie and me.
            </p>
            <p>
              That was my journey. Many planters bring a team with them, and that&rsquo;s
              a real gift. But the principle is the same either way. Your team is
              you and God. And if that isn&rsquo;t enough, you shouldn&rsquo;t
              plant. In that season God said to me, stop writing names, I&rsquo;ll
              pick your team with you. I started arguing with the Holy Spirit, how
              will you know if I don&rsquo;t write down what I want? But he was
              testing my trust.
            </p>
          </div>

          <PullQuote>
            Your team is you and God. If that isn&rsquo;t enough, you shouldn&rsquo;t plant.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              Walking through that lesson is how the concept of Dinner Parties was
              born. We couldn&rsquo;t start with a service because we didn&rsquo;t
              have a team. God gave Georgie and me a vision for a Dinner Party.
              Dinner parties are a universal idea, but using one as the way to start
              a church, as the primary way to build small groups, as the DNA of the
              whole thing, that was something different. And that is what has built
              our church. I don&rsquo;t think we would have come up with it if
              we&rsquo;d had a full team from the start.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Our eight-month rhythm
            </h2>
            <p>
              I&rsquo;m sharing our timeline not as a template, but to show the
              principles of what we did and why.
            </p>
            <p>
              We started in February of 2012 with a Dinner Party. We held that
              Dinner Party every week, and that was what we had for the first four
              months. In March we started visiting other churches in the city as a
              team, going to lunch afterward and sharing one thing we loved and one
              thing we thought we could be that we hadn&rsquo;t seen. In April we
              held a one-off Easter service, which was a great gauge for us two
              months in. We filled our venue and started to build real momentum.
            </p>
            <p>
              In June we launched once-a-month preview services alongside our
              weekly Dinner Parties. Preview services were full Sunday services,
              giving the community a taste of what was coming and building up our
              invitation culture, our worship team, our first-impressions team. On
              the Sundays we didn&rsquo;t have a preview service, we gathered for
              Sunday Stories. A different member of the community would share
              theirs. That started a love for stories in our church, a
              comfortability with vulnerability, and it drew in so many people in
              those first months. People were hungry for real.
            </p>
            <p>
              Then in September we launched weekly Sunday services. September 22nd
              became the official launch of our church. From then on we met every
              Sunday, and that month we multiplied into two Dinner Parties, then
              nine by December.
            </p>
            <p>
              The biggest key isn&rsquo;t the dates or the exact events. It&rsquo;s
              the clarity, strategy, and momentum you build within your timeline.
              Your launch timing will depend on the team-building you do before you
              launch.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Ready and flexible
            </h2>
            <p>
              We were open to launching later than September if we didn&rsquo;t
              feel we had enough momentum. I had September in my heart from a year
              before, but I never controlled the timeline just to meet that goal. I
              wanted to make sure the launch would sustain.
            </p>
            <p>
              Be ready and be flexible in the launch season. You have to have a
              clear plan, goals, timeline, and strategy. And you have to let God
              change it.
            </p>
            <p>
              What you don&rsquo;t want is a false start. So many planters have
              that. They start before they&rsquo;re ready, they can&rsquo;t sustain
              weekly services, and momentum dies. It&rsquo;s easy to get wrapped up
              in the hype of launch Sunday and lose the five Sundays after it.
              Don&rsquo;t plan just for the launch, plan for the Sunday that&rsquo;s
              five weeks later. Make sure the excitement is still there.
            </p>
            <p>
              There&rsquo;s no perfect science for knowing when you&rsquo;re ready.
              The guidelines we use and suggest are: around 40 people committed to
              your launch team, and over 120 people showing up to monthly gatherings
              or preview services. Those metrics helped us gauge the launch season
              and feel confidence going weekly.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Building your core team
            </h2>
            <p>
              Just like God designed the body, much of what we&rsquo;re able to do
              physically relies on a strong core. Every workout instructor will yell
              at you to strengthen your core, utilize your core, because it
              stabilizes, strengthens, and gives you longevity. The same applies to
              your church. You are only as strong as your core. In seasons of
              resistance and pressure, your core is what will hold you through.
            </p>
            <p>
              Building a core team has to be a mix of trusting God with the people
              he&rsquo;s bringing you, even when you can&rsquo;t yet see what he
              sees, and also having eyes open to look beyond who you might have
              assumed were the &ldquo;right&rdquo; people.
            </p>
            <p>
              The key scripture on this for me is 2 Corinthians 5. From now on we
              regard no one according to the flesh. If anyone is in Christ, he is a
              new creation. We have to see people differently than we have before.
              We have to see them the way Christ sees them. With that lens, you
              start to build the team God has for you.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Don&rsquo;t look for ready-made
            </h2>
            <p>
              We can easily fixate on ready-made people. It&rsquo;s a gift if
              someone on your core team is already gifted and reliable. But often
              it&rsquo;s people you have to build. When Jesus picked his disciples,
              they weren&rsquo;t the ones the rabbis were choosing. They
              weren&rsquo;t the most put-together. They were kind of the left-out
              ones. Sometimes we overlook the people who were there from day one
              and God says, these are the ones I want you to pour into.
            </p>
            <p>
              The guys I thought would be with me, the ones I thought had the gift
              to lean on early, ended up being the least reliable. That may not be
              your story, but I share it to say, sometimes what looks best because
              the need is great isn&rsquo;t what sticks it out with you. The ones
              that were there, that we chose to pour into, that kept showing up,
              that were hungry to learn, those became our core. They weren&rsquo;t
              pretending. They were leaning into our leadership. There has to be a
              willingness to grow. If a person already thinks they&rsquo;ve arrived,
              it&rsquo;s hard to shape and build from there.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Character over gifting
            </h2>
            <p>
              Sometimes what looks best to start because the need is so great
              aren&rsquo;t the ones that last. Look for character in a person over
              the gift they bring. The people that aren&rsquo;t pretending. The ones
              willing to grow. The ones that are teachable.
            </p>
            <p>
              So often we miss the gold hidden in the rock because it doesn&rsquo;t
              look like much initially. But our burden is people. Our mission is
              people. We have to see them as Christ sees them and build from there.
              It&rsquo;s the Peters of the world that God chooses to build his
              church. See everyone in that light, give people a chance, and
              you&rsquo;ll see who are the ones to build with, who are the ones to
              keep close, and who to release and run alongside.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Pray for specific people
            </h2>
            <p>
              A huge part of building team is prayer. Pray for specific people to
              arrive. Maybe they&rsquo;ll be part of your core, or maybe they&rsquo;ll
              just be integral in the start, filling a gifting you need. Rather than
              trying to muster up all the skills yourself, rely on a team. Pray for
              a team. Pray for specific holes you see.
            </p>
            <p>
              When we had first moved and were running Dinner Parties and launching
              Sundays, we didn&rsquo;t have a graphic designer. Instead of praying
              for one, I decided I could do it myself. I&rsquo;d design the business
              card. In the middle of trying, I got frustrated, because I was
              operating outside my gifting. Georgie said, you need to go and pray
              for this, rather than encouraging me to keep going in the design. I
              went and prayed specifically for a graphic designer. That week a new
              guy walked into our church, a skilled creative with a heart to build.
              We created cutting-edge designs in that first year because of him,
              and hundreds of people were reached through the creativity he led.
            </p>
            <p>
              Be specific with your prayers. Don&rsquo;t do it all on your own. See
              the potential in everyone. Build a core that will sustain and bring
              health to your future growing church.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/person",
              part: "Part One: The Calling",
              title: "The Person",
            }}
            next={{
              href: "/church-planting/culture",
              part: "Part Two: The Plant",
              title: "The Culture",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
