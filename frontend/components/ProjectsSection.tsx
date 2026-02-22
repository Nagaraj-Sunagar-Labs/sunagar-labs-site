const projects = [
  {
    name: "mitahari",
    description: "A Food Detection and Classification with nutrition prediction Application",
    github: "https://github.com/Nagaraj-Sunagar/Mitahari",
  },
  {
    name: "gita-gpt",
    description:
      "Gita-GPT is a Retrieval-Augmented Generation (RAG) system built on the Bhagavad Gita, delivering life guidance with authentic Sanskrit verses, translations, and commentary sourced from vivekavani.com.",
    github: "https://github.com/Nagaraj-Sunagar-Labs/gita-gpt",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-line py-20 scroll-mt-24">
      <h2 className="section-title">Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-black/75">{project.description}</p>
            {project.github ? (
              <a className="mt-4 inline-block text-sm underline" href={project.github} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
