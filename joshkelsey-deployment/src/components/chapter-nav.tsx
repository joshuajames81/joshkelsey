'use client'

interface ChapterNavProps {
  part: string
  title: string
  prevHref?: string
  nextHref?: string
}

export function ChapterNav({ part, title, prevHref, nextHref }: ChapterNavProps) {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500 font-medium">{part}</div>
            <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
          </div>
          <div className="flex gap-2">
            {prevHref && (
              <a 
                href={prevHref}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                ← Previous
              </a>
            )}
            {nextHref && (
              <a 
                href={nextHref}
                className="px-4 py-2 text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 rounded-lg transition-colors"
              >
                Next →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
