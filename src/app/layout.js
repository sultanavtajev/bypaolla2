import Header from "@/components/Header";
import Footer from "@/components/Footer";

// FONTS
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/900-italic.css";
import "@fontsource/montserrat/900.css";

// CSS Styles
import "../styles/clear.css";
import "../styles/sm-clean.css";
import "../styles/comman.css";
import "../styles/globals.css";
import "../styles/our-styles.css";

export const metadata = {
  title: "ByPaolla",
  description: "ByPaolla portfolio",
  keywords: ["Blogg", "Portfolio", "Mote", "Fashion", "Reise", "Tanker"],
  authors: [
    {
      name: "Paolla Miranda Da Silva",
      url: "https://bypaolla.com/",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="site-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
