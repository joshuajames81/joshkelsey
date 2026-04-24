import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "Week 3: Raising Leaders · Leadership Training · Josh Kelsey",
  description: "Teaching your team to fish. The four stages of development and how to multiply leaders who multiply leaders.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-3" },
};

const navigation = {
  previous: { href: "/for-leaders/week-2", title: "Week 2: Effective Teams", part: "Week 2" },
  next: { href: "/for-leaders", title: "Leadership Training", part: "Overview" },
};

export default function Week3Page() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        {/* HEADER */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="max-w-prose">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              FOUNT Leadership Training 101
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl leading-[1.02] text-ink mb-6">
              Week 3 of 3 — Raising Leaders
            </h1>
            <p className="font-serif text-xl text-ink/80 leading-relaxed">
              Teaching Your Team to Fish
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-content mx-auto px-6 md:px-10 pb-20">
          <div className="prose prose-lg prose-literary max-w-none">
            
            <div className="bg-soft/40 border-l-4 border-accent p-6 mb-8">
              <p className="font-serif text-lg leading-relaxed mb-4">
                Much of what you'll find here has been gleaned from "Teach Your Team to Fish" by Laurie Beth Jones, an amazing book worth reading and giving to your team. The principles have been adapted and applied through thirteen years of building teams at FOUNT, but the foundational insights come from her groundbreaking work on leadership development.
              </p>
              <p className="font-serif text-lg leading-relaxed">
                This is about the shift every leader must make: from doing the work to multiplying the workers. From leading people to raising leaders. From being the answer to teaching others how to find the answer.
              </p>
            </div>

            <blockquote className="border-l-4 border-accent pl-6 my-8 text-ink/80">
              <p>"The things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others."</p>
              <cite>— 2 Timothy 2:2</cite>
            </blockquote>

            <blockquote className="border-l-4 border-accent pl-6 my-8 text-ink/80">
              <p>"Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father."</p>
              <cite>— John 14:12</cite>
            </blockquote>

            <h2>The Premise</h2>
            
            <p className="text-xl font-serif mb-6 text-ink/80">Jesus spent three years with twelve people. Not thousands. Not hundreds. Twelve.</p>
            
            <p>And those twelve turned the world upside down, not because of what Jesus did while he was with them, but because of what they became capable of doing when he left. That is the most important leadership strategy in human history: don't build a following, build builders.</p>
            
            <p>The greatest threat to any team, any church, any movement is a leader who is indispensable. If everything depends on you, you have not built anything. You have built a dependency. And dependency is the opposite of discipleship.</p>

            <blockquote className="border-l-4 border-accent pl-6 my-6 text-ink/80">
              <p>"So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ."</p>
              <cite>— Ephesians 4:11-13</cite>
            </blockquote>

            <p>The goal of leadership in the kingdom is not a well run ministry. It is mature people. The well run ministry is a byproduct of investing in the right things. Get the order wrong and you get neither.</p>

            <h2>Part One: Why Leaders Don't Raise Leaders</h2>
            
            <p>Before we get to how, we need to be honest about why leaders consistently fail to do this, even when they know they should. There are five real reasons, and most leaders carry at least three of them.</p>

            <div className="bg-soft/20 p-6 mb-6 border border-border/40">
              <h4 className="text-lg font-display mb-3 text-accent">① The competence gap feels too expensive</h4>
              <p>When you hand something off to someone who isn't yet as capable as you are, things dip. Quality drops temporarily. Mistakes happen that wouldn't happen if you did it yourself. In a performance culture, this feels intolerable. So leaders take it back. And the person who was growing stops growing, because the leader couldn't hold the discomfort of the dip.</p>
              <p>The competence gap is not a problem to be solved. It is a cost to be paid. Every leader you will ever raise had to be worse at it before they got better. Your job is to hold the space long enough for better to arrive.</p>
            </div>

            <div className="bg-soft/20 p-6 mb-6 border border-border/40">
              <h4 className="text-lg font-display mb-3 text-accent">② Raising leaders feels like losing power</h4>
              <p>This is the one nobody says out loud. When you raise someone up, you create someone who can do what you do. In an insecure leader, that feels like a threat. What if they do it better? What if the team prefers them? What if I become unnecessary?</p>
              <p>These questions reveal a fundamental misunderstanding of kingdom leadership. In the kingdom, your value is not determined by your indispensability. The most fruitful leaders in Scripture worked themselves out of a job: Moses raising Joshua, Elijah raising Elisha, Paul raising Timothy, Jesus raising the Twelve.</p>
            </div>

            <div className="bg-soft/20 p-6 mb-6 border border-border/40">
              <h4 className="text-lg font-display mb-3 text-accent">③ You haven't been raised that way yourself</h4>
              <p>You reproduce what you experienced. If the leadership culture you came from was extractive, leaders who took from you rather than invested in you, who gave you tasks but not authority, who kept the vision to themselves, you will default to that pattern without realizing it. Not because you are a bad leader. Because it is the only template you have internalized.</p>
            </div>

            <div className="bg-soft/20 p-6 mb-6 border border-border/40">
              <h4 className="text-lg font-display mb-3 text-accent">④ You love the work more than you love the workers</h4>
              <p>Some leaders genuinely love their ministry more than they love the people in it. The Sunday experience, the program, the vision become more important than the formation of the humans carrying them. When that happens, people become instruments rather than ends. And instruments don't get developed, they get used.</p>
            </div>

            <div className="bg-soft/20 p-6 mb-6 border border-border/40">
              <h4 className="text-lg font-display mb-3 text-accent">⑤ You don't have a system — you have good intentions</h4>
              <p>Good intentions without a structure produce nothing. Most leaders want to raise up people around them but have no actual framework for doing it. No stages, no clear criteria for readiness, no intentional rhythm of investment. Development happens accidentally, inconsistently, and only for the people who are bold enough to push their way into the leader's orbit.</p>
            </div>

            <div className="bg-accent/5 p-6 mb-8 border border-accent/20">
              <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
              <ul className="space-y-2">
                <li>• Which of these five reasons do you most recognize in yourself?</li>
                <li>• What leadership patterns are you unconsciously replicating from your own experience?</li>
                <li>• How do you currently measure success as a leader? Does people development factor into that measurement?</li>
                <li>• What would need to change for you to see developing others as more important than personal productivity?</li>
              </ul>
            </div>

            <h2>Part Two: The Fishing Principle</h2>
            
            <p>"Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime."</p>
            
            <p>The application to leadership development is direct: the leader who does the work feeds the team for a season. The leader who teaches the team how to do the work feeds them, and every team they will ever lead, for a lifetime.</p>
            
            <p>But there is a third level that most leadership thinking stops short of, and it is the one that creates genuine multiplication:</p>
            
            <p className="text-xl font-serif text-accent mb-6">Teach your team to teach others to fish.</p>
            
            <p>This is Paul's instruction to Timothy in 2 Timothy 2:2: "entrust to reliable people who will also be qualified to teach others." Four generations in one sentence: Paul → Timothy → reliable people → others. That is not leadership development. That is a movement.</p>

            <h2>Part Three: The Four Stages of Leader Development</h2>
            
            <p>This is the practical framework, the system that replaces good intentions with a repeatable, transferable process. Every leader should be able to locate every person they are developing within one of these four stages and know exactly what their job is at each one.</p>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage One: "I Do, You Watch"</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The leader demonstrates. The emerging leader observes.</p>
              
              <p>You do the work in full view, not performing, but narrating. Explain the why behind every decision, not just the what. Name what you are doing in real time: "I'm doing this because..." Invite questions not after, but during. This stage is about giving someone a mental model, not just a skill.</p>
              
              <p>Most leaders skip this stage entirely and wonder why the handoff fails. They give the emerging leader the performance but not the thinking behind it. The person watches a polished execution and has no idea how to replicate it because they never saw inside the decision making.</p>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• When you demonstrate a skill, how much time do you spend explaining your thought process versus just showing the outcome?</li>
                  <li>• What activities could you do in full view of emerging leaders that would give them insight into your leadership thinking?</li>
                  <li>• How might you create more "I do, you watch" opportunities in your regular rhythm?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage Two: "We Do, I Lead"</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The emerging leader participates. The leader still holds primary responsibility.</p>
              
              <p>Bring them in as a genuine co-contributor, not an observer with a clipboard. Give them a real role with real stakes. Let them make judgment calls, then debrief, not correct mid-stream. Create safety for imperfect execution: "Try it. We'll talk about it after." Your feedback in this stage shapes their confidence as much as their competence. Celebrate the attempt before you refine the execution.</p>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• How do you balance giving real responsibility with maintaining quality standards?</li>
                  <li>• When you correct or guide someone in this stage, how do you protect their confidence while improving their competence?</li>
                  <li>• What opportunities exist for emerging leaders to have genuine stakes in outcomes, not just practice?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage Three: "They Do, I Support"</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The emerging leader leads. The leader is present but not central.</p>
              
              <p>Step back visibly. Let them be seen as the leader by the team. Resist the pull to jump in when it gets uncomfortable. Be available but not intrusive, the open door, not the hovered presence. Debrief consistently and honestly: what went well, what would you do differently, what do you need from me? Your primary job in this stage is encouragement and course correction, not rescue. Let them own the wins completely. Take none of the credit.</p>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• How do you resist the temptation to jump in when you see them handling something differently than you would?</li>
                  <li>• What does "available but not intrusive" look like in practical terms for your context?</li>
                  <li>• How do you ensure they get full credit for successes without undermining their authority by being too visible?</li>
                </ul>
              </div>
            </div>

            <div className="bg-soft/30 p-8 mb-10 border border-border/40">
              <h3 className="text-2xl font-display mb-4 text-accent">Stage Four: "They Do, They Raise Others"</h3>
              <p className="text-xl font-serif mb-4 text-ink/80">The emerging leader is now a leader-developer. The cycle begins again.</p>
              
              <p>Your investment in this person is now complete at one level, celebrate that. The measure of success is not that they can do the work. It is that they are developing someone else. Hold them accountable for who they are investing in, not just how they are performing. This is where multiplication happens, not just addition. Check in on their people, not just on them.</p>

              <div className="bg-accent/5 p-6 mt-6 border border-accent/20">
                <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
                <ul className="space-y-2">
                  <li>• How do you track and celebrate when someone you've developed starts developing others?</li>
                  <li>• What accountability do you have in place for leaders to invest in emerging leaders?</li>
                  <li>• How might your role shift once someone reaches this stage?</li>
                </ul>
              </div>
            </div>

            <h2>Part Four: How to Identify Who to Invest In</h2>
            
            <p>Not everyone is ready for development at the same time. Not everyone wants to lead. Jesus did not invest equally in everyone. He had the crowds, the seventy-two, the twelve, the three, and then John, each receiving increasing depth of access and investment. This is not favoritism. It is wisdom. Time is finite. Depth of investment requires prioritization.</p>

            <h3>Look for these markers — the FAITH principle:</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-soft/20 p-4 border border-border/40">
                <h4 className="text-lg font-display mb-2 text-accent">Faithful</h4>
                <p>Consistent when no one is watching. Shows up without being chased. Follows through without being reminded. Faithfulness is always a greater indicator of future fruitfulness than current skill.</p>
              </div>
              
              <div className="bg-soft/20 p-4 border border-border/40">
                <h4 className="text-lg font-display mb-2 text-accent">Available</h4>
                <p>Present in spirit, not just in body. Engaged, not just attending. Brings their whole self to what they've been given before asking for more.</p>
              </div>
              
              <div className="bg-soft/20 p-4 border border-border/40">
                <h4 className="text-lg font-display mb-2 text-accent">Inspired</h4>
                <p>Passionate about the mission. Has caught the vision and carries it personally. Not just going through motions but genuinely invested in the outcome.</p>
              </div>
              
              <div className="bg-soft/20 p-4 border border-border/40">
                <h4 className="text-lg font-display mb-2 text-accent">Teachable</h4>
                <p>Receives feedback without defensiveness. Asks questions. Changes based on what they learn. The single most reliable predictor of long-term leadership capacity is not gifting, it is teachability.</p>
              </div>
              
              <div className="bg-soft/20 p-4 border border-border/40">
                <h4 className="text-lg font-display mb-2 text-accent">Hungry</h4>
                <p>Wants to grow, learn, and take on more. Asks about the why, not just the what. Shows initiative and doesn't wait to be invited into everything.</p>
              </div>
            </div>

            <div className="bg-accent/5 p-6 mb-8 border border-accent/20">
              <h4 className="text-lg font-display mb-3 text-accent">Questions for Leaders</h4>
              <ul className="space-y-2">
                <li>• Who on your team consistently demonstrates the FAITH characteristics?</li>
                <li>• How do you distinguish between someone who is available and someone who is just present?</li>
                <li>• What does teachability look like when someone receives difficult feedback?</li>
                <li>• Who shows initiative and hunger that you haven't yet invested in?</li>
              </ul>
            </div>

            <h2>Part Five: The Conversations That Develop Leaders</h2>
            
            <p>Most leader development does not happen in training sessions. It happens in conversations, the ones that go beneath the surface of task and performance into the territory of identity, motive, and calling. These are the conversations that change people.</p>

            <div className="space-y-6">
              <div className="bg-soft/20 p-6 border border-border/40">
                <h4 className="text-lg font-display mb-3 text-accent">The Investment Conversation</h4>
                <p className="mb-3">Have this before you formally bring someone into a development relationship.</p>
                <ul className="space-y-2">
                  <li>• What do you sense God is calling you toward?</li>
                  <li>• What do you believe your gifts are, and what do others consistently affirm in you?</li>
                  <li>• Where do you feel most alive in your serving?</li>
                  <li>• Where do you feel most out of your depth?</li>
                  <li>• What would you attempt if you knew you had full permission to try?</li>
                </ul>
              </div>

              <div className="bg-soft/20 p-6 border border-border/40">
                <h4 className="text-lg font-display mb-3 text-accent">The Debrief Conversation</h4>
                <p className="mb-3">Have this consistently, after every significant leadership moment.</p>
                <ul className="space-y-2">
                  <li>• What went well, and why do you think it went well?</li>
                  <li>• What would you do differently?</li>
                  <li>• What was the hardest moment and how did you handle it?</li>
                  <li>• What did you learn about yourself?</li>
                  <li>• What do you need from me for next time?</li>
                </ul>
              </div>

              <div className="bg-soft/20 p-6 border border-border/40">
                <h4 className="text-lg font-display mb-3 text-accent">The Honest Conversation</h4>
                <p className="mb-3">Have this when something is not working, or when a leader is ready for hard truth.</p>
                <p>The most loving thing you can do for an emerging leader is tell them the truth about what you see: the gifts and the gaps, the strengths and the blindspots. Leaders who only receive encouragement do not grow. They become inflated in the areas where they are gifted and unaware of the areas where they are limited.</p>
              </div>

              <div className="bg-soft/20 p-6 border border-border/40">
                <h4 className="text-lg font-display mb-3 text-accent">The Releasing Conversation</h4>
                <p className="mb-3">Have this when someone is ready to be fully released.</p>
                <p>Most leaders hand people off functionally but never formally. They never sit down and say: "I am releasing you. This is fully yours now. I trust you completely. You have my full authority in this space." That conversation matters enormously to the person receiving it. It is a commissioning. It marks a moment.</p>
              </div>
            </div>

            <div className="bg-ink/5 border border-ink/20 p-8 mt-12">
              <h3 className="text-xl font-display mb-4 text-ink">What Multiplication Actually Looks Like</h3>
              <p className="font-serif text-lg leading-relaxed mb-6">
                If you lead a team of ten and over five years you develop each of those ten into leaders who each develop ten more, you have not added ninety people to the mission. You have built a community of a hundred leaders who can each do what you do. That is not growth by addition. That is growth by multiplication.
              </p>
              <p className="font-serif text-lg leading-relaxed mb-6">
                This is what Jesus was building. Not a crowd. A movement. And movements are not built by one brilliant leader doing everything well in public. They are built by thousands of ordinary leaders doing faithful work in private, people who were seen, invested in, equipped, and released by someone who chose to teach them to fish rather than simply feed them.
              </p>
              <p className="font-serif text-lg leading-relaxed">
                That is the calling before you. Not to be the best leader in the room. To be the leader who makes the room full of leaders.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-6 mt-6 text-ink/80">
                <p>"I have no greater joy than to hear that my children are walking in the truth."</p>
                <cite>— 3 John 1:4</cite>
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
