import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./css/styles.css";
import "./css/normalize.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SABI Brow & Beauty",
  description: "Beauty Salon in Aurora, Naperville, Plainfield, Oswego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.sabibrowandbeauty.com/" />
      <link rel="icon" href="/sabi.png" />
      <title>
        SABI Brow & Beauty - Beauty Salon in Aurora, Naperville, Plainfield,
        Oswego
      </title>
      <meta
        name="description"
        content="Beauty Salon offering Eyebrow Threading, Waxing, Women Hair cut, Hair Removal, Eyelashes, Facial, Henna in Aurora, Naperville, Illinois. Affordable beauty services."
      />
      <meta
        property="og:title"
        content="Beauty Salon for Eyebrow Threading, Waxing, Women hair cut, Hair removal, Eyelashes, Facial, Henna"
      />
      <meta
        property="og:description"
        content="Beauty Salon | Eyebrow Threading | Waxing | Women hair cut | Hair removal | Eyelashes | Facial | Henna in Aurora, Naperville, Illinois"
      />
      <meta property="og:type" content="Website" />
      <meta property="og:image" content="/sabi.png" />
      <meta property="og:url" content="http://sabibrowandbeauty.com" />
      <body>
        <NavBar />
        <main>
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
