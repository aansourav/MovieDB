import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieDB",
  description: "Get the latest movie information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
