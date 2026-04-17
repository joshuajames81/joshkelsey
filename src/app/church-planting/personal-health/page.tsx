import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Personal Health: The Individual Leader, Personal Devotion, Support",
  description:
    "The private life of the planter is the ceiling of the plant. What has to be non-negotiable in your own walk with God, and who you cannot do this without.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/personal-health" },
  openGraph: {
    title: "Personal Health | Josh Kelsey",
    description:
      "The private life of the planter is the ceiling of the plant.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Personal Health: The Individual Leader, Personal Devotion, Support",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/personal-health",
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
            chapterNumber="09"
            title="The individual leader, personal devotion, support."
            intro="The private life of the planter is the ceiling of the plant. What has to be non-negotiable in your own walk with God, and who you cannot do this without."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              The individual leader
            </h2>

            <p className="drop-cap">
              When you&rsquo;re planting a church you&rsquo;re studying, praying,
              reading, observing great cultures. Then you get there in the moment
              to start and it feels overwhelming. Your mind goes blank. You need
              to be reminded that God is your answer, in every season of the
              church. The early stage of feeling on your own, all sorts of leaders
              in scripture went through those moments. Those cave moments. We had
              to learn on our own that it&rsquo;s us and God. If you don&rsquo;t
              learn that early as a planter, you&rsquo;ll end up relying on your
              own strength, or putting too much pressure on the people around
              you to be your foundation rather than God. That&rsquo;s where your
              prayer life is forged. That&rsquo;s where your weakness becomes
              God&rsquo;s strength in you.
            </p>
            <p>
              During the years where we were building momentum as a church, growing
              fast and seeing fruit, I can look back now and know I was living
              outside my window. I was running on adrenaline. So much pressure, so
              much demand, fight or flight. I didn&rsquo;t realize my nervous
              system was on eleven. This season happened right before Covid hit.
              When Covid came, I was already at that state, and I just tried to
              keep alive what we had built. I didn&rsquo;t step back and ask if it
              was sustainable. I didn&rsquo;t fully grasp the impact of living in
              that zone.
            </p>
            <p>
              I was in a burnout season. I felt resentment and even a disdain
              toward the church I had built. I was codependent on it. I was
              getting a lot of my emotional energy from the church.
            </p>
          </div>

          <PullQuote>
            Your strength can also be your greatest weakness.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              I share that so we can see, our strength can also be our greatest
              weakness. Part of my strength is my drive. It can backfire if
              it&rsquo;s not managed. I like impossible things. You may relate, or
              it may be another area in your life that&rsquo;s your strength. But
              realize that the thing that fuels you can also be your greatest
              hindrance, because you can end up leading from the flesh and the
              gift rather than the Spirit. You can outrun the favor and the grace
              of God and start operating out of your own striving. God will grace
              you to do something, and the success of that is where you&rsquo;re
              tested in how you manage it. How you manage the success and the
              fruit shows whether you&rsquo;ll continue to lead from the Spirit or
              from the flesh. It&rsquo;s not your hustle that builds the church.
              It&rsquo;s the Spirit.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Personal devotion
            </h2>
            <p>
              So often as pastors we spend all our devotion time on other people.
              We read the word to prepare a message. We pray through situations
              for the people we&rsquo;re shepherding. We easily miss spending time
              with the Lord just for ourselves. This is one of the great pitfalls
              of the journey, and it leads to an unhealthy life emotionally and
              spiritually.
            </p>
            <p>
              The place of revelation, the place of peace, has to be first and
              foremost between him and you. If it&rsquo;s only for others, when
              hurt or offense or difficulty comes, you end up projecting it onto
              God and creating a disconnect between you and him. Over time the
              jadedness from dealing with people bleeds into your view of God. You
              go numb toward God because of hurt from people. People become your
              God if you only spend time with him for them.
            </p>
            <p>
              Three pitfalls where personal devotion falls away:
            </p>
            <p>
              <strong>You&rsquo;re too busy.</strong> Doing everything for everyone
              else. You end up not saying what you think, bottling up emotions,
              not going to God for prayer and guidance. Instead you keep it all
              in. That&rsquo;s where the jadedness toward God gets built.
            </p>
            <p>
              <strong>You&rsquo;re under too much pressure.</strong> You take on
              the pressure and start to believe you can handle it alone. A false
              god of self forms in your life. Personal devotion doesn&rsquo;t feel
              necessary because you&rsquo;re attempting to carry it all.
            </p>
            <p>
              <strong>You don&rsquo;t see the fruit.</strong> Expectations
              aren&rsquo;t met. This causes personal frustration toward yourself
              and toward God. You create distance because you aren&rsquo;t seeing
              him working.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              How to get back on track
            </h2>
            <p>
              Maybe you&rsquo;ve been in one of those pitfalls. Or maybe
              you&rsquo;re thinking, Josh, that will never be me, I love the Lord
              too much to stop spending time with him. The reality is you will
              face one of them. It might not be a huge struggle, but it will come.
              You have to focus on getting out of it with God, before you try to
              get out of it yourself. Three things that help:
            </p>
            <p>
              <strong>Be honest with the Lord.</strong> Religion says fake it,
              pretend, act like you&rsquo;re ok. Relationship says be honest, be
              open, be vulnerable to find freedom. Acknowledge first why
              you&rsquo;re not spending time with him. What&rsquo;s your reason?
              How did you fall away?
            </p>
            <p>
              <strong>Know that God can handle it.</strong> He can handle your
              anger, your frustration, your numbness. The Psalmists knew this. He
              can handle your failure, anger, mistakes. He&rsquo;s bigger than
              your emotions.
            </p>
            <p>
              <strong>Be diligent and intentional.</strong> The only way to set
              up personal devotion again, in the midst of business and pressure,
              is being intentional. You have to hold the revelation that it
              matters. If that revelation isn&rsquo;t clear, personal devotion
              will be the first thing to go when the hard days come.
            </p>
            <p>
              At different stages this will happen differently. You&rsquo;ll have
              your own indicators of when your personal devotion is slipping. Know
              the steps to come back. Be honest, know God is bigger, be
              intentional to change. You can see the warning signs and respond
              early. There will still be ups and downs. Be OK with them and keep
              growing.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The support
            </h2>
            <p>
              You have to be intentional about creating a network around you. You
              have to get over the fear of not having it together, of being
              vulnerable, and find safe places to go where you can be real while
              still being filled with faith. If you already have a great network
              as you start, keep fostering it. Water those relationships. They
              will carry you in the beginning days.
            </p>
            <p>
              If you don&rsquo;t, here&rsquo;s what we did. Pray for friends.
              Specifically. God cares about your kids, your marriage, your
              friendships. Pastors need friends. You need a great team, and you
              need real friends in your life. The support of friendship will carry
              you through so many trials.
            </p>
            <p>
              Understand that a culture of honor is not compromised by friendship.
              Some pastors feel they can&rsquo;t have friends in their church, that
              it would dilute their authority. That can happen if you don&rsquo;t
              live well among them. So what often happens is that pastors have all
              their friends outside the church. Which builds a separation. You
              draw your health outside while teaching your church to build it
              inside. You have to example what you want to replicate. Be
              intentional about building friendships from the beginning.
            </p>
            <p>
              That said, build friendship where there is trust, security, and
              vulnerability. Don&rsquo;t open up to that level with every person
              on your team. Pray. Ask God to reveal the people you can build that
              trust with. Keep them close.
            </p>
            <p>
              Once you have those people, you don&rsquo;t have to talk about the
              church with them. Be normal. Talk about fun things. Your kids. Your
              families. Movies. Books. Talk about your personal relationship with
              God. Talk about scriptures impacting you, not just the message from
              Sunday. Let the person in. Glean from them. Iron sharpens iron, not
              only in church contexts, but in the relational health of ordinary
              friendship.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/trials",
              part: "Part Three: The Long Haul",
              title: "The Trials",
            }}
            next={{
              href: "/church-planting/generations",
              part: "Part Three: The Long Haul",
              title: "Generations",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
