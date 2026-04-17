import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Raising Leaders: The 8 Keys",
  description:
    "The kingdom doesn't recruit ready-made leaders. It disciples them. Eight principles for seeing, raising, and releasing leaders in your Dinner Party.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties/raising-leaders" },
  openGraph: {
    title: "Raising Leaders: The 8 Keys | Josh Kelsey",
    description:
      "Eight principles for seeing, raising, and releasing leaders.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Raising Leaders: The 8 Keys",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.org/dinner-parties/raising-leaders",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Dinner Parties Training Library",
    url: "https://joshkelsey.org/dinner-parties",
  },
};

const keys = [
  {
    num: "01",
    title: "See the individual as Christ sees them",
    body:
      "I would always ask our leaders who the next leader in their group was. Who they were raising up. Sometimes the response would be, oh there isn't anyone ready, or there aren't any leaders in our group. I'd challenge them. If Jesus walked into your Dinner Party, would He say the same? There's no way Jesus is looking at your group and saying there are no leaders. He would see everyone as a leader. Every human being has leadership potential. The capacity to open their home. To share a meal. To share the love of Christ. As 2 Corinthians 5 says, no longer regard anyone according to the flesh as you once did Christ, but rather see them as a new creation. Don't see people in their brokenness, in their mistakes. See them as new creations. See the potential. Let them rise to it. Someone saw that first in you. Someone took a chance on you. We are called to do the same.",
  },
  {
    num: "02",
    title: "Don't assume someone understands the vision or has caught the culture",
    body:
      "You have to constantly re-emphasize the heart, the vision, the culture of why we gather, why we have small groups. Don't think that because you shared it once, it's now ingrained. Constantly share the why. The power of the why ignites someone's heart. I've seen time and time again that leaders step up because they're reminded of the vision. As you open your group, always assume there's someone new in the room who needs the whole vision. Even if there isn't, starting with the why reminds everyone and raises up the hearts of your current leaders.",
  },
  {
    num: "03",
    title: "Use love to dig up the grace (gold) in their life",
    body:
      "It's amazing to me how judged people can feel in the church, sometimes by leaders. It's love that digs up the grace in people. Every single person in the group is gifted uniquely. Every person has gold that brings value to the group. Love is the thing that waters the grace and digs up the gold. When love is the culture, the gifting comes forth.",
  },
  {
    num: "04",
    title: "Give opportunity without title",
    body:
      "So often we try to raise leaders by giving titles first. Don't give title without giving responsibility first. Give people opportunity and see how they respond to it. Then you can shape it. You can give feedback. You can develop them before any title comes.",
  },
  {
    num: "05",
    title: "Character over gift",
    body:
      "Gift is important. There is a grace, an anointing on people's lives. But what we are about in building the church is developing people's character. We have to value character over gift. Many times it's easy to elevate someone because of their charisma. They can capture attention when leading discussion. But gift alone only takes a person so far. Character is the foundation.",
  },
  {
    num: "06",
    title: "Leadership is serving others",
    body:
      "If we are unwilling to serve, we will never have Kingdom influence. We have to train leaders to serve. It's not about being in the light. It's not about being the one in the front. It's about serving. That is leadership. Seeing the people who are willing to prepare the meal, to set up the food, to clean the dishes, to do the work behind the scenes just as much as the work in front. That's serving others. That's Kingdom influence.",
  },
  {
    num: "07",
    title: "Remind people they are valued for who they are, not just what they do",
    body:
      "We need to help people see their identity before they do something. We serve from identity in Christ, not for identity. The reason we see so much church burnout in western culture is that people are serving out of a desire to get identity. When someone has to shape them or correct them, their identity is attached to their role. They get offended. They burn out. They don't feel valued, because their identity was attached to what they were doing. We have to raise up leaders whose identity is in Christ first, before anything they do for Him.",
  },
  {
    num: "08",
    title: "People over task",
    body:
      "But use tasks to help love more people in your city and church. So often we can value the task, the things we need to get done, over the person in front of us. We have to train leaders to see the person over the task. The moment someone feels that the task is more important than they are, that their leader sees the task over them, they will leave. It's all about the person.",
  },
];

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
            partName="Leadership"
            chapterNumber="06"
            title="Raising Leaders: The 8 Keys."
            intro="The kingdom doesn't recruit ready-made leaders. It disciples them. Eight principles we've built into our culture for seeing, raising, and releasing leaders in your Dinner Party."
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              The world has mechanisms to find ready-made people. The world recruits. It
              wants to find the person who is already put together, already polished,
              already ready to step in. But in the Kingdom it doesn&rsquo;t work like
              that. None of us are ready-made. The Kingdom disciples people.
              That&rsquo;s why Jesus&rsquo; example of leadership was never to find
              ready-made people. It was built on discipleship.
            </p>
            <p>
              You don&rsquo;t hear Jesus use the word leadership much in the gospels. But
              you do see a lot of scripture about authority. That&rsquo;s essentially
              what leadership is. The handling of power and influence over others. The
              way we raise leaders is by understanding how to transfer authority. How to
              pass power on rather than hoard it. In the world, and in many industries,
              leaders maintain power by giving people tasks without transferring any
              authority. That keeps people as followers. When you delegate tasks, you
              create followers. When you delegate authority, you create leaders.
            </p>
            <p>
              Here are eight principles we&rsquo;ve built into our culture for raising
              leaders in Dinner Parties.
            </p>
          </div>

          <div className="not-prose mt-16 space-y-6">
            {keys.map((k) => (
              <div key={k.num} className="border border-border bg-paper p-6 md:p-8">
                <div className="flex items-start gap-6 md:gap-10">
                  <p className="font-display text-3xl md:text-4xl text-accent shrink-0 leading-none">
                    {k.num}
                  </p>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-ink mb-4 leading-tight">
                      {k.title}
                    </h3>
                    <p className="font-serif text-lg text-ink/85 leading-relaxed">
                      {k.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <PullQuote attribution="2 Corinthians 5:16">
            From now on, therefore, we regard no one according to the flesh. Even though
            we once regarded Christ according to the flesh, we regard Him thus no
            longer.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              These eight keys aren&rsquo;t a checklist. They&rsquo;re a posture. A way
              of seeing the people in your group that, over time, changes everything
              about the group itself. If you&rsquo;ll commit to seeing your people the
              way Christ does, raising them with love rather than pressure, and
              releasing them into gifting rather than holding them in place, you will
              watch your Dinner Party become something far more than a small group. It
              will become a training ground for the Kingdom.
            </p>
            <p>
              Once you&rsquo;ve identified a leader and raised them up, how do you
              actually take the steps to multiply the group? We cover that in the next
              chapter.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/dinner-parties/heart-of-a-leader",
              part: "Part Three: Leadership",
              title: "The Heart of a Leader",
            }}
            next={{
              href: "/dinner-parties/multiplication",
              part: "Part Three: Leadership",
              title: "Multiplication: How to Grow Groups Well",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
