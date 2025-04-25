export default function DeveloperSection() {
  return (
    <section className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-2">¿Eres desarrollador?</h2>
      <p className="text-base mb-2">
        Explora el código, contribuye o adapta esta solución a tus propios
        proyectos. ¡La comunidad open source impulsa la innovación!
      </p>
      <a
        href="https://github.com/edcadev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 rounded-full bg-black text-white px-6 py-2 font-medium hover:bg-neutral-800 transition-colors"
      >
        Ver perfil de edcadev
      </a>
    </section>
  );
}
