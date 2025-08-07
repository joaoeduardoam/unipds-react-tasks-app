import type { Metadata } from "next";
import "./../globals.css";
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

        
          <main className="mt-24 flex justify-center mb-14">
            {children}
          </main>
        

      </body>
    </html>
  );
}
