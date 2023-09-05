import "../global.css";
import "animate.css/animate.min.css";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { GlobalProviders } from "@/context/GlobalProviders";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "This is my personal Portofolio",
};

const openSans = Open_Sans({
  subsets: ["latin-ext"],
});

function RootLayout({ children }) {
  return (
    <html>
      <body className={"dark:bg-zinc-900 " + openSans.className}>
        <GlobalProviders>
          <Navbar />
          <main className="container mx-auto mt-3">{children}</main>
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}

export default RootLayout;
