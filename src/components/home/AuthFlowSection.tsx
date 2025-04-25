export default function AuthFlowSection() {
  return (
    <section className="mb-8 w-full">
      <h2 className="text-2xl font-semibold mb-2">
        ¿Cómo funciona la autenticación?
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-base">
        <li>
          El usuario hace clic en “Iniciar sesión” y es redirigido a GitHub para
          autorizar la aplicación.
        </li>
        <li>
          Tras autorizar, GitHub redirige al usuario de vuelta a la plataforma
          con un token seguro.
        </li>
        <li>
          Auth.js gestiona la sesión y almacena la información del usuario en la
          base de datos mediante Prisma y SQLite.
        </li>
        <li>
          El usuario puede acceder a las funcionalidades protegidas de la
          plataforma.
        </li>
      </ol>
    </section>
  );
}
