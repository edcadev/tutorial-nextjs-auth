export default function MainLinks() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 w-full">
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-5 w-full sm:w-auto"
        href="https://github.com/nextauthjs/next-auth"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más sobre Auth.js
      </a>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-5 w-full sm:w-auto"
        href="https://ui.shadcn.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más sobre Shadcn UI
      </a>
    </div>
  );
}
