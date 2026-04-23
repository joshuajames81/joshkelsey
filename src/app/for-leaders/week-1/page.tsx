import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "Week 1: Building Real Community · Leadership Training · Josh Kelsey",
  description: "The 5 stages of community development. Moving from pseudo community through chaos and emptying to build something real and lasting.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-1" },
};

const navigation = {
  previous: { href: "/for-leaders", title: "Leadership Training" },
  next: { href: "/for-leaders/week-2", title: "Week 2: Effective Teams" },
};

export default function Week1Page() {
  return (
    <>
      <main className="bg-paper">
        {/* HEADER */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-prose">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              FOUNT Leadership Week 1
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl leading-[1.02] text-ink mb-6">
              Building Real Community & Effective Teams
            </h1>
            <p className="font-serif text-xl text-ink/80 leading-relaxed">
              The Journey From Performance to Presence
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-content mx-auto px-6 md:px-10 pb-20">
          <div className="prose prose-lg prose-literary max-w-none">
            
            <h2>The 5 Stages of Community</h2>

            <h3>Pseudo Community</h3>
            <p><strong>What it is:</strong> The comfortable lie. Nice on the surface, empty underneath.</p>
            
            <ul>
              <li>Everyone is polite, agreeable, and conflict avoidant</li>
              <li>Differences are ignored, not resolved</li>
              <li>False harmony masquerades as unity</li>
              <li>People perform connection rather than experience it</li>
              <li>Humor and niceness become tools of avoidance</li>
              <li>Nothing real is ever said</li>
              <li>Nobody is ever disappointed because nobody is ever honest</li>
            </ul>

            <blockquote>
              <p>"They dress the wound of my people as though it were not serious. 'Peace, peace,' they say, when there is no peace."</p>
              <cite>Jeremiah 6:14</cite>
            </blockquote>

            <blockquote>
              <p>"These people honor me with their lips, but their hearts are far from me."</p>
              <cite>Matthew 15:8 (quoting Isaiah 29:13)</cite>
            </blockquote>

            <p><strong>The leadership trap:</strong> You can build a large, friendly, well attended community that is entirely pseudo. Numbers are not evidence of reality. Niceness is not evidence of health.</p>

            <h3>Chaos</h3>
            <p><strong>What it is:</strong> The necessary disruption. Where real community must pass through.</p>
            
            <ul>
              <li>Differences surface: opinion, conviction, theology, personality</li>
              <li>Disagreement becomes visible and uncomfortable</li>
              <li>Shock at realizing others don't see things the same way</li>
              <li>Fear of conflict, fear of rejection, fear of the unknown</li>
              <li>Disappointment sets in, in leaders, in the vision, in each other</li>
              <li>Two unhealthy responses emerge:
                <ul>
                  <li>Try to heal: rush back to Pseudo, smooth it over, make it nice again</li>
                  <li>Try to convert: insist everyone lands where you land, push harder for your own way</li>
                </ul>
              </li>
            </ul>

            <blockquote>
              <p>"For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart."</p>
              <cite>Hebrews 4:12</cite>
            </blockquote>

            <blockquote>
              <p>"Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword."</p>
              <cite>Matthew 10:34</cite>
            </blockquote>

            <p><strong>The leadership trap:</strong> Most leaders abort at Chaos. They retreat to Pseudo rather than lead people through. The temptation to manage the discomfort rather than trust the process is one of the most common leadership failures in the church.</p>

            <h3>Emptying</h3>
            <p><strong>What it is:</strong> The surrender. Letting go of your agenda for God's.</p>
            
            <ul>
              <li>Stop pushing for your own way</li>
              <li>Release the need to be right, to win, to convert</li>
              <li>Ask God what He wants, not what confirms what you already decided</li>
              <li>Lay down prejudices, assumptions, and fixed expectations</li>
              <li>Grieve what needs to be grieved</li>
              <li>This is not passivity, it is active surrender</li>
              <li>The most spiritually costly stage, and the most necessary one</li>
            </ul>

            <blockquote>
              <p>"Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds."</p>
              <cite>John 12:24</cite>
            </blockquote>

            <blockquote>
              <p>"Not my will, but yours be done."</p>
              <cite>Luke 22:42</cite>
            </blockquote>

            <p><strong>The leadership trap:</strong> You cannot lead people through emptying if you have never emptied yourself. This stage exposes the leader as much as the team. The leader who is still full of their own agenda will shortcut this every time.</p>

            <h3>Retreat (The Pull Back to Pseudo)</h3>
            <p><strong>What it is:</strong> The most predictable failure point. The chaos of emptying creates a powerful gravitational pull back to comfort.</p>
            
            <ul>
              <li>In the confusion and pain of emptying, Pseudo Community feels like relief</li>
              <li>The temptation is to call the retreat "wisdom" or "peace"</li>
              <li>Teams that retreat here never reach real community</li>
              <li>They restart the cycle: niceness, then chaos, then retreat, indefinitely</li>
              <li>This is where most church teams live permanently</li>
            </ul>

            <blockquote>
              <p>"The dog returns to its vomit, and the sow that is washed returns to her wallowing in the mud."</p>
              <cite>2 Peter 2:22</cite>
            </blockquote>

            <p><strong>The leadership task:</strong> Name the retreat for what it is. Hold the line. Remind the team what they are headed toward and why the discomfort of emptying is worth enduring. This is one of the most important moments of pastoral leadership in a team context.</p>

            <h3>Real Community</h3>
            <p><strong>What it is:</strong> The destination. Costly, rare, and completely worth it.</p>
            
            <ul>
              <li>People are known, not just known about</li>
              <li>Difference is held without it becoming division</li>
              <li>Honesty and safety exist in the same space</li>
              <li>The group can carry one another's weight</li>
              <li>Nobody needs to perform; everyone can simply be</li>
              <li>Conflict is navigated, not avoided</li>
              <li>Mission emerges naturally because the relational foundation is solid</li>
              <li>This community can build something that lasts</li>
            </ul>

            <blockquote>
              <p>"How good and pleasant it is when God's people live together in unity!"</p>
              <cite>Psalm 133:1</cite>
            </blockquote>

            <blockquote>
              <p>"By this everyone will know that you are my disciples, if you love one another."</p>
              <cite>John 13:35</cite>
            </blockquote>

          </div>
        </section>

        <ChapterNav navigation={navigation} />
      </main>
      <Footer />
    </>
  );
}
