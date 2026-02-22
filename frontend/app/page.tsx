import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
// import { ResourcesSection } from "@/components/ResourcesSection";
// import { fetchResources } from "@/lib/api";

export default async function Home() {
  // const resources = await fetchResources();

  return (
    <div id="top">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <section className="border-b border-line py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-black/60">Developer</p>
          <h1 className="mt-4 max-w-4xl text-2xl font-semibold tracking-tight md:text-4xl">
            Engineering stable systems.
            <br />
            Exploring applied intelligence.
          </h1>
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ResourcesSection resources={resources} /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
