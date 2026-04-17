import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Reach: Divine Connections, the Neighborhood, and the Stained-Glass Window",
  description:
    "One divine connection a day is 365 people you can impact in a year. How we reach a city through proximity, relationship, and a new kind of stained-glass window.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/reach" },
  openGraph: {
    title: "The Reach: Divine Connections, the Neighborhood, and the Stained-Glass Window | Josh Kelsey",
    description:
      "One divine connection a day is 365 people. How we reach a city through proximity, relationship, and social media.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Reach: Divine Connections, the Neighborhood, and the Stained-Glass Window",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/reach",
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
            chapterNumber="05"
            title="Divine connections, the neighborhood, the stained-glass window."
            intro="One divine connection a day is 365 people you can impact in a year. How a plant actually reaches a city, the theology behind going after the one, and what social media is really for."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Divine connections
            </h2>

            <p className="drop-cap">
              One of the key moments from the Holy Spirit at the beginning of our
              church was when he spoke to me and said, it will be according to your
              prayer and one divine connection a day. That word freed me as a
              leader, and it gave me a clear way to actually reach the city. One
              divine connection a day is 365 people you can impact in a year without
              any team at all. Whether you have a massive team to start or just a
              couple, it&rsquo;s 365 in one year.
            </p>
            <p>
              Right after God gave me that word, we were walking around Brooklyn the
              next day with our son in the stroller. It was freezing. All the kids
              in the city had these big stroller sleeping bags for the cold. We
              didn&rsquo;t know we needed one, having just landed from Australia,
              so we went to a baby store in the neighborhood. There we met our
              first divine connection, a girl named Damaris, who is still part of
              our church and team over ten years later. Through her, probably more
              than a hundred people have been connected. From that one connection
              she had more connections and more invitations, and now hundreds of
              people are in our church because of one.
            </p>
          </div>

          <PullQuote>
            There is power in the one. When we go after the one, God builds the church.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              That&rsquo;s a theme through this whole library. When we go after the
              one, God builds the church. If our vision is to reach our city, we
              have to start with the one divine connection. The reach will feel too
              overwhelming and too vast if we try to go after everyone. But if we
              just believe for one divine connection a day, and teach our future
              teams to do the same, the church will be built. The reach becomes
              exponential, not limited by a system or structure, built on
              relationship and personal revelation that God empowers each of us
              for the sphere we&rsquo;re in.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The neighborhood
            </h2>
            <p>
              A key to divine connections actually starting to get momentum is a
              simple but powerful part of planting. Live in the area you&rsquo;re
              planting in. I&rsquo;ve heard so many stories of planters moving to a
              neighborhood and then planting in a church in the neighboring city or
              county. For all kinds of reasons. It disconnects you from your start-up
              place. There may be limits on what you can do as a couple or a family,
              but our heart is to live where you want your church to be. If your
              church will meet in a subdivision nearby, or the venue is just down
              the block, proximity is key.
            </p>
            <p>
              You want to see the barista at your local coffee shop every day and
              invite them to the church down the road. You want the parents at your
              kids&rsquo; school, the ones you build real relationships with, to be
              close enough that church is easy and accessible. Living in your
              neighborhood is loving your neighborhood. If God has placed a city on
              your heart, your love and care for it will only deepen as you put
              roots in. Your future church will see your heart for the area, and
              your own capacity will grow as you build not just a church&rsquo;s
              home but yours.
            </p>
            <p>
              Every location and city we&rsquo;ve planted, we&rsquo;ve asked our
              pastors to live in the area. By planting roots, walking the streets,
              running into people, building divine connections, loving your
              neighborhood, the church is being built seven days a week and not
              just the one. Your daily life spills into the area, and the church
              is seen through all of it, not just Sundays.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Marketing and social media
            </h2>
            <p>
              We live in a moment where social media is one of the greatest tools
              for reaching people outside the church. When it&rsquo;s not used well
              it can become a place of comparison and negativity for you as a
              planter. You can view it as something to keep up with, or to measure
              yourself against other churches. But when used as a tool to get the
              gospel out, it has a reach far greater than you or your team can have
              on your own in your city.
            </p>
            <p>
              How we&rsquo;ve always viewed social media at FOUNT is that it&rsquo;s
              the modern stained-glass window of the church. Years ago, every church
              had a building and a sanctuary, and the stained-glass window was a
              staple. If you&rsquo;re planting and not meeting in a traditional
              building, maybe you never will, maybe you&rsquo;re in schools,
              warehouses, and music venues, that iconic stained-glass window
              isn&rsquo;t something the outside world sees.
            </p>
            <p>
              Look at it from a new angle. The stained-glass window was always
              there as a visual of the beauty within the building. The glory of God
              reflected through painted glass so that people outside would see the
              beauty inside. It was a billboard before billboards existed. A social
              post before social media existed. A visual of God&rsquo;s glory to
              the outside world. Your social media is that now. It&rsquo;s the
              visual for the city to see God&rsquo;s glory happening within your
              church. A way to reflect glory, to shine bright, and to do it in a
              beautiful and compelling way.
            </p>
          </div>

          <PullQuote>
            Your social media is the modern stained-glass window.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              When you see it that way, your social media has immense importance in
              reaching your city. Use it to actually show God&rsquo;s glory. Make it
              visually compelling. Make people stop scrolling and see the awe of
              God, the way someone walking by a stained-glass window stops and
              looks up.
            </p>
            <p>
              A practical rule we&rsquo;ve used from the start: inspire two times
              more than you inform. Your social media will need to carry
              information sometimes, times and places and details, but that
              shouldn&rsquo;t be its main purpose. People need to be inspired more
              than they need to be informed.
            </p>
            <p>
              From the start we used that ratio, and made sure we were sharing
              stories, the word of God, and impact. Creatively designed scriptures,
              devotionals, thoughts to start your day, stories of lives changed.
              People are drawn to people. Share the testimonies of your people from
              the beginning. If you have five people in your church, share the
              story of one of them. Share what God has done through their life and
              how being part of the community is shaping them. That connection to a
              person will pull new people into the why faster than anything the
              pastor says.
            </p>
            <p>
              Another good lens is to treat your social media like a foyer. On
              Sundays, your foyer has welcomers engaging new people. Use the same
              mindset online. When you&rsquo;re new and growing followers, reach
              out to new followers and introduce yourself. Like a new person walking
              through the door. Send a DM. Welcome them, tell them you&rsquo;re a
              new church in the area, mention the next gathering. That personal
              reach-out can land really hard on someone. If it&rsquo;s for the
              one, it&rsquo;s always worth it.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The power of stories
            </h2>
            <p>
              The power of marketing from the beginning is all about the story.
              Your story. The story of how you started and why. Your story as a
              couple. And then the stories of the people coming, their testimonies
              with Jesus, how God has changed their lives. The power of stories in
              reaching people will be the key to how you reach those outside your
              walls.
            </p>
            <p>
              One thing we did from the beginning was share video stories at every
              gathering. We must have over five hundred video stories of lives
              changed across the years. What we found was that hearing from real
              people creates a culture of vulnerability, trust, and love in your
              community, because you hear of a life changed, and it reminds
              everyone God is alive and at work.
            </p>
            <p>
              In your context a video testimony might not be feasible from day one.
              Adjust to what works, written blogs, photos with quotes, whatever the
              medium is. The medium isn&rsquo;t the point. The story and the
              interview are.
            </p>
            <p>
              For every story we want to draw out Jesus transforming a life. Past,
              trial, present, community, hope, future. Remember that stories are
              never complete. Never let it seem like everyone&rsquo;s story has
              arrived at the destination to be worth telling. The journey is where
              God&rsquo;s glory is revealed. That&rsquo;s what we want to highlight.
              His glory through their story.
            </p>
            <p>
              A few questions we ask that have drawn gold out of people:
            </p>
            <ul className="font-serif text-lg text-ink/85 leading-relaxed space-y-3 list-disc pl-5 marker:text-accent">
              <li>Describe your first experience with God. How did your relationship with him start?</li>
              <li>Talk through your upbringing, if there&rsquo;s something specific from that season.</li>
              <li>What have you walked through that you&rsquo;ve seen God bring you out of?</li>
              <li>What did you see God do through that?</li>
              <li>How did you find our church and get connected?</li>
              <li>Where have you seen prayers answered lately? How has God changed your world?</li>
              <li>What is God teaching you now?</li>
              <li>How do you think God sees you now?</li>
            </ul>
            <p>
              However you set up your storytelling, make it a forefront of your
              marketing and social media from the start. Spend more time there than
              on event-based marketing. People will be inspired, they&rsquo;ll want
              to share your community with their friends, and they&rsquo;ll stick
              around.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/culture",
              part: "Part Two: The Plant",
              title: "The Culture",
            }}
            next={{
              href: "/church-planting/practical",
              part: "Part Two: The Plant",
              title: "The Practical",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
