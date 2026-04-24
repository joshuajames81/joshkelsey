import type { Metadata } from 'next'
import { ChapterNav } from '../../../components/chapter-nav'

export const metadata: Metadata = {
  title: "Week 1: Building Real Community · Leadership Training · Josh Kelsey",
  description: "Learn the 5 stages of community development that transform pseudo community into real, lasting teams. Free leadership training from 13 years of NYC church planting experience.",
  keywords: "community building, team development, leadership training, Josh Kelsey, FOUNT Church, real community, pseudo community, church leadership, NYC pastor",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-1" },
  openGraph: {
    title: "Week 1: Building Real Community · Josh Kelsey",
    description: "Master the 5 stages that transform pseudo community into genuine, lasting relationships",
    type: "article",
    url: "https://joshkelsey.org/for-leaders/week-1"
  }
};

// Schema markup for educational content
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "name": "Week 1: Building Real Community",
  "description": "Leadership training module covering the 5 stages of community development",
  "educationalLevel": "All levels",
  "about": ["Community Building", "Team Development", "Leadership"],
  "teaches": [
    "5 stages of community development",
    "Moving from pseudo community to real community", 
    "Navigating chaos and conflict in teams",
    "Creating authentic relationships"
  ],
  "instructor": {
    "@type": "Person",
    "name": "Josh Kelsey",
    "jobTitle": "Lead Pastor & Church Planter"
  }
};

export default function Week1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb navigation */}
      <div className="bg-slate-100 py-2">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-slate-600">
            <a href="/" className="hover:text-slate-900">Home</a>
            <span className="mx-2">›</span>
            <a href="/for-leaders" className="hover:text-slate-900">Leadership Training</a>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">Week 1: Building Real Community</span>
          </nav>
        </div>
      </div>

      <ChapterNav 
        part="Week 1"
        title="Building Real Community" 
        prevHref="/for-leaders"
        nextHref="/for-leaders/week-2"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Week 1: Building Real Community
          </h1>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 font-medium">
              Community building is the foundation of effective leadership. This week covers the 5 stages 
              that every team must navigate to move from polite surface interactions to genuine, 
              lasting relationships.
            </p>
          </div>
        </div>

        {/* Learning from mentorship */}
        <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-amber-800">
            <strong>Learning from the best:</strong> This framework was developed during my two years 
            being mentored by Tim Keller in the art of community development. These aren't just theories—they're 
            battle-tested principles from real leadership experience.
          </p>
        </div>

        {/* The 5 Stages */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 5 Stages of Community</h2>
            <p className="text-lg text-slate-600 mb-6">
              Every team, every Dinner Party, every group of people working together will move through these stages. 
              The question isn't whether you'll experience them, but how well you'll navigate them.
            </p>
          </div>

          {/* Stage 1: Pseudo Community */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Stage 1: Pseudo Community</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> Everyone is polite, agreeable, and careful not to rock the boat. 
              Conversations stay surface level. People avoid difficult topics and pretend differences don't exist.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="text-red-800 font-medium">Leadership Trap:</p>
              <p className="text-red-700">
                Many leaders mistake pseudo community for real community because it feels peaceful and productive. 
                But it's artificial harmony built on avoiding truth.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Questions for leaders:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Are your team meetings too nice? Does anyone ever disagree?</li>
                <li>• Do you know what your team members actually think about important decisions?</li>
                <li>• Are people bringing their real selves to work, or performing a role?</li>
              </ul>
            </div>
          </div>

          {/* Stage 2: Chaos */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Stage 2: Chaos</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> Differences surface, tension rises, and conflict emerges. 
              People start expressing real opinions and disagreements. It feels uncomfortable and unstable.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <p className="text-orange-800 font-medium">Leadership Trap:</p>
              <p className="text-orange-700">
                Most leaders panic here and try to restore "peace" by shutting down conflict. 
                This sends teams backward to pseudo community or causes people to disengage entirely.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Questions for leaders:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• How do you respond when team members disagree with you publicly?</li>
                <li>• Do you have systems for healthy conflict, or do you avoid it?</li>
                <li>• Are you comfortable with the discomfort of this stage?</li>
              </ul>
            </div>
          </div>

          {/* Stage 3: Emptying */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4">Stage 3: Emptying</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> People begin letting go of their need to be right, 
              their hidden agendas, and their self-protective behaviors. They start prioritizing the 
              team's success over being personally comfortable.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 font-medium">Leadership Trap:</p>
              <p className="text-yellow-700">
                Leaders often try to rush this stage or orchestrate it artificially. Real emptying can't be forced—it 
                requires genuine trust and safety that develops over time.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Questions for leaders:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• What do you need to let go of for your team to succeed?</li>
                <li>• Are you modeling vulnerability and openness to being wrong?</li>
                <li>• How do you create safety for others to be vulnerable?</li>
              </ul>
            </div>
          </div>

          {/* Stage 4: Retreat */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Stage 4: Retreat</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> When emptying gets uncomfortable, people pull back to 
              earlier stages. They return to pseudo community's safety or chaos's familiar dysfunction. 
              Progress stalls.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-800 font-medium">Leadership Trap:</p>
              <p className="text-gray-700">
                Leaders give up here, concluding that "real community is impossible with this group." 
                But retreat is normal—it's not failure, it's part of the process.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Questions for leaders:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• How do you respond when your team takes steps backward?</li>
                <li>• Do you have the patience for this non-linear process?</li>
                <li>• What pulls your team back to previous stages?</li>
              </ul>
            </div>
          </div>

          {/* Stage 5: Real Community */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Stage 5: Real Community</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> People are genuinely known and can hold tension without 
              losing each other. They can disagree strongly while maintaining deep respect. 
              Trust is earned and real.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="text-green-800 font-medium">Leadership Reward:</p>
              <p className="text-green-700">
                Teams that reach real community become incredibly productive because energy isn't wasted on 
                politics, hidden agendas, or artificial harmony. People give their best because they trust each other.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Questions for leaders:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• What would change if your team experienced genuine community?</li>
                <li>• How would this impact your productivity and innovation?</li>
                <li>• What's worth the hard work of getting there?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mt-12 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Principles for Leaders</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">1. The Process Isn't Linear</h3>
              <p className="text-slate-700">
                Teams cycle through stages multiple times. New people, new challenges, and new seasons 
                can send even mature teams back to earlier stages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">2. You Can't Skip Stages</h3>
              <p className="text-slate-700">
                There's no shortcut to real community. Teams that try to skip chaos or emptying will 
                find themselves stuck in pseudo community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Leaders Set the Pace</h3>
              <p className="text-slate-700">
                Your own willingness to be vulnerable, handle conflict well, and let go of control 
                determines how far your team can go.
              </p>
            </div>
          </div>
        </div>

        {/* Internal linking - Next steps */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Continue Your Leadership Development</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/for-leaders/week-2" className="hover:text-green-600">Week 2: Effective Teams →</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Learn the 6 fundamentals that make teams truly effective rather than just functional.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/for-leaders/week-3" className="hover:text-purple-600">Week 3: Raising Leaders →</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Master the 4-stage development framework that creates leaders who raise other leaders.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a 
              href="/FOUNT-Leadership-Action-Plan.pdf" 
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
              download
            >
              Download Complete Action Plan PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
