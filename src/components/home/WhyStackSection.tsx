export default function WhyStackSection() {
  return (
    <section className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-2">¿Por qué este stack?</h2>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>
          <span className="font-semibold">Escalabilidad y rendimiento:</span>{" "}
          Next.js permite SSR y SSG, optimizando la experiencia del usuario y el
          SEO.
        </li>
        <li>
          <span className="font-semibold">Desarrollo ágil:</span> Shadcn UI y
          Prisma aceleran la creación de interfaces y la gestión de datos.
        </li>
        <li>
          <span className="font-semibold">Seguridad:</span> Auth.js ofrece
          autenticación robusta y confiable.
        </li>
        <li>
          <span className="font-semibold">Simplicidad:</span> SQLite es ideal
          para prototipos y proyectos pequeños, sin necesidad de configuración
          compleja.
        </li>
      </ul>
    </section>
  );
}
