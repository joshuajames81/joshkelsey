import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import HomeHero from "@/components/home/HomeHero";
import Statement from "@/components/home/Statement";
import TorchWork from "@/components/home/TorchWork";
import RunningSection from "@/components/home/RunningSection";
import WritingFeed from "@/components/home/WritingFeed";
import CloseCut from "@/components/home/CloseCut";
import { graphJson, webPageNode } from "@/lib/schema";

const homeSchema = graphJson([
  webPageNode(
    "/",
    "Josh Kelsey | Pastor, Teacher & Founder of FOUNT Church NYC",
    "Josh Kelsey is the founding and lead pastor of FOUNT Church in New York City, planted in 2013 with his wife and co-pastor Georgie Kelsey."
  ),
]);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: homeSchema }} />
      <Nav variant="hero" />

      <main>
        <HomeHero image="/site-images/home-hero.jpg" />

        {/* Masthead / SEO band: visible H1 + keyword paragraph, styled in */}
        <section className="stmt" style={{ paddingTop: "clamp(4rem,10vw,8rem)", paddingBottom: 0 }}>
          <div className="wrap">
            <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
              Pastor · Teacher · Founder of FOUNT Church NYC
            </p>
            <h1
              className="font-disp"
              data-r
              style={{
                fontWeight: 900,
                fontSize: "clamp(3rem,11vw,10rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
              }}
            >
              Josh <em className="font-serif flare" style={{ fontStyle: "italic", fontWeight: 400 }}>Kelsey</em>
            </h1>
            <p
              className="font-serif"
              data-r
              style={{
                marginTop: "1.6rem",
                maxWidth: "52ch",
                fontSize: "1.3rem",
                lineHeight: 1.5,
                color: "rgba(241,239,230,0.82)",
              }}
            >
              Founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="link-underline flare">FOUNT Church</a>{" "}
              in New York City, planted in 2013 with my wife and co-pastor{" "}
              <a href="https://fount.nyc" className="link-underline flare">Georgie Kelsey</a>. Teaching and
              writing on ideas, leadership, the city, and a life shaped by Jesus, the true FOUNT.
            </p>
          </div>
        </section>

        <Statement />

        <div className="mq">
          <div className="mqt">
            <b>Writing</b><span className="d">/</span><b>Dinner Parties</b><span className="d">/</span>
            <b>Church Planting</b><span className="d">/</span><b>For Leaders</b><span className="d">/</span>
            <b>Running</b><span className="d">/</span>
            <b>Writing</b><span className="d">/</span><b>Dinner Parties</b><span className="d">/</span>
            <b>Church Planting</b><span className="d">/</span><b>For Leaders</b><span className="d">/</span>
            <b>Running</b><span className="d">/</span>
          </div>
        </div>

        <TorchWork />

        <RunningSection />

        <WritingFeed />

        <Subscribe />

        <CloseCut image="/site-images/close-chair.jpg" />
      </main>

      <Footer />
    </>
  );
}
