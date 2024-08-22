import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Possible | Online Shop",
  description:
    "IT компания «POSSIBLE» — системный разработчик программного обеспечения для бизнеса.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
