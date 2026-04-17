import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Church Planting: A Training Library",
  description:
    "A complete training library on church planting from Pastor Josh Kelsey. Thirteen years of teaching, frameworks, and stories from planting FOUNT Church in New York, Paris, and Berlin.",
  alternates: { canonical: "https://joshkelsey.com/church-planting" },
  openGraph: {
    title: "Church Planting: A Training Library | Josh Kelsey",
    description:
      "A complete training library on church planting from Pastor Josh Kelsey.",
    url: "https://joshkelsey.com/church-planting",
  },
};

type Chapter = { href: string; number: string; title: string; description: string };

const partOne: Chapter[] = [
  { href: "/church-planting/beginning", number: "01", title: "The Beginning", description: "Our story. How FOUNT began with a Vision Trip, a lunch with a New York pastor, and a conviction we couldn't shake." },
  { href: "/church-planting/person", number: "02", title: "The Person", description: "The planter before the plant. Identifying your why, the condition of your heart, the health of your marriage, the revelation behind your calling, and the city God has placed in you." },
];

const partTwo: Chapter[] = [
  { href: "/church-planting/strategy", number: "03", title: "The Strategy", description: "The plan, the timing, and the core team. How to build a first team that carries DNA, how to know when to launch, and how to lay a foundation that can hold weight." },
  { href: "/church-planting/culture", number: "04", title: "The Culture", description: "Prayer, the Word, the Spirit, and unity. The four currents that form the culture of a healthy plant long before the services start." },
  { href: "/church-planting/reach", number: "05", title: "The Reach", description: "Divine connections, the neighborhood, and the question of marketing. The theology behind one divine connection a day, and how social media fits." },
  { href: "/church-planting/practical", number: "06", title: "The Practical", description: "Services, worship, venues, portable church, and equipment. The under-the-hood decisions that make or break a plant's first two years." },
  { href: "/church-planting/people", number: "07", title: "The People", description: "Pastoring, assimilation, and retention. How to love people in, how to help them stay, and how empowering and releasing leaders ties back to the Dinner Party engine." },
];

const partThree: Chapter[] = [
  { href: "/church-planting/trials", number: "08", title: "The Trials", description: "Comparison, balance, temptation, and people leaving. The interior costs of planting that no one tells you about." },
  { href: "/church-planting/personal-health", number: "09", title: "Personal Health", description: "The individual leader, personal devotion, and support. The private life of the planter is the ceiling of the plant." },
  { href: "/church-planting/generations", number: "10", title: "Generations", description: "A heart for multiplication, the power of the one, and planting for generations you will never meet." },
];

export default function ChurchPlantingPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">A Training Library</p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink max-w-4xl">Church <span className="italic text-accent">Planting.</span></h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">Thirteen years, three cities, one conviction. Resources for the pastors and leaders called to plant churches in the places everyone else has written off.</p>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-10">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">Part One</p>
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">The Calling</h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">Before the plan, before the team, before the service. The interior work that has to come first.</p>
          </div>
          <div className="grid gap-6">{partOne.map((c) => (<ChapterCard key={c.href} chapter={c} />))}</div>
        </section>

        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
            <div className="mb-10">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">Part Two</p>
              <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">The Plant</h2>
              <p className="font-serif text-lg text-ink/75 max-w-prose">The strategy, culture, reach, practicals, and people. The work of actually building the church.</p>
            </div>
            <div className="grid gap-6">{partTwo.map((c) => (<ChapterCard key={c.href} chapter={c} />))}</div>
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-10">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">Part Three</p>
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">The Long Haul</h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">Trials, personal health, and generations. How to still be standing in year ten, year twenty, and beyond.</p>
          </div>
          <div className="grid gap-6">{partThree.map((c) => (<ChapterCard key={c.href} chapter={c} />))}</div>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">Start Here</p>
            <h2 className="font-display text-display-lg leading-[1.05] text-ink mb-6">Begin with the calling.</h2>
            <Link href="/church-planting/beginning" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors">Start Chapter One <span aria-hidden>→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link href={chapter.href} className="group block border border-border bg-paper p-6 md:p-8 hover:border-ink transition-colors">
      <div className="flex items-start gap-6 md:gap-10">
        <p className="font-display text-3xl md:text-4xl text-muted group-hover:text-accent transition-colors shrink-0 leading-none">{chapter.number}</p>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl text-ink mb-2 group-hover:text-accent transition-colors leading-tight">{chapter.title}</h3>
          <p className="font-serif text-ink/75 leading-relaxed">{chapter.description}</p>
        </div>
      </div>
    </Link>
  );
}
