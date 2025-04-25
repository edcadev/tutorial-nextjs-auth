export default function ResourcesSection() {
  return (
    <section className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-2">Recursos útiles</h2>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Tutorial interactivo de Next.js
          </a>
        </li>
        <li>
          <a
            href="https://ui.shadcn.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Guía de instalación de Shadcn UI
          </a>
        </li>
        <li>
          <a
            href="https://www.prisma.io/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Primeros pasos con Prisma
          </a>
        </li>
        <li>
          <a
            href="https://authjs.dev/getting-started/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Introducción a Auth.js
          </a>
        </li>
        <li>
          <a
            href="https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            OAuth Apps en GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
