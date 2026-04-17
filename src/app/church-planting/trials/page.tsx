import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Trials: Comparison, Balance, Temptation, People Leaving",
  description:
    "The interior costs of planting that no one tells you about. How to fight comparison, how to live a balanced life, how to handle temptation, and what to do when people leave.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/trials" },
  openGraph: {
    title: "The Trials | Josh Kelsey",
    description:
      "Comparison, balance, temptation, and sending rather than losing people.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Trials: Comparison, Balance, Temptation, People Leaving",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/trials",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Church Planting Training Library",
    url: "https://joshkelsey.com/church-planting",
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
            partName="The Long Haul"
            chapterNumber="08"
            title="Comparison, balance, temptation, and what to do when people leave."
            intro="The interior costs of planting that no one tells you about, and the ones that will break you if you don't see them coming."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              Planting is a beautiful journey. The joy of seeing lives changed,
              honestly, there&rsquo;s nothing better. The revelation of why
              you&rsquo;re building, and your heart for your city and people, will
              always be your motivation if you keep it as your foundation. Within
              all of that, I&rsquo;d be amiss to not share on the reality of the
              trials you&rsquo;ll face.
            </p>
            <p>
              There are plenty of planting tips and tricks out there, lots of great
              strategies for launching. What I don&rsquo;t think gets talked about
              enough is the interior side. You may be stuck in one of these areas,
              or you may not have hit any yet. My heart in sharing is to give you
              some rhythms and ways to both prevent these struggles and overcome
              them. Above all, I want you to know you are not alone. If anyone
              ever told you a planter has to keep these things to themselves, deal
              with it only between you and God, I&rsquo;m here to say you
              don&rsquo;t. God is with you, and you can also place yourself around
              safe trusted people. If you don&rsquo;t have that in your life right
              now, reach out. Don&rsquo;t do this alone.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              1. How to combat comparison
            </h2>
            <p>
              The early stages of planting are a vulnerable season. You have big
              vision and you can see where you&rsquo;re going, but you can also
              see how far you have to go. You see the work, the years ahead,
              maybe before the God-vision comes through. It&rsquo;s exciting,
              and it&rsquo;s daunting. One of the enemy&rsquo;s schemes in that
              season is to get you to compare yourself. With social media, the
              access to what every other church is doing is overwhelming.
            </p>
            <p>
              Early on I made it a goal not to look at any other churches&rsquo;
              Instagram accounts during our launch. I didn&rsquo;t follow many
              other churches or leaders. I knew if I constantly saw it in my feed
              it had the potential to encourage but also the potential to
              discourage. You have to discern in your own heart why you&rsquo;re
              following someone and guard your heart accordingly. This
              isn&rsquo;t from a victim point of view, we should celebrate others
              and cheer them on. But be honest if something deters you from
              God&rsquo;s mission in your own life.
            </p>
            <p>
              Be intentional with what you&rsquo;re feeding yourself. What&rsquo;s
              on your feed, what you&rsquo;re looking at, what&rsquo;s feeding your
              soul, mind, and spirit. Is it uplifting you and pointing you to
              Jesus, or is it deterring you from what you&rsquo;re building?
            </p>
            <p>
              Not looking at what others were doing made us laser focused. I
              wanted to do what God called me to, not what I thought other people
              would want me to. Not to imitate trends. The benefit was that we
              became more bold, more creative, more willing to take risks in our
              content. Our creativity wasn&rsquo;t about keeping up. It was about
              what we actually were.
            </p>
            <p>
              Every church is different. Every pastor is different. God has gifted
              you specifically for your church, your calling, your city. If he
              wanted someone else, he would have chosen them. You said yes.
              Comparison has to meet your self-talk, which has to be greater than
              the enemy&rsquo;s lies. Any moment comparison sneaks in, I go back
              to the beginning. I remember the moment in Manhattan when God
              called me.
            </p>
            <p>
              For great painters, there are seasons of training where they glean
              from other artists, learning the craft, the brushstrokes, the
              materials. But when they finally sit down to paint, they don&rsquo;t
              look at someone else&rsquo;s painting. They paint what&rsquo;s on
              their heart. When you go to plant a church, you&rsquo;re getting out
              a canvas. You&rsquo;re putting pen to paper. You&rsquo;re applying
              all you&rsquo;ve learned and all God has placed in you. Don&rsquo;t
              do it in a state of comparison. Do it in a state of creativity.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              2. How to live a balanced life
            </h2>
            <p>
              There&rsquo;s so much effort required in pastoring, and it&rsquo;s
              very easy to fall into the flesh because it&rsquo;s demanding
              emotionally, mentally, and physically. You can easily fall into
              striving. Results-oriented. In Genesis we see God&rsquo;s pattern.
              He created out of the overflow of love. He spoke things into being.
              He shaped and he collaborated with humanity. All in sync with the
              Spirit. And after all of that, he rested.
            </p>
            <p>
              If we don&rsquo;t rest, we&rsquo;re saying it&rsquo;s reliant on us
              and we don&rsquo;t need God. It&rsquo;s important to stop, to turn
              devices off, to be unreachable so we can be reachable to God. We
              play God to others when we&rsquo;re available to everyone at all
              times. We become their God rather than pointing them to the one.
            </p>
            <p>
              Sleep restores the body. Sabbath restores the spirit. Sabbath
              impacts your leadership, your family, your parenting, your
              presence. The fruits of the Spirit grow when there&rsquo;s a healthy
              rhythm of work and rest. When you&rsquo;re in the flow of sabbath,
              the Spirit flows through you. Pastoring from a clear head is less
              reactive, less chaotic, less flesh-driven. A lot of what we face as
              pastors has a simpler answer than we&rsquo;re looking for. Stop.
              Rest. Trust God.
            </p>
            <p>
              Alongside sabbath, another key is practicing silence and solitude.
              Silence and solitude are critical because they give God space to
              speak. Much of our prayer life is petition, request, praise. A huge
              part needs to be listening. Stilling self in order to magnify God.
              Self is noisy. If we&rsquo;re actually going to live a Christ-like
              selfless life, we have to practice silence.
            </p>
            <p>
              Silence identifies fears and anxieties. It turns down the volume
              of other voices, but initially turns it up, because you realize how
              loud your fears and anxieties actually are. It&rsquo;s a chance to
              identify weaknesses and attitudes that aren&rsquo;t aligned with
              him. Without silence and solitude, we can be unaware of what&rsquo;s
              causing us to be off balance.
            </p>
            <p>
              Henri Nouwen put it this way: as soon as we are alone, inner chaos
              opens up in us. It can be so disturbing we can hardly wait to get
              busy again. Entering a private room and shutting the door
              doesn&rsquo;t mean we immediately shut out our doubts, fears, and
              unresolved conflicts. When we remove outer distraction, the inner
              distraction often manifests. We use the outer to shield ourselves
              from the interior. That makes the discipline all the more important.
            </p>
          </div>

          <PullQuote attribution="Colossians 3:15 AMPC">
            And let the peace (soul harmony which comes) from Christ rule (act as umpire continually) in your hearts.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              Turn down the volume of the other voices so you can hear the true
              umpire of your heart. Let Christ be the center and director of your
              life, leading you into good decisions and the right path.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              3. How to handle temptation
            </h2>
            <p>
              The first thing in combating temptation is being really honest about
              where you&rsquo;re weak. If you aren&rsquo;t aware of your
              weaknesses, the specific sins you fall into, you can never combat
              them. Like a married couple realizing the thing they struggled with
              before marriage doesn&rsquo;t magically go away, it just gets
              highlighted. The same goes with planting. The struggles in your
              personal life and early leadership get magnified when you&rsquo;re
              leading a church on your own.
            </p>
            <p>
              Here are four windows when temptation can creep in:
            </p>
            <p>
              <strong>When you&rsquo;re busy.</strong> Business is inevitable.
              You&rsquo;ll have a lot on your plate, face pressure, not have enough
              hours in the day. The way through is personal devotion. Focus on
              your own walk with God, and it will help you fight the moments when
              shortcuts look appealing under stress.
            </p>
            <p>
              <strong>When you&rsquo;ve failed.</strong> Either a personal failure
              or something in your team you end up wearing. Maybe criticism over
              your leadership. Failures come. They aren&rsquo;t avoidable. What
              you fight is identity drift. Keep a buoyant spirit that knows your
              identity is in Christ and not in what you do, so when failure comes
              you aren&rsquo;t so hard on yourself that you give in to temptation
              just to feel good about yourself again.
            </p>
            <p>
              <strong>When you&rsquo;ve had a huge win.</strong> Sometimes your
              most vulnerable points are your biggest successes. Wins are a great
              outcome of ministry, but temptation loves a mountaintop. Stay in a
              posture of humility. Awareness of God, less ego stroking, less
              vulnerability.
            </p>
            <p>
              <strong>When you&rsquo;re bored.</strong> Temptation loves you off
              purpose. David&rsquo;s story with Bathsheba started when he
              wasn&rsquo;t out with his men in battle. As the ministry grows, stay
              in the fight. Don&rsquo;t let idle hands or an idle heart make you
              vulnerable to the enemy.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              4. What to do when people leave
            </h2>
            <p>
              New York is transient. People come and go. Some stay for a year, some
              for two, some stay for life. At the beginning I would take it
              personally when someone moved. I felt like they were leaving me,
              giving up on the church, the vision. You try to control it, push
              people to stay, and sometimes that&rsquo;s right, people need to be
              challenged to build something greater than themselves. But sometimes
              it&rsquo;s things out of your control. Jobs, families, life
              circumstances that have nothing to do with you or the church.
            </p>
            <p>
              God gave me a revelation to combat the feeling of rejection. Whether
              someone is there for two weeks or twenty years, at some point they
              are going to be sent. So invest in them while they are there. That
              freed me up from trying to control timelines. Anyone can be sent.
              When someone is sent, it&rsquo;s different from when they leave. The
              idea of sending is biblical, and it&rsquo;s far greater. They are
              commissioned into the next season.
            </p>
          </div>

          <PullQuote>
            As far as it&rsquo;s up to you, send them.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              As far as it&rsquo;s up to you, in your spirit, send them. Personally
              pray for them, that you have sent them, given them, that seeds would
              bear fruit in the next season. That posture releases you from the
              burden. It frees your spirit to feel only joy and love for the time
              you shared and excitement for what God will do next through them.
              You know you poured in while they were there, and they will be
              blessed because of your investment.
            </p>
            <p>
              There&rsquo;s no other job quite like pastoring where you get close
              to people over time and then they leave. Having a sending and sowing
              mentality keeps you from being over-burdened. It protects you from
              being an overbearing, controlling leader. Your identity isn&rsquo;t
              in what they bring to the table. You live in faith, not fear.
              Sometimes we don&rsquo;t want to release because we fear God
              won&rsquo;t raise up others. Rid yourself of that fear. Faith gives
              a buoyancy to leadership where you can care deeply and also release
              cleanly.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Change the narrative
            </h2>
            <p>
              These are four specific struggles. I didn&rsquo;t cover every trial.
              My heart was to show specifics so the principle is clear. Whatever
              the trial, the deepest work is often the same.
            </p>
            <p>
              You have to change the narrative of the story you&rsquo;re believing
              in your mind. This is one of your greatest strengths in leadership,
              knowing when the narrative needs to change. Comparison, temptation, a
              member leaving, a member saying something discouraging, the narrative
              has to come from God, not the enemy.
            </p>
            <p>
              Sometimes the story you&rsquo;re believing is true. Usually it
              isn&rsquo;t. In most cases there&rsquo;s a better narrative in
              Christ. So the way through any of it is a better revelation. A God
              revelation. Asking him what he is doing in the middle of the trial.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/people",
              part: "Part Two: The Plant",
              title: "The People",
            }}
            next={{
              href: "/church-planting/personal-health",
              part: "Part Three: The Long Haul",
              title: "Personal Health",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
