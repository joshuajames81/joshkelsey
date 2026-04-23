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
  previous: { href: "/for-leaders/week-2", title: "Week 2: Effective Teams" },
  next: { href: "/for-leaders", title: "Leadership Training" },
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
            
            <blockquote>
              <p>"The things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others."</p>
              <cite>2 Timothy 2:2</cite>
            </blockquote>

            <blockquote>
              <p>"Very truly I tell you, whoever believes in me will do the works I have been doing, and they will do even greater things than these, because I am going to the Father."</p>
              <cite>John 14:12</cite>
            </blockquote>

            <h2>The Premise</h2>
            
            <p>Jesus spent three years with twelve people. Not thousands. Not hundreds. Twelve. And those twelve turned the world upside down — not because of what Jesus did while he was with them, but because of what they became capable of doing when he left.</p>
            
            <p>That is the most important leadership strategy in human history: don't build a following, build builders.</p>
            
            <p>The greatest threat to any team, any church, any movement is a leader who is indispensable. If everything depends on you, you have not built anything — you have built a dependency. And dependency is the opposite of discipleship.</p>

            <blockquote>
              <p>"So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ."</p>
              <cite>Ephesians 4:11-13</cite>
            </blockquote>

            <p>The goal of leadership in the kingdom is not a well run ministry. It is mature people. The well run ministry is a byproduct of investing in the right things. Get the order wrong and you get neither.</p>

            <h2>Part One: Why Leaders Don't Raise Leaders</h2>
            
            <p>Before we get to how, we need to be honest about why leaders consistently fail to do this — even when they know they should. There are five real reasons, and most leaders carry at least three of them.</p>

            <h3>① The competence gap feels too expensive</h3>
            
            <p>When you hand something off to someone who isn't yet as capable as you are, things dip. Quality drops temporarily. Mistakes happen that wouldn't happen if you did it yourself. In a performance culture — in a city like New York, in a church that cares about excellence — this feels intolerable. So leaders take it back. And the person who was growing stops growing, because the leader couldn't hold the discomfort of the dip.</p>
            
            <p>The competence gap is not a problem to be solved. It is a cost to be paid. Every leader you will ever raise had to be worse at it before they got better. Your job is to hold the space long enough for better to arrive.</p>

            <h3>② Raising leaders feels like losing power</h3>
            
            <p>This is the one nobody says out loud. When you raise someone up, you create someone who can do what you do. In an insecure leader, that feels like a threat. What if they do it better? What if the team prefers them? What if I become unnecessary?</p>
            
            <p>These questions reveal a fundamental misunderstanding of kingdom leadership. In the kingdom, your value is not determined by your indispensability. The most fruitful leaders in Scripture are the ones who worked themselves out of a job — Moses raising Joshua, Elijah raising Elisha, Paul raising Timothy, Jesus raising the Twelve.</p>

            <blockquote>
              <p>"He must become greater; I must become less."</p>
              <cite>John 3:30</cite>
            </blockquote>

            <h3>③ You haven't been raised that way yourself</h3>
            
            <p>You reproduce what you experienced. If the leadership culture you came from was extractive — leaders who took from you rather than invested in you, who gave you tasks but not authority, who kept the vision to themselves — you will default to that pattern without realizing it. Not because you are a bad leader. Because it is the only template you have internalized.</p>

            <h3>④ You love the work more than you love the workers</h3>
            
            <p>Some leaders genuinely love their ministry more than they love the people in it. The Sunday experience, the program, the vision — these become more important than the formation of the humans carrying them. When that happens, people become instruments rather than ends. And instruments don't get developed — they get used.</p>

            <h3>⑤ You don't have a system — you have good intentions</h3>
            
            <p>Good intentions without a structure produce nothing. Most leaders want to raise up people around them but have no actual framework for doing it — no stages, no clear criteria for readiness, no intentional rhythm of investment. Development happens accidentally, inconsistently, and only for the people who are bold enough to push their way into the leader's orbit.</p>

            <h2>Part Two: The Fishing Principle</h2>
            
            <p>"Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime."</p>
            
            <p>The application to leadership development is direct: the leader who does the work feeds the team for a season. The leader who teaches the team how to do the work feeds them — and every team they will ever lead — for a lifetime.</p>
            
            <p>But there is a third level that most leadership thinking stops short of, and it is the one that creates genuine multiplication:</p>
            
            <p><strong>Teach your team to teach others to fish.</strong></p>
            
            <p>This is Paul's instruction to Timothy in 2 Timothy 2:2 — "entrust to reliable people who will also be qualified to teach others." Four generations in one sentence: Paul → Timothy → reliable people → others. That is not leadership development. That is a movement.</p>

            <h2>Part Three: The Four Stages of Leader Development</h2>
            
            <p>This is the practical framework — the system that replaces good intentions with a repeatable, transferable process. Every leader at FOUNT should be able to locate every person they are developing within one of these four stages and know exactly what their job is at each one.</p>

            <h3>Stage One — "I Do, You Watch"</h3>
            <p>The leader demonstrates. The emerging leader observes.</p>
            
            <ul>
              <li>You do the work in full view — not performing, but narrating</li>
              <li>Explain the why behind every decision, not just the what</li>
              <li>Name what you are doing in real time: "I'm doing this because..."</li>
              <li>Invite questions — not after, but during</li>
              <li>This stage is about giving someone a mental model, not just a skill</li>
              <li>Most leaders skip this stage entirely and wonder why the handoff fails</li>
            </ul>

            <h3>Stage Two — "We Do, I Lead"</h3>
            <p>The emerging leader participates. The leader still holds primary responsibility.</p>
            
            <ul>
              <li>Bring them in as a genuine co-contributor, not an observer with a clipboard</li>
              <li>Give them a real role with real stakes</li>
              <li>Let them make judgment calls — then debrief, not correct mid-stream</li>
              <li>Create safety for imperfect execution: "Try it. We'll talk about it after."</li>
              <li>Your feedback in this stage shapes their confidence as much as their competence</li>
              <li>Celebrate the attempt before you refine the execution</li>
            </ul>

            <h3>Stage Three — "They Do, I Support"</h3>
            <p>The emerging leader leads. The leader is present but not central.</p>
            
            <ul>
              <li>Step back visibly — let them be seen as the leader by the team</li>
              <li>Resist the pull to jump in when it gets uncomfortable</li>
              <li>Be available but not intrusive — the open door, not the hovered presence</li>
              <li>Debrief consistently and honestly: what went well, what would you do differently, what do you need from me?</li>
              <li>Your primary job in this stage is encouragement and course-correction — not rescue</li>
              <li>Let them own the wins completely. Take none of the credit.</li>
            </ul>

            <h3>Stage Four — "They Do, They Raise Others"</h3>
            <p>The emerging leader is now a leader-developer. The cycle begins again.</p>
            
            <ul>
              <li>Your investment in this person is now complete at one level — celebrate that</li>
              <li>The measure of success is not that they can do the work. It is that they are developing someone else.</li>
              <li>Hold them accountable for who they are investing in — not just how they are performing</li>
              <li>This is where multiplication happens — not just addition</li>
              <li>Check in on their people, not just on them</li>
            </ul>

            <h2>Part Four: How to Identify Who to Invest In</h2>
            
            <p>Not everyone is ready for development at the same time. Not everyone wants to lead. The mistake is either investing in no one or investing indiscriminately — giving equal time to people at vastly different levels of readiness and motivation.</p>
            
            <p>Jesus did not invest equally in everyone. He had the crowds, the seventy-two, the twelve, the three, and then John — each receiving increasing depth of access and investment. This is not favoritism. It is wisdom. Time is finite. Depth of investment requires prioritization.</p>

            <h3>Look for these markers — the FAITH principle:</h3>
            
            <ul>
              <li><strong>Faithful</strong> — Consistent when no one is watching. Shows up without being chased. Follows through without being reminded. Faithfulness is always a greater indicator of future fruitfulness than current skill.</li>
              <li><strong>Available</strong> — Present in spirit, not just in body. Engaged, not just attending. Brings their whole self to what they've been given before asking for more.</li>
              <li><strong>Inspired</strong> — Passionate about the mission. Has caught the vision and carries it personally. Not just going through motions but genuinely invested in the outcome.</li>
              <li><strong>Teachable</strong> — Receives feedback without defensiveness. Asks questions. Changes based on what they learn. The single most reliable predictor of long-term leadership capacity is not gifting — it is teachability.</li>
              <li><strong>Hungry</strong> — Wants to grow, learn, and take on more. Asks about the why, not just the what. Shows initiative and doesn't wait to be invited into everything.</li>
            </ul>

            <blockquote>
              <p>"Whoever can be trusted with very little can also be trusted with much."</p>
              <cite>Luke 16:10</cite>
            </blockquote>

            <h2>Part Five: The Conversations That Develop Leaders</h2>
            
            <p>Most leader development does not happen in training sessions. It happens in conversations — the ones that go beneath the surface of task and performance into the territory of identity, motive, and calling. These are the conversations that change people.</p>

            <h3>The Investment Conversation</h3>
            <p>Have this before you formally bring someone into a development relationship.</p>
            <p>Ask them:</p>
            <ul>
              <li>What do you sense God is calling you toward?</li>
              <li>What do you believe your gifts are — and what do others consistently affirm in you?</li>
              <li>Where do you feel most alive in your serving?</li>
              <li>Where do you feel most out of your depth?</li>
              <li>What would you attempt if you knew you had full permission to try?</li>
            </ul>

            <h3>The Debrief Conversation</h3>
            <p>Have this consistently — after every significant leadership moment.</p>
            <p>Ask them:</p>
            <ul>
              <li>What went well — and why do you think it went well?</li>
              <li>What would you do differently?</li>
              <li>What was the hardest moment and how did you handle it?</li>
              <li>What did you learn about yourself?</li>
              <li>What do you need from me for next time?</li>
            </ul>

            <h3>The Honest Conversation</h3>
            <p>Have this when something is not working — or when a leader is ready for hard truth.</p>
            <p>The most loving thing you can do for an emerging leader is tell them the truth about what you see — the gifts and the gaps, the strengths and the blindspots. Leaders who only receive encouragement do not grow. They become inflated in the areas where they are gifted and unaware of the areas where they are limited.</p>

            <h3>The Releasing Conversation</h3>
            <p>Have this when someone is ready to be fully released.</p>
            <p>This conversation is underrated. Most leaders hand people off functionally but never formally. They never sit down and say: "I am releasing you. This is fully yours now. I trust you completely. You have my full authority in this space."</p>

            <blockquote>
              <p>"As the Father has sent me, I am sending you."</p>
              <cite>John 20:21</cite>
            </blockquote>

            <h2>Part Six: What Multiplication Actually Looks Like</h2>
            
            <p>Here is the arithmetic that most church leaders never sit with long enough.</p>
            
            <p>If you lead a team of ten and over five years you develop each of those ten into leaders who each develop ten more — you have not added ninety people to the mission. You have built a community of a hundred leaders who can each do what you do. That is not growth by addition. That is growth by multiplication. And multiplication, given enough time, produces something so large it cannot be managed — only stewarded.</p>
            
            <p>This is what Jesus was building. Not a crowd. A movement. And movements are not built by one brilliant leader doing everything well in public. They are built by thousands of ordinary leaders doing faithful work in private — people who were seen, invested in, equipped, and released by someone who chose to teach them to fish rather than simply feed them.</p>

            <blockquote>
              <p>"The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field."</p>
              <cite>Luke 10:2</cite>
            </blockquote>

            <p>The bottleneck in the kingdom has never been the harvest. It has always been the workers. And the workers don't appear from nowhere — they are developed. By leaders who were themselves developed. By leaders who understood that their primary calling was not to do the work of ministry but to equip and release those who would.</p>
            
            <p>That is the calling before you. Not to be the best leader in the room. To be the leader who makes the room full of leaders.</p>

            <h2>Week 3 Summary — What to Hold</h2>
            
            <ul>
              <li>The goal is never your indispensability. If everything stops when you leave, you have built a dependency, not a ministry.</li>
              <li>Raising leaders costs something real — margin, ego, control, and the discomfort of watching someone do imperfectly what you could do perfectly. Pay the cost.</li>
              <li>The four stages are a system, not a suggestion. I Do/You Watch → We Do/I Lead → They Do/I Support → They Do/They Raise Others. Know which stage every person you are developing is in — right now.</li>
              <li>FAITH is your filter. Faithful. Available. Inspired. Teachable. Hungry. All five. In that order of importance.</li>
              <li>Development lives in conversations. The investment conversation, the debrief, the honest conversation, and the releasing conversation. These are the instruments of formation.</li>
              <li>Credit flows down. Always.</li>
              <li>The question before every planning conversation is who, not what. Who is growing? Who is ready? Who is being left behind?</li>
              <li>You are teaching people to teach people to fish. That is what multiplication looks like. That is what a movement is made of.</li>
            </ul>

            <blockquote>
              <p>"I have no greater joy than to hear that my children are walking in the truth."</p>
              <cite>3 John 1:4</cite>
            </blockquote>

            <p>That is the final word on leadership development in the kingdom. Not: I have no greater joy than to see the ministry growing. Not: I have no greater joy than to see the vision being executed. The joy is in the people. In watching someone you invested in walk in truth, lead with integrity, and raise up someone else who does the same.</p>
            
            <p>That is what you are building. That is why it matters. That is why it is worth every uncomfortable conversation, every imperfect handoff, every moment of releasing what you could have kept.</p>
            
            <p><strong>Go teach them to fish.</strong></p>

          </div>
        </section>

        <ChapterNav navigation={navigation} />
      </main>
      <Footer />
    </>
  );
}
