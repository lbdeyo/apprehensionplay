import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Apprehension Play",
  description: "Official website for the play Apprehension",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params?: { segment?: string[] };
}>) {
  // Check if the current route is the homepage
  const isHome = typeof window === "undefined" && (!params?.segment || params.segment.length === 0);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rjw3vjg.css" />
      </head>
      <body>
        <Navigation />
        {isHome ? (
          children
        ) : (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        )}
      </body>
    </html>
  );
}
