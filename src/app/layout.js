import { Inter } from "next/font/google";
import "./styles/globals.css";
import SanityLayout from "@/components/SanityLayout"; // Ny Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByPaolla",
  description: "ByPaolla portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex flex-col min-h-screen">
          {/* ClientOnlyLayout tar seg av routing-logikken */}
          <SanityLayout>{children}</SanityLayout>
        </div>
      </body>
    </html>
  );
}
