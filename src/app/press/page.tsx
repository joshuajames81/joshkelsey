import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Press & Media",
  description: "Selected press and features on Josh Kelsey and FOUNT Church NYC.",
};

export default function PressPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink mb-8">
            Press &amp; Media
          </h1>
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-ink mb-4">Editorial Features</h2>
              <div className="border-l-2 border-accent pl-6">
                <p className="font-sans text-sm uppercase tracking-wide text-muted mb-2">RELEVANT Magazine • 2018</p>
                <h3 className="font-display text-xl text-ink mb-2">
                  <a href="https://relevantmagazine.com/magazine/features/empire-state-of-change/" 
                     className="link-underline hover:text-accent" target="_blank" rel="noopener">
                    Empire State of Change
                  </a>
                </h3>
                <p className="text-base text-ink/80">NYC church planting feature alongside Tim Keller and Jon Tyson.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
