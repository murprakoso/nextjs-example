import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial - Next.js App",
    template: "%s | Next App",
  },
  description: "Generated next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1em",
          }}
        >
          <p>Header</p>
          <Link href="/" scroll={false}>
            Home
          </Link> &nbsp;
          <Link href="/products" scroll={false}>
            Products
          </Link> &nbsp;
          <Link href="/blog" scroll={false}>
            Blog
          </Link> &nbsp;
        </header>
        {/* content children */}
        {children}
        <footer
          style={{
            backgroundColor: "cyan",
            padding: "1em",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
