import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "Week 2: Effective Teams · Leadership Training · Josh Kelsey",
  description: "The six fundamentals that make teams work. From clarity of vision to open communication, the conditions that sustain what God builds.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-2" },
};

const navigation = {
  previous: { href: "/for-leaders/week-1", title: "Week 1: Building Real Community" },
  next: { href: "/for-leaders/week-3", title: "Week 3: Raising Leaders" },
};

export default function Week2Page() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        {/* HEADER */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-prose">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              FOUNT Leadership Week 2
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl leading-[1.02] text-ink mb-6">
              How to Abide in Community
            </h1>
            <p className="font-serif text-xl text-ink/80 leading-relaxed">
              The Conditions That Sustain What God Builds
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-content mx-auto px-6 md:px-10 pb-20">
          <div className="prose prose-lg prose-literary max-w-none">
            
            <h2>What Makes an Effective Team</h2>
            <p><strong>Six Non-Negotiables</strong></p>

            <h3>#1 — Clarity of Vision, Purpose and Direction</h3>
            <p>The common objective is everything. Without it, you don't have a team, you have a group.</p>
            
            <ul>
              <li><strong>Vision and Values</strong> = the why and the what</li>
              <li><strong>Regular, consistent encouragement</strong> — Vision leaks; it must be spoken continuously</li>
              <li><strong>Everyone owns the vision</strong> — Not just the leader; every team member carries it personally</li>
              <li><strong>Equipped, empowered and released</strong> — Not just told, but equipped; not just equipped, but empowered; not just empowered, but released</li>
              <li><strong>Staged release</strong> — Walk people through stages; once one stage is achieved, equip, release and empower for the next</li>
            </ul>

            <blockquote>
              <p>"Write down the revelation and make it plain on tablets so that a herald may run with it."</p>
              <cite>Habakkuk 2:2</cite>
            </blockquote>

            <blockquote>
              <p>"So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up."</p>
              <cite>Ephesians 4:11-12</cite>
            </blockquote>

            <h4>Vision Reality Checks</h4>
            <p>Ask these five questions of every vision you carry:</p>
            
            <table className="w-full border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Test</th>
                  <th className="border border-gray-300 p-3 text-left">Question</th>
                  <th className="border border-gray-300 p-3 text-left">Scripture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Relevant</td>
                  <td className="border border-gray-300 p-3">Do they want it?</td>
                  <td className="border border-gray-300 p-3">"Where your treasure is, there your heart will be also." — Matt 6:21</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Significant</td>
                  <td className="border border-gray-300 p-3">Is it worth it?</td>
                  <td className="border border-gray-300 p-3">"For what does it profit a man to gain the whole world and forfeit his soul?" — Mark 8:36</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Clear</td>
                  <td className="border border-gray-300 p-3">Can they see it?</td>
                  <td className="border border-gray-300 p-3">"Make it plain on tablets so that a herald may run with it." — Hab 2:2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Achievable</td>
                  <td className="border border-gray-300 p-3">Do they believe it?</td>
                  <td className="border border-gray-300 p-3">"I can do all this through him who gives me strength." — Phil 4:13</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Common</td>
                  <td className="border border-gray-300 p-3">Are they with it?</td>
                  <td className="border border-gray-300 p-3">"Can two walk together, except they be agreed?" — Amos 3:3</td>
                </tr>
              </tbody>
            </table>

            <h3>#2 — Appropriate Roles</h3>
            <p>The right person in the right seat for the right reason.</p>
            
            <ul>
              <li>People operating in their gifting, not just filling gaps</li>
              <li>Roles assigned by calling and character, not just availability</li>
              <li>Misaligned roles create resentment, burnout, and hidden friction</li>
              <li>Review roles as people grow — what was right last year may not be right now</li>
            </ul>

            <blockquote>
              <p>"Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ... God has placed the parts in the body, every one of them, just as he wanted them to be."</p>
              <cite>1 Corinthians 12:12, 18</cite>
            </blockquote>

            <h3>#3 — Conflict Resolution & Healthy Tension</h3>
            <p>Healthy teams don't avoid conflict — they know how to move through it. Tension, handled well, is one of the most powerful growth tools a team has.</p>
            
            <ul>
              <li>Conflict avoided is conflict deferred — it will surface later, louder, and with more damage</li>
              <li>Not all tension is unhealthy — creative tension, honest disagreement, and iron-sharpening friction are signs of a team that is real, not pseudo</li>
              <li>The goal is never the absence of conflict — it is the presence of a culture that can hold it</li>
              <li>Address conflict at the lowest level possible, as quickly as possible</li>
              <li>Go direct — never triangulate, never involve a third party before going to the person first</li>
              <li>Separate the issue from the person — attack the problem, protect the relationship</li>
            </ul>

            <blockquote>
              <p>"If your brother or sister sins against you, go and point out their fault, just between the two of you. If they listen to you, you have won them over."</p>
              <cite>Matthew 18:15</cite>
            </blockquote>

            <blockquote>
              <p>"As iron sharpens iron, so one person sharpens another."</p>
              <cite>Proverbs 27:17</cite>
            </blockquote>

            <h3>#4 — Agreement on Method and Strategy</h3>
            <p>Unity of direction prevents collision. People can share a vision and still constantly undermine each other through incompatible methods.</p>
            
            <ul>
              <li>The team must agree on how, not just what</li>
              <li>Disagreements on method that go unresolved create quiet division</li>
              <li>Strategy must be revisited — what worked in one season may not work in the next</li>
              <li>Agreement doesn't require unanimous enthusiasm — it requires genuine buy-in</li>
            </ul>

            <h3>#5 — Solid Relationships</h3>
            <p>Teams are built on trust. Trust is built through time, honesty, and shared experience — especially shared hardship.</p>
            
            <ul>
              <li>You cannot have high performance without high trust</li>
              <li>Relationships must be invested in deliberately — they do not grow on autopilot</li>
              <li>Conflict that is navigated well deepens relationships; conflict that is avoided destroys them</li>
              <li>The best teams have been through something hard together and came out closer</li>
            </ul>

            <h3>#6 — Open Communication</h3>
            <p>The health of a team is directly proportional to the quality of its communication. Everything decays in silence.</p>
            
            <ul>
              <li>Honest, timely, direct — not passive, coded, or delayed</li>
              <li>Problems named early are problems solved; problems unnamed become crises</li>
              <li>Celebrate publicly; correct privately</li>
              <li>Create regular rhythms of feedback — not just crisis conversations</li>
              <li>Leaders model the communication culture they want to see</li>
            </ul>

            <blockquote>
              <p>"Speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ."</p>
              <cite>Ephesians 4:15</cite>
            </blockquote>

            <h3>The Through Line</h3>
            <p>Every one of these six team fundamentals is downstream of one thing: the willingness to move through Pseudo, through Chaos, through Emptying — and stay there long enough to build something real.</p>
            
            <p>You cannot have clarity of vision in a pseudo community — the vision will be agreed with but never truly owned. You cannot have accepted leadership without solid relationships — authority without trust is just pressure. You cannot have open communication without having passed through chaos together — you need to have survived honesty before honesty becomes natural.</p>
            
            <p>Real teams are built on the other side of emptying. That's not a motivational line. It's the architecture.</p>

            <blockquote>
              <p>"Unless the Lord builds the house, the builders labor in vain."</p>
              <cite>Psalm 127:1</cite>
            </blockquote>

          </div>
        </section>

        <ChapterNav previous={navigation.previous} next={navigation.next} />
      </main>
      <Footer />
    </>
  );
}
