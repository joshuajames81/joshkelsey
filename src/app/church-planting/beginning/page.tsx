import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "The Beginning: Our Story",
  description:
    "How FOUNT Church began. The Holy Spirit moment in Manhattan, the four-year wait, and landing in Brooklyn with no team, a six-month-old son, and a dream.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/beginning" },
  openGraph: {
    title: "The Beginning: Our Story | Josh Kelsey",
    description:
      "How FOUNT Church began. The Manhattan moment, the four-year wait, and landing in Brooklyn.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Beginning: Our Story",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/beginning",
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
            chapterNumber="01"
            title="Our story."
            intro="Sydney, a conference in Manhattan, a four-year wait, and landing in Brooklyn with no team, a six-month-old son, and a dream. The origin every planter needs to understand before building their own."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              Welcome. Whether you&rsquo;re thinking about planting a church, in the
              middle of starting one, or already planted and want to keep growing, this
              is for you. Over the next ten chapters I&rsquo;ll walk through what
              we&rsquo;ve learned across thirteen years of planting in New York, Paris,
              and Berlin. We&rsquo;re still church planters, still learning, still
              growing. That&rsquo;s the beauty of pastoring, you&rsquo;ll always be
              stretched.
            </p>
            <p>
              Before we go into the lessons though, I want to share how FOUNT began. Our
              story didn&rsquo;t start when we landed in New York in 2013. It started
              four years before that, in Sydney, with a moment I wasn&rsquo;t expecting.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The moment in Manhattan
            </h2>
            <p>
              Georgie and I are both from Sydney, Australia. At the time we were leading
              a young adult ministry at our church, and we&rsquo;d put on a young adults
              conference in Manhattan. I was backstage about to preach when I sensed the
              Holy Spirit say to me, you are called to this city. I was arguing
              internally with God in the moment, can we please talk about this after my
              message. But the voice felt so clear in my spirit that it stopped me.
            </p>
            <p>
              I&rsquo;d always had an affinity with New York. My parents had moved us
              here for a season when I was young so they could plant a church on Long
              Island. But I wasn&rsquo;t thinking about the city in that season of my
              life. I was focused on the conference, focused on what we were building
              in Sydney. Georgie and I were happy with the life we had. But that seed
              dropped in my heart in that moment and it never left.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              The four-year wait
            </h2>
            <p>
              When we got back to Sydney, we knew we didn&rsquo;t want to step out to
              plant without the blessing of our senior pastor. We didn&rsquo;t want to
              twist his arm into endorsing it. We wanted to submit and honor him. We
              thought he might make us wait six months or so. Instead it was four years.
            </p>
            <p>
              Our pastor didn&rsquo;t think we were ready. At the time I thought we
              were. Now, looking back, I can see he was right. We had to let the dream
              die, not because the call was gone, but because we didn&rsquo;t know when
              or how it would happen. We had to decide to maximize the season we were in
              rather than fight for a season that hadn&rsquo;t come yet. Over those four
              years there was a lot of shaping, and I don&rsquo;t think I would be where
              I am today if I hadn&rsquo;t had them.
            </p>
            <p>
              There were confirmations, dreams, prophetic words, real Holy Spirit
              activity, all of it pointing to the call being real. And alongside all of
              that, there was doubt. Insecurity. Fear. Is this really you, God? But the
              call was always greater than the doubt.
            </p>
          </div>

          <PullQuote>
            The call did not leave my mind or my heart.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              Landing in Brooklyn
            </h2>
            <p>
              After four years we moved to New York to plant the church. We landed in
              Brooklyn with no team. Just us as a couple and our six-month-old son and
              a dream in our hearts. My sister and her husband were living in
              Williamsburg at the time, so we went to their place and they asked us,
              so when are you starting the church? And we said this Wednesday.
            </p>
            <p>
              From that point we had our first Dinner Party with five people in my
              sister&rsquo;s apartment. And we&rsquo;ve had a Dinner Party in our
              church every week since.
            </p>
            <p>
              From there we built the church in New York City, and have since planted
              in Paris and Berlin. Thousands of lives changed, people meeting Jesus.
              We went through the journey, learned a lot along the way, and
              we&rsquo;re still learning.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Why this matters to your plant
            </h2>
            <p>
              I share our story not as a template. Your story will be different. God
              speaks to different people in different seasons in different ways. But
              there&rsquo;s a principle here that I want every planter to hear. The
              forming matters. The waiting matters. The moment God first spoke
              matters. Come back to that moment often. When the city gets hard and you
              start wondering whether you heard him correctly, the origin is the
              ground you stand on.
            </p>
            <p>
              That&rsquo;s what the next chapter is about. Not the call itself, but
              the person God is forming through the call. Your why, your heart, your
              marriage, your revelation, your vision, your place. All of that has to
              be in you before the plant can come out of you.
            </p>
          </div>

          <ChapterNav
            next={{
              href: "/church-planting/person",
              part: "Part One: The Calling",
              title: "The Person",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
