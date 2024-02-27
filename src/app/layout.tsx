import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
