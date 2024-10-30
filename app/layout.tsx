import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import CartLogo from "@/components/cartLogo";

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waxio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg"/>
      </head>
      <body className={`${unbounded.className} bg-[#212121]`} suppressHydrationWarning={true}>
        <Header/>
        {children}
        <Footer/>
        <CartLogo/>
      </body>
    </html>
  );
}
