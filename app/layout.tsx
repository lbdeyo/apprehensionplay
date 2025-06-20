import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Apprehension: A Play",
  description: "Official website for the play Apprehension",
  openGraph: {
    title: "Apprehension: A Play",
    description: "Official website for the play Apprehension",
    images: [
      {
        url: '/meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apprehension: A Play',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Apprehension: A Play",
    description: "Official website for the play Apprehension",
    images: ['/meta-image.jpg'],
  },
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
