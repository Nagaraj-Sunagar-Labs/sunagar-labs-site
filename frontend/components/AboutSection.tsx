export function AboutSection() {
  return (
    <section id="about" className="border-b border-line py-20 scroll-mt-24">
      <h2 className="section-title">About</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <p className="max-w-xl text-base leading-7 text-black/80">
          I am Nagaraj Sunagar, a Junior Developer at JPMorgan Chase working on Platform Engineering.
          I focus on backend systems, resilient services, and practical AI integrations.
        </p>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-semibold">Name</dt>
            <dd>Nagaraj Sunagar</dd>
          </div>
          <div>
            <dt className="font-semibold">Education</dt>
            <dd>BMS College of Engineering, 2024</dd>
          </div>
          <div>
            <dt className="font-semibold">Current Role</dt>
            <dd>Junior Developer, JPMorgan Chase (Platform Engineering)</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
