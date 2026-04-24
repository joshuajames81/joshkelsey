import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "Week 1: Building Real Community · Leadership Training · Josh Kelsey",
  description: "The 5 stages of community development. Moving from pseudo community through chaos and emptying to build something real and lasting.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-1" },
};

const navigation = {
  previous: { href: "/for-leaders", title: "Leadership Training", part: "Overview" },
  next: { href: "/for-leaders/week-2", title: "Week 2: Effective Teams", part: "Week 2" },
};

export default function Week1Page() {
  return (
    <>
      <Nav />
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
            
            <div className="bg-soft/40 border-l-4 border-accent p-6 mb-8">
              <p className="font-serif text-lg leading-relaxed mb-4">
                Early in my journey of planting FOUNT, I had the privilege of being mentored by Pastor Tim Keller for two years. During that time, he taught me about the stages that every community must navigate to move from surface level politeness to genuine, life giving relationships.
              </p>
              <p className="font-serif text-lg leading-relaxed">
                I took those notes and adapted them for FOUNT to teach our teams and leaders. What you'll find here is essential for understanding how real community forms, whether in churches, workplaces, nonprofits, or any context where people need to work together toward something meaningful.
              </p>
            </div>

            <h2>The 5 Stages of Community</h2>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage 1: Pseudo Community</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The comfortable lie. Nice on the surface, empty underneath.</p>
              
              <p>Pseudo community feels safe because nothing is ever at risk. Everyone is polite, agreeable, and conflict avoidant. Differences are carefully ignored rather than explored or resolved. False harmony masquerades as unity while people perform connection rather than experience it. Humor and niceness become sophisticated tools of avoidance, ensuring that nothing real is ever said and nobody is ever disappointed because nobody is ever truly honest.</p>
              
              <p>In pseudo community, people know about each other but don't truly know each other. Conversations stay at the level of weather, work updates, and safe topics that won't reveal anything vulnerable or challenging. There's an unspoken agreement that everyone will be pleasant and that no one will rock the boat by bringing up anything that might create discomfort.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"They dress the wound of my people as though it were not serious. 'Peace, peace,' they say, when there is no peace."</p>
                <cite>— Jeremiah 6:14</cite>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"These people honor me with their lips, but their hearts are far from me."</p>
                <cite>— Matthew 15:8 (quoting Isaiah 29:13)</cite>
              </blockquote>

              <div className="bg-paper border border-border/60 p-6 mt-6">
                <h4 className="text-lg font-display mb-3 text-ink">The Leadership Trap</h4>
                <p>You can build a large, friendly, well attended community that is entirely pseudo. Numbers are not evidence of reality. Attendance is not evidence of engagement. Niceness is not evidence of health. Many leaders mistake the absence of visible conflict for the presence of genuine unity, and they work hard to maintain the pseudo stage because it feels successful and manageable.</p>
              </div>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• When you gather your team, what percentage of the conversation is about tasks versus about people as whole humans?</li>
                  <li>• What topics are consistently avoided in your team meetings or community gatherings?</li>
                  <li>• How would you know if someone on your team was struggling personally? What systems are in place for that to surface?</li>
                  <li>• When was the last time someone disagreed with you publicly in a team setting? If it's been a long time, why do you think that is?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage 2: Chaos</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The necessary disruption. Where real community must pass through.</p>
              
              <p>Chaos arrives when differences finally surface. Opinion, conviction, theology, personality, approach, priorities. What felt like agreement was actually just avoidance, and now disagreement becomes visible and uncomfortable. There's genuine shock at realizing others don't see things the same way, accompanied by fear of conflict, fear of rejection, and fear of the unknown.</p>
              
              <p>Disappointment sets in. In leaders who aren't handling this well. In the vision that seemed clearer when nobody questioned it. In each other for not being who we assumed they were. The pseudo community's pleasant facade cracks, and what's underneath isn't pretty.</p>

              <p>Two unhealthy responses typically emerge. The first is to try to heal by rushing back to pseudo community, smoothing everything over, making it nice again. The second is to try to convert by insisting everyone lands where you land, pushing harder for your own way, using pressure instead of persuasion.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart."</p>
                <cite>— Hebrews 4:12</cite>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"Do not suppose that I have come to bring peace to the earth. I did not come to bring peace, but a sword."</p>
                <cite>— Matthew 10:34</cite>
              </blockquote>

              <div className="bg-paper border border-border/60 p-6 mt-6">
                <h4 className="text-lg font-display mb-3 text-ink">The Leadership Trap</h4>
                <p>Most leaders abort at chaos. They retreat to pseudo rather than lead people through the disruption. The temptation to manage the discomfort rather than trust the process is one of the most common leadership failures. Leaders who can't tolerate the mess will never build anything real, because real community is always on the other side of worked through chaos.</p>
              </div>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• When conflict surfaces in your team, is your first instinct to resolve it quickly or to understand it deeply?</li>
                  <li>• How do you typically respond when someone challenges your ideas or approaches in front of the group?</li>
                  <li>• What would it look like to lead your team through disagreement rather than around it?</li>
                  <li>• How might God be using current tensions in your team to reveal something that needs to be addressed?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage 3: Emptying</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The surrender. Letting go of your agenda for God's.</p>
              
              <p>Emptying is the hardest and most necessary stage. It requires stopping the push for your own way and releasing the need to be right, to win, to convert others to your perspective. Instead of asking God to confirm what you've already decided, you ask Him what He actually wants. This means laying down prejudices, assumptions, and fixed expectations.</p>
              
              <p>There's grieving involved in emptying. Grieving the loss of control, the loss of certainty, the loss of being the one with the answers. This is not passivity or giving up. It's active surrender to a process bigger than your preferences. It's choosing to trust that God might be doing something through the chaos that's better than what you could engineer through management.</p>

              <p>Emptying exposes everyone, but especially leaders. You cannot lead people through a process you haven't been willing to walk through yourself. The leader who is still full of their own agenda will shortcut this stage every time, and the team will sense it immediately.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"Very truly I tell you, unless a kernel of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds."</p>
                <cite>— John 12:24</cite>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"Not my will, but yours be done."</p>
                <cite>— Luke 22:42</cite>
              </blockquote>

              <div className="bg-paper border border-border/60 p-6 mt-6">
                <h4 className="text-lg font-display mb-3 text-ink">The Leadership Trap</h4>
                <p>You cannot lead people through emptying if you have never emptied yourself. This stage exposes the leader as much as the team. The leader who is still full of their own agenda will shortcut this every time, usually by declaring the process complete before the real work is done, or by making decisions that serve their preferences rather than the community's formation.</p>
              </div>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• What are you holding onto too tightly in your leadership that might need to be surrendered?</li>
                  <li>• When did you last change your mind about something significant because of input from your team?</li>
                  <li>• What would it look like for you to model genuine uncertainty and dependence on God in front of your people?</li>
                  <li>• What preferences or plans might God be asking you to lay down for the sake of your community's growth?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage 4: Retreat (The Pull Back to Pseudo)</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The most predictable failure point. The gravitational pull back to comfort.</p>
              
              <p>In the confusion and pain of emptying, pseudo community feels like relief. The temptation is overwhelming to call the retreat "wisdom" or "getting back to what works" or "focusing on what matters." But teams that retreat here never reach real community. They restart the cycle: niceness, then chaos, then retreat, indefinitely. This is where most church teams, work teams, and communities live permanently.</p>
              
              <p>Retreat happens when the discomfort of growth becomes too much to bear and the false peace of pseudo community becomes more attractive than the uncertain promise of something real. It's the organizational equivalent of choosing the familiar dysfunction over the difficult work of health.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"The dog returns to its vomit, and the sow that is washed returns to her wallowing in the mud."</p>
                <cite>— 2 Peter 2:22</cite>
              </blockquote>

              <div className="bg-paper border border-border/60 p-6 mt-6">
                <h4 className="text-lg font-display mb-3 text-ink">The Leadership Task</h4>
                <p>Name the retreat for what it is when you see it happening. Hold the line. Remind the team what they are headed toward and why the discomfort of emptying is worth enduring. This is one of the most important moments of pastoral leadership in a team context. Your willingness to stay in the process when everyone wants to bail determines whether your community ever becomes real.</p>
              </div>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• How do you recognize when your team is retreating to false peace rather than working toward real resolution?</li>
                  <li>• What does it cost your community when you allow retreat instead of holding the line?</li>
                  <li>• How can you help your team remember the vision of real community when the process gets uncomfortable?</li>
                  <li>• What support do you need as a leader to resist the pull back to pseudo community?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage 5: Real Community</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The destination. Costly, rare, and completely worth it.</p>
              
              <p>Real community is what emerges on the other side of emptying. People are known, not just known about. Difference is held without it becoming division. Honesty and safety exist in the same space, which seems impossible until you experience it. The group can carry one another's weight because they've been through something hard together and discovered they didn't break.</p>
              
              <p>In real community, nobody needs to perform because everyone already knows who they are. Conflict is navigated rather than avoided because people have learned they can disagree and still belong to each other. Mission emerges naturally because the relational foundation is solid enough to bear the weight of shared work.</p>

              <p>This is community that can build something that lasts. Not because it's perfect, but because it's real. Not because there's no conflict, but because conflict has been transformed from a threat into a tool for deeper connection and better outcomes.</p>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"How good and pleasant it is when God's people live together in unity!"</p>
                <cite>— Psalm 133:1</cite>
              </blockquote>

              <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
                <p>"By this everyone will know that you are my disciples, if you love one another."</p>
                <cite>— John 13:35</cite>
              </blockquote>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• What would change about your team's capacity and effectiveness if you had this kind of real community?</li>
                  <li>• How will you know when your team has moved from pseudo to real? What are the markers you'll look for?</li>
                  <li>• What needs to happen for you to create space for people to be known, not just know about each other?</li>
                  <li>• How might real community in your context become a witness to something larger than your organization?</li>
                </ul>
              </div>
            </div>

            <div className="bg-ink/5 border border-ink/20 p-8 mt-12">
              <h3 className="text-xl font-display mb-4 text-ink">For Reflection: Where Is Your Team Right Now?</h3>
              <p className="font-serif text-lg leading-relaxed mb-6">
                Most teams cycle between pseudo community and chaos without ever reaching real community. They get stuck in patterns of surface level niceness interrupted by uncomfortable conflict, followed by a retreat back to false peace.
              </p>
              <p className="font-serif text-lg leading-relaxed">
                Take an honest assessment: Where is your team right now? What stage best describes your current reality? And what would it take to move toward the kind of community that can bear the weight of real mission together?
              </p>
            </div>

          </div>
        </section>

        <ChapterNav previous={navigation.previous} next={navigation.next} />
      </main>
      <Footer />
    </>
  );
}
