import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Vision: The Temple, the Home, and the Power of the Table",
  description:
    "Why Dinner Parties. The biblical blueprint from Acts 2, the power of communion and consistency, and how FOUNT Church began with five people around a table in Brooklyn.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties/vision" },
  openGraph: {
    title: "Vision: The Temple, the Home, and the Power of the Table | Josh Kelsey",
    description:
      "Why Dinner Parties. The biblical blueprint from Acts 2 and the story of how FOUNT Church began at a table.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vision: The Temple, the Home, and the Power of the Table",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.org/dinner-parties/vision",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Dinner Parties Training Library",
    url: "https://joshkelsey.org/dinner-parties",
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
            partNumber="One"
            partName="Vision"
            chapterNumber="01"
            title="The Temple, the Home, and the Power of the Table."
            intro="Why Dinner Parties. The biblical blueprint that came through our study of Acts 2, and the story of how FOUNT Church began with five people around a table in Brooklyn."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Our story
            </h2>

            <p className="drop-cap">
              When Georgie and I got off the plane from Australia to plant a church in
              New York City, our first thought was simple. How do we start? We
              didn&rsquo;t come with a team. We didn&rsquo;t come with a lot of
              resources. And if I&rsquo;m honest, it felt overwhelming. We had a big
              vision, but we couldn&rsquo;t start with a Sunday service without a team
              of people.
            </p>
            <p>
              Then God gave us this vision for a Dinner Party. Dinner parties, of course,
              are a universal concept. But using one as the starting place for a church,
              as the primary way to build small groups, as the DNA of the whole thing,
              that was something different. And that is what has built our church for over
              a decade now.
            </p>
            <p>
              So from that God idea, we thought, why don&rsquo;t we just host a Dinner
              Party? Why don&rsquo;t we get some of our contacts and friends together, sit
              around a table, and start building the church the way Jesus did? That first
              Dinner Party was just five people. But it was the start of a movement. And
              we have been having a Dinner Party in our church every week since.
            </p>
            <p>
              We found that people were hungry for more than food, although that was a
              great start. People were hungry for community. For real relationship. At one
              point we had almost sixty people crammed into our apartment. In fact, our
              Sunday gatherings were launched from those Dinner Parties. So at the heart
              of it all, we&rsquo;ve always been a Dinner Party church. A church that
              gathers around the table.
            </p>
            <p>
              As our church has grown over the years, we&rsquo;ve been able to stay
              healthy and stay feeling small, even with growth and size, because of our
              focus on Dinner Parties. It&rsquo;s like taking a microscope to a cell. You
              can see the health of the whole body based on one singular cell. It&rsquo;s
              God&rsquo;s gift to us to have small groups. To keep the body healthy, each
              cell has to be healthy and thriving.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The temple and the home
            </h2>
            <p>
              We thought, how can we reach New York City and meet people where they are?
              Dinner Parties. Even the name is something people can resonate with. If you
              think about the church that&rsquo;s in God&rsquo;s heart, there&rsquo;s no
              stadium that could fit it. But there are enough apartments and homes and
              dinner tables to bring together an entire city. That&rsquo;s why our vision
              is to have a Dinner Party on every block. To reach a city, build community,
              and have lighthouses in every neighborhood shining bright with hope.
            </p>
            <p>
              See, small groups aren&rsquo;t the side dish and Sundays aren&rsquo;t the
              main course. When we started the church, I realized we were looking at
              church models to prepare for the plant, rather than looking at the Bible
              and the life of Jesus. That&rsquo;s where the Lord brought us to Acts 2 and
              this idea around the table.
            </p>
          </div>

          <PullQuote attribution="Acts 2:46">
            Every day they continued to meet together in the temple courts. They broke
            bread in their homes and ate together with glad and sincere hearts.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              We have built around this rhythm. This routine. The temple and the home.
              God gave the church a blueprint for how to disciple people to look more
              like Jesus. It wasn&rsquo;t just hearing a message and responding. It was
              about living it out, in the temple and in the home.
            </p>
            <p>
              The last thing Jesus did before the garden and the cross was share a meal.
              And one of the first things He did after the resurrection was have a meal
              again. There seems to be a blueprint for how to change the world in the
              before and after of the cross. It&rsquo;s not more ministries and
              activities. It&rsquo;s the table. The table is what will change the world.
            </p>
            <p>
              That&rsquo;s why we believe we&rsquo;re called to put the same priority and
              excellence into our small groups that we put into our Sundays. Small groups
              are not just a means to produce something else. They are the goal. That
              people would be in community. God made a way through Jesus, giving us
              access to Him, and we now have a seat at the table through Him. Here on
              earth, we bring heaven down when we make room for others, when we give
              people a seat at the table, just as Jesus has done for us.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Communion and consistency
            </h2>
            <p>
              The power of the table is where we see true freedom and transformation in
              people&rsquo;s lives. And what gives the table its power comes down to two
              things. Communion and consistency.
            </p>
            <p>
              <strong>Communion.</strong> This is how Jesus spread the gospel, loved and
              welcomed people. The word communion appears first in the Gospels of
              Matthew, Mark, and Luke, and later in Corinthians. We read about Jesus
              breaking bread and sharing wine with His disciples in remembrance of His
              death on the cross. But it&rsquo;s more than a moment of reflection. The
              word communion is a common union. It means the sharing of intimate
              thoughts, feelings, and stories in a relationship. It&rsquo;s this communion
              that we&rsquo;ve been invited into by gathering around the table. People
              want a seat to share a meal and get to know one another. It&rsquo;s
              culturally what we do.
            </p>
            <p>
              Dinner Parties allow people to connect, grow, and know one another on a
              real level. And the best part is that no one is excluded. In the modern
              western church, we&rsquo;ve sometimes lost the celebration of breaking
              bread. The festivity. The feast. Let&rsquo;s make the table the center of
              the church again. Let&rsquo;s reclaim the table of the Lord. Jesus painted
              this picture for us. He told us the Kingdom of heaven looks like a feast.
              A banquet. Matthew 22, Luke 14, Revelation 19, all of these passages show
              us a Kingdom wedding feast. Jesus&rsquo; first miracle was turning water
              into wine, a picture of the celebration and the table He&rsquo;s preparing
              for us. So while we look to that heavenly table, we know we&rsquo;re also
              commissioned to bring heaven to earth. To have our table on earth be a
              reflection of heaven.
            </p>
            <p>
              <strong>Consistency.</strong> The second factor. Consistency is the
              heartbeat of Dinner Parties. With consistency, we build momentum. I&rsquo;ve
              seen gatherings fail when it isn&rsquo;t clear. People don&rsquo;t know
              when, where, or what time. That&rsquo;s why we commit to being consistent.
              There is power in consistency. Power in doing the mundane really well.
              Blessing follows obedience. It is a beautiful thing to give one night a
              week to God, to provide a table and build community. This consistency
              gives people something they can rely on every single week in a world of so
              much change.
            </p>
            <p>
              Growing up in church, I noticed something about small groups. Leaders are
              notorious for canceling. Most groups were led by one leader and maybe an
              assistant, and it was so easy for a group to cancel or dwindle out. But the
              consistency of the group determines the health of the individual. There
              will be people in your group hanging on by a thread in their relationship
              with Jesus, and the consistency of gathering is what keeps them. Or what
              could reconnect them. When that breaks, it can easily pull someone off the
              rhythm of church and the rhythm of a relationship with Jesus altogether.
            </p>
            <p>
              Imagine if we treated our small groups the way we treat Sunday. If the
              pastor didn&rsquo;t feel it one week and just canceled church. That would
              fully disrupt a church. So why do we think in a small group setting we
              could do the same? The disruption may be for a few people, but the few
              actually impact the whole. So the power of consistent gathering has to be
              the foundation of any healthy small group system.
            </p>
          </div>

          <ChapterNav
            next={{
              href: "/dinner-parties/the-night",
              part: "Part Two: The Model",
              title: "The Night: Welcome, Party, Discussion, Prayer",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
