export default function Footer() {
  return (
    <footer className="row-start-3 flex items-center justify-center py-6 text-sm text-muted-foreground w-full">
      <span>
        Hecho con <span className="text-red-500">♥️</span> por{" "}
        <a
          href="https://github.com/edcadev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-blue-600"
        >
          edcadev
        </a>{" "}
        - &copy; 2025
      </span>
    </footer>
  );
}
