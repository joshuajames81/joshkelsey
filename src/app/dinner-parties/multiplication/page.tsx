import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Multiplication: How to Grow Groups Well",
  description:
    "When to multiply, how to prepare the group, how to commission new leaders, and how to make multiplication a culture rather than a crisis.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties/multiplication" },
  openGraph: {
    title: "Multiplication: How to Grow Groups Well | Josh Kelsey",
    description:
      "When to multiply a small group, how to equip and release leaders, and how to celebrate multiplication.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Multiplication: How to Grow Groups Well",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.org/dinner-parties/multiplication",
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
            chapterNumber="07"
            title="Multiplication: How to Grow Groups Well."
            intro="When to multiply a group, how to prepare the leaders, how to commission them, and how to make multiplication a culture rather than a crisis."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Vision for multiplication
            </h2>
            <p className="drop-cap">
              So often we try to multiply a body part instead of multiplying a cell. But
              as we said at the beginning, each singular cell is what makes up the body.
              The body is only as healthy as its cells. The church grows when cells
              multiply, not when we build more body parts or try to replicate ministries
              over and over. True multiplication happens when the cells multiply. That
              is when growth becomes exponential. Getting a vision for multiplication is
              key to the health, life, and vitality of your church.
            </p>
            <p>
              We often get the question, <em>when do you know it&rsquo;s time to
              multiply?</em> Our answer. How big is your space? It&rsquo;s a physical
              answer. Is the space filled? If the group is filled in its space, there&rsquo;s
              no more room to welcome new people. The moment that happens is the moment
              the group is capped in its potential and longevity. Growth will stunt.
              So we make it a heart and a practice. If our room is filled, we need to
              multiply and send out leaders.
            </p>
            <p>
              That said, multiplication can also happen before a room is full. Maybe
              rising leaders are ready. Maybe a new neighborhood needs a group and
              doesn&rsquo;t have one yet. Don&rsquo;t hold off on sending people out just
              because the current group isn&rsquo;t at capacity. God will fill rooms
              that we welcome Him into. Don&rsquo;t let fear or hesitation hinder a
              group from launching just because the current one isn&rsquo;t quite at
              capacity yet.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Build a culture, not a crisis
            </h2>
            <p>
              The language of multiplication is key. Build it into the rhythm of your
              groups. Have leaders talk about it and pray over multiplying their group
              before it even happens. This creates a natural culture within your church.
              So when the time comes for the group to multiply, it doesn&rsquo;t seem
              crazy or hard for people to go into a new group. It seems natural, because
              it&rsquo;s the language they&rsquo;ve heard from the start.
            </p>
            <p>
              Whatever you celebrate and recognize as a church also becomes the natural
              rhythm. If multiplication isn&rsquo;t spoken about from the platform of
              your church, from the pastor or higher leadership on a Sunday, it
              won&rsquo;t be seen as normal or visionary for the members. But if every
              time a group multiplies, every time a new group launches, it&rsquo;s
              celebrated and shared with the whole church, people get behind the vision.
              They want to be part of it. The church sees that multiplication is valued.
              That it&rsquo;s in the DNA of the culture. They become more inclined to
              step out when their turn comes.
            </p>
            <p>
              One of the biggest hindrances we&rsquo;ve seen to multiplication is when
              leaders hesitate because they love the current group and don&rsquo;t want
              it to change. People respond to change differently, and culturally you
              have to prepare your leaders. Show them how to respond to change. If the
              members and leaders never see pastors or higher leadership adjusting or
              thriving through change in the church, they won&rsquo;t be inclined to do
              the same.
            </p>
            <p>
              A great culture to build is this. Stewardship, not ownership. We want
              leaders to own the vision and take responsibility for what they&rsquo;re
              leading. But there&rsquo;s a difference between ownership and stewardship
              when it comes to the group. Ownership is about taking responsibility for
              what you&rsquo;re caring for. It is not about holding tightly to the thing
              or the person you&rsquo;re over. Stewardship is caring for the group
              enough to release them when they&rsquo;re ready to be sent out.
              Stewarding the group to grow as leaders in their personal relationship
              with Christ so they can be sent out to do the same. Realizing that in
              sending them, you&rsquo;re reaching more people and living out the Great
              Commission.
            </p>
          </div>

          <PullQuote>
            Lifelong friends, not a lifelong group.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              That&rsquo;s the language we use. The friendships in your group are meant
              to last a lifetime. The group itself is not. Groups multiply. Friendships
              remain.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              How to actually multiply a group
            </h2>
            <p>
              Once the culture is set and the leaders are ready, how do you take the
              actual steps? The first key is identifying the leaders, which we covered
              in the last chapter. Then take the chance on them.
            </p>
            <p>
              Start with small responsibilities. After a potential leader is identified,
              invite them to come early to your Dinner Party. Let them see how you set
              up. How you prepare. How you get the space ready. This is interactive
              learning where you&rsquo;re still leading, but they&rsquo;re observing and
              participating.
            </p>
            <p>
              Then let them lead while you watch. Give them a small role within the
              group. Let them lead the prayer moment. Share announcements. If
              they&rsquo;re ready, lead the whole discussion. They&rsquo;re leading
              alongside you. You can support as needed and then give feedback and care
              as they grow.
            </p>
            <p>
              Then release them fully to lead an area within the group. Give them time
              and space to fully expand their leadership. Delegate not just the
              responsibility but the authority. That will help them own their
              leadership. In this step, make sure they attend the proper small group
              training in your church.
            </p>
            <p>
              Once they&rsquo;ve shown faithfulness and effectiveness and you&rsquo;ve
              adequately trained them, let them take the lead. Either fully leading in
              the current group, or stepping out to multiply a new group. Make sure the
              leadership teams are planned out in both the current and the new group.
              Four leaders in each, multiplied from the original four plus the four
              being raised.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Communicate early. Celebrate well.
            </h2>
            <p>
              When all the leaders are set in the new and current group, communicate
              well to the members of the current group. A big pitfall in multiplication
              isn&rsquo;t in raising the leaders. It&rsquo;s in the communication to the
              whole. If groups don&rsquo;t communicate well, members feel left out. They
              feel jarred by the change because they weren&rsquo;t prepared for it.
              They weren&rsquo;t in the loop beforehand. Don&rsquo;t wait until the
              week before a new group launches to share with your current group. People
              want time to process, to be excited for the change, to celebrate it well.
              Finding out last minute creates disunity. People become resistant to
              future multiplication because they feel it always happens to them rather
              than being something they&rsquo;re part of.
            </p>
            <p>
              A good rule of thumb. Once you know you&rsquo;re multiplying, make it a
              prayer point in the Dinner Party weekly. Pray for new hosts or leaders to
              rise up so that people get a heart and sense for what&rsquo;s coming. Then
              when the leaders are set and the strategy is locked in, announce it at
              least three weeks in advance. Share that the new group is launching in
              three weeks. That gives you two more weeks all together as a group, and
              then one final week to celebrate.
            </p>
            <p>
              The last week together should be celebratory and prayerful. Big prayer
              moment for the leaders launching out. Celebration of the multiplication.
              This creates a buzz and a sense of life and health, rather than change
              that feels apprehensive. It sets up both groups, the sending one and the
              new one, to thrive.
            </p>

            <div className="not-prose my-10 border border-border p-6 md:p-8 bg-soft/40">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-4">
                Multiplication Timeline at a Glance
              </p>
              <ul className="font-serif text-ink/85 space-y-3 leading-relaxed">
                <li>
                  <strong>Ongoing.</strong> Raise leaders within the current group. Four
                  training four.
                </li>
                <li>
                  <strong>Before the decision.</strong> Pray. Make multiplication a
                  weekly prayer point.
                </li>
                <li>
                  <strong>3 weeks out.</strong> Announce the launch to the whole group.
                </li>
                <li>
                  <strong>2 weeks out.</strong> Continue normally. Keep celebrating.
                </li>
                <li>
                  <strong>1 week out.</strong> Prayer night together. Commission the new
                  leaders.
                </li>
                <li>
                  <strong>Launch week.</strong> New group begins. Celebrate publicly
                  from the platform on Sunday.
                </li>
              </ul>
            </div>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/raising-leaders",
              part: "Part Three: Leadership",
              title: "Raising Leaders: The 8 Keys",
            }}
            next={{
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
