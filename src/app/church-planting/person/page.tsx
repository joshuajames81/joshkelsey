import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Person: The Planter Before the Plant",
  description:
    "The interior work every church planter has to do first. Your why, your heart, your marriage, the revelation behind your calling, your vision statement, and the city God has placed in you.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/person" },
  openGraph: {
    title: "The Person: The Planter Before the Plant | Josh Kelsey",
    description:
      "The interior work every church planter has to do first. Why, heart, marriage, revelation, vision, and place.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Person: The Planter Before the Plant",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/person",
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
            partNumber="One"
            partName="The Calling"
            chapterNumber="02"
            title="The planter before the plant."
            intro="The interior work that has to come before the team, the strategy, and the service. Who you are is the ceiling of what you can build."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Identifying your why
            </h2>

            <p className="drop-cap">
              Identifying your why is all the process before you step out to plant.
              While you&rsquo;re in this season, it may feel like a waiting period.
              You have vision but you aren&rsquo;t in the place of outworking it yet.
              A lot of that waiting, I&rsquo;ve come to believe, is God forming a
              deeper why within you. We so easily want to avoid the struggles and
              just get on with the thing, but God wants to use the struggles and the
              waiting to test our vision. When you realize that, your purpose becomes
              deeper.
            </p>
            <p>
              Before we moved to New York I flew over from Sydney for a vision trip.
              I wanted to be in the city, pray, meet people, let God continue to form
              the vision in us. The most formative part of that trip was lunch with a
              pastor who had planted in the city years earlier and was now leading a
              thriving community. I wanted to learn from him. And in that lunch he
              gave me one of the greatest lessons of my life. He told me, if you
              don&rsquo;t have your why, don&rsquo;t come here. The city is too hard.
              Too many people have failed.
            </p>
          </div>

          <PullQuote>
            If you don&rsquo;t have your why, don&rsquo;t come here.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              That hit me. Am I really called? Do I just like the idea of planting?
              Is this a fad, a trend? These are the questions you have to ask
              yourself while you&rsquo;re in the forming process, to weed out the
              desires of the flesh and find the God-breathed why underneath.
            </p>
            <p>
              Georgie and I had to go through a process of yeses and nos as a couple
              before we moved. We had moments where Georgie was a yes and I was a no,
              and moments where I was a yes and she wasn&rsquo;t. Walking through
              those, communicating through them, refined us together and refined our
              why together.
            </p>
            <p>
              As you weed out the questions, you get to the root. And then you can
              see if the root is strong enough and ready enough to be planted and
              form a tree. That&rsquo;s when you know your why has been identified,
              when the root is cleansed of the selfish desires around it, when
              it&rsquo;s been watered by God, and it&rsquo;s ready to dig deep.

            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The heart
            </h2>
            <p>
              Heart for the city, burden for the people. That became the summary for
              me of what every pastor needs for the place they&rsquo;re called. If
              when I say that phrase your spirit leaps, if you know exactly who your
              city is and who your people are, that&rsquo;s when you know it&rsquo;s
              within you.
            </p>
            <p>
              When we speak of heart, we&rsquo;re talking about passion, emotion,
              love for the place. The city is this macro made up of cultures,
              backgrounds, and centuries of history. It&rsquo;s beautiful when you
              dive into all the layers of the place you&rsquo;re called to. In our
              story we were called to a city we already loved. But that&rsquo;s not
              everyone&rsquo;s story. Sometimes God calls people to places they
              don&rsquo;t love yet. He can give you a heart for a city over time. He
              will build the love within you.
            </p>
            <p>
              A burden for the people is a sense of weight. You can&rsquo;t have
              empathy if you don&rsquo;t feel the pressure, the brokenness, the
              stories, the heartache, the dreams, the ambitions of the people in
              your city. It&rsquo;s their souls, their hearts, their minds, their
              talents, their callings, all of it wrapped up in one that creates the
              burden.
            </p>
            <p>
              You will preach and lead differently when you have a burden for the
              people. This burden isn&rsquo;t meant for you to carry alone.
              It&rsquo;s cast on God, but you&rsquo;re called to carry it with him.
              Feel the weight, so that there is significance and depth, but know
              it&rsquo;s not all on you.
            </p>
            <p>
              The burden also carries this truth: people aren&rsquo;t the means to
              the vision, they are the vision. This has to be your revelation. So
              often leaders think, I&rsquo;m going to build a church, fill the
              building, grow in size, but they don&rsquo;t treat the people like
              they are the vision. They treat them like the way to achieve it. Your
              people are the vision in action. They are the core of why you&rsquo;ve
              been called.
            </p>
            <p>
              So let this question sink deep as you lead, plant, strategize, and
              pastor. Do I really have a heart for the city? Is my burden for the
              people? Or is it for what I want to build? Let that question clean,
              clarify, and convict you. Come back to it years in. It still has to be
              the heartbeat.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The couple
            </h2>
            <p>
              The biggest opposition is going to be against your marriage and your
              family. And the key to the church is going to be in the health of your
              relationship as a couple.
            </p>
            <p>
              Early on we were at each other. I felt like the walls of New York were
              closing in on me. I didn&rsquo;t know how to deal with it, and it would
              fall out onto Georgie and our son. She would tell me to get out of our
              apartment and go pray. I felt the pressure of trying to save the city
              in a day. All these voices in my head of what I should be doing, what
              I could be doing. What I actually needed was to pray, which she knew
              before I did.
            </p>
            <p>
              So I got out and walked around the streets of New York, and the Holy
              Spirit spoke to me and said, it will be according to your prayer and
              one divine connection a day. I was trying to save the city out of my
              own strength, my own gifting. But God has a plan. He has a way. He
              uses you, but it&rsquo;s not your strength that carries it. That word
              is still what I stand on over a decade later.
            </p>
          </div>

          <PullQuote>
            It will be according to your prayer and one divine connection a day.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              That word also kept our marriage healthy and light at the beginning,
              because it freed me from trying to save the city in a day. Plant
              around the divine connections, build around prayer, and let your
              marriage have air.
            </p>
            <p>
              On the practical side, setting your marriage and family up well from
              the start is critical, and it&rsquo;s something I&rsquo;d do
              differently if I could go back. Some of the places we lived early on,
              the drama and heartache in some of those situations could have been
              avoided. There is sacrifice and surrender in planting as a family, but
              there are things that are avoidable if you set the right things up.
            </p>
            <p>
              Make sure your housing is safe, reasonable, and comfortable. While
              everything else is new and changing and maybe even hard, your home
              can&rsquo;t be compromised. Make sure your wage level is honest about
              the cost of living where you&rsquo;re planting. There will be stretch
              seasons, but as far as it&rsquo;s up to you, don&rsquo;t be so
              squeezed that you can&rsquo;t focus on the work God has for you. Those
              two things keep balance in your personal life and health in your
              marriage so that you can give to the church without being eaten alive
              by it.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The revelation
            </h2>
            <p>
              If you&rsquo;re going to plant a church, you have to know you are
              called. The romantic side of planting wears off fast. The city, the
              intensity, the opposition, all of it hits you in the face. But if you
              know you are called, that grounds you. Get rid of the feeling and dig
              deep so that it&rsquo;s a revelation, not an emotion.
            </p>
            <p>
              A lot of leaders get caught in the in-between, the now-but-not-yet,
              and start to believe the delay means it isn&rsquo;t from God. But
              following Christ is full of now-but-not-yet moments. In our story, I
              got a clear confirmation that we were called. So when it didn&rsquo;t
              happen right away, it was never if, it was when. That security let me
              enjoy the four-year process and deepen the revelation rather than
              force the timing.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The vision
            </h2>
            <p>
              Your church&rsquo;s vision statement can feel like a daunting task.
              Maybe it came easily. Maybe you&rsquo;ve wrestled with it. For us,
              when we were planning the launch I felt the need for a catchy
              statement. I saw all these churches with big powerful phrases and I
              felt like mine needed to be unique and trendy or no one would come.
            </p>
            <p>
              I was stuck in that feeling, but God knew better. I was driving in
              Sydney before we even moved to New York, and the old hymn Be Thou My
              Vision came on the radio. In that moment the Lord spoke to me and our
              vision statement was birthed. He is our vision. Our vision is Jesus
              Christ. I pulled over on the side of the road and wrote it down.
              We&rsquo;ve never steered from it since.
            </p>
          </div>

          <PullQuote>Our vision is Jesus Christ.</PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              So when you&rsquo;re trying to write out your vision, come back to the
              basics. Come back to your first love. Make it simple. Don&rsquo;t try
              to overcomplicate it or feel you have to come up with something hip.
              Jesus is long-lasting. Jesus is forever. If your vision is centered
              simply on him, that&rsquo;s a foundation people want to be part of.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The place
            </h2>
            <p>
              When people told us Williamsburg was a graveyard for churches, I
              thought the soil must be very ready for a new one. Our story in
              planting is one of dying to self and living for New York City. We were
              told so many stories before moving: of churches failing, of pastors
              leaving, of how the city was too tough. You need to know the
              background and history of your city, but not to be deterred by it. To
              be informed, so you build in a way that can uniquely reach the place
              you&rsquo;re called to.
            </p>
            <p>
              You can&rsquo;t come in thinking you&rsquo;re the answer. Many have
              gone before you. Some were fruitful. Some didn&rsquo;t make it. You
              aren&rsquo;t the answer. God is. The approach has to be a
              learner&rsquo;s posture. What can I learn from the people who have
              gone before me? What can I learn about the city, the churches, the
              spiritual climate? Get into positions and relationships where you can
              learn. Safe places to grow and glean.
            </p>
            <p>
              When we were moving to Brooklyn we looked at key stats from 2012 to
              understand the people we&rsquo;d be reaching. 350,000 adults were
              high school dropouts. Homelessness had doubled the year before.
              50,000 young adults were unemployed. Those were just a few, but they
              sharpened who we were called to.
            </p>
            <p>
              Another key is the spiritual history of the place, the last hundred
              or two hundred years. I was studying revivals in New York City before
              we even came. Jeremiah Lanphier was one of the figures I kept
              returning to. He was instrumental in the New York revivals of the
              1850s. His whole story was birthed in prayer. He handed out 20,000
              flyers and six people came to his first prayer meeting. The next week
              it was twenty-something. Then quickly it was six thousand people
              gathering daily to pray. He started that prayer meeting on September
              23rd.
            </p>
            <p>
              While I was studying all of that, I wrote in my journal a date,
              September 22nd, the Sunday closest to the 23rd a year from then. I
              believed that was when we would launch our church. And look what God
              did. When we landed in New York, ran our first Dinner Parties, and
              started looking for a venue for weekly services, we found a space and
              worked out the contract. They told me they couldn&rsquo;t start
              before October. Then out of the blue they called back and said we
              could start earlier. Our first rental would be September 22nd. I went
              and looked at my journal. That was the date I&rsquo;d written down a
              year earlier.
            </p>
            <p>
              God was in all of it. He confirms the smallest details when you give
              them to him. In that moment I thought of Lanphier, and of getting to
              continue a legacy he&rsquo;d started in this city over a century
              before. The history matters. It can be part of how God shapes and
              builds your heart for your city.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/beginning",
              part: "Part One: The Calling",
              title: "The Beginning",
            }}
            next={{
              href: "/church-planting/strategy",
              part: "Part Two: The Plant",
              title: "The Strategy",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
