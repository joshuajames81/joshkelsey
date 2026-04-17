import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Culture: Prayer, Word, Spirit, Unity",
  description:
    "Why we talk about culture four times as much as vision. The four currents that form the culture of a healthy plant: prayer, the word, the Spirit, and unity.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/culture" },
  openGraph: {
    title: "The Culture: Prayer, Word, Spirit, Unity | Josh Kelsey",
    description:
      "Why we talk about culture four times as much as vision. Prayer, word, Spirit, and unity.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Culture: Prayer, Word, Spirit, Unity",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/culture",
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
            partNumber="Two"
            partName="The Plant"
            chapterNumber="04"
            title="Prayer, Word, Spirit, Unity."
            intro="We talk about culture four times as much as vision. How you instill the culture of your church at the beginning will be what it's built on for decades. The four currents that have to be running through the room."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Culture above vision
            </h2>

            <p className="drop-cap">
              We are called to be the preservers of everything that shows the image
              of God. Christians help preserve what is good in the culture around us
              and add flavor where the kingdom is lacking. Culture is what upholds
              and achieves the vision. Our saying at FOUNT is, we talk about culture
              four times as much as we talk about vision. How you instill and create
              a foundation of culture at the beginning will be what your church and
              members are built on.
            </p>
            <p>
              This idea came before we even started. From my previous experiences
              around other leaders and churches, I saw the vision preached over and
              over again and it created real frustration in people. It created a gap
              between the leader and the people. The gap between where we are and
              the fulfillment of the vision is the people&rsquo;s level of
              frustration if we don&rsquo;t focus on culture. Culture is more about
              who you are becoming than where you are going. You never get to the
              vision if you aren&rsquo;t the person who can foster the culture to
              hold it.
            </p>
            <p>
              In a vision-preached environment without culture, people are
              constantly frustrated because all they hear is where we&rsquo;re
              going, not much of where we are. It&rsquo;s the present moments, the
              forming, where culture is built. Abram to Abraham is a culture-forming
              process, a shaping of character through the trials of the middle. The
              promise was the same the whole time. The person had to grow into it.
            </p>
            <p>
              We were able to be content with the five people at our first Dinner
              Party because we did know the vision in our heart. God was going to
              build his church. What we were called to in that moment was to be
              faithful. I had big vision from the start, multiple locations,
              services in different cities, buying a building one day, all while we
              were five people. But what I was called to in that moment was to
              build the culture that would sustain the vision when it came.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Prayer
            </h2>
            <p>
              Out of all the things Jesus taught his disciples, the greatest was how
              to pray. They saw that the source of his strength was his connection
              to the Father. So they asked, teach us how to pray. If they needed to
              learn how to pray walking alongside Jesus, then a culture of prayer in
              our church is what will sustain and build it.
            </p>
            <p>
              The strength of your church is based on each individual&rsquo;s prayer
              life. We felt a strong word from God at the beginning that the church
              would be built from divine connections and according to our prayer.
              We&rsquo;ve seen that again and again. A culture of prayer for you as
              a leader, and in the church you&rsquo;re building, is the engine.
            </p>
            <p>
              The people coming to build your church at the beginning will all be
              new in different ways. New to the city, new to church, or carrying
              experience from other churches that may have modeled prayer differently.
              They bring their own cultures to the table while you&rsquo;re building
              a new one. Be cognizant of that. Build with people from many backgrounds
              without compromising the things you want to instill.
            </p>
            <p>
              Prayer is one of those places where everyone has a different experience.
              You&rsquo;re there to start it healthy and keep it strong. Prayer has
              to be an exchange. Teach and model that prayer is an exchange of what
              we&rsquo;re carrying for the new garment we receive in Christ. You
              can&rsquo;t just say from stage, let&rsquo;s pray, and expect the room
              to erupt. Culture is never built from what we ought to do. It&rsquo;s
              built from a revelation of why.
            </p>
          </div>

          <PullQuote>
            The true power of culture is when it becomes someone&rsquo;s own revelation within the bigger group.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              If your culture of prayer is built out of people knowing they are
              loved, out of each person in the room knowing they are loved by God,
              it becomes a natural part of the community. That&rsquo;s where
              something sparks in an early plant, people start to feel I am loved.
              They feel loved by you, they start to see God differently, and the
              culture of prayer is really built. So start by showing people how
              loved they are. Start with revelation, and culture becomes evident.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The Word
            </h2>
            <p>
              The journey is important, and staying in the word is the key. We want
              to instill in everyone that his word is the engine room for our
              journey. Ensuring that his word is our foundation is what makes our
              churches different from the world. If we&rsquo;re just a gathering
              around a positive subject, we&rsquo;re no more than a club. But if
              we&rsquo;re people of his word, gathering around the living breathing
              word of God, that&rsquo;s when the church has impact. That&rsquo;s
              when the church is living out Acts 2.
            </p>
            <p>
              The word of God challenges us to finish what we started. Many believers
              stop reading the Bible not because it isn&rsquo;t exciting, but because
              it&rsquo;s challenging. The challenge is what will shape and build
              your church. It brings correction to our focus.
            </p>
            <p>
              The word is detailed about how to build our lives and how to build the
              church. You don&rsquo;t have to come up with a new shiny step-process.
              God is detailed, and he has given us a step-by-step for living well.
              Imagine hiring the best architect in the world, getting the designs
              for your dream house, and then deciding not to follow them. Making
              your own changes during the critical building moments. Then wondering
              why it&rsquo;s falling apart. That&rsquo;s building God&rsquo;s
              church without his word as the blueprint.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The Spirit
            </h2>
            <p>
              It&rsquo;s not just a culture, it&rsquo;s a person. To have any level
              of care we have to understand that we need to desire the Holy Spirit.
              Life is a journey of discovering that we cannot save ourselves. Like a
              branch broken off from a tree, it may seem to still have life, but the
              source is broken, and what looks like life for a while will wither.
              We have to build churches on his Spirit being the life and source
              within us.
            </p>
            <p>
              At the beginning of our church we had many new people, many new leaders
              rising up, who all came with different perceptions of the Holy Spirit.
              This was one of the key cultures in which people had the widest range
              of experiences coming in. I realized I could preach and teach on the
              Holy Spirit all I wanted, but it was the revelation of experiencing
              the Spirit that would shape the individuals and therefore the church.
            </p>
            <p>
              We were intentional about creating safe spaces for people to encounter
              the Spirit. Moments of worship, of prayer, of lingering. Georgie and I
              leading people into that. If we wanted a culture of the Spirit in our
              church, people needed deep revelation of their need for him. They
              needed to know him as guide, counselor, comforter. They needed to know
              the person of the Spirit before seeing the gifts.
            </p>
            <p>
              That&rsquo;s why our church grew quickly in the early days. It was the
              first time many of them had experienced the presence of God. They
              hadn&rsquo;t known the Spirit as a real person before, or actually
              desired to encounter him. We can&rsquo;t shy away from this. People
              don&rsquo;t need more talking about Godly things. They need God
              himself. We focused on teaching people how to connect to the presence
              of God and how to wait on his presence.
            </p>
            <p>
              So often churches focus on the gifts of the Spirit, the outputs, what
              he does for us and for others. But we miss the person. Miss who he is.
              Create room in your community, whether it&rsquo;s five or a hundred
              people, to experience the Holy Spirit and get revelation of who he is.
              Then you can build culture around the gifts and grow them in your team.
              You&rsquo;ll see the fruit overflow naturally. It&rsquo;s the who
              before the what. But the what comes naturally after the who.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Unity
            </h2>
            <p>
              Everyone&rsquo;s coming from different backgrounds when you&rsquo;re
              starting. Forming unity from day one will be the glue that keeps your
              church buoyant through every season. That glue is the church that&rsquo;s
              in God&rsquo;s heart. That&rsquo;s the church he designed.
            </p>
            <p>
              Many leaders think a culture of unity is built down the line, once
              you&rsquo;ve got a few years under your belt, once a struggle comes.
              Focus on it before disunity comes. Focus on it before division or
              trial hits. Build it from the start and you&rsquo;ll be strong enough
              to face what&rsquo;s coming. The Church is called to be united on the
              things that matter. The enemy knows that, and will use anything,
              politics, societal views, to try to cause division. The devil wants
              us disconnected because our destiny is in each other.
            </p>
            <p>
              We aren&rsquo;t creating unity. We&rsquo;re joining a unity that already
              exists. You don&rsquo;t have to invent it. You&rsquo;re founded on the
              word, where the unity of Christ already is. Reference his unity to
              build it into who you are.
            </p>
          </div>

          <PullQuote attribution="Ephesians 4">
            There is one body and one Spirit, just as you were called to one hope when you were called; one Lord, one faith, one baptism; one God and Father of all, who is over all and through all and in all.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              That&rsquo;s the unity we&rsquo;re already part of. Point your church
              to this. Point them to the oneness we have in Christ. Because our
              community shines like a light when we can disagree and still stay
              connected in love. That speaks volumes to the world. That&rsquo;s the
              kind of church that attracts a city. Don&rsquo;t be afraid of
              disagreeing opinions, don&rsquo;t feel that unity is everyone agreeing.
              Show how love, relationship, and unity is greater than opinions. If
              your focus is getting everyone&rsquo;s opinions to align, you&rsquo;ll
              just build a religious culture of rules, a control of control. If your
              focus is building relationships with love, grace, and unity, then
              differences become less than God&rsquo;s word and his heart.
            </p>
            <p>
              Within this, there are non-negotiables. I like to say you have to have
              closed fists and open-handed views. Closed fists on the core scriptures,
              the non-negotiables, the foundation of what we believe. Open-handed
              views on the things we may not see eye to eye on, where people can
              still be welcomed and involved. Our job as shepherds is to point people
              to the main thing. Father, Son, Holy Spirit, scripture. Not the rabbit
              holes and side views that create division.
            </p>
            <p>
              Every church has leanings and passions specific to its city. Speak up
              for truth. Speak up for the vulnerable. Speak up for the issues of
              your city. But the foundation is not the issues. The unity we&rsquo;re
              joining is Christ. The main point is that Christ is the cornerstone,
              not the issue. A church crumbles when the cornerstone is a topic or a
              platform rather than his word. Be united on the things that matter.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/strategy",
              part: "Part Two: The Plant",
              title: "The Strategy",
            }}
            next={{
              href: "/church-planting/reach",
              part: "Part Two: The Plant",
              title: "The Reach",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
