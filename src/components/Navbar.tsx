import Link from "next/link";
import { SearchCode } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-3 px-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-10">
      <Link href="/" className="flex items-center gap-2">
        <SearchCode />
        <span className="font-semibold text-xl tracking-tight">edcadev</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button>Iniciar sesión</Button>
        </Link>
      </div>
    </nav>
  );
}
