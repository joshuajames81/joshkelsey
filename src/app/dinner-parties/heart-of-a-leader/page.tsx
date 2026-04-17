import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Heart of a Leader",
  description:
    "The spiritual formation required to lead a Dinner Party well. Personal relationship with Christ, shepherding the one, and why a leader's character is everything.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties/heart-of-a-leader" },
  openGraph: {
    title: "The Heart of a Leader | Josh Kelsey",
    description:
      "The spiritual formation required to lead a Dinner Party well.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Heart of a Leader",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.org/dinner-parties/heart-of-a-leader",
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
            chapterNumber="05"
            title="The Heart of a Leader."
            intro="The spiritual formation required to lead well. Personal relationship with Christ, shepherding the one, and the flow of authority from your own walk with Jesus."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Personal relationship
            </h2>
            <p className="drop-cap">
              The most important thing we carry as leaders is a vision of Jesus Christ.
              It is our responsibility to grow in our personal relationship with Him in
              the secret place. To rely on the Holy Spirit to fill us up, equip us, and
              give us divine wisdom. If we&rsquo;re not being filled up, how can we
              pour out? If He has not equipped us, how can we be effective?
            </p>
            <p>
              As a leader, we also carry responsibility. We want to give of our talent,
              tithe, and time to God. We must be willing to commit to leading a Dinner
              Party even when it&rsquo;s not convenient. To stay true to our word.
              It&rsquo;s important to remember that who you are points people to Jesus.
              They start to imitate you as you imitate Christ. We have been entrusted
              by God with caring for and leading His people. That&rsquo;s why our
              conduct, our behavior, our purity, our Christ-like example carries
              weight. It&rsquo;s important that we live lives above reproach and
              worthy of the calling we&rsquo;ve received.
            </p>
            <p>
              As we train and equip our leaders, we make this clear from the start. Any
              person stepping into leadership needs to be clear from day one about what
              the call of leadership looks like in their personal life. Their own
              devotion to Christ in their own world comes first.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Shepherding
            </h2>
            <p>
              As leaders, we are responsible for being good shepherds. Like the parable
              in Luke 15, we are committed to going after the one. Every soul is
              important. Every invite has a purpose. Every text and call and outreach
              carries weight because this is all about people. So when there&rsquo;s a
              new sign-up, it&rsquo;s important to reach out personally, share the
              details for the group, and get to know them. Even after someone joins,
              shepherding means we take time to know people and do life with them.
            </p>
            <p>
              As leaders we are committed to going after the one. The shepherd in the
              parable had so much care, compassion, and attention because each sheep
              mattered to him. That&rsquo;s how we should be with each member of our
              Dinner Party. But the only way we can shepherd the one well is if we have
              momentum with the ninety-nine. We need a culture and structure where we
              can actually leave the ninety-nine for a moment, because the rest of the
              group is healthy enough for us to do so.
            </p>
            <p>
              Knowing the spiritual condition of those in our care is key to effective
              leadership. As leaders, we commit to being aware of what&rsquo;s happening
              in the lives of those we&rsquo;re overseeing. This includes a rhythm of
              check-ins every seven to ten days. As Jesus cares for us, we want to
              ensure we are caring for others.
            </p>
            <p>
              How do you grow a heart for the people in your group and see them as
              Christ sees them? Pray for each person by name every day. This might seem
              like a simple task, but it carries weight. It fills you up as a leader. It
              reminds you that leadership is by the Spirit of God, not by your own
              strength. You&rsquo;re partnering with Christ, not carrying it alone. And
              as you pray, He reveals who to raise up. What each member of your Dinner
              Party actually needs. How to truly empower and release them into their
              gifting.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Empowering and releasing
            </h2>
            <p>
              Christ-like character is the capacity to receive authority, be trusted
              with it, and release it to others for their benefit. All of us will face
              the temptation of power. What you do when you are offered power for the
              benefit of self will determine what kind of leader you will be in the
              Kingdom. What you do with glory will determine how much authority you can
              be trusted with.
            </p>
            <p>
              The way to counteract the temptation is to empower and release leaders.
              Make that the culture of your group. This helps denounce any level of
              holding onto power, because the culture is all about releasing, not
              gripping and holding.
            </p>
            <p>
              A question I ask leaders when it comes to authority is this. Am I a swamp
              or a river? If we&rsquo;re truly about Jesus, truly lifting up His name,
              you&rsquo;ll find a flow of authority coming from your life. But if
              you&rsquo;re worshipping the wrong thing, if you&rsquo;re gathering power,
              you become a swamp of authority. You never release it to others to reach
              their potential. People and roles get stuck in your presence instead of
              being released to flow into where they&rsquo;re supposed to be.
            </p>
          </div>

          <PullQuote attribution="2 Corinthians 5:17">
            If anyone is in Christ, he is a new creation. The old has passed away;
            behold, the new has come.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              We are given authority so that we can empower others. Leadership in the
              Kingdom isn&rsquo;t about self-glory. It&rsquo;s about empowering others
              and giving glory to God.
            </p>
            <p>
              As leaders, we want eyes to see other people&rsquo;s gifting. We want to
              empower and equip people under our leadership to grow into leadership
              themselves, and then release them to higher levels. Isn&rsquo;t that what
              someone else did for us? This is crucial in growing the church and
              reaching more people for Jesus. When we help others step into the call
              God has on their lives, we release those rising leaders into their grace
              zones and gifting. We commission them to use their influence to bring the
              gospel to their world. What begins on one street can spread to a
              neighborhood and a city. We will see our city and so many others
              transformed as we release leaders into their gifting.
            </p>
            <p>
              Our goal and culture is this. As a leadership team of four in each group,
              we&rsquo;re always raising up another four. That means each group really
              has about eight leaders at a time. The core four plus the peripheral four
              who are being trained, in the mix of leadership, before going out to
              start their own group. This structure creates a flow of leadership that
              is more like a river than a swamp. Four training four, sending four, and
              finding a new four. Always. People being trained, sent out, seen, and
              released.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/culture",
              part: "Part Two: The Model",
              title: "Culture: Atmosphere, Food, and Relationships",
            }}
            next={{
              href: "/dinner-parties/raising-leaders",
              part: "Part Three: Leadership",
              title: "Raising Leaders: The 8 Keys",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
