import type { Metadata } from 'next'
import { ChapterNav } from '../../../components/chapter-nav'

export const metadata: Metadata = {
  title: "Week 2: Effective Teams · Leadership Training · Josh Kelsey",
  description: "Master the 6 fundamentals of effective teams. Proven principles from 13 years of NYC church planting. Leadership training that works across all industries.",
  keywords: "effective teams, team leadership, Josh Kelsey, FOUNT Church, team fundamentals, leadership training, NYC pastor, team effectiveness, church leadership",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-2" },
  openGraph: {
    title: "Week 2: Effective Teams · Josh Kelsey",
    description: "Implement the 6 fundamentals that make teams truly effective rather than just functional",
    type: "article",
    url: "https://joshkelsey.org/for-leaders/week-2"
  }
};

// Schema markup for educational content
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "name": "Week 2: Effective Teams",
  "description": "Leadership training module covering the 6 fundamentals of team effectiveness",
  "educationalLevel": "All levels",
  "about": ["Team Leadership", "Team Effectiveness", "Leadership"],
  "teaches": [
    "6 fundamentals of effective teams",
    "Vision and purpose alignment", 
    "Conflict resolution strategies",
    "Building solid team relationships"
  ],
  "instructor": {
    "@type": "Person",
    "name": "Josh Kelsey",
    "jobTitle": "Lead Pastor & Church Planter"
  }
};

export default function Week2Page() {
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
            <span className="text-slate-900 font-medium">Week 2: Effective Teams</span>
          </nav>
        </div>
      </div>

      <ChapterNav 
        part="Week 2"
        title="Effective Teams" 
        prevHref="/for-leaders/week-1"
        nextHref="/for-leaders/week-3"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Week 2: Effective Teams
          </h1>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-green-800 font-medium">
              There's a difference between teams that function and teams that are truly effective. 
              This week covers the 6 fundamentals that transform good teams into great ones.
            </p>
          </div>
        </div>

        {/* Core concept */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Beyond Functional to Effective</h2>
          <p className="text-lg text-slate-600 mb-6">
            Most teams can complete tasks and hit deadlines. But effective teams create something greater 
            than the sum of their parts. They innovate, adapt, and consistently exceed expectations because 
            they've mastered these six fundamentals.
          </p>
        </div>

        {/* The 6 Fundamentals */}
        <div className="space-y-8">
          {/* Fundamental 1: Vision and Purpose */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">1. Clear Vision and Purpose</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it means:</strong> Everyone understands not just what they're doing, but why it matters. 
              The purpose is compelling enough that people choose to stay engaged even when work gets difficult.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 font-medium">Vision Reality Check:</p>
              <div className="text-blue-700 mt-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2">Clear Vision</th>
                      <th className="text-left py-2">Unclear Vision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-200">
                      <td className="py-1">Team makes decisions independently</td>
                      <td className="py-1">Everything requires approval</td>
                    </tr>
                    <tr className="border-b border-blue-200">
                      <td className="py-1">People prioritize naturally</td>
                      <td className="py-1">Constant debates about priorities</td>
                    </tr>
                    <tr>
                      <td className="py-1">Energy feels focused</td>
                      <td className="py-1">Energy feels scattered</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Application Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Can your team members explain the "why" behind your work in their own words?</li>
                <li>• When you're not in the room, do people make decisions that align with your vision?</li>
                <li>• Would a new team member understand your purpose within their first week?</li>
              </ul>
            </div>
          </div>

          {/* Fundamental 2: Appropriate Roles */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">2. Appropriate Roles and Responsibilities</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it means:</strong> People know what they're accountable for and what others 
              handle. Roles are designed around strengths and calling, not just convenience or availability.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="text-green-800 font-medium">Role Clarity Indicators:</p>
              <ul className="text-green-700 space-y-1 mt-2">
                <li>• People can say "that's not my job" without it being dysfunction</li>
                <li>• Decisions get made by the right person at the right time</li>
                <li>• Work doesn't fall through cracks or get duplicated</li>
                <li>• People feel stretched but not overwhelmed</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Application Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Are your high-capacity people doing high-impact work, or just more work?</li>
                <li>• When something important needs to happen, is it obvious who should handle it?</li>
                <li>• Do people feel empowered in their roles, or micromanaged?</li>
              </ul>
            </div>
          </div>

          {/* Fundamental 3: Conflict Resolution */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-4">3. Healthy Conflict Resolution</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it means:</strong> The team has systems for handling disagreement constructively. 
              Conflict is seen as normal and necessary for innovation, not as a threat to relationships.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="text-red-800 font-medium">Healthy Conflict vs. Unhealthy Conflict:</p>
              <ul className="text-red-700 space-y-1 mt-2">
                <li><strong>Healthy:</strong> About ideas, timing, methods, priorities</li>
                <li><strong>Unhealthy:</strong> About personalities, past mistakes, character attacks</li>
                <li><strong>Healthy:</strong> Leads to better solutions and stronger relationships</li>
                <li><strong>Unhealthy:</strong> Leads to resentment and people checking out</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Application Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Do your team meetings include productive disagreement, or is everyone always aligned?</li>
                <li>• When conflict happens, do people address it directly or talk around it?</li>
                <li>• Are your decisions better because people felt free to push back?</li>
              </ul>
            </div>
          </div>

          {/* Fundamental 4: Strategy Agreement */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">4. Strategy Agreement</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it means:</strong> The team is aligned on how they'll accomplish their vision. 
              People understand the plan and buy into the approach, even if they initially disagreed.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-purple-800 font-medium">Agreement vs. Compliance:</p>
              <ul className="text-purple-700 space-y-1 mt-2">
                <li><strong>Agreement:</strong> "I understand why we're doing this and I'm committed"</li>
                <li><strong>Compliance:</strong> "I'll do what you said because you're the boss"</li>
                <li><strong>Result of Agreement:</strong> People execute with energy and creativity</li>
                <li><strong>Result of Compliance:</strong> People execute minimally and wait for direction</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Application Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Do people understand the reasoning behind your strategic decisions?</li>
                <li>• Are team members innovating within the strategy, or just following orders?</li>
                <li>• When strategies need to change, does the team adapt quickly or resist?</li>
              </ul>
            </div>
          </div>

          {/* Fundamental 5: Solid Relationships */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">5. Solid Relationships</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it means:</strong> Team members genuinely care about each other as people, 
              not just as contributors to the work. There's enough trust to be vulnerable and enough 
              grace to handle mistakes.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <p className="text-orange-800 font-medium">Relationship Depth Indicators:</p>
              <ul className="text-orange-700 space-y-1 mt-2">
                <li>• People share struggles without fear of being judged or losing respect</li>
                <li>• Team members cover for each other during difficult seasons</li>
                <li>• Celebrations feel genuine and losses are felt by everyone</li>
                <li>• People address relational issues directly rather than working around them</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Application Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Do team members know what's happening in each other's lives outside of work?</li>
                <li>• When someone is struggling, does the team rally around them naturally?</li>
                <li>• Is there laughter in your team meetings, or are they purely transactional?</li>
              </ul>
            </div>
          </div>

          {/* Fundamental 6: Open Communication */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">6. Open Communication</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it means:</strong> Information flows freely in all directions. People feel 
              safe to speak up, ask questions, and share both good and bad news without fear of reaction.
            </p>
            <div className="bg-teal-50 p-4 rounded-lg mb-4">
              <p className="text-teal-800 font-medium">Communication Flow Check:</p>
              <ul className="text-teal-700 space-y-1 mt-2">
                <li><strong>Upward:</strong> Team members bring problems and ideas to leadership</li>
                <li><strong>Downward:</strong> Leadership shares context, decisions, and reasoning</li>
                <li><strong>Lateral:</strong> Peers coordinate naturally without going through leadership</li>
                <li><strong>Outward:</strong> Team represents decisions and direction consistently</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Application Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Do you hear about problems before they become crises?</li>
                <li>• Are people comfortable disagreeing with you in front of others?</li>
                <li>• When you're not present, do team members communicate the same vision you would?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Framework */}
        <div className="mt-12 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Building Your Effective Team</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Start Where You Are</h3>
              <p className="text-slate-700">
                Assess your team honestly across all six fundamentals. Most teams are strong in 2-3 areas 
                and need development in the others. Pick one fundamental to focus on for the next 90 days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Address Foundation First</h3>
              <p className="text-slate-700">
                If vision and purpose aren't clear, everything else becomes much harder. Start there if 
                you're unclear about your "why" or if different team members would describe your purpose differently.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Develop Systematically</h3>
              <p className="text-slate-700">
                Effective teams aren't created by accident. They result from intentional development over time. 
                Build these fundamentals into your regular team rhythms and review processes.
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
                <a href="/for-leaders/week-1" className="hover:text-blue-600">← Week 1: Building Real Community</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Master the 5 stages that transform pseudo community into genuine, lasting relationships.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/for-leaders/week-3" className="hover:text-purple-600">Week 3: Raising Leaders →</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Learn the 4-stage development framework that creates leaders who raise other leaders.
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
