import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Permanent_Marker,
  Roboto,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";
import FocusSlider from "@/components/Home/FocusSlider";
import Navbar2 from "@/common/Navbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mogul Bay | Your Ultimate Financial Dashboard",
  description:
    "Manage your wealth with Mogul Bay - the ultimate financial dashboard for tracking and optimizing your investments. Stay on top of your portfolio, analyze performance, and make informed decisions with our intuitive interface and powerful tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${marker.variable} ${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FocusSlider />
        <Navbar2 />
        {children}
      </body>
    </html>
  );
}
