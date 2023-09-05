import "../global.css";
import "animate.css/animate.min.css";
import { Open_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";

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
      <body className={"dark:bg-zinc-900" + openSans.className}>
        <Navbar />
        <main className="container mx-auto mt-3">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
