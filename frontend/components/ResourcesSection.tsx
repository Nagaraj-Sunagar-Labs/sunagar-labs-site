import { Resource } from "@/lib/api";

type ResourcesSectionProps = {
  resources: Resource[];
};

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  const software = resources.filter((resource) => resource.category === "SOFTWARE_DEVELOPMENT");
  const ai = resources.filter((resource) => resource.category === "ARTIFICIAL_INTELLIGENCE");

  const fallback = [
    {
      id: "1",
      title: "Designing Reliable REST APIs",
      description: "Practical patterns for robust API contracts and versioning.",
      category: "SOFTWARE_DEVELOPMENT",
      type: "Blog",
      link: "#",
      createdAt: "",
    },
    {
      id: "2",
      title: "Applied AI Systems Notes",
      description: "Curated notes on deploying AI features into production systems.",
      category: "ARTIFICIAL_INTELLIGENCE",
      type: "External Article",
      link: "#",
      createdAt: "",
    },
  ] as Resource[];

  const effectiveSoftware = software.length ? software : fallback.filter((resource) => resource.category === "SOFTWARE_DEVELOPMENT");
  const effectiveAi = ai.length ? ai : fallback.filter((resource) => resource.category === "ARTIFICIAL_INTELLIGENCE");

  return (
    <section id="resources" className="border-b border-line py-20 scroll-mt-24">
      <h2 className="section-title">Resources</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <article>
          <h3 className="text-lg font-semibold">Software Development</h3>
          <ul className="mt-4 space-y-4">
            {effectiveSoftware.map((resource) => (
              <li key={resource.id} className="card">
                <h4 className="font-semibold">{resource.title}</h4>
                <p className="mt-2 text-sm text-black/75">{resource.description}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-black/60">{resource.type}</p>
                <a href={resource.link} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer">
                  Open resource
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold">Artificial Intelligence</h3>
          <ul className="mt-4 space-y-4">
            {effectiveAi.map((resource) => (
              <li key={resource.id} className="card">
                <h4 className="font-semibold">{resource.title}</h4>
                <p className="mt-2 text-sm text-black/75">{resource.description}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-black/60">{resource.type}</p>
                <a href={resource.link} className="mt-3 inline-block text-sm underline" target="_blank" rel="noreferrer">
                  Open resource
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
