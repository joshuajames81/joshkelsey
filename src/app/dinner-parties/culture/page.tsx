import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Culture: Atmosphere, Food, and Relationships",
  description:
    "The culture that makes a Dinner Party feel like home. Welcome at every threshold, food that says you belong, and relationships that outlast any gathering.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties/culture" },
  openGraph: {
    title: "Culture: Atmosphere, Food, and Relationships | Josh Kelsey",
    description:
      "Why atmosphere, food, and relationships determine whether a Dinner Party actually works.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Culture: Atmosphere, Food, and Relationships",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.org/dinner-parties/culture",
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
            partNumber="Two"
            partName="The Model"
            chapterNumber="04"
            title="Culture: Atmosphere, Food, and Relationships."
            intro="You can have all the systems, all the leadership roles, all the structure. But if the culture doesn't feel like home, people won't stay. The three things that determine whether a Dinner Party actually works."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Atmosphere
            </h2>
            <p className="drop-cap">
              Why is it that in the church, we have to be reminded how to have a good
              time? I think it&rsquo;s because we&rsquo;ve lost some of our edge. What
              we often call holiness is actually just religiosity. The power in your
              small group is seen in the joy. The life. The music. The fun. The laughter.
            </p>
            <p>
              Part of the attraction to the church is that we should have more life than
              the world. We don&rsquo;t have the shame and the guilt the world carries.
              We are free. We have resurrection life. We should have the most lively,
              joyful homes of anyone. Homes that actually attract the city around us.
            </p>
            <p>
              Food and atmosphere are gifts from God to help people feel less lonely. How
              you set the table, the food, the atmosphere. It&rsquo;s all just as holy as
              someone sharing a revelation from the Word. It&rsquo;s all spiritual.
            </p>
            <p>
              It&rsquo;s not about the fanciest space. It&rsquo;s about excellence
              without perfection. An atmosphere of love, grace, and acceptance. Welcoming
              at the door. <em>Can I get you a drink?</em> Serving people in your group.{" "}
              <em>Can I take your coat?</em> Small, intentional moments create an
              atmosphere of safety and comfort.
            </p>
            <p>
              On Sundays you always have welcomers at your church. Greeters. Signs. A
              foyer that&rsquo;s set. Clarity and connection from the start. That same
              level of excellence should transfer to your small groups. In New York,
              there are usually three or four barriers in a typical apartment before
              someone even reaches your door. That&rsquo;s three or four options for
              someone to be hindered from walking in. We turn it into a positive. We put
              someone at every threshold. By the time a guest gets inside the home, they
              have already been welcomed three times. Some of their walls are already
              down. They have felt loved, cared for, and seen from the very first
              moment.
            </p>
            <p>
              That&rsquo;s the culture of welcome. That&rsquo;s what radical hospitality
              looks like. That&rsquo;s what grace does. At every threshold. You may not
              be used to this. But you&rsquo;re welcome here.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Food
            </h2>
            <p>
              I grew up in small groups, and sometimes we can be casual about the food.
              Chips and salsa on a table. Nothing really offered. What we&rsquo;ve done
              from the beginning, and what we&rsquo;ve seen impact our Dinner Parties,
              is that people feel the service the moment they walk in. A drink in their
              hand. Great food offered.
            </p>
            <p>
              We&rsquo;ve discovered that some of the groups that have grown the fastest
              are the ones with the best food. Isn&rsquo;t it amazing that in Christian
              small groups the food can be a little bit, well, bland? Not in your
              church, of course. But in some places it&rsquo;s not as prepared as it
              could be. We believe in great food. And you don&rsquo;t need a lot of
              resources to do this well. We made a lot of pasta with red sauce in the
              early days. It looked good, filled people up, was warm and inviting,
              didn&rsquo;t cost a lot, and people could taste the love in it.
            </p>
            <p>
              It&rsquo;s powerful what food does. Jesus said <em>do this in remembrance
              of me</em>. There is something meaningful when you break bread together.
              People open up more. A room with full stomachs is a room where people
              feel ready, physically and spiritually, before the discussion even begins.
            </p>
            <p>
              From the start, we had a culture of people asking if they could bring
              something. There&rsquo;s something about turning up to a place with
              something in your hand. It&rsquo;s easier to walk in the door when you
              know you&rsquo;re bringing something that&rsquo;s needed. People want to
              feel like they contribute. It&rsquo;s Kingdom culture. Entering a space
              and giving something. In the early days we would tell people{" "}
              <em>don&rsquo;t worry about it, we&rsquo;ve got it covered</em>. But we
              quickly realized that our <em>no</em> actually hindered the person who
              would have felt more at home by bringing something to the table.
            </p>
            <p>
              Each group is responsible for managing the food, the finances of it, and
              finding the best rhythm. Some groups have a leader prepare the main dish,
              like meat for a taco night, and every member brings a topping. The main
              is covered, and everyone contributes. Other groups run more potluck-style
              with a theme for the night like Italian. Pasta, salad, appetizer. Everyone
              picks a dish and brings it. The key is communication. Leaders plan the
              meal, dish, or theme ahead of time. They communicate early so people can
              plan. This takes pressure off the leaders and invites the whole group into
              the hospitality.
            </p>
            <p>
              We&rsquo;ve put together a resource of twenty themed meal ideas that our
              leaders rotate through. You&rsquo;ll find it in{" "}
              <a href="/dinner-parties/menu-ideas" className="link-underline text-accent">
                Menu Ideas
              </a>
              .
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Relationships
            </h2>
            <p>
              Relationships are the glue. The stickiness that keeps your groups together
              and keeps them growing. A culture of healthy, genuine relationships is
              what draws people into your groups and keeps them there. You can have all
              the systems, all the tips, the best atmosphere, the candles, the food. But
              if you don&rsquo;t have healthy relationships and you don&rsquo;t teach
              your leaders to build them, your groups will crumble. The foundation of
              every group isn&rsquo;t structure. The roots have to be connected to the
              source, which is Jesus. From that primary relationship with Him, we build
              healthy friendships with each other.
            </p>
            <p>
              Building and sustaining relationships isn&rsquo;t only the work of the
              Follow Up leader. It isn&rsquo;t only on the extrovert. It&rsquo;s on
              everyone. Every member of the group has the ability to foster real
              relationship, and every member should take it seriously.
            </p>
          </div>

          <PullQuote attribution="Philippians 2:4">
            Let each of you look not only to his own interests, but also to the interests
            of others.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              Ask the clear questions. Invest. Get to know the people in your group. How
              are they doing? How is their relationship with God? What are they walking
              through right now? The personal questions are what build trust and
              intimacy. They&rsquo;re also a great starting point for prayer.
            </p>
            <p>
              Then, remember what people share. If someone asks for prayer for a job
              interview on Friday, remember it. Reach out on Friday. Pray for them.
              Remember all the moments. A lot of great friendships are built on someone
              who remembers. Be the person who remembers the thing. The job promotion.
              The parent going through a health battle. The interview. Remember to reach
              out. To pray. To ask how it went.
            </p>
            <p>
              And be the person who celebrates. No matter what state your own life is
              in as a leader, you&rsquo;re there to celebrate with your people. First to
              congratulate. First to highlight the win. The proposal. The job. The
              apartment. The baby. Whatever it is in their life, we are the ones who
              celebrate it.
            </p>
            <p>
              People remember who was there in hard times. And who was there in the
              celebrations. That&rsquo;s where friendships are built beyond just a small
              group gathering. You break outside the walls of Wednesday night and
              experience real life together.
            </p>
            <p>
              Another key to building relationships is knowing what&rsquo;s happening in
              the life of your church and community. That lets you help someone in your
              group take their next step. An event coming up. A course. A seminar.
              Something that would help them grow and be discipled. That&rsquo;s
              relational building. That&rsquo;s building healthy disciples.
            </p>

            <div className="not-prose my-10 border border-border p-6 md:p-8 bg-soft/40">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-4">
                Four Keys for Great Relationships
              </p>
              <ul className="font-serif text-ink/85 space-y-4 leading-relaxed">
                <li>
                  <strong>Be present.</strong> The moment with someone is the most
                  important thing at that time. Be engaged. Be with them.
                </li>
                <li>
                  <strong>Listen.</strong> Ask real questions. Actually listen to the
                  answer.
                </li>
                <li>
                  <strong>Remember.</strong> The job interview, the health appointment,
                  hardship or celebration. Be the person who remembers what&rsquo;s
                  happening.
                </li>
                <li>
                  <strong>Pray.</strong> Don&rsquo;t just say you&rsquo;re praying for
                  someone. Actually pray for them.
                </li>
              </ul>
            </div>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/leadership-roles",
              part: "Part Two: The Model",
              title: "Leadership Roles: The 2x2 Blueprint of Jesus",
            }}
            next={{
              href: "/dinner-parties/heart-of-a-leader",
              part: "Part Three: Leadership",
              title: "The Heart of a Leader",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
