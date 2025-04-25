import Image from "next/image";

export default function StackSection() {
  return (
    <section className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-4">
        Autenticación moderna con Next.js, Shadcn UI, Prisma, SQLite, Auth.js y
        GitHub
      </h1>
      <Image
        src="/images/monte-fuji.avif"
        alt="Ejemplo de integración"
        width={600}
        height={300}
        className="rounded-xl shadow-md mb-4 w-full object-cover"
      />
      <p className="text-lg text-center sm:text-left text-muted-foreground mb-2">
        Esta plataforma demuestra cómo integrar autenticación segura utilizando
        tecnologías modernas y de código abierto. A continuación, se describe el
        stack utilizado:
      </p>
      <ul className="space-y-6 text-base mb-4">
        <li>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-blue-600"
          >
            Next.js
          </a>
          : Framework de React para construir aplicaciones web rápidas y
          escalables, con soporte para rutas, SSR y API routes.
        </li>
        <li>
          <a
            href="https://ui.shadcn.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-blue-600"
          >
            Shadcn UI
          </a>
          : Colección de componentes UI accesibles y personalizables,
          facilitando la creación de interfaces modernas y consistentes.
        </li>
        <li>
          <a
            href="https://www.prisma.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-blue-600"
          >
            Prisma
          </a>{" "}
          &{" "}
          <a
            href="https://www.sqlite.org/docs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-blue-600"
          >
            SQLite
          </a>
          : Prisma es un ORM que simplifica el acceso y manipulación de datos.
          SQLite es una base de datos ligera y fácil de configurar, ideal para
          desarrollo y prototipos.
        </li>
        <li>
          <a
            href="https://authjs.dev/getting-started/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-blue-600"
          >
            Auth.js
          </a>
          : Biblioteca para manejar autenticación en Next.js, permitiendo
          integrar múltiples proveedores de login de forma sencilla y segura.
        </li>
      </ul>
    </section>
  );
}
