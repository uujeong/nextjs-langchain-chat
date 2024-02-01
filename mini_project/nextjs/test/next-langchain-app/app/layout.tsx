import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "My chat",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 bg-white z-10 border-b mx-4 flex">
          <Link href="/stream-data-basic" className="block px-4 py-2">
            basic
          </Link>
          <Link href="/stream-data-chain" className="block px-4 py-2">
            chain
          </Link>
        </header>
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
