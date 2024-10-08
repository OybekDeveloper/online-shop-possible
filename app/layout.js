import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });
import "mapbox-gl/dist/mapbox-gl.css";
import Script from "next/script";

export const metadata = {
  title: "Possible | Online Shop",
  description:
    "IT компания «POSSIBLE» — системный разработчик программного обеспечения для бизнеса.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YMAPS_API_KEY}&lang=en_US`}
          strategy="beforeInteractive"
        />
        <NextTopLoader />
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
