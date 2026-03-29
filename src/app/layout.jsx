import "../global.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { GlobalProviders } from "@/context/GlobalProviders";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ryan Ray | Portfolio",
  description: "Full Stack Developer Portfolio",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

function RootLayout({ children }) {
  return (
    <html className={`${playfair.variable} ${sourceSans.variable}`}>
      <body
        className="font-[family-name:var(--font-body)] antialiased"
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <GlobalProviders>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 md:px-8 py-8">{children}</main>
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}

export default RootLayout;
