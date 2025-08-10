'use client'

export default function Collaboration() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-dark to-primary-900">
      <div className="container max-w-4xl text-center">
        <h2 className="text-h1 font-serif text-text-primary mb-8 leading-tight">
          Collaborate with AI as a team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-h3 text-text-primary">
              AI conversations about team comments and AI conversation about your progress.
            </h3>
            <p className="text-body text-text-secondary">
              Keep everyone discussion in one location to avoid decision memory.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-h3 text-text-primary">
              Before decision memory
            </h3>
            <p className="text-body text-text-secondary">
              Feeling like that spreads across your support with us.
            </p>
          </div>
        </div>

        {/* Placeholder for collaboration interface */}
        <div className="aspect-[16/10] bg-primary-700 bg-opacity-40 rounded-xl border border-primary-600 border-opacity-20 flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="w-32 h-20 bg-primary-600 bg-opacity-30 rounded"></div>
              <div className="w-32 h-20 bg-primary-600 bg-opacity-30 rounded"></div>
            </div>
            <p className="text-text-muted text-body-sm">Collaboration Interface Preview</p>
          </div>
        </div>
      </div>
    </section>
  )
}