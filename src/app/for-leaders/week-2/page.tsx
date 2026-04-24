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
  previous: { href: "/for-leaders/week-1", title: "Week 1: Building Real Community", part: "Week 1" },
  next: { href: "/for-leaders/week-3", title: "Week 3: Raising Leaders", part: "Week 3" },
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
            
            <div className="bg-soft/40 border-l-4 border-accent p-6 mb-8">
              <p className="font-serif text-lg leading-relaxed">
                Moving through the five stages of community is just the beginning. Real community must be sustained, and that happens through building effective teams. What you'll find here are the six fundamentals that determine whether a team thrives or merely survives. These are not suggestions or ideals. They are the architecture that makes everything else possible.
              </p>
            </div>

            <h2>What Makes an Effective Team</h2>
            <p className="text-xl font-serif mb-8 text-ink/80">Six Non-Negotiables</p>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Fundamental #1: Clarity of Vision, Purpose and Direction</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The common objective is everything. Without it, you don't have a team, you have a group.</p>
              
              <p>Vision is not a poster on the wall or a statement in a handbook. It's the magnetic north that every decision references. When a team lacks clarity about where they're going and why it matters, every conversation becomes a negotiation about direction instead of a collaboration toward the destination.</p>
              
              <p>Vision and values represent the why and the what. But vision leaks. It must be spoken continuously, not just announced once. Regular, consistent encouragement isn't about motivation, it's about memory. Teams forget what they're building toward when the work gets hard.</p>

              <p>Everyone must own the vision, not just the leader. Every team member should carry it personally, be able to articulate it in their own words, and make decisions that align with it without constant supervision. This requires being equipped, empowered, and released. Not just told what to do, but equipped with the skills. Not just equipped, but empowered with authority. Not just empowered, but released to act.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"Write down the revelation and make it plain on tablets so that a herald may run with it."</p>
                <cite>— Habakkuk 2:2</cite>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up."</p>
                <cite>— Ephesians 4:11-12</cite>
              </blockquote>

              <div className="bg-paper border border-border/60 p-6 mt-6">
                <h4 className="text-lg font-display mb-3 text-ink">Vision Reality Checks</h4>
                <p>Ask these five questions of every vision you carry:</p>
                
                <div className="mt-4 space-y-3">
                  <div className="flex gap-4">
                    <strong className="text-accent w-20 shrink-0">Relevant</strong>
                    <span className="flex-1">Do they want it? "Where your treasure is, there your heart will be also." — Matt 6:21</span>
                  </div>
                  <div className="flex gap-4">
                    <strong className="text-accent w-20 shrink-0">Significant</strong>
                    <span className="flex-1">Is it worth it? "For what does it profit a man to gain the whole world and forfeit his soul?" — Mark 8:36</span>
                  </div>
                  <div className="flex gap-4">
                    <strong className="text-accent w-20 shrink-0">Clear</strong>
                    <span className="flex-1">Can they see it? "Make it plain on tablets so that a herald may run with it." — Hab 2:2</span>
                  </div>
                  <div className="flex gap-4">
                    <strong className="text-accent w-20 shrink-0">Achievable</strong>
                    <span className="flex-1">Do they believe it? "I can do all this through him who gives me strength." — Phil 4:13</span>
                  </div>
                  <div className="flex gap-4">
                    <strong className="text-accent w-20 shrink-0">Common</strong>
                    <span className="flex-1">Are they with it? "Can two walk together, except they be agreed?" — Amos 3:3</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• If you asked each person on your team to explain the vision in their own words, how similar would the responses be?</li>
                  <li>• When did you last reference the vision when making a decision in front of your team?</li>
                  <li>• What percentage of your team meetings is spent connecting current work to larger purpose?</li>
                  <li>• How do you know when someone on your team has moved from compliance to ownership of the vision?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Fundamental #2: Appropriate Roles</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The right person in the right seat for the right reason.</p>
              
              <p>Nothing kills team effectiveness faster than people operating outside their gifting. When roles are assigned by availability rather than calling and character, you get people filling gaps instead of fulfilling purpose. This creates resentment, burnout, and hidden friction that nobody talks about but everyone feels.</p>
              
              <p>Roles must be reviewed as people grow. What was right last year may not be right now. People develop, mature, and discover new capacities. A healthy team regularly asks whether current assignments still fit current people, and makes adjustments without anyone losing face or value.</p>

              <p>The goal is not just productivity but fulfillment. People operating in their sweet spot don't just perform better, they come alive. And when team members are energized by their roles, that energy spreads to everyone around them.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ... God has placed the parts in the body, every one of them, just as he wanted them to be."</p>
                <cite>— 1 Corinthians 12:12, 18</cite>
              </blockquote>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• Which team members seem energized by their current roles, and which seem drained?</li>
                  <li>• When did you last have a conversation with someone about whether their role still fits who they're becoming?</li>
                  <li>• What roles are currently filled by default rather than design?</li>
                  <li>• How might reshuffling roles unlock potential you're not currently seeing?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Fundamental #3: Conflict Resolution & Healthy Tension</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">Healthy teams don't avoid conflict, they know how to move through it.</p>
              
              <p>Conflict avoided is conflict deferred. It will surface later, louder, and with more damage. The goal is never the absence of conflict but the presence of a culture that can hold it. Not all tension is unhealthy. Creative tension, honest disagreement, and iron sharpening friction are signs of a team that is real, not pseudo.</p>
              
              <p>The principles are simple but hard to practice. Address conflict at the lowest level possible, as quickly as possible. Go direct, never triangulate, never involve a third party before going to the person first. Separate the issue from the person. Attack the problem, protect the relationship. Leaders set the tone. If you model avoidance, your team learns avoidance. If you model directness and grace, your team learns that.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"If your brother or sister sins against you, go and point out their fault, just between the two of you. If they listen to you, you have won them over."</p>
                <cite>— Matthew 18:15</cite>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"As iron sharpens iron, so one person sharpens another."</p>
                <cite>— Proverbs 27:17</cite>
              </blockquote>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• What conflict are you currently aware of but haven't addressed directly?</li>
                  <li>• How quickly does your team typically surface and resolve disagreements?</li>
                  <li>• What would change if your team saw conflict as a tool for deeper connection rather than a threat to unity?</li>
                  <li>• How do you model healthy disagreement in front of your team?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Fundamental #4: Agreement on Method and Strategy</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">Unity of direction prevents collision.</p>
              
              <p>People can share a vision and still constantly undermine each other through incompatible methods. The team must agree on how, not just what. Disagreements on method that go unresolved create quiet division. Everyone is working hard, but they're working at cross purposes.</p>
              
              <p>Strategy must be revisited regularly. What worked in one season may not work in the next. Agreement doesn't require unanimous enthusiasm, but it does require genuine buy-in. People need to understand not just what they're doing, but why that approach makes sense, and they need to commit to it even if it wasn't their first choice.</p>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• Where might your team be working at cross purposes without realizing it?</li>
                  <li>• When did you last revisit whether your current methods are still serving your mission?</li>
                  <li>• How do you secure genuine buy-in rather than mere compliance with strategic decisions?</li>
                  <li>• What assumptions about "how we do things" need to be examined?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Fundamental #5: Solid Relationships</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">Teams are built on trust. Trust is built through time, honesty, and shared experience.</p>
              
              <p>You cannot have high performance without high trust. Relationships must be invested in deliberately because they do not grow on autopilot. The best teams have been through something hard together and came out closer. Shared hardship, navigated well, creates bonds that can't be manufactured through team building exercises.</p>
              
              <p>Conflict that is navigated well deepens relationships. Conflict that is avoided destroys them. When teams work through disagreement and discover they can be honest without losing each other, trust goes to a new level. When teams avoid conflict, relationships remain surface level and fragile.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"A friend loves at all times, and a brother is born for a time of adversity."</p>
                <cite>— Proverbs 17:17</cite>
              </blockquote>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• How intentionally do you invest in relationships with your team members outside of task-focused interactions?</li>
                  <li>• What shared experiences has your team navigated together that deepened trust?</li>
                  <li>• Where might relationships on your team be more functional than relational?</li>
                  <li>• How do you create opportunities for your team to see each other as whole people, not just role fillers?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Fundamental #6: Open Communication</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The health of a team is directly proportional to the quality of its communication.</p>
              
              <p>Everything decays in silence. Problems named early are problems solved. Problems unnamed become crises. The communication culture must be honest, timely, and direct, not passive, coded, or delayed. This requires creating regular rhythms of feedback, not just crisis conversations.</p>
              
              <p>Celebrate publicly, correct privately. Leaders model the communication culture they want to see. If you communicate indirectly, your team will communicate indirectly. If you address issues quickly and gracefully, your team learns that it's safe to do the same.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"Speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ."</p>
                <cite>— Ephesians 4:15</cite>
              </blockquote>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• What important things are your team members not saying to each other?</li>
                  <li>• How quickly do problems surface and get addressed in your team culture?</li>
                  <li>• What regular rhythms do you have for feedback that aren't crisis-driven?</li>
                  <li>• How do you model the directness and grace you want to see in your team's communication?</li>
                </ul>
              </div>
            </div>

            <div className="bg-ink/5 border border-ink/20 p-8 mt-12">
              <h3 className="text-xl font-display mb-4 text-ink">The Through Line</h3>
              <p className="font-serif text-lg leading-relaxed mb-6">
                Every one of these six team fundamentals is downstream of one thing: the willingness to move through Pseudo, through Chaos, through Emptying, and stay there long enough to build something real.
              </p>
              <p className="font-serif text-lg leading-relaxed mb-6">
                You cannot have clarity of vision in a pseudo community because the vision will be agreed with but never truly owned. You cannot have accepted leadership without solid relationships because authority without trust is just pressure. You cannot have open communication without having passed through chaos together because you need to have survived honesty before honesty becomes natural.
              </p>
              <p className="font-serif text-lg leading-relaxed">
                Real teams are built on the other side of emptying. That's not a motivational line. It's the architecture.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-6 mt-6 text-ink/80">
                <p>"Unless the Lord builds the house, the builders labor in vain."</p>
                <cite>— Psalm 127:1</cite>
              </blockquote>
            </div>

          </div>
        </section>

        <ChapterNav previous={navigation.previous} next={navigation.next} />
      </main>
      <Footer />
    </>
  );
}
