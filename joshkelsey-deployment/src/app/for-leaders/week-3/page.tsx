import type { Metadata } from 'next'
import { ChapterNav } from '../../../components/chapter-nav'

export const metadata: Metadata = {
  title: "Week 3: Raising Leaders · Leadership Training · Josh Kelsey",
  description: "Learn the 4-stage development framework that creates leaders who raise other leaders. Leadership multiplication principles for exponential growth.",
  keywords: "leadership development, leadership multiplication, raising leaders, Josh Kelsey, FOUNT Church, leader development, leadership training, NYC pastor, exponential leadership",
  alternates: { canonical: "https://joshkelsey.org/for-leaders/week-3" },
  openGraph: {
    title: "Week 3: Raising Leaders · Josh Kelsey",
    description: "Master the 4-stage development framework that creates leaders who raise other leaders",
    type: "article",
    url: "https://joshkelsey.org/for-leaders/week-3"
  }
};

// Schema markup for educational content
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "name": "Week 3: Raising Leaders",
  "description": "Leadership training module covering the 4-stage framework for developing leaders who multiply",
  "educationalLevel": "All levels",
  "about": ["Leadership Development", "Leadership Multiplication", "Leader Development"],
  "teaches": [
    "4-stage development framework",
    "FAITH characteristics of emerging leaders", 
    "Leadership multiplication principles",
    "Creating leadership culture"
  ],
  "instructor": {
    "@type": "Person",
    "name": "Josh Kelsey",
    "jobTitle": "Lead Pastor & Church Planter"
  }
};

export default function Week3Page() {
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
            <span className="text-slate-900 font-medium">Week 3: Raising Leaders</span>
          </nav>
        </div>
      </div>

      <ChapterNav 
        part="Week 3"
        title="Raising Leaders" 
        prevHref="/for-leaders/week-2"
        nextHref="/for-leaders"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Week 3: Raising Leaders
          </h1>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-purple-800 font-medium">
              The ultimate test of leadership isn't what you accomplish, but who you develop. 
              This week covers the 4-stage framework for creating leaders who raise other leaders.
            </p>
          </div>
        </div>

        {/* Book attribution */}
        <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-amber-800">
            <strong>Framework Foundation:</strong> This development approach is built on principles from 
            <em>"Teach Your Team to Fish"</em> by Laurie Beth Jones, adapted through years of practical 
            application in leadership development and church planting contexts.
          </p>
        </div>

        {/* Core Principle */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Leadership Multiplication Principle</h2>
          <p className="text-lg text-slate-600 mb-6">
            Most leaders focus on addition—adding their own capacity to get more done. But the leaders 
            who create lasting impact focus on multiplication—developing others who can develop others. 
            The goal isn't just to raise leaders, but to raise leaders who raise leaders.
          </p>
          <div className="bg-slate-100 p-6 rounded-lg">
            <p className="text-slate-800 font-medium text-center">
              "Give someone a fish and you feed them for a day. Teach someone to fish and you feed them for life. 
              Teach someone to teach fishing and you feed a community forever."
            </p>
          </div>
        </div>

        {/* FAITH Characteristics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Identifying Emerging Leaders: FAITH</h2>
          <p className="text-slate-600 mb-6">
            Not everyone is ready for leadership development at the same time. Look for these five characteristics 
            that indicate someone has leadership potential and is ready for intentional development.
          </p>
          
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">F</div>
              <h4 className="font-semibold text-slate-900">Faithful</h4>
              <p className="text-sm text-slate-600 mt-2">Reliable with small things</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">A</div>
              <h4 className="font-semibold text-slate-900">Available</h4>
              <p className="text-sm text-slate-600 mt-2">Makes time for growth</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">I</div>
              <h4 className="font-semibold text-slate-900">Inspired</h4>
              <p className="text-sm text-slate-600 mt-2">Excited about the vision</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">T</div>
              <h4 className="font-semibold text-slate-900">Teachable</h4>
              <p className="text-sm text-slate-600 mt-2">Open to feedback and change</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">H</div>
              <h4 className="font-semibold text-slate-900">Hungry</h4>
              <p className="text-sm text-slate-600 mt-2">Wants to grow and contribute</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Faithful: Reliable with Small Things</h3>
              <p className="text-slate-700">
                They show up when they say they will. They complete tasks without constant follow-up. 
                They handle current responsibilities well before seeking new ones. Faithfulness with little 
                indicates they can be trusted with much.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Available: Makes Time for Growth</h3>
              <p className="text-slate-700">
                They prioritize development over convenience. They show up to training, meetings, and 
                development opportunities. They understand that growth requires investment of time and energy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Inspired: Excited About the Vision</h3>
              <p className="text-slate-700">
                They're energized by the mission and purpose. They talk about the work with enthusiasm. 
                They see the bigger picture and want to contribute to something meaningful.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Teachable: Open to Feedback and Change</h3>
              <p className="text-slate-700">
                They receive correction without defensiveness. They ask questions and seek to understand. 
                They're willing to change their approach when shown a better way.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Hungry: Wants to Grow and Contribute</h3>
              <p className="text-slate-700">
                They actively seek opportunities to learn and serve. They volunteer for challenging assignments. 
                They're not content with the status quo—they want to grow in capacity and impact.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Development Stages */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The 4 Stages of Leader Development</h2>
            <p className="text-lg text-slate-600 mb-6">
              Leadership development is progressive. Each stage builds on the previous one, and trying to skip 
              stages leads to insecurity and failure. Move people through systematically, ensuring competence 
              and confidence at each level.
            </p>
          </div>

          {/* Stage 1: I Do, You Watch */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Stage 1: I Do, You Watch</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> You model the leadership behavior, decision-making process, 
              and skills while they observe. They're learning by watching how you handle situations, 
              interact with people, and think through problems.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 font-medium">Key Focus Areas:</p>
              <ul className="text-blue-700 space-y-1 mt-2">
                <li>• Let them see your thought process, not just your actions</li>
                <li>• Explain the "why" behind decisions as you make them</li>
                <li>• Model how to handle difficult situations and conversations</li>
                <li>• Show them how to prioritize and manage competing demands</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Development Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• What would they most benefit from observing in your leadership?</li>
                <li>• Are you explaining your reasoning, or just giving directives?</li>
                <li>• How are you helping them understand the complexity of leadership decisions?</li>
              </ul>
            </div>
          </div>

          {/* Stage 2: We Do, I Lead */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Stage 2: We Do, I Lead</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> You work together on leadership tasks with you taking 
              the primary responsibility. They're actively participating, making suggestions, and taking 
              on pieces of the work while you maintain oversight.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="text-green-800 font-medium">Key Focus Areas:</p>
              <ul className="text-green-700 space-y-1 mt-2">
                <li>• Give them meaningful parts of real projects, not make-work</li>
                <li>• Ask for their input before making decisions</li>
                <li>• Let them handle some interactions while you're present</li>
                <li>• Debrief together what worked and what could be improved</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Development Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Are they contributing ideas, or just following instructions?</li>
                <li>• What leadership skills are emerging as they work alongside you?</li>
                <li>• How are you balancing guidance with space for them to learn?</li>
              </ul>
            </div>
          </div>

          {/* Stage 3: They Do, I Support */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Stage 3: They Do, I Support</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> They take primary responsibility for leadership decisions 
              and actions while you provide backup, resources, and coaching. They're leading, but with 
              a safety net.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <p className="text-orange-800 font-medium">Key Focus Areas:</p>
              <ul className="text-orange-700 space-y-1 mt-2">
                <li>• Give them actual authority, not just responsibility</li>
                <li>• Be available for consultation but don't micromanage</li>
                <li>• Help them learn from mistakes without taking over</li>
                <li>• Celebrate their wins and share the credit publicly</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Development Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Are you giving them real authority to match their responsibility?</li>
                <li>• How are you resisting the urge to step in when they struggle?</li>
                <li>• What kind of support do they most need at this stage?</li>
              </ul>
            </div>
          </div>

          {/* Stage 4: They Do, They Raise Others */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">Stage 4: They Do, They Raise Others</h3>
            <p className="text-slate-700 mb-4">
              <strong>What it looks like:</strong> They're not just leading effectively, but identifying 
              and developing other leaders. They've become multipliers who create capacity beyond themselves. 
              This is when real leadership multiplication happens.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-purple-800 font-medium">Key Focus Areas:</p>
              <ul className="text-purple-700 space-y-1 mt-2">
                <li>• Help them identify emerging leaders in their sphere</li>
                <li>• Teach them this same four-stage development process</li>
                <li>• Support their development efforts without taking over</li>
                <li>• Celebrate multiplication, not just addition</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Development Questions:</p>
              <ul className="text-slate-700 space-y-1 ml-6">
                <li>• Are they actively looking for people to develop, or just managing tasks?</li>
                <li>• How are you helping them become developers of leaders?</li>
                <li>• What's stopping them from moving into multiplication mode?</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Development Challenges */}
        <div className="mt-12 bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Development Challenges</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Moving Too Fast</h3>
              <p className="text-slate-700">
                Skipping stages creates insecurity and failure. Leaders need time to build competence 
                and confidence at each level before advancing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Holding On Too Long</h3>
              <p className="text-slate-700">
                Some leaders get stuck in Stage 2 or 3 because they enjoy the collaboration or because 
                they struggle to trust others with real authority.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Developing Without Systems</h3>
              <p className="text-slate-700">
                Good intentions aren't enough. Effective development requires intentional processes, 
                regular check-ins, and clear expectations at each stage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Focusing on Tasks Instead of People</h3>
              <p className="text-slate-700">
                The goal isn't just to get work done, but to develop people who can do the work without you. 
                Sometimes development requires slowing down the immediate work for long-term multiplication.
              </p>
            </div>
          </div>
        </div>

        {/* Internal linking - Next steps */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Complete Your Leadership Development</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/for-leaders/week-2" className="hover:text-green-600">← Week 2: Effective Teams</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Implement the 6 fundamentals that make teams truly effective rather than just functional.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/for-leaders/week-1" className="hover:text-blue-600">← Week 1: Building Real Community</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Master the 5 stages that transform pseudo community into genuine, lasting relationships.
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

        {/* Call to action */}
        <div className="mt-12 bg-purple-50 border border-purple-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Start Developing Leaders Today</h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Look around your team and identify one person with FAITH characteristics. Begin Stage 1 with them this week. 
            Leadership multiplication starts with one intentional development relationship.
          </p>
          <div className="space-y-2">
            <p className="font-medium text-slate-900">Remember:</p>
            <p className="text-slate-700">
              The leaders you develop today will shape the next generation. Make it count.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
