import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pressed: The Oil of Joy is the Oil of Crushing",
  description:
    "A pastoral reflection on Gethsemane, the Hebrew gat shemanim, Isaiah 61, and why the same word names both the garden where Jesus was crushed and the oil of gladness given to those who mourn.",
  alternates: { canonical: "https://joshkelsey.org/writing/the-press" },
  openGraph: {
    title: "Pressed | Josh Kelsey",
    description: "Gethsemane means press of oils. The oil of joy is the oil of crushing.",
    type: "article",
    publishedTime: "2026-05-08",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pressed: The Oil of Joy is the Oil of Crushing",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  mainEntityOfPage: "https://joshkelsey.org/writing/the-press",
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
              The Press.
            </h1>
            <p className="font-serif italic text-xl text-ink/75 mb-6 leading-snug">
              The oil of joy is the oil of crushing.
            </p>
            <div className="flex items-center gap-4 text-sm font-sans text-muted">
              <span>Josh Kelsey</span>
              <span aria-hidden>&middot;</span>
              <time dateTime="2026-05-08">May 2026</time>
              <span aria-hidden>&middot;</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              There is a place on the western slope of the Mount of Olives where, two thousand years ago, an olive press worked through the harvest months. The Hebrew is plain about what happened there. <em>Gat shemanim</em>. Press of oils. We anglicized it into one word.
            </p>
            <p>Gethsemane.</p>
            <p>
              The garden where Jesus sweat blood was named, in advance, after the very thing that was about to happen to him. He went to the press to be pressed. He chose the place on purpose.
            </p>
            <p>
              Olives do not give oil voluntarily. The fruit has to be broken. In the ancient method there were three pressings. The first, gentlest, produced the finest oil, the kind reserved for the temple lamp, for anointing kings, for healing wounds. The second pressing was heavier, and that oil went into cooking pots. The third crushed the pit itself, and the rough oil that came out burned in clay lamps until morning. Nothing was thrown away.
            </p>
            <p>
              The Hebrew Bible never apologizes for this image. Samuel pours oil on a forgotten shepherd boy and that boy becomes king. A widow with a creditor at the door pours her last jar into every empty vessel she can borrow, and it does not stop until there are no more vessels. Psalm 23 puts the oil on the head of a man who has just walked through the valley of the shadow. The thing that comforts and consecrates and heals the people of God is, almost every time, the product of something that has been broken.
            </p>
            <p>
              Some of you carry losses I do not know about. Some of you carry a public version of pain that has been written about by people who got the details wrong. Some of you are lying awake at three in the morning replaying conversations. Some of you have been told, in spiritualized language, that what you are walking through is a gift, and you are too tired to argue but too honest to agree.
            </p>
            <p>
              While others make light, and others look on and judge, while others mock, while others betray even when no wrong has been done, the press keeps doing its work. That is the part nobody warns you about. The crushing rarely happens in private. There is usually an audience.
            </p>
            <p>
              The crushing is not the gift. The crushing is the crushing. Olives do not enjoy the press. Jesus asked three times for the cup to pass. He did not perform peace. Mark uses a Greek word in 14:33 that translators have wrestled with for centuries: <em>ekthambeisthai</em>. Something close to horror. Something close to being struck out of yourself. He was not romantic about what was coming.
            </p>
            <p>
              And when they took him out of the garden, Pilate said it three separate times in John&rsquo;s gospel: <em>I find no crime in him</em>. The press did not pause for the verdict. The mockers kept mocking. The betrayer had already left the room. The disciples slept through the worst hour of his life. Innocence did not stop the crushing. It never has.
            </p>
            <p>So the question is not whether the press hurts. The question is what comes out.</p>
            <p>
              What comes out of his press is the part the prophets could only hint at. Centuries earlier, the sons of Korah wrote a song about a king anointed with <em>shemen sasson</em>, the oil of gladness, above all his companions. Isaiah, working in the same root, said the Servant would come to give <em>shemen sasson</em> in place of mourning, oil of joy where the ashes had been. Both prophecies share a Hebrew word with the garden itself. <em>Shemen</em>. The very thing pressed out of broken olives. The oil of joy is the oil of crushing. Same word. Same substance. It does not exist apart from a press.
            </p>
            <p>
              We rarely choose the press. Most of us would not choose it if we could see it coming. He saw it coming and walked into it on purpose. <em>No one takes my life from me</em>, he said, <em>I lay it down of my own accord</em>. The disciples were dragged toward Gethsemane in the dark. He led them.
            </p>
            <p>
              What flowed out of him there, and out of him at the cross, and out of him on the third morning, did not stay with him. Fifty days later it fell on a hundred and twenty people in an upper room, and Peter stood up and said, <em>this is what was spoken by the prophet Joel</em>. The oil pressed out of Jesus is the Spirit poured out on us. Christos means anointed. Christian means marked by the same oil. Every steady voice that has ever ministered to you in a hard season was carrying, somewhere underneath, oil that came out of his press, not theirs. His was the pressing that changed everything. Ours only ever participate in his.
            </p>
            <p>
              Paul writes to the Corinthians from inside his own press. Afflicted in every way but not crushed. Perplexed but not driven to despair. Struck down but not destroyed. The Greek verbs pile up like things that did not finish him off. Then, as if abstraction will not do, he says we always carry in our body the dying of Jesus, so that the life of Jesus may be visible in our body.
            </p>
            <p>
              In this last year, the people who have steadied me are not the ones with the cleanest stories. They are the ones whose voices have a particular timbre, a steadiness underneath the words, that you only get from having been crushed and having let the oil flow out instead of hoarding it. You can hear it, though I cannot quite tell you what you are hearing. There is no faking it, or if there is I have not figured out how. The oil tells the truth about the press.
            </p>
            <p>
              The opposite is also true, and harder to say. You can be crushed and produce nothing. You can be pressed and let the fruit rot. You can take the press personally, as if it were a verdict, and seal yourself shut. I have done that in seasons, and not only in the seasons you would expect. The oil is not automatic. The pressing alone is not the ministry. What you do with what comes out, or fail to do, is.
            </p>
            <p>
              There is a woman in Mark 14 who breaks an alabaster jar over the head of Jesus. The text is precise: she broke it. The perfume could not have come out otherwise. Jesus calls what she did a beautiful work, and tells the disciples that wherever the gospel is preached in the whole world, what she has done will be told in memory of her. She did not save the jar. She did not protect the asset. She ruined it in front of everyone, and the room smelled of her brokenness for the rest of the night. Jesus carried that fragrance into Gethsemane the next evening, into the courtroom, and to the cross.
            </p>
            <p>The oil that anoints other people comes, every time, from a jar that has been broken.</p>
            <p>
              If you are in the press right now, I am not going to tell you it is fine. It is not fine. Olives do not enjoy the press and neither do we. But the oil is real. What is happening in you is not a waste. People you have not met will be steadied by the timbre in your voice that came out of this season.
            </p>
            <p>Ministry is others being blessed by the oil that came from what crushed you.</p>
            <p>The press is not the end of the story. The oil is.</p>
            <p>
              I am preaching that to myself as much as to anyone. Most days I almost believe it. Some days I do.
            </p>
          </div>

          <aside className="mt-16 pt-10 border-t border-border/70">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-4">Continue Reading</p>
            <ul className="space-y-3 font-serif text-ink/85">
              <li><Link href="/writing/on-preaching-the-whole-text" className="hover:text-accent transition-colors">On preaching the whole text &rarr;</Link></li>
              <li><Link href="/writing/the-church-is-not-the-fount" className="hover:text-accent transition-colors">The church is not the Fount &rarr;</Link></li>
              <li><Link href="/writing/thirteen-years-in-nyc" className="hover:text-accent transition-colors">Thirteen years in New York City &rarr;</Link></li>
            </ul>
          </aside>

          <aside className="mt-12 p-8 bg-ink/[0.03] border border-border/60 rounded-sm">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-3">Subscribe</p>
            <p className="font-serif text-ink/85 leading-relaxed mb-4">
              Get new essays in your inbox. No schedule, no noise, just the writing when it is ready.
            </p>
            <a href="https://joshuakelsey.substack.com/subscribe" target="_blank" rel="noopener" className="inline-block text-sm font-sans text-accent hover:underline">
              Subscribe on Substack &rarr;
            </a>
          </aside>

          <footer className="mt-16 pt-10 border-t border-border/70 text-sm font-sans text-muted">
            <p className="mb-4">
              Josh Kelsey is the founding and lead pastor of <a href="https://fount.nyc" className="underline">FOUNT Church</a> in New York City, which he planted in 2013 with his wife and co-pastor <a href="https://georgiekelsey.com" className="underline">Georgie Kelsey</a>. This essay was also published on <a href="https://joshuakelsey.substack.com/p/the-press" target="_blank" rel="noopener" className="underline">Substack</a>.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
