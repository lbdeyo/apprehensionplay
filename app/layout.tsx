import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Apprehension Play",
  description: "Official website for the play Apprehension",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rjw3vjg.css" />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
