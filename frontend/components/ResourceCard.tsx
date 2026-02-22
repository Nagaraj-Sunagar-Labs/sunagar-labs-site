import Link from "next/link";
import { Resource } from "@/lib/api";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ResourceCard({ resource }: { resource: Resource }) {
  const isExternal = resource.type === "EXTERNAL";
  const linkProps = isExternal
    ? { href: resource.link, target: "_blank", rel: "noopener noreferrer" }
    : { href: `/resources/${resource.id}` };

  return (
    <div className="border border-line rounded bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-1 text-xs rounded bg-black text-white font-semibold">
          {resource.category.replace("_", " ")}
        </span>
        <span className={`px-2 py-1 text-xs rounded font-semibold ${isExternal ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
          {resource.type}
        </span>
      </div>
      <Link {...linkProps} className="block text-lg font-bold mb-1 hover:underline">
        {resource.title}
        {isExternal && (
          <span className="ml-2 inline-block align-middle" title="External link">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="21" y1="3" x2="10" y2="14"/></svg>
          </span>
        )}
      </Link>
      <p className="text-sm text-black/70 mb-2">{resource.description}</p>
      <div className="text-xs text-black/50">Published: {formatDate(resource.createdAt)}</div>
    </div>
  );
}
