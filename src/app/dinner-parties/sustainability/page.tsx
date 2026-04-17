import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "Healthy Sustainability: Rhythm, Support, Training",
  description:
    "How we've kept Dinner Parties running every week for over ten years. ALLIN Team Night, the coach structure, monthly leader training, and the long game of ministry.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties/sustainability" },
  openGraph: {
    title: "Healthy Sustainability: Rhythm, Support, Training | Josh Kelsey",
    description:
      "The rhythm, the structure, and the training that keeps Dinner Parties healthy for the long haul.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Healthy Sustainability: Rhythm, Support, Training",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.org/dinner-parties/sustainability",
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
            partNumber="Three"
            partName="Leadership"
            chapterNumber="08"
            title="Healthy Sustainability: Rhythm, Support, Training."
            intro="How we've kept Dinner Parties running every week for over ten years. The rhythm, the coach structure, and the monthly training that sustains leaders for the long haul."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Rhythm
            </h2>
            <p className="drop-cap">
              Our Dinner Parties have run every week for over ten years. That
              sustainability comes from the health of our leaders and from the rhythms
              we&rsquo;ve built into our church. We&rsquo;ve found that continuous
              groups, not seasonal ones, have been the most impactful for our community.
              Relationships continue to build instead of being halted when a group ends.
              Leaders truly rise and flourish and are sent out from among other leaders,
              rather than pastors or staff raising up every new leader. With time and
              space, continuous groups grow their own leadership pipeline from within.
            </p>
            <p>
              A big part of our rhythm is that we have one week <em>off</em> from
              Dinner Parties and <em>on</em> as a whole church. We call it ALLIN Team
              Night. It happens on the first Wednesday of every month. Our groups break
              from their individual gathering and all meet together for a night of
              empowerment, worship, encouragement, and equipping. This night refreshes
              our leaders and our whole church through worship and the Word. It sets
              the foundation for the month.
            </p>
            <p>
              During ALLIN Team Night, we celebrate our leaders. We highlight new
              groups. New leaders who were raised up. Special moments in our Dinner
              Parties. It&rsquo;s a rhythm of consistent celebration and recognition.
              It also reminds leaders that it&rsquo;s only the three other weeks of the
              month that they lead and host. Yes, it&rsquo;s a continuous model, but
              every three weeks there&rsquo;s a break for refreshment. That rhythm is
              how leaders stay sustained.
            </p>
            <p>
              Another rhythm we&rsquo;ve implemented and seen fruit from is bi-annual
              celebrations just for leaders. These nights are only for our leaders. A
              time to honor them, gather for fun, and speak specifically about
              leadership in Dinner Parties. We&rsquo;ve seen these nights become a
              great time for leaders to come, be served, relax, and be reminded of the
              why. These are integral for communicating vision to leaders in fresh and
              engaging ways. They build momentum for the season ahead.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Support
            </h2>
            <p>
              As we shared in the discussion section, our conversation for the night is
              centered around the Sunday message. That has been a great support for
              leaders. They aren&rsquo;t adding work to their plate or preparing a new
              message or reading separate curriculum. They&rsquo;re digesting the
              Sunday message, applying it to their own lives, and helping the group do
              the same.
            </p>
            <p>
              Practically, we send out a message notes email to the whole church every
              Tuesday. It goes to the entire database. It refreshes the points and
              Scriptures from Sunday&rsquo;s message and lists discussion questions for
              the Dinner Party at the bottom. We don&rsquo;t just send this to leaders.
              We send it to everyone. That way the whole group walks in a bit more
              prepared for the conversation, knowing some of the questions that will
              come up. Leaders feel more at ease, knowing the teaching is already
              connected to Sunday. They can spend more time praying and preparing what
              is on their heart rather than learning new content.
            </p>
            <p>
              Our support structure for leaders has also helped create sustainability
              for our groups. Communication is key as you grow. As the number of groups
              in your church increases, the pastors and staff can&rsquo;t personally
              care for and lead every leader. A tiered leadership structure becomes
              necessary.
            </p>
            <p>
              What we&rsquo;ve done at FOUNT is raise up coaches. Each Dinner Party
              coach oversees two to four groups. They focus solely on the health of the
              leaders so that the leaders can care for their groups well. Each coach
              has a pastoral staff oversight who helps with higher-level pastoral
              situations and overall strategy. This structure has helped us grow wide
              without the full weight of pastoring hundreds of leaders landing on one
              or two staff pastors. Instead, we&rsquo;re raising up pastoral-level
              roles at a volunteer level.
            </p>
            <p>
              The coach is a shepherd and encourager of leaders. Actively seeking the
              Lord for strategy on how to lead their leaders. Encouraging them to grow
              deeper in their spiritual walk. Modeling healthy leadership and training
              them to become better leaders themselves. They are a resource and a point
              of communication between staff pastors and Dinner Party leaders.
              Releasing announcements, cultural points, and growth strategies weekly.
              Available to answer any questions leaders may have. Communicating upline
              to their staff pastor with updates and questions. Taking initiative to
              steward health and multiplication within Dinner Parties. Having eyes for
              leadership qualities in others and raising them up into leadership
              themselves. This weekly communication and care is what has helped us
              grow our groups and sustain health and longevity across the whole system.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Training
            </h2>
            <p>
              Training new leaders well is what sets them up for a win and what sets
              the whole group up for healthy sustainability. Monthly training is the
              best rhythm to get into. Keeping training as a consistent part of your
              community&rsquo;s life helps the church know that raising leaders is a
              vital part of your culture. The opportunity is always there, every month.
              People start seeing it as normal to step up and be trained.
            </p>
            <p>
              We provide a downloadable leaders guide as part of this library. You can
              find it in the{" "}
              <a href="/dinner-parties/leaders-guide" className="link-underline text-accent">
                Leaders Guide
              </a>{" "}
              section. This is what we actually hand our leaders at FOUNT. Use it, copy
              it, adapt it for your context.
            </p>
            <p>
              Whether you use our guide or build your own, we suggest doing your
              monthly training live. Either with a staff pastor leading or a coach-level
              leader facilitating the night. The training should walk through the
              culture, the values, and the basics of leadership in your church. The
              best way to set up leaders well is to be clear from the start.
            </p>
            <p>
              When training leaders, clear expectations, clear goals, and clear
              outcomes set them up for a win. If you give a blurry vision but clear
              goals, you&rsquo;re building a worker. Not a disciple maker. If you give
              clear vision but blurry goals, you produce a leader with stunted growth,
              a capped ceiling. But when you bring clear vision and clear goals, that
              is when you produce an empowered leader who builds disciples.
            </p>
            <p>
              That&rsquo;s the heart behind Dinner Parties. Creating safe, welcoming
              spaces for people to encounter Jesus, build relationships, and grow in
              their lives. Through the personal group, disciples are made. Not every
              member will become a leader. But our goal is that every member becomes a
              disciple. That&rsquo;s the greatest call God gave to our lives. Go and
              make disciples. As we treat our small groups with that heart, we will
              see our church, our city, and our world impacted by the love of Christ.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/multiplication",
              part: "Part Three: Leadership",
              title: "Multiplication: How to Grow Groups Well",
            }}
            next={{
              href: "/dinner-parties/invitation",
              part: "Part Three: Leadership",
              title: "Invitation: Personal Ownership and Marketing",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
