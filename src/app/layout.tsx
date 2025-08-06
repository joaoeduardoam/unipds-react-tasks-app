import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tasks App",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">

        <header className="fixed top-0 left-0 right-0 py-2 text-center border-b shadow-xl font-bold">
          <Link href="/"> Tasks App </Link>
        </header>
        
        
          <main className="mt-24 flex justify-center mb-14">
            {children}
          </main>
        

        <footer className="text-center mb-14">
          <p className="text-sm">Developed during the Front-End Fundamentals with React course</p>
          <p className="text-xs">Java Postgraduate Program, UNIPDS, 2025</p>
        </footer>
      </body>
    </html>
  );
}
