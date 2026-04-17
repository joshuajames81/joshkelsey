import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "On preaching the whole text",
  description:
    "Pastor Josh Kelsey on faithful preaching. Why the real question isn't style, it's whose voice is supposed to be loudest in the room.",
  alternates: { canonical: "https://joshkelsey.org/writing/on-preaching-the-whole-text" },
  openGraph: {
    title: "On preaching the whole text | Josh Kelsey",
    description:
      "Preaching isn't about style. It's about whose voice is supposed to be loudest in the room.",
    type: "article",
    publishedTime: "2026-02-10",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "On preaching the whole text",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-02-10",
  dateModified: "2026-02-10",
  mainEntityOfPage: "https://joshkelsey.org/writing/on-preaching-the-whole-text",
};

export default function Post() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />
      <main className="flex-1">
        <article className="max-w-prose mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-12 md:mb-16">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-5">Essay</p>
            <h1 className="font-display text-display-lg font-medium leading-[1.05] text-ink mb-6">
              On preaching the whole text.
            </h1>
            <div className="flex items-center gap-4 text-sm font-sans text-muted">
              <span>Josh Kelsey</span>
              <span aria-hidden>·</span>
              <time dateTime="2026-02-10">February 2026</time>
              <span aria-hidden>·</span>
              <span>7 min read</span>
            </div>
          </header>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              Preaching isn&rsquo;t primarily a question of style. It&rsquo;s a question of
              whose voice is supposed to be loudest in the room. When I step up to preach
              on a Sunday, I am not there because I have something urgent to tell our
              church. I&rsquo;m there because the biblical text has something urgent to
              tell our church, and my job is to get out of its way long enough for it to
              be heard.
            </p>
            <p>
              That sentence sounds humble. In practice it is the hardest discipline in
              pastoral ministry.
            </p>
            <p>
              Every preacher I know has been tempted to start with a conclusion and
              reverse engineer the text to support it. The Sunday is stressful, the news
              cycle is hot, the congregation is hurting about something specific, and
              there&rsquo;s a verse somewhere that almost says the thing you already want
              to say. Grab it, strip it out, put it to work. Nobody will know.
            </p>
            <p>
              Nobody will know except you. And the text. And the Author.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              The text has a shape.
            </h2>
            <p>
              Every passage of Scripture was written in a particular moment, by a
              particular author, to a particular audience, in a particular genre, with a
              particular argument. Those particulars are not decoration. They are the
              shape of what God actually said. When we preach without paying attention to
              them, we are not preaching the text. We are preaching around the text while
              borrowing its authority.
            </p>
            <p>
              This is true whether I&rsquo;m preaching verse by verse through a book, or
              walking through a topic, or unfolding a narrative, or teaching from a single
              passage. The format changes. The conviction doesn&rsquo;t. Whatever the shape
              of the sermon, the text is the thing.
            </p>
            <p>
              This is why I spend so much of my week in the original languages. Not
              because I am showing off. Not because Greek and Hebrew are magic. But
              because the languages hold the shape. A Hebrew verb stem can change what a
              whole paragraph is doing. A Greek participle can tell you that what you
              thought was two ideas is actually one. The closer you get to the text as it
              was written, the harder it becomes to make it say something it was never
              trying to say.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              The congregation deserves the actual thing.
            </h2>
            <p>
              There is a quiet cynicism in some corners of the church that says people
              can&rsquo;t handle real teaching. They need it simple. They need it
              practical. They need it short.
            </p>
            <p>
              I&rsquo;ve never once found that to be true.
            </p>
            <p>
              The people who sit in our chairs on a Sunday are doctors, software
              engineers, artists, lawyers, teachers, finance workers, students. They are
              paid to think hard about things all week. They do not come to church to have
              a children&rsquo;s book read to them. They come, often exhausted, often
              skeptical, often carrying things they haven&rsquo;t told anyone, hoping
              someone will open the Bible and actually mean it.
            </p>
            <p>
              I&rsquo;d rather err on the side of taking them seriously. If a sermon makes
              them work a little, so much the better. They&rsquo;re already working harder
              than the sermon, usually.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              Faithful preaching is not boring.
            </h2>
            <p>
              Preaching the whole text has a reputation, in some quarters, for being dry
              and lecture ish. The best preachers I know are anything but. What faithful
              preaching actually does, when it&rsquo;s good, is earn its emotional
              crescendos from the text instead of smuggling them in from elsewhere. The
              Spirit doesn&rsquo;t need our theatrics. He needs our faithfulness to the
              thing He already said.
            </p>
            <p>
              When that happens, when the text actually opens, the room changes. You can
              feel it. People lean forward. They write things down. They cry without quite
              knowing why. It is not because the preacher was especially clever. It is
              because the Word, finally, got to speak.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              The job.
            </h2>
            <p>
              That&rsquo;s the job. Get out of the way. Pay attention. Trust that God has
              a lot more to say than we ever will, and that our task is simply to let Him
              say it clearly.
            </p>
            <p>
              The week before a sermon is not a performance rehearsal. It is a posture of
              listening. And on Sunday, the goal is never that people leave thinking{" "}
              <em>what a sermon</em>. The goal is that they leave thinking <em>what a
              God</em>.
            </p>
          </div>

          <footer className="mt-16 pt-10 border-t border-border/70 text-sm font-sans text-muted">
            <p>
              Josh Kelsey is the founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="underline">FOUNT Church</a> in New York City,
              planted in 2013 with his wife and co-pastor{" "}
              <a href="https://georgiekelsey.com" className="underline">Georgie Kelsey</a>.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
