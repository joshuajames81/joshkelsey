import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Invitation: Personal Ownership and Marketing",
  description:
    "The church's reach is limited. When every member catches a vision for personal invitation, and when the church celebrates stories from the platform, a Dinner Party on every block becomes possible.",
  alternates: { canonical: "https://joshkelsey.com/dinner-parties/invitation" },
  openGraph: {
    title: "Invitation: Personal Ownership and Marketing | Josh Kelsey",
    description:
      "Building a culture of personal invitation and celebrating stories that reach a city.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Invitation: Personal Ownership and Marketing",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/dinner-parties/invitation",
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
            partNumber="Three"
            partName="Leadership"
            chapterNumber="09"
            title="Invitation: Personal Ownership and Marketing."
            intro="The church's reach is limited. When every member catches a vision for personal invitation, and when the church celebrates stories from the platform, a Dinner Party on every block becomes possible."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Personal ownership
            </h2>
            <p className="drop-cap">
              God has not called us into a Christian club. He has not called us into a
              closed gathering. We are called people so that we can be a sent people.
              Everyone God calls, He sends. So if we are all sent people, there must be
              somewhere in our world, in our sphere of influence, that we are meant to
              reach.
            </p>
            <p>
              We are on mission in every part of our day. Every opportunity is a chance
              for a divine connection. A chance for God to move in our city. When we
              view our workplaces, our homes, and our neighborhoods through that lens,
              we start seeing them the way Christ does. As opportunities in front of us
              to shine His love.
            </p>
            <p>
              There are systems and structures for people to sign up to join a small
              group, and we operate with a detailed system at FOUNT. But one of the
              keys we&rsquo;ve found for health and growth is building a culture of
              invitation. Each leader taking responsibility and ownership to invite
              people from their own world. Not just relying on the system, but actually
              inviting people they know. This is when small groups reach a city and
              impact a community outside the walls of the church. If all we&rsquo;re
              reaching is insular, the people who already signed up on a form,
              we&rsquo;re not really living out the Great Commission. We&rsquo;re not
              really living missionally. A personal invitation could be a life-changing
              moment for someone. Why would we not take that step?
            </p>
            <p>
              The church only has so much reach within a city. Marketing, awareness,
              reach. All of that is limited. But when every person catches a vision
              for invitation, the reach becomes limitless. That&rsquo;s when small
              groups become a natural part of a city. That&rsquo;s when lives are
              changed. That&rsquo;s when people meet Jesus who might have never walked
              through the doors of a church. They were first invited to a table. To a
              dinner with friends.
            </p>
            <p>
              The best way to be bold in our invitation is to be secure in who we are
              in Christ. When our identity is secure, we can step out in inviting
              people. We can build a culture of invitation without looking to the
              outcome to validate us. Don&rsquo;t hang on someone&rsquo;s acceptance to
              feel accepted by Jesus. Let an invitation encourage you, but not be what
              your faith is built on. Your acceptance was secured long before the
              invitation was ever given.
            </p>
          </div>

          <PullQuote>
            A Dinner Party on every block.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Marketing and storytelling
            </h2>
            <p>
              Alongside personal invitation, the church as a whole has a role to play.
              As a staff, as a leadership team, you have the ability to celebrate,
              highlight, and elevate the things that matter most to your community.
              Whatever is seen as priority and elevated as a church becomes the thing
              your members see as important. If small groups are never talked about or
              celebrated in your services, your members will not see them as important.
              They will see them as an add-on. Not the main thing.
            </p>
            <p>
              If you want your small groups to thrive, they need to be at the center.
              That means not just spoken about as an announcement, but incorporated
              into messages. Shared from leadership. Talked about in conjunction with
              the Word of God. Not just an ad slipped between worship sets, but
              highlighted as the biblical community Jesus designed.
            </p>
            <p>
              The single most fruitful way we&rsquo;ve celebrated our groups is by
              telling stories. People want to connect to people. They want to hear a
              story. They aren&rsquo;t looking for another ad that tells them to sign
              up. They want to know the why. The impact. The purpose. How this is going
              to better their life.
            </p>
            <p>
              Stories make that difference. Stories show the genuine, relational,
              impactful layers of small groups beyond a marketing campaign. Beyond a
              well-designed graphic. Beyond a catchy phrase. They share a person&rsquo;s
              actual experience. When you highlight someone&rsquo;s experience, how
              their life changed through being part of a group, the doubters and the
              ones on the fence start to open up. People see the groups as being about
              impact. Not about the church wanting numbers or growth. They see that
              the church wants health and transformation.
            </p>
            <p>
              Even if you&rsquo;re small and just starting, sharing a quote from
              someone in the group in their own words is a great start. A sentence on
              a slide. A short testimony during an announcement. As you grow, go
              deeper. Video testimonies. A variety of stories that show the different
              dynamics of the group. Someone coming for the first time and getting
              connected. Someone who&rsquo;s been coming for a year and its impact.
              Someone who stepped into leadership. A first-time leader opening their
              home. Show all the layers so someone watching can see themselves in the
              people sharing.
            </p>
            <p>
              Video testimonies, quote designs, and stories have been the main tool
              we&rsquo;ve used to get people to sign up for Dinner Parties. People
              hearing that someone&rsquo;s life was changed. That someone made lifelong
              friends. That someone had people praying for them in a hard season. All
              of those moments connect to the viewer. Those are the stories you want
              to tell in your church. That&rsquo;s how to best market your groups.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-border/70 text-center">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              End of the training library
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 leading-tight">
              Thanks for working through this.
            </h2>
            <p className="font-serif text-lg text-ink/80 max-w-prose mx-auto mb-8">
              If this has served you or your church, share it with someone who might
              need it. And if you&rsquo;d like to be in touch, I&rsquo;d love to hear
              how Dinner Parties take root in your context.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/sustainability",
              part: "Part Three: Leadership",
              title: "Healthy Sustainability: Rhythm, Support, Training",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
