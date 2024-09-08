// components/ClientOnlyLayout.js
"use client"; // Dette er en Client Component

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SanityLayout({ children }) {
  const pathname = usePathname(); // Henter gjeldende rute

  // Sjekk om brukeren er på /studio-ruten
  const isStudioRoute = pathname.startsWith("/studio");

  return (
    <>
      {/* Ikke vis Header og Footer hvis vi er på /studio-ruten */}
      {!isStudioRoute && <Header />}
      <main className="flex-1">{children}</main>
      {!isStudioRoute && <Footer />}
    </>
  );
}
