import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Leadership Roles: The 2x2 Blueprint of Jesus",
  description:
    "Why we don't lead small groups with one leader and an assistant. The four roles that make a Dinner Party healthy: Host, Hospitality, Follow Up, and Discussion.",
  alternates: { canonical: "https://joshkelsey.com/dinner-parties/leadership-roles" },
  openGraph: {
    title: "Leadership Roles: The 2x2 Blueprint of Jesus | Josh Kelsey",
    description:
      "The four leadership roles that make a Dinner Party healthy, drawn from Jesus sending His disciples two by two.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Leadership Roles: The 2x2 Blueprint of Jesus",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/dinner-parties/leadership-roles",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Dinner Parties Training Library",
    url: "https://joshkelsey.com/dinner-parties",
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
            partName="The Model"
            chapterNumber="03"
            title="Leadership Roles: The 2x2 Blueprint of Jesus."
            intro="Why we don't lead with a solo leader and an assistant. The four roles that make a Dinner Party healthy, drawn from the way Jesus sent His disciples two by two."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              How we lead our groups and how we establish leaders creates the foundation
              for the health and longevity of a Dinner Party. We don&rsquo;t lead with
              just one leader and an assistant, which in my experience has been the
              classic model of small groups. As I was studying the gospels, I saw that
              Jesus sent His disciples out two by two. That lit up something in me. What
              a brilliant idea from Jesus. He understood that collaborative leadership is
              better than the solo leader.
            </p>
            <p>
              When Jesus sends people out in pairs, He&rsquo;s acknowledging that the
              weight of leadership, discipleship, and gospel work isn&rsquo;t meant to
              rest on one person. We&rsquo;ve taken that blueprint and built our Dinner
              Party leadership around four leaders, not one. Four people carrying the
              weight together. That sets up leaders for a win. And we&rsquo;ve found that
              Dinner Parties are a lot healthier, stronger, and more consistent because
              of the four.
            </p>
            <p>
              The benefit of a four-person leadership team is that the group can always
              run. If someone has a bad week, someone is traveling, someone is sick, the
              Dinner Party still goes on. The other benefit is that it&rsquo;s set up to
              be gifting-related. Different people have different gifts, so your leaders
              can have different roles. Not all having to do every part of running the
              group, but truly exercising their gifting and thriving as a leader in their
              zone.
            </p>
          </div>

          <PullQuote attribution="Luke 10:1">
            After this the Lord appointed seventy-two others and sent them two by two
            ahead of Him.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              You&rsquo;re going to have someone who feels really confident leading a
              discussion. Another who has a heart to open their home. Another who loves
              cooking and creating atmosphere. And a fourth who is a connective person,
              extending invitations to new people and being diligent in follow-up.
              It&rsquo;s the combination of these four gifts that we&rsquo;ve found to be
              the sweet spot.
            </p>
            <p>
              Our guidance is that each leader owns one of the four areas. That
              doesn&rsquo;t mean the roles can&rsquo;t ebb and flow, or that people
              can&rsquo;t help one another. But the success of the group rests on the
              ownership of the leader. When each leader is clear on what they&rsquo;re
              overseeing, things don&rsquo;t fall through the cracks.
            </p>
            <p>
              The momentum of the individuals in your church is tied to your small group
              system. The discipleship of each member is limited or released by the
              health of their leader. So if your leaders are collaborative, working as a
              team, in their gifting and grace zones, the individuals and members of your
              church will be healthy and grow.
            </p>
            <p>
              Here are the four roles.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              1. Host
            </h2>
            <p>
              The Host is the person who opens up their home for the Dinner Party. Their
              mission is to create an atmosphere of welcome. Setting the table. Lighting
              candles. Having music on. The space doesn&rsquo;t have to be perfect, but
              it should be thoughtfully set up.
            </p>
            <p>
              The Host should be someone who enjoys opening their home and welcoming
              people in. Someone committed to doing so every week. But when situations
              do come up, when the host is traveling or sick, always have a backup host
              ready. We train our team to have a plan B for every group. The goal is
              consistency with the same host weekly, with the flexibility to move the
              group elsewhere if needed so that it never has to cancel.
            </p>

            <div className="not-prose my-10 border border-border p-6 md:p-8 bg-soft/40">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-4">
                Top Tips for the Host
              </p>
              <ul className="font-serif text-ink/85 space-y-4 leading-relaxed">
                <li>
                  <strong>Clean house.</strong> Dinner Party starts the day before.
                  Clean and be ready the night before so you aren&rsquo;t stressed.
                </li>
                <li>
                  <strong>Set the atmosphere.</strong> Music playing. Candles lit.
                  Designated space for coats and bags before guests arrive.
                </li>
                <li>
                  <strong>Honor your guests.</strong> Make sure everyone has a drink.
                  Clear plates. Tidy up so everyone feels comfortable before discussion.
                </li>
                <li>
                  <strong>Have a backup.</strong> If you&rsquo;re traveling or sick, have
                  a plan B. The group should never cancel.
                </li>
              </ul>
            </div>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              2. Hospitality
            </h2>
            <p>
              The Hospitality leader is in charge of preparing and planning the meal.
              Often this is someone who loves to cook and prepare food. Sometimes this
              role helps the group bring potluck dishes or plans themes for meals. Taco
              nights. Pasta. Breakfast for dinner. This person creates the themes,
              structures the meals, and plans so that everyone can participate and the
              food for the night is delicious. We&rsquo;ll talk more about food and why
              it matters so much in the chapter on Culture.
            </p>

            <div className="not-prose my-10 border border-border p-6 md:p-8 bg-soft/40">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-4">
                Keys to a Great Meal
              </p>
              <ul className="font-serif text-ink/85 space-y-4 leading-relaxed">
                <li>
                  <strong>Communicate.</strong> Plan meals in advance. Talk with the
                  other leaders. Communicate the plan to the group so others can bring
                  sides or complementary dishes.
                </li>
                <li>
                  <strong>Themes are key.</strong> Make it fun. A theme helps the meal
                  come to life and people get excited for the party side of things.
                </li>
                <li>
                  <strong>Cater to your family.</strong> Check for dietary restrictions.
                  If someone is gluten-free, vegan, or vegetarian, have options for all.
                </li>
                <li>
                  <strong>Prep, prep, prep.</strong> Have the meal made and ready by the
                  time guests walk in. Nothing kills the atmosphere like a rushed host.
                </li>
                <li>
                  <strong>Presentation.</strong> Use real serving dishes. Transfer
                  store-bought items into a nice bowl. Small touches go a long way.
                </li>
              </ul>
            </div>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              3. Follow Up
            </h2>
            <p>
              This leader owns the follow-up with Dinner Party guests and new attendees.
              They have a heart to connect with people and help them find community. Once
              someone signs up for the group, this leader reaches out, introduces
              themselves, and builds a connection. They share the details, and they
              become the first point of contact. After someone&rsquo;s first gathering,
              they follow up, ask how the person enjoyed the night, invite them to church
              on Sunday, and build a rhythm of connection.
            </p>
            <p>
              The Follow Up leader also fosters connection across every member of the
              group and reconnects those who haven&rsquo;t been around. A good rule of
              thumb is that a leader should touch base with everyone under their care at
              least once every ten days. This isn&rsquo;t about a task. It&rsquo;s not
              about the phone call or the conversation or the text. It&rsquo;s about
              people. Lives being changed as they experience real love and care in a
              church family.
            </p>
            <p>
              Intentional, personal reach-outs have been the game-changer for our Dinner
              Party system. Small groups can rely on a sign-up form, an email, a tech
              system for connecting new people. All of that is great and helps as you
              grow. But even when you grow, don&rsquo;t forget the personal touch. The
              power of a text saying <em>I missed you at group last night</em> or{" "}
              <em>come sit with me on Sunday</em> can be the moment that reconnects
              someone into the life of the church and grafts them back into relationship
              with God.
            </p>
            <p>
              Every Dinner Party sign-up is a life. A person looking for community.
              Connect with your group on Sundays. Sit together during the service.
              It&rsquo;s a great way to build community.
            </p>
            <p>
              As the Follow Up leader, you&rsquo;re also responsible for attendance. Every
              Dinner Party at FOUNT tracks attendance weekly. Not for the sake of numbers,
              but to properly care for the members of the group. Accurate attendance helps
              track retention, helps you pastor people well, surfaces patterns, and
              ensures that those who stop coming don&rsquo;t slip through the cracks.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              4. Discussion
            </h2>
            <p>
              This person guides the discussion. They let others speak, ask questions,
              and engage with Sunday&rsquo;s message. From the beginning, the discussion
              topic in our groups has been the Sunday message. Instead of having leaders
              dive into a different topic or prepare a separate curriculum, we&rsquo;ve
              seen real fruit from discussing Sunday and applying it to our lives. This
              brings unity across the church. It builds Sundays into Dinner Parties and
              Dinner Parties into Sundays. Instead of a disconnect between what the
              church is learning, we&rsquo;re all growing in the same direction.
            </p>
            <p>
              The goal is to draw out stories and interact with the Scripture and the
              message. Ask questions that engage the group and relate to people&rsquo;s
              struggles and perspectives. Be sensitive to your audience. For those who
              aren&rsquo;t yet believers, stay away from Christianese. Paint a big
              picture. Point people to Jesus. The other leaders should support throughout
              the discussion. It&rsquo;s a team effort. Even if you&rsquo;re not leading
              the discussion, every leader should come with a point to share. Take notes
              during the service. Let the Word become part of you. You&rsquo;ll learn
              more and lead better.
            </p>
            <p>
              Discussion time is for the voice of the whole community to be heard. This
              helps you shepherd and care for people. It helps you find out where
              people actually are. The way we help people open up is for the leader to
              pioneer the moment. We want people to be vulnerable. It&rsquo;s not often
              that people have meaningful conversation. They&rsquo;re craving it. A
              Dinner Party night can be the conversation that changes someone&rsquo;s
              life.
            </p>
            <p>
              The idea is not to have another preach. Sunday is a one-way delivery of
              the Word. But small groups are where the two-way conversation happens.
              It&rsquo;s the Discussion leader&rsquo;s job not to preach another message,
              but to welcome people into the Word. That happens through the
              leader&rsquo;s own vulnerability. Sharing what has challenged them. What
              has impacted them. That&rsquo;s the bouncing-off point for the whole group.
              When you share a specific challenge, the whole room shifts. You can share
              wins and victories too, but make sure you share the challenges and the
              tests along the way.
            </p>
            <p>
              Don&rsquo;t be shocked by what people share. Our culture isn&rsquo;t one of
              condemnation. It&rsquo;s an open space. The response is love, humility,
              understanding, and warmth. A culture of vulnerability and story makes
              growth relatable. We don&rsquo;t need to have arrived to share a
              testimony. We don&rsquo;t need to be perfect to share our story. We let
              God&rsquo;s grace shine through. Wherever people are, let them be there.
              And then help them take the next step.
            </p>

            <div className="not-prose my-10 border border-border p-6 md:p-8 bg-soft/40">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-4">
                Keys for Leading Discussion
              </p>
              <ul className="font-serif text-ink/85 space-y-4 leading-relaxed">
                <li>
                  <strong>Engage.</strong> Ask questions that are open for everyone to
                  answer. Don&rsquo;t spend too much time talking yourself.
                </li>
                <li>
                  <strong>Redirect.</strong> As the leader, feel confident to steer the
                  conversation back with another question if it drifts from the heart of
                  the message.
                </li>
                <li>
                  <strong>Be flexible.</strong> Pray for the people in the room. Let the
                  Holy Spirit lead. If the night didn&rsquo;t hit an expectation,
                  don&rsquo;t take it personally. Keep the focus on pointing people to
                  Jesus.
                </li>
                <li>
                  <strong>Prayer.</strong> End the night strong in prayer. Break into
                  groups or pray as a whole. Create a culture of praying for each other
                  throughout the week.
                </li>
              </ul>
            </div>

            <p>
              Preparation is everything. Be expectant on Sundays. Listen and take notes
              during the message. This helps you digest it and come to discussion with
              specific ways it impacted your life, not just stating the message points.
              Talk with your other leaders before the night. Ask them how Sunday is
              landing for them. Check with the Follow Up leader on who&rsquo;s coming.
              If you know you have a lot of new people coming, tailor your discussion
              accordingly. Don&rsquo;t assume everyone knows the topic or what the night
              will look like. Walk through it at the start. Knowing who is coming helps
              you prepare specifically for them.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/the-night",
              part: "Part Two: The Model",
              title: "The Night: Welcome, Party, Discussion, Prayer",
            }}
            next={{
              href: "/dinner-parties/culture",
              part: "Part Two: The Model",
              title: "Culture: Atmosphere, Food, and Relationships",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
