export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Sunagar Labs</p>
        <div className="flex gap-6">
          <a href="https://github.com/Nagaraj-Sunagar-Labs" target="_blank" rel="noreferrer" className="underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nagaraj-sunagar-7a09341b4/" target="_blank" rel="noreferrer" className="underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
