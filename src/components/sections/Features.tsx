'use client'

export default function Features() {
  const features = [
    {
      title: "Stay aligned with AI-powered context",
      description: "Decisions, notes, status, and flags belong in the same space where teams are working. One AI shared by the whole team.",
      alignment: "left"
    },
    {
      title: "One AI shared by the whole team",
      description: "People in the same space. Access the same context, One AI shared by the whole team that does not repeat the same context for every person.",
      alignment: "right"
    }
  ]

  return (
    <section className="py-20 bg-background-dark">
      <div className="container max-w-6xl">
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.alignment === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-h2 font-serif text-text-primary leading-tight">
                  {feature.title}
                </h3>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Placeholder for app screenshot */}
              <div className="flex-1">
                <div className="aspect-[4/3] bg-primary-700 bg-opacity-40 rounded-xl border border-primary-600 border-opacity-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 bg-opacity-30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-text-muted opacity-50 rounded"></div>
                    </div>
                    <p className="text-text-muted text-body-sm">App Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}