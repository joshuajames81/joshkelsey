import type { Metadata } from 'next'
import { ChapterNav } from '../components/chapter-nav'

export const metadata: Metadata = {
  title: "Free Leadership Training · Josh Kelsey · NYC Pastor & Church Planter",
  description: "3-week leadership development course from 13 years of NYC church planting. Learn community building, team effectiveness, and leader multiplication. Free kingdom leadership training.",
  keywords: "leadership training, church leadership, NYC pastor, Josh Kelsey, FOUNT Church, community development, team building, leadership multiplication, kingdom leadership, church planting",
  alternates: { canonical: "https://joshkelsey.org/for-leaders" },
  openGraph: {
    title: "Free Leadership Training · Josh Kelsey",
    description: "3-week leadership development course from 13 years of NYC church planting experience",
    type: "website",
    url: "https://joshkelsey.org/for-leaders"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Leadership Training · Josh Kelsey",
    description: "3-week leadership development course from 13 years of NYC church planting experience"
  }
};

// Schema markup for educational content
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "3-Week Leadership Training Course",
  "description": "Comprehensive leadership development covering community building, team effectiveness, and leader multiplication",
  "provider": {
    "@type": "Person",
    "name": "Josh Kelsey",
    "jobTitle": "Lead Pastor & Church Planter",
    "worksFor": {
      "@type": "Organization",
      "name": "FOUNT Church"
    }
  },
  "coursePrerequisites": "None",
  "educationalLevel": "All levels",
  "about": ["Leadership Development", "Team Building", "Church Leadership", "Community Development"],
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "online",
      "duration": "P3W"
    }
  ]
};

export default function ForLeadersPage() {
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
            <span className="text-slate-900 font-medium">Leadership Training</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Free Leadership Training
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Three weeks of practical leadership development from 13 years of NYC church planting. 
            Build real community, create effective teams, and multiply leaders who multiply leaders.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-blue-800 font-medium">
              These kingdom principles work across churches, nonprofits, startups, and established organizations. 
              Free to use in any context.
            </p>
          </div>
        </div>

        {/* Course overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-600">
            <div className="text-2xl font-bold text-blue-600 mb-2">Week 1</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Building Real Community</h3>
            <p className="text-slate-600 mb-4">
              Master the 5 stages that transform polite pseudo community into genuine, lasting relationships.
            </p>
            <ul className="text-sm text-slate-600 space-y-2 mb-6">
              <li>• Move beyond surface-level interactions</li>
              <li>• Navigate chaos and conflict constructively</li>
              <li>• Create space for authentic community</li>
            </ul>
            <a 
              href="/for-leaders/week-1" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Week 1
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-600">
            <div className="text-2xl font-bold text-green-600 mb-2">Week 2</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Effective Teams</h3>
            <p className="text-slate-600 mb-4">
              Implement the 6 fundamentals that make teams truly effective rather than just functional.
            </p>
            <ul className="text-sm text-slate-600 space-y-2 mb-6">
              <li>• Align around compelling vision</li>
              <li>• Handle conflict constructively</li>
              <li>• Build solid working relationships</li>
            </ul>
            <a 
              href="/for-leaders/week-2" 
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Start Week 2
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-600">
            <div className="text-2xl font-bold text-purple-600 mb-2">Week 3</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Raising Leaders</h3>
            <p className="text-slate-600 mb-4">
              Learn the 4-stage development framework that creates leaders who raise other leaders.
            </p>
            <ul className="text-sm text-slate-600 space-y-2 mb-6">
              <li>• Identify FAITH characteristics</li>
              <li>• Move through development stages</li>
              <li>• Create multiplication culture</li>
            </ul>
            <a 
              href="/for-leaders/week-3" 
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Start Week 3
            </a>
          </div>
        </div>

        {/* Action plan download */}
        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Complete Training Action Plan</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Professional assessment tool to implement these principles in your specific context. 
            Perfect for team reviews and accountability.
          </p>
          <a 
            href="/FOUNT-Leadership-Action-Plan.pdf" 
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
            download
          >
            Download Action Plan PDF
          </a>
        </div>

        {/* Internal linking - Related content */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Leadership Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/about" className="hover:text-blue-600">About Josh Kelsey</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Lead Pastor and founder of FOUNT Church with 13+ years of NYC ministry and church planting experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                <a href="/story" className="hover:text-blue-600">FOUNT Church Story</a>
              </h3>
              <p className="text-slate-600 text-sm">
                Learn about the church planting journey and leadership principles developed through real experience.
              </p>
            </div>
          </div>
        </div>

        {/* Footer attribution */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600">
            Created by{" "}
            <a href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
              Josh Kelsey
            </a>
            {" "}· Lead Pastor & Church Planter · NYC
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Kingdom principles for exponential leadership growth
          </p>
        </div>
      </div>
    </div>
  )
}
