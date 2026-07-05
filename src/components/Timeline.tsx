export function Timeline() {
  const timeline = [
    {
      year: "2022",
      title: "Cognizant • Lime Micromobility",
      description:
        "Supported large-scale mobility operations, SLA monitoring, ticketing systems, and operational analytics.",
    },
    {
      year: "2023",
      title: "Data & Analytics Journey",
      description:
        "Began translating operational problems into analytical workflows, reporting systems, and business insights.",
    },
    {
      year: "2024",
      title: "Data Engineering & ML",
      description:
        "Built ETL pipelines, forecasting models, clustering systems, and analytics workflows using Python and SQL.",
    },
    {
      year: "2025",
      title: "Genpact • Otis Elevators",
      description:
        "Worked with Order-to-Cash datasets, recovery analytics, reporting systems, and business process intelligence.",
    },
    {
      year: "2026",
      title: "Founder • Vasuki AI",
      description:
        "Building local-first AI systems, knowledge engines, memory infrastructure, multi-agent workflows, and personal intelligence platforms.",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-20 px-6 border-t border-theme-border bg-theme-bg"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-3 py-1 rounded border border-theme-accent/20">
            Career Timeline
          </span>

          <h2 className="mt-4 text-3xl font-medium text-theme-text-bright">
            From Operations to AI Systems
          </h2>

          <p className="mt-3 text-sm text-theme-text-muted max-w-2xl mx-auto">
            A progression from frontline business operations to building
            production AI systems and knowledge infrastructure.
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex gap-5 items-start bg-theme-card border border-theme-border rounded-xl p-5"
            >
              <div className="min-w-[70px]">
                <span className="font-mono text-theme-accent text-sm">
                  {item.year}
                </span>
              </div>

              <div>
                <h3 className="text-lg text-theme-text-bright font-medium">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-theme-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
