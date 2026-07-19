import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

const SITE_URL = "https://joshkelsey.org";
const PATH = "/writing/worry-is-the-misuse-of-your-imagination";
const TITLE = "Worry Is the Misuse of Your Imagination";
const DESCRIPTION =
  "One part of the brain remembers, imagines what does not yet exist, and learns to be afraid, all with the same tissue. On why worry is not an intruder, but the highest faculty you have, aimed the wrong way.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PATH}`,
    title: `${TITLE} | Josh Kelsey`,
    description: DESCRIPTION,
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` },
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export default function WorryEssay() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleLayout
        kicker={
          <>
            Essay <b className="text-red font-medium">/</b> 7 min read
          </>
        }
        title={
          <>
            Worry Is the Misuse of Your <em>Imagination</em>
          </>
        }
        standfirst="One part of the brain remembers, imagines what does not yet exist, and learns to be afraid, all with the same tissue. On why worry is not an intruder, but the highest faculty you have, aimed the wrong way."
        figureImage="/images/worry.jpg"
        figureCaption="Josh Kelsey · New York"
      >
        <p className="para">
          Folded deep in the brain, along a curl of tissue the early anatomists thought looked like
          a seahorse, sits a small structure they named with the Greek word for one. The hippocampus.
          It performs three tasks that seem, at first, to have nothing to do with one another.
        </p>
        <p className="para">It holds your memories.</p>
        <p className="para">It imagines what does not yet exist.</p>
        <p className="para">And it is where you learn to be afraid.</p>
        <p className="para">
          For a long time this looked like an accident of wiring, three unrelated tenants sharing one
          room. It is not. Memory is not a recording. The mind does not store the past whole and play
          it back. It rebuilds the past, every time, out of fragments. And when it reaches for the
          future, it takes those same fragments and assembles a picture of what has not happened yet.
          Remembering and imagining are the same act of construction, aimed in opposite directions. To
          recall your childhood and to picture next Tuesday, you use the same hands.
        </p>
        <p className="para">
          Fear is made the same way. Lie awake in its grip some night and watch what your body is
          doing. Nothing has happened. It is responding to a picture. The heart quickens, the stomach
          tightens, the night grows long, all of it summoned by a scene that exists nowhere but inside
          the one who is watching it. Anxiety is not a failure of nerve. It is a failure of tense. It
          takes a future that has not arrived and grants it the authority of a present fact, and the
          body, unable to tell the difference, obeys.
        </p>
        <blockquote className="pull">
          Anxiety is not a failure of nerve. It is a <em>failure of tense.</em>
        </blockquote>
        <p className="para">
          Which means that worry is not an intruder. It is a native. It is the highest faculty you
          possess, the one nearest to the way God himself works, turned to a use it was never meant
          for.
        </p>
        <p className="para">
          Consider what that faculty is. God calls into being the things that are not as though they
          were. He speaks a world that does not yet exist, and it comes. And he made a creature in his
          own likeness and gave it the strange and holy power to see what is not there and then to
          reach out and make it so. Every cathedral, every symphony, every act of mercy planned before
          dawn, all of it was imagined before it was real. Of everything he made, this may be the
          clearest fingerprint he left on us. Not merely that we live, but that we create. That we can
          picture a world that does not yet exist and then build toward it. We are the creature that
          lives toward a future, and our imagination is one of the loudest arguments that we came from
          a Creator.
        </p>
        <p className="para">
          And here is the danger folded inside the gift. The very capacity that most reflects him is
          the very capacity that most tempts us to do without him. A bird cannot provide for itself.
          It wakes with no barn and no plan and waits to be fed. But you can sow. You can reap. You can
          store, and strategize, and build against the winter. The power to provide is a blessing, and
          it is also the open door we keep walking through and away from the Provider, because a
          creature who can make his own future is forever tempted to trust the maker he sees in the
          mirror over the One in whose image he was made.
        </p>
        <p className="para">
          This is the anatomy of worry underneath the anatomy of the brain, and the word Jesus
          actually used points to the same thing. When he tells us not to worry, the Greek beneath it
          is <em>merimnaō</em>, and it does not mean stop feeling. It means care. It is the same word
          Scripture uses elsewhere for honest, loving concern. He is not telling us to care about
          nothing. He is telling us not to set our care for these things ahead of his Kingdom, because
          care put in the wrong order does not stay care. It curdles into worry. Augustine saw it from
          another angle and named it a disordered love, a good thing loved in the wrong place, set
          ahead of a greater one. You lie awake rehearsing the loss of your job, your money, your
          health, not because these do not matter but because, in that hour, they have quietly climbed
          ahead of the Kingdom and become the thing your whole life is resting on. You are seeking your
          salvation from the very things you were given to steward. And a heart that looks to the gift
          to do the work of the Giver will always be afraid, because the gift can be taken, and some
          night you can feel that it might.
        </p>
        <p className="para">
          So when Jesus meets us here, notice what he refuses to do. He does not tell us to stop
          imagining. He does not hand us a technique for emptying the mind. He does something far more
          cunning.
        </p>
        <p className="para">He tells us to look.</p>
        <p className="para">
          Look at the birds, he says. Consider the lilies of the field. Notice who he chooses. The
          birds cannot sow or reap or gather into barns. The flowers cannot labor or spin. He
          deliberately points us at the creatures who lack the very powers we are proudest of, the
          ones with no capacity to create or provide or plan, and he shows us that they are fed, that
          they are clothed, that Solomon in the full blaze of his wealth was never dressed so well as a
          weed that gets a single afternoon before it is thrown in the oven. His logic is not
          sentiment. It is a hammer. He is not trying to talk you into calm. He is pointing at what is
          already in front of you and letting your own eyes finish the argument. If the Father feeds
          what cannot sow and clothes what cannot spin, how much more will he tend the creature who can
          do both, the one who carries his own image, the one worth more to him than every bird in the
          sky. He does not soothe the fear. He shows you the evidence and waits for you to look up.
        </p>
        <p className="para">
          And this is where the two kingdoms come clear. When he says seek first the Kingdom, he is
          not naming a place on a map. The Kingdom of God is simply wherever the King reigns, and the
          first ground he means to rule is the ground nearest in: your heart, your mind, your
          imagination. To seek his Kingdom first is to set the true King on the throne of your inner
          life and to let his reign spread outward from there.
        </p>
        <p className="para">
          Now weigh what a bird can never do. A bird trusts because it has no other option. It has no
          barn to fret over, no future to secure, no power to try. But you do. You can build the barn
          and still hand the harvest to God. You can hold the full power to provide for yourself and
          choose, with open eyes, to rest in him instead. No sparrow can offer him that. It is the one
          worship that belongs only to a creature who could have tried to be his own king and laid the
          crown down anyway. Nothing else in all creation can bring him that particular glory.
        </p>
        <p className="para">
          But a throne is never empty. When the true King is not sought first, the faculty made for
          imagining a better world does not fall silent. It crowns someone else. Self takes the seat,
          and self is a small and frightened sovereign. The very power that was made to picture the
          renewal of all things, to see the potential in a life, to hope, to build toward the world God
          is remaking, turns inward and begins to manufacture the dark. This is what worry actually is.
          It is not a mood. It is a government. It is the whole domestic policy of a heart where the
          wrong king sits. And the reign of that king does not bring peace. It builds, brick by anxious
          brick, a kingdom of fear.
        </p>
        <p className="para">
          None of this is undone by force. You cannot bully your imagination into peace, and Paul, who
          knew the mind cannot be commanded into silence, does not try. He tells us to fill it instead.
          Whatever is true, whatever is lovely, whatever is honorable and pure and worthy of praise,
          give the mind these to hold, and a peace beyond understanding will stand guard over it. David,
          hunted across a wilderness for years, found the single image that ordered all the rest and
          asked for nothing else: to dwell in the house of the Lord and to gaze upon his beauty. Peter
          reduced the whole thing to one blunt verb. Cast. Throw the entire weight of your care onto
          him, not because it is nothing, but because it is too much to carry, and because he cares for
          you.
        </p>
        <p className="para">
          The work, then, is quieter than we imagine. When you catch yourself painting the dark, you do
          not have to wrestle the picture to the ground. You turn. You look up. You hand the throne back
          to the One it belongs to. You set your attention on the birds still being fed outside the
          window, on a Father who has not missed a morning since the world began, on the beauty of the
          One who has told you, without a trace of flattery, that you are worth more to him than
          anything else he has made.
        </p>
        <p className="para">The faculty was never the problem.</p>
        <p className="para">The throne was.</p>
        <p className="para">
          Give it back to the King, and the imagination turns from building your fear to building toward
          the world he is making new.
        </p>
      </ArticleLayout>
    </>
  );
}
