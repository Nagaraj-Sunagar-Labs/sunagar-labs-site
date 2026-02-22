const interests = [
  "Backend Engineering",
  "Platform Engineering",
  "AI Systems",
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-line py-20 scroll-mt-24">
      <h2 className="section-title">Skills</h2>
      <div className="mt-8 grid gap-6">
        <article className="card">
          <ul className="mt-4 grid gap-2 text-sm text-black/80">
            {interests.map((interest) => (
              <li key={interest}>• {interest}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
