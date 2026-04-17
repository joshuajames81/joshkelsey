import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The People: Pastoring, Assimilation, Retention, and Raising Leaders",
  description:
    "Your church is the people. How we pastor through one-on-ones, how we track new sign-ups and retention, and how empowering and releasing ties back to the Dinner Party engine.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/people" },
  openGraph: {
    title: "The People | Josh Kelsey",
    description:
      "Pastoring, assimilation, retention, and raising leaders in a church plant.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The People: Pastoring, Assimilation, Retention, and Raising Leaders",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/people",
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
            chapterNumber="07"
            title="Pastoring, assimilation, retention, and raising leaders."
            intro="Your church is the people. They aren't the means to the vision, they are the vision. How we pastor through one-on-ones, how we track new sign-ups and retention, and how we empower and release leaders."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Pastoring and follow up
            </h2>

            <p className="drop-cap">
              As pastors and leaders, our mission is people. Your church is the
              people. They aren&rsquo;t the means to the vision, they are the
              vision. The biggest shift for me was realizing I couldn&rsquo;t come
              in with my vision and just push forward. I had to start by hearing
              people&rsquo;s stories. I learned so much by taking the time to
              listen, to know names, backgrounds, hurts, triumphs, what people
              were believing for. Georgie and I focused deeply on one-on-ones
              from the start.
            </p>
            <p>
              There are so many to-dos in planting. The list of actionable items
              feels like progress when you cross them off, venue, team, equipment,
              invite cards. But the greatest of all of them is building
              relationships. You build so much heart, equity, and trust when you
              want to hear a person&rsquo;s story.
            </p>
            <p>
              The challenges of building a church in New York can feel huge in
              comparison to the people. Many planters fixate on building the
              church and forget the church is the people, it isn&rsquo;t the
              service or the ministries, it&rsquo;s the stories. That&rsquo;s how
              you weave together a community strong enough to last, and that&rsquo;s
              how you attract a city. Through relationships that are seen, heard,
              valued, and appreciated.
            </p>
            <p>
              The beauty is that people connect to the vision a lot quicker when
              the relationship comes first. That wasn&rsquo;t the goal, the person
              has to be the goal, but God knits together what&rsquo;s founded in
              him. Relationships founded in love, grace, and truth connect to
              vision naturally. People want to build alongside real friends.
            </p>
            <p>
              A decade later, our culture of one-on-ones continues. Our pastors
              and leaders know the focus. Your congregation then is really a room
              full of friends. God showed me early in a vision that we would one
              day fill Barclays Center, the basketball arena in Brooklyn.
              We&rsquo;re not there yet, but I believe we will be. And the vision
              wasn&rsquo;t just thousands gathered. It was a stadium full of
              friends. How we pastor with five people has to be how we pastor
              with a stadium. It&rsquo;s about friendship.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Assimilation systems
            </h2>
            <p>
              As you&rsquo;re building, the clarity of your new-person system is
              critical for retaining and sustaining new people. The impact is in
              the sticking around. You don&rsquo;t want your church to be a place
              people walk in and out of without getting connected. Most new people
              want to. Especially if they sign up, they&rsquo;ve already taken the
              step. It takes courage to walk into a new place alone and more to
              fill in a form.
            </p>
            <p>
              So as leaders we have to put priority on that form. They went
              through two steps of courage to make it happen. Care for that form
              knowing it represents a soul. A life that can be transformed in
              Christ. A life that can impact the city. A life that can change
              generations. You never know what&rsquo;s behind the number.
            </p>
            <p>
              The new-person signup form can be the greatest vehicle for getting
              connected or the greatest hindrance. A few things we&rsquo;ve
              learned:
            </p>
            <ul className="font-serif text-lg text-ink/85 leading-relaxed space-y-3 list-disc pl-5 marker:text-accent">
              <li>
                <strong>Design matters.</strong> Don&rsquo;t make it look like a
                hospital or insurance form. Make it inviting, exciting, welcoming.
              </li>
              <li>
                <strong>Enough but not too much.</strong> Name, email, phone, zip.
                Keep it simple so it feels quick, not a chore.
              </li>
              <li>
                <strong>Keep evolving.</strong> We used a physical card for years,
                then a QR code, now a newer system. Don&rsquo;t be married to one
                way. Stay a step ahead. Set up the lattice for the vine to grow.
              </li>
            </ul>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Our follow-up process
            </h2>
            <p>
              Once the form is filled, the system is what matters. Here&rsquo;s
              what we do:
            </p>
            <ul className="font-serif text-lg text-ink/85 leading-relaxed space-y-3 list-disc pl-5 marker:text-accent">
              <li>
                Sunday signups go into our database on Sunday, no delay.
              </li>
              <li>
                Monday, each new person gets a call. A personal reach-out the day
                after they visited. People are usually surprised and thankful.
                They feel cared for, seen, valued. If there&rsquo;s no answer,
                leave a voicemail and send a follow-up text.
              </li>
              <li>
                This is scalable. As we&rsquo;ve grown, more leaders are involved
                in follow-up, but the principle hasn&rsquo;t changed. Every new
                person still gets a Monday call. Ever. That&rsquo;s non-negotiable.
              </li>
            </ul>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Growth and retention
            </h2>
            <p>
              The shepherd works hard all day to shepherd the sheep. What gets
              lost in the story is that Jesus wasn&rsquo;t against the 99. He&rsquo;s
              the Good Shepherd. He cared for the whole 100. But how did he
              shepherd them so he could leave the 99? How did he know one was
              missing? He must have counted. Details matter to the Shepherd. It
              isn&rsquo;t good enough to see a large crowd. We must know the
              details of who is missing. It&rsquo;s all about the lost.
            </p>
          </div>

          <PullQuote>
            100 and 99 are very similar unless you know them really well.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              We must have momentum in two directions. Chasing the one, and
              attending to the 99 in the detail of their care. You can leave the
              99 because you brought them to pastures and still waters. That&rsquo;s
              what Sundays, good teaching, and discipleship do. They free you up
              to go after the one because the 99 are healthy.
            </p>
            <p>
              New people always come to church. One or two at first, maybe.
              People are curious. People want to learn. People want to be part of
              something bigger. Your heart as a pastor isn&rsquo;t just to create
              a great environment for a new person to attend. It&rsquo;s to create
              the environment that a new person wants to come back to. A second,
              third, fourth time. Someone who plants.
            </p>
            <p>
              Retention is how a church grows. Not just in seeing new people every
              Sunday, but in the second time. That&rsquo;s when people decide to
              stick. True growth in a community isn&rsquo;t the new numbers every
              Sunday, it&rsquo;s the returning people. The new people attending a
              small group. Going back a second time.
            </p>
            <p>
              As a pastor, retention was one of the main stats I watched, and
              still is. Tracking retention matters. Every new signup gets added
              to the database and assigned for follow-up. Within that follow-up,
              someone has an eye on the person&rsquo;s next step. Once
              they&rsquo;re in a small group or a team, they&rsquo;re tracked in
              attendance. Tracking attendance is a detail that shows you care
              for the one, just like the shepherd who went after the one and
              left the 99. Numbers matter. Numbers are souls.
            </p>
            <p>
              Our retention report is monthly. We gather all new people added in
              the past three months, then cross-reference against the full small
              group attendance list from the same period. What comes out is a
              list of new people who have taken a next step, and a list of those
              who haven&rsquo;t. The second list becomes the focus. The goal is
              above 50% as a rolling minimum. The gap becomes the care.
            </p>
            <p>
              Not every member of your church will attend a group. This
              isn&rsquo;t a verdict on membership health. It&rsquo;s an indicator.
              It helps you see who is stepping into community, who needs more
              relational connection, who might be drifting. It helps you pastor
              your group leaders too, because you can see who has new people
              attending their groups and disciple them well in caring for them.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Empowering and releasing leaders
            </h2>
            <p>
              In every church, however big or small, there is the five-fold
              ministry. If you can empower and release it, things grow and things
              multiply. If cells reproduce healthily in your body, your whole body
              is healthy. So often we try to multiply the big parts of the body,
              the church, the ministry, rather than making sure each cell is
              healthy.
            </p>
            <p>
              There&rsquo;s a whole teaching on raising leaders that we run in our
              Dinner Parties training, including the eight keys we use to develop
              and release leaders in a group setting. That material is relevant
              here too, since the Dinner Party is the engine behind how we
              multiply leadership throughout the whole church.
            </p>
            <p>
              <Link
                href="/dinner-parties/raising-leaders"
                className="link-underline text-accent"
              >
                Read the Eight Keys to Raising Leaders in our Dinner Parties library →
              </Link>
            </p>
            <p>
              The core principles translate straight across. See the individual as
              Christ sees them, not in their brokenness but as a new creation. Never
              assume someone understands the vision or has caught the culture, keep
              re-emphasizing the why. Use love to dig up the grace in their life.
              Give opportunity without title. Character over gift. Leadership is
              serving others. Remind people they&rsquo;re valued for who they are,
              not just what they do. People over task, but use tasks to love more
              people.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              You do it, you watch, they do it
            </h2>
            <p>
              Once a leader is identified, equip them. Equipping involves training,
              feedback, and relationships. A simple progression we use:
            </p>
            <ul className="font-serif text-lg text-ink/85 leading-relaxed space-y-3 list-disc pl-5 marker:text-accent">
              <li>
                <strong>You do it.</strong> You fulfill the role until the Lord
                reveals someone else.
              </li>
              <li>
                <strong>You do it, they watch.</strong> Invite a potential leader
                to shadow you. Explain the role clearly. Establish standards of
                excellence. Communicate vision and next steps. Make it
                interactive.
              </li>
              <li>
                <strong>They do it, you watch.</strong> Serve alongside them.
                Provide feedback and encouragement. People develop at different
                speeds, so be mindful.
              </li>
              <li>
                <strong>They do it.</strong> Release them. Delegate not just
                responsibility but authority. Authority lets them grow and bring
                their unique gifting to the role.
              </li>
            </ul>
            <p>
              When you release a leader, they&rsquo;ll do it differently than you
              would. Hold your tongue sometimes. See the bigger picture, it&rsquo;s
              fine, it&rsquo;s just different. Don&rsquo;t release a leader and
              then never check on them. Keep the relational equity strong so
              feedback can continue and you can see them thriving.
            </p>
            <p>
              Build your initial teams this way and teach them to do the same.
              How you train your leaders is how they will train theirs. Getting
              this right at the beginning is how it continues, layer after layer
              of leaders, for years to come.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/practical",
              part: "Part Two: The Plant",
              title: "The Practical",
            }}
            next={{
              href: "/church-planting/trials",
              part: "Part Three: The Long Haul",
              title: "The Trials",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
