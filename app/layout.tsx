import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Apprehension: A Play by L.B. Deyo | Austin Theatre",
  description: "Experience the psychological thriller 'Apprehension' at Hyde Park Theatre, Austin. Directed by Sonnet Blanton, starring Jennymarie Jemison, Jeff Mills, and Michelle Keffer. Oct 9-Nov 1, 2024.",
  keywords: "Apprehension play, L.B. Deyo, Austin theatre, Hyde Park Theatre, psychological thriller, Sonnet Blanton, Jennymarie Jemison, Jeff Mills, Michelle Keffer",
  authors: [{ name: "L.B. Deyo" }],
  creator: "L.B. Deyo",
  publisher: "Hyde Park Theatre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apprehensionplay.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Apprehension: A Play by L.B. Deyo",
    description: "A psychological thriller set in a world where reality shifts and truth is shrouded in deceit. Playing at Hyde Park Theatre, Austin, Oct 9-Nov 1, 2024.",
    url: 'https://yourdomain.com',
    siteName: 'Apprehension: A Play',
    images: [
      {
        url: '/meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apprehension: A Play - Psychological Thriller',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Apprehension: A Play by L.B. Deyo",
    description: "A psychological thriller at Hyde Park Theatre, Austin. Oct 9-Nov 1, 2024.",
    images: ['/meta-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y7TZ7564HR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y7TZ7564HR');
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TheaterEvent",
              "name": "Apprehension",
              "description": "A psychological thriller set in a world where the past falters, reality shifts, and the truth is shrouded in deceit.",
              "startDate": "2024-10-09T20:00:00",
              "endDate": "2024-11-01T22:00:00",
              "location": {
                "@type": "Place",
                "name": "Hyde Park Theatre",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Austin",
                  "addressRegion": "TX",
                  "addressCountry": "US"
                }
              },
              "performer": [
                {
                  "@type": "Person",
                  "name": "Jennymarie Jemison"
                },
                {
                  "@type": "Person",
                  "name": "Jeff Mills"
                },
                {
                  "@type": "Person",
                  "name": "Michelle Keffer"
                }
              ],
              "director": {
                "@type": "Person",
                "name": "Sonnet Blanton"
              },
              "author": {
                "@type": "Person",
                "name": "L.B. Deyo"
              },
              "producer": {
                "@type": "Person",
                "name": "Christopher Shea"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Hyde Park Theatre"
              }
            })
          }}
        />
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
