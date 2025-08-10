'use client'

export default function ValueProposition() {
  const features = [
    {
      title: "Kill the copy and paste. AI workbook.",
      description: "Right now, teams take all the things other teams are posting, comments on work, and feedback on work and simply copy and paste them to a different context."
    },
    {
      title: "Think beyond human limits.",
      description: "In a shared space. AI can surface context and all decisions, and understand exactly what is happening. In one shared context that keeps teams focused."
    }
  ]

  return (
    <section className="py-20 bg-background-dark">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="card animate-fade-in">
              <h3 className="text-h3 font-serif text-text-primary mb-6 leading-tight">
                {feature.title}
              </h3>
              <p className="text-body text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}