'use client';
import { ResourceCard } from "@/components/ResourceCard";
import { fetchResources, Resource } from "@/lib/api";
import { useEffect, useState } from "react";

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadResources = async () => {
      const data = await fetchResources();
      if (isMounted) {
        setResources(data);
      }
    };

    void loadResources();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold">Resources</h1>
        <p className="mt-2 text-lg text-black/60">
          Thoughts and curated readings on Software Development and AI
        </p>
      </header>
      <CategoryFilter resources={resources} />
    </div>
  );
}

function CategoryFilter({ resources }: { resources: Resource[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const categories = ["ALL", "SOFTWARE_DEVELOPMENT", "ARTIFICIAL_INTELLIGENCE"];
  const filtered =
    activeCategory === "ALL"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <>
      <div className="mb-8 flex gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded border border-line text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black hover:bg-black/5"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === "ALL" ? "All" : cat.replace("_", " ")}
          </button>
        ))}
      </div>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </section>
    </>
  );
}
