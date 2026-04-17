import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Practical: Services, Worship, Venues, Portable Church, Equipment",
  description:
    "The under-the-hood decisions that make or break a plant's first two years. Service flow, worship teams, venue negotiation, portable church culture, and the systems that scale.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/practical" },
  openGraph: {
    title: "The Practical | Josh Kelsey",
    description:
      "Services, worship, venues, portable church, and the systems that scale.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Practical: Services, Worship, Venues, Portable Church, Equipment",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/practical",
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
            chapterNumber="06"
            title="Services, worship, venues, and the systems that scale."
            intro="The under-the-hood decisions that make or break a plant's first two years. Service flow, worship teams, venue negotiation, portable church culture, and the organization that frees everyone to thrive."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Sundays as a picture of the Kingdom
            </h2>

            <p className="drop-cap">
              When most people think of church they picture a Sunday gathering.
              It&rsquo;s easy to slip into a religious ritual, ticking a box. But
              Sundays are designed as a place to encounter God. In the Bible the
              temple wasn&rsquo;t just a building, it was the center of community
              life and the place where God&rsquo;s presence dwelt. Today each of
              us is a temple the Spirit dwells in. So how much more beautiful when
              God&rsquo;s people gather. It&rsquo;s a picture of paradise. A
              glimpse into the Kingdom Jesus announced. Celebration, worship, the
              teaching of the word, transformation. That&rsquo;s what we want our
              Sundays to be.
            </p>
            <p>
              At the beginning or early stages of your plant, the Sunday gathering
              might be one of your first gatherings, or it might come later. Either
              way, it carries weight. How you set it up is key to how people engage
              with each other and with Jesus.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Timing
            </h2>
            <p>
              The timing of your service is a big part of the initial draw for
              people. Is it too early? Too late? If you&rsquo;re starting with one
              service, and I would suggest starting with one and growing it to
              consistency before launching a second, how do you choose?
            </p>
            <p>
              Think of the future first. Then pick a time that&rsquo;s between the
              two services you eventually want to run. Say you&rsquo;d love a 9am
              and 11am long term. Start with 10am. That gets people comfortable in
              the middle, and when you go to two services you&rsquo;ve got a
              better chance of splitting cleanly. If you started with 11am and
              jumped to 9 and 11, the 11 stays full and the 9 starts from scratch.
              A 10am moving to 9 and 11 splits more evenly.
            </p>
            <p>
              The timing of your service is also a key component of how you
              structure gatherings. Whatever your length is, keep it consistent.
              As your regulars grow, people like to know. If your service is
              dramatically different every week in length, you lose trust. Try to
              hold close to your goal, 1 hour, 90 minutes, whatever works in your
              context. This doesn&rsquo;t mean rigidness. Leave room for the Spirit.
              But have a goal and a schedule.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Connection
            </h2>
            <p>
              Service starts with connection. We don&rsquo;t see service as starting
              when the music starts. Service starts the moment someone walks into
              the venue. The connection time before service is as integral as the
              worship and the word. It could be the moment someone feels at home,
              decides to plant here, opens their heart to Jesus. The emphasis you
              put on this time could be the deciding moment for someone.
            </p>
            <p>
              Appearance matters. Whether you&rsquo;re in a rented school hall or
              your own building, there are small things that cultivate a space
              people want to walk into. Clutter and neglected spaces say something
              about the pride you have in the house.
            </p>
            <p>
              A few keys for the connection time. Welcomers at every threshold, ready
              to greet with a smile, trained, with a heart for the one. Refreshments,
              coffee or tea free for guests, set near team members who can talk and
              connect, a great catching point for someone new who doesn&rsquo;t know
              what to do before service. Clear signage. You don&rsquo;t need a
              million signs, but the language and wayfinding should be clear and
              inviting. People should be able to see where to go for kids, bathrooms,
              service areas, without having to hunt or ask. Keep your branding
              consistent throughout, fonts, colors, design, so it feels like one
              whole.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Service
            </h2>
            <p>
              When you&rsquo;re running your own services there are many elements
              that help. You&rsquo;ve been a part of probably some of the best
              services of your life and some of the cringiest. Each had things that
              worked and didn&rsquo;t, and your context will have its own unique
              things that work and don&rsquo;t.
            </p>
            <p>
              A lot of your service at the beginning depends on your resources and
              your team. The principle is: always stretch, always play within your
              game. Small incremental changes that you can pull off will grow and
              help you find your groove. Like golf, if you know you can&rsquo;t hit
              the shot but your ego is getting the best of you, it isn&rsquo;t the
              smart play. We have to be mindful as leaders, we&rsquo;re overseeing
              volunteers, leading a community growing to love Jesus, leading a new
              person who&rsquo;s never experienced God&rsquo;s love. Run in your
              lane. Don&rsquo;t let ego pick the shot.
            </p>
            <p>
              Example, your worship team. You&rsquo;d love to sing a specific song,
              it&rsquo;s your favorite, it&rsquo;d be great for the church, but the
              team is growing and it&rsquo;s too complicated right now. Pick the
              song they can achieve. Let them lead a great moment in what they can
              do. Chew on mediocrity, but don&rsquo;t get an appetite for it. If
              you&rsquo;ve come from a big church with all the resources, and now
              you&rsquo;re planting with a new team and none of those resources,
              you have to know where you&rsquo;re going and also where you are.
              You&rsquo;re wise about how hard you push.
            </p>
          </div>

          <PullQuote>
            Chew on mediocrity, but don&rsquo;t get an appetite for it.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              The principle that matters most in the beginning is a culture of
              feedback. It&rsquo;s not the fancy worship, the lights, the perfect
              speakers. It&rsquo;s the feedback culture you build your team on.
              Celebrate the wins every Sunday. Make sure there&rsquo;s security and
              safety for feedback. Be wise about when to say something and when
              not to. That&rsquo;s how you shape an incredible service experience,
              through trust, confidence, and a growing team. They know you&rsquo;re
              in it together, so they want to grow and get better. The gifting,
              resources, and people will come. The culture has to form first.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Worship
            </h2>
            <p>
              Worship and word are the two most prominent parts of a service after
              the fellowship time. Building a strong worship team isn&rsquo;t just
              about gifting, it&rsquo;s about heart. How your worship team carries
              the culture is how your church will experience God through worship.
            </p>
            <p>
              Worship is unto God first. And in leading worship unto him,
              you&rsquo;re also aware of serving the people in the room. Teach your
              leaders from the start that it isn&rsquo;t their own solo God moment.
              They may have a powerful relationship with God personally, but leading
              worship is more than that, it&rsquo;s serving people. A worship
              leader having an intimate moment that doesn&rsquo;t connect to the
              room is serving themselves, not the church. That&rsquo;s true for
              everyone on stage, preacher, worship team, all of it. An audience of
              One first, and then also for the one, the person that came in hungry,
              the person that showed up that Sunday in need of an encounter.
            </p>
            <p>
              Be prayerful about empowering worship leaders. Don&rsquo;t rush.
              Don&rsquo;t be afraid to give space to grow. It&rsquo;s easy to
              empower on skill alone. Skill grows. Heart for worship has to be
              foundational. We&rsquo;ve made the mistake of empowering on gift and
              having to make hard leadership shifts later. Pick the people that
              build the heart around worship. Authenticity over performance.
              That&rsquo;s a difficult balance on a stage, because performance
              sneaks in fast. Value authenticity, and the quality will come in a
              genuine way rather than a gift-focused one.
            </p>
            <p>
              Worship leaders have to have a focus on their word and prayer life.
              Things happen, there&rsquo;s grace, but you can&rsquo;t compromise
              the values of your church for a gifted singer. Make hard decisions in
              the early days. That&rsquo;s the foundation you&rsquo;ll build the
              whole team on.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Venues
            </h2>
            <p>
              In the first ten years of our church we were in over thirty-eight
              venues across New York City. In the early days I had to learn the
              power of venue negotiation. Churches are often seen as not capable of
              being business-minded. Being business-minded doesn&rsquo;t mean
              you&rsquo;re not kingdom-minded. It means being aware of your budget,
              having a clear picture of what you can spend, and being wise in
              negotiation. You may love a venue and not be able to afford it. Be
              careful not to fall in love with a venue outside of good stewardship.
            </p>
            <p>
              When we were launching our first weekly services, I found the perfect
              venue in Williamsburg. A music venue right in the center of the
              neighborhood. When I first reached out they wanted ten to fifteen
              thousand dollars a Sunday. Out of reach. But I didn&rsquo;t stop at
              that first conversation. After negotiating we got it to five hundred
              a Sunday.
            </p>
            <p>
              I could have walked away after the first number. Instead I proposed
              what we offered. I shared how we&rsquo;d add value to the community.
              I was honest, this is what we can afford, is there any way you could
              consider it. Clear, confident, a clear reason why we were adding
              value. We promised they wouldn&rsquo;t have to worry about a thing,
              we&rsquo;d leave it better than we found it. That built a great
              relationship. We were there for our first two years as a church.
            </p>
            <p>
              Some venues don&rsquo;t work out. When we launched our second location
              I found a venue in a new neighborhood. At the first service we filled
              the space, and the owner told me after they didn&rsquo;t want us
              back. They didn&rsquo;t want a church in that space. We&rsquo;d just
              launched a whole location, marketed it, told our church about it. At
              that moment I was frustrated. God said, why would you want to come
              back there. You already filled it, there&rsquo;s no space to grow, I
              have a better place for you. Sure enough we found another venue and
              grew into it.
            </p>
            <p>
              You have to know your limits and also know when you can stretch. My
              faith never wavered when we needed to find a venue because God always
              came through. Closed doors don&rsquo;t mean no, sometimes they mean
              something better around the corner. And push as hard as you can. A
              business person selling a product isn&rsquo;t going to have more
              conviction than you selling the gospel in a city. Don&rsquo;t lose
              your conviction because someone says no.
            </p>
            <p>
              All of this works best when it&rsquo;s birthed in prayer. Even the
              smartest venue negotiator is only as strong as the prayers behind it.
              At one point our eyes were on an iconic music venue nearby. Friends
              told us no church had ever met there, there was no way they&rsquo;d
              let us in. We decided to persist. We reached out, negotiated, talked
              to not just the building manager but the owner over multiple venues
              across the city. The first answer was no, but we continued. Georgie
              walked the neighborhood with our son and laid hands on the outside
              of the venue, praying that it would be a house of God. A place that
              hosted major artists and thousands of people, known for being a place
              of worship.
            </p>
            <p>
              Through those prayers the no&rsquo;s got lighter. The conversation
              continued. We showed professionalism, excellence, timeliness, respect
              of the space. You&rsquo;re a client, but a different kind of client,
              the Kingdom comes through in how you carry yourself, not always
              explicitly but in kindness and strength. The no turned to a yes. We
              signed a contract and became the center of that neighborhood. We
              still meet there today. That&rsquo;s what relationships build. Not
              just inside your church, but outside of it, in your city.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Portable church
            </h2>
            <p>
              Your launch may not be a portable model, but there are elements here
              that apply anywhere. Whether you own your building or set up and take
              down every week, a portable church culture has a lot of strength.
            </p>
            <p>
              First, it&rsquo;s all about the team. A great team is make-or-break
              for set-up and take-down culture. Not owning a venue actually has
              real perks for a plant. It creates more leadership roles and more
              room for people to grow. The church isn&rsquo;t built on a pastor
              and a handful of leaders running everything, it&rsquo;s built on a
              leadership team with an army of volunteers. Ownership grows because
              people see their presence matters. If they weren&rsquo;t there,
              something would be missing. That&rsquo;s valuable in a way that just
              attending a service isn&rsquo;t.
            </p>
            <p>
              A key part of portable church is timing. Two pitfalls. Not enough
              time creates an anxious environment where people feel rushed and
              excellence falls through. Too much time creates a relaxed culture
              where excellence also falls through, and burnout or apathy creeps in
              because people aren&rsquo;t sure their time is being spent well. Find
              the sweet spot. The amount of time that gets everything done with room
              to breathe. Enough for everyone to have something meaningful to do.
              People serve because they want to bring their gifts, if they see
              they&rsquo;re not needed they either shrink back or stop coming
              altogether. The specific amount of time will be different for every
              church, but the point is it matters.
            </p>
            <p>
              The key principle is organization beforehand. If all the right
              conversations happen before Sunday, the team comes prepared, everything
              runs smoothly, and you as a leader can spend your focus caring for
              people rather than filling gaps. Especially when the team is small,
              you set the culture from day one. Everyone is talked to before
              Sunday, everyone knows their role, their responsibility, who to go
              to with questions.
            </p>
            <p>
              Communication after is just as important. As you pack down, make sure
              there&rsquo;s encouragement and celebration. Personal encouragement,
              a feedback culture that notices the big things and the little things
              together so the team can grow for next week. Care for your team well
              through hospitality. Food. Even as you&rsquo;re small and growing,
              let some of the budget go to the team. When they&rsquo;re hauling
              bins and setting up equipment, food lifts them physically and sets
              them up spiritually for the day.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Equipment and systems
            </h2>
            <p>
              From the start, no matter if you have one box or a hundred, the
              organization of your equipment is critical for caring for your items
              and for caring for your team. How you organize affects the culture.
              A disorganized system tells volunteers two things: you don&rsquo;t
              value the church&rsquo;s finances, because every bin and machine is
              someone&rsquo;s giving, and you don&rsquo;t care about the ease of
              their serving, because they have to figure it out every week.
            </p>
            <p>
              Labels and color coding matter. Create a system that isn&rsquo;t just
              in one leader&rsquo;s head. Print it. Share it. Put it on the
              equipment room wall, the truck, the storage area. That lets people
              jump in and serve without needing onboarding every week. It also
              creates scalability. Sometimes a team gets stuck because the system
              lives in one person&rsquo;s head, and when they&rsquo;re not there,
              everything breaks. Plants get stuck here more than people realize.
              Have scalable systems from the start. Labeled, organized, printable,
              accessible, teachable. Always have new people learning them, never
              dependent on the one person who knows where all the cords go.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/reach",
              part: "Part Two: The Plant",
              title: "The Reach",
            }}
            next={{
              href: "/church-planting/people",
              part: "Part Two: The Plant",
              title: "The People",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
