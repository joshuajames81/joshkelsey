import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The First and the Last",
  description:
    "Pastor Josh Kelsey on Sabastian Sawe's sub-two-hour London Marathon and Clair Roberts who finished last, and what both of them teach us about running the race called life.",
  alternates: { canonical: "https://joshkelsey.org/writing/the-first-and-the-last" },
  openGraph: {
    title: "The First and the Last | Josh Kelsey",
    description:
      "Two finish lines on The Mall, and the race that matters most.",
    type: "article",
    publishedTime: "2026-04-29",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The First and the Last",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  mainEntityOfPage: "https://joshkelsey.org/writing/the-first-and-the-last",
};

export default function Post() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />
      <main className="flex-1">
        <article className="max-w-prose mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-12 md:mb-16">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-5">Essay</p>
            <h1 className="font-display text-display-lg font-medium leading-[1.05] text-ink mb-6">
              The First and the Last.
            </h1>
            <p className="font-serif italic text-lg text-muted mb-6">
              Two finish lines on The Mall, and the race that matters most.
            </p>
            <div className="flex items-center gap-4 text-sm font-sans text-muted">
              <span>Josh Kelsey</span>
              <span aria-hidden>·</span>
              <time dateTime="2026-04-29">April 2026</time>
              <span aria-hidden>·</span>
              <span>8 min read</span>
            </div>
          </header>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              On Sunday, two people finished the London Marathon.
            </p>

            <p>
              Both crossed the same line. Both ran the same 26.2 miles. One of them did it in
              1 hour, 59 minutes, and 30 seconds. The other took 12 hours and 16 minutes.
            </p>

            <p>
              I want to tell you why both of them are heroes.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              The First
            </h2>

            <p>
              Sabastian Sawe is 31. Kenyan. Quiet. Until Sunday morning, the kind of elite
              marathoner most casual fans couldn&rsquo;t pick out of a lineup. By Sunday lunchtime
              he had done what generations of physiologists swore was impossible. He ran an
              officially sanctioned, record eligible marathon in under two hours.
            </p>

            <p>
              For context, a year ago the world record was 2:00:35. The barrier of 2:00:00 was a
              wall. Eliud Kipchoge famously dipped under it in Vienna in 2019, but everyone knew
              the asterisk: rotating pacers, engineered conditions, no record possible. It was
              magnificent. It wasn&rsquo;t real.
            </p>

            <p>
              Sunday was real. Point to point from Blackheath to The Mall. World Athletics rules.
              Tested, ratified, in the books. Sawe ran a negative split. 60:29 for the first half,
              59:01 for the second. He ran the 24th mile in 4 minutes and 12 seconds, the fastest
              mile ever clocked inside a marathon. He had been injured in January and only started
              training in February.
            </p>

            <p>
              After the race he said, &ldquo;I had a lot of courage to push, even when the pace
              was fast.&rdquo;
            </p>

            <p>
              That&rsquo;s it. That&rsquo;s the whole interview. The man who just moved marathon
              running&rsquo;s four minute mile shrugged and said <em>I had courage</em>. A line
              moved on Sunday that will never move back.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              The Last
            </h2>

            <p>
              Clair Roberts is 35. From Milton Keynes. Not an elite. Not an athlete by any measure
              she would recognise. She crossed the finish line at 12 hours and 16 minutes, just
              before midnight, on a Mall that had already been swept, the elite tents already taken
              down, Sawe&rsquo;s medal probably already in a drawer somewhere.
            </p>

            <p>
              She finished last. Of nearly sixty thousand people, she was the final one in.
            </p>

            <p>
              Seven years ago Clair was in a place where she didn&rsquo;t want to be alive
              anymore. She made one phone call, to the Samaritans. That call kept her here. She
              has volunteered for them ever since, answering the line for the next person on the
              worst night of theirs. On Sunday she ran 26.2 miles to raise money for the charity
              that kept her breathing.
            </p>

            <p>
              She raised around &pound;2,000. She was helped over the final stretch by{" "}
              <em>tailwalkers</em>, volunteers who walk with the slowest runners after the roads
              reopen, guiding them to a secondary finish line at St James&rsquo;s Park because
              The Mall has long since closed. She had never pushed her body that hard before. She
              told the BBC, &ldquo;I kept thinking, if I could get through that dark period in my
              life, I could get through this. I want to show others that there is always
              hope.&rdquo;
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              The Same Medal
            </h2>

            <p>
              Here&rsquo;s the strange and holy thing about a marathon. The medal Sawe got is the
              same medal Clair got. Same ribbon. Same weight. The clock disagrees about who is
              greater. The medal does not.
            </p>

            <p>
              I&rsquo;ve run a few marathons myself. I know what 26.2 miles asks of you. And the
              more I think about Sunday, the more I think the harder question isn&rsquo;t what
              those miles took from Sawe. What does 26.2 ask at hour eleven, in the dark, with the
              volunteers gone home and your legs failing and the only crowd left being the
              streetlights of central London?
            </p>

            <p>
              This isn&rsquo;t false equivalence. Sawe is the greatest marathoner who has ever
              lived. But the marathon, as an event, has always quietly insisted on something the
              world doesn&rsquo;t believe. That <em>finishing</em> is the point. Speed is a
              category. Perseverance is the discipline. And the same finish line waits for the
              fastest human ever timed and the woman who comes in just before midnight with the
              streetlights as her crowd.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              The Race Called Life
            </h2>

            <p>
              The writer of Hebrews knew none of this and all of it.{" "}
              <em>Let us run with endurance the race that is set before us</em> (Hebrews 12:1).
              The Greek word for &ldquo;race&rdquo; there is <em>agōn</em>. Agony, struggle,
              contest. The instruction is not &ldquo;win.&rdquo; The instruction is &ldquo;run,
              with endurance, the one course set in front of <em>you</em>.&rdquo;
            </p>

            <p>
              Paul, near the end, didn&rsquo;t write <em>I won the race</em>. He wrote,{" "}
              <em>τὸν δρόμον τετέλεκα</em>, <em>ton dromon teteleka</em>,{" "}
              <em>I have finished the race</em> (2 Timothy 4:7). And here is something that has
              not left me since Easter. The verb Paul uses for <em>finished</em>, <em>teleō</em>,
              is the same verb Jesus used from the cross. <em>Tetelestai</em>.{" "}
              <em>It is finished.</em>
            </p>

            <p>
              Paul didn&rsquo;t measure his life in splits. He measured it in fidelity to the
              course Jesus had already finished for him.
            </p>

            <p>
              Most of us won&rsquo;t be Sawe. Almost none of us will be the first at anything. The
              world will hand its podiums and its records and its trophies to a tiny number of
              people, and we won&rsquo;t be them, and that is fine. But every one of us is
              running. Every one of us has a course. And every one of us will, eventually, come
              within sight of a finish line.
            </p>

            <p>The question is not how fast.</p>

            <p>
              The question is whether we finished well. Whether we kept faith. Whether we ran for
              something larger than our own time. Whether we, like Clair, kept moving when the
              official crowds were gone and the volunteer at our shoulder was the only one left to
              cheer. Whether, when the line came, we were still on the course.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              Two Questions
            </h2>

            <p>One more thought before you go.</p>

            <p>
              Most of us spend our lives watching the front of the pack. We celebrate the Sawes.
              We measure ourselves against the people breaking tape and breaking history, and we
              wonder why we feel behind.
            </p>

            <p>But the back of the pack is where the gospel actually lives.</p>

            <p>So two questions.</p>

            <p>
              Who in your world right now could you be a tailwalker for? Not the ones winning. The
              ones limping. The ones at hour eleven of something hard. The ones who wouldn&rsquo;t
              finish if someone didn&rsquo;t walk the last few miles beside them. Pick a name.
              Walk with them.
            </p>

            <p>
              And who could you be a Clair to? Clair didn&rsquo;t get to The Mall on her own.
              Seven years ago, a stranger picked up a phone and gave her another day to live. She
              is the answer to that phone call. Maybe you are someone&rsquo;s phone call. Maybe
              you&rsquo;ve already been picked up off the floor of your own life by grace, and
              someone in your orbit needs you to be the voice on the line.
            </p>

            <p>
              The race is not just about finishing your own. It&rsquo;s about who you carry with
              you.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              A Word, If You&rsquo;re Winning
            </h2>

            <p>
              Some of you reading this are not at mile 22. Some of you are at mile 23 of something
              that&rsquo;s actually going well. The career is rising. The work is growing. The
              kids are thriving. The finish line is close and you&rsquo;re going to cross it ahead
              of the field.
            </p>

            <p>I want you to look at Sawe again.</p>

            <p>
              Here&rsquo;s what struck me about his interview after the most extraordinary
              marathon performance in human history. He said he didn&rsquo;t realise he&rsquo;d
              broken the record. He&rsquo;d been so locked in on his friend Yomif Kejelcha, the
              runner stride for stride beside him, that he never looked at the clock. He
              wasn&rsquo;t running for history. He was running with someone he loved. The history
              happened on its own.
            </p>

            <p>
              Before the race, he had also voluntarily asked the anti doping authority to test
              him <em>more</em>, not less, because Kenyan distance running has been dogged by
              suspicion and he wanted his name above it.
            </p>

            <p>That is what winning well looks like.</p>

            <p>
              It looks like running for the person next to you, not the cameras above you. It
              looks like inviting accountability you don&rsquo;t owe. It looks like an interview
              that names courage instead of yourself. It looks like crossing the line and saying,
              &ldquo;It is a day to remember for me and my family,&rdquo; when half the planet
              just watched you make history.
            </p>

            <p>
              If you are winning right now, the temptation isn&rsquo;t to give up. It&rsquo;s to
              forget. To forget who carried you here. To forget the people still running. To
              forget that your gift was given.
            </p>

            <p>
              The way to win even further is to win like Sawe. Quietly. Honestly. With your friend
              in the lane next to you. With your family the first thing on your lips when the tape
              breaks.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-medium text-ink pt-6 pb-2">
              A Word, If You&rsquo;re Tired
            </h2>

            <p>
              If you are reading this and you are somewhere around mile 22 of something hard. A
              marriage. A calling. A grief. A battle for your own life. Let me say what was said
              of Clair when she came in just before midnight.
            </p>

            <p>
              You don&rsquo;t finish last. You just get to celebrate the achievement for longer.
            </p>

            <p>
              The race has already been finished for you. <em>Tetelestai.</em> What&rsquo;s asked
              of you now is not speed. It&rsquo;s the next step.
            </p>

            <p>Run on.</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
