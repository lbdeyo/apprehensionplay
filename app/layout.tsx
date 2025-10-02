import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Apprehension: A Play by L.B. Deyo | Austin Theatre",
  description:
    "Experience the psychological thriller 'Apprehension' at Hyde Park Theatre, Austin. Directed by Sonnet Blanton, starring Jennymarie Jemison, Jeff Mills, and Michelle Keffer. Oct 9-Nov 1, 2024.",
  keywords:
    "Apprehension play, L.B. Deyo, Austin theatre, Hyde Park Theatre, psychological thriller, Sonnet Blanton, Jennymarie Jemison, Jeff Mills, Michelle Keffer",
  authors: [{ name: "L.B. Deyo" }],
  creator: "L.B. Deyo",
  publisher: "Hyde Park Theatre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://apprehensionplay.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apprehension: A Play by L.B. Deyo",
    description:
      "A psychological thriller set in a world where reality shifts and truth is shrouded in deceit. Playing at Hyde Park Theatre, Austin, Oct 9-Nov 1, 2024.",
    url: "https://apprehensionplay.com",
    siteName: "Apprehension: A Play",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apprehension: A Play - Psychological Thriller at Hyde Park Theatre",
      },
      {
        url: "/img/apprehension-poster-concept-4.jpg",
        width: 800,
        height: 1200,
        alt: "Apprehension Play Poster - L.B. Deyo",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprehension: A Play by L.B. Deyo",
    description:
      "A psychological thriller at Hyde Park Theatre, Austin. Oct 9-Nov 1, 2024. Tickets on sale now!",
    images: ["/meta-image.jpg"],
    creator: "@lbdeyo",
    site: "@apprehensionplay",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Apprehension",
    "application-name": "Apprehension: A Play",
    "msapplication-TileColor": "#070C17",
    "msapplication-config": "/browserconfig.xml",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#BEB58F" },
    { media: "(prefers-color-scheme: dark)", color: "#070C17" },
  ],
  category: "entertainment",
  classification: "Theatre Production",
  referrer: "origin-when-cross-origin",
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y7TZ7564HR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y7TZ7564HR');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TheaterEvent",
              name: "Apprehension",
              description:
                "A psychological thriller set in a world where the past falters, reality shifts, and the truth is shrouded in deceit.",
              startDate: "2024-10-09T20:00:00",
              endDate: "2024-11-01T22:00:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              url: "https://apprehensionplay.com",
              image: [
                "https://apprehensionplay.com/meta-image.jpg",
                "https://apprehensionplay.com/img/apprehension-poster-concept-4.jpg",
              ],
              location: {
                "@type": "Place",
                name: "Hyde Park Theatre",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "511 W 43rd St",
                  addressLocality: "Austin",
                  addressRegion: "TX",
                  postalCode: "78751",
                  addressCountry: "US",
                },
                url: "https://www.hydeparktheatre.org/",
              },
              offers: {
                "@type": "Offer",
                url: "https://www.ticketleap.events/tickets/holi-shamoli-productions/apprehension",
                price: "25",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                validFrom: "2024-08-01T00:00:00",
              },
              performer: [
                {
                  "@type": "Person",
                  name: "Jennymarie Jemison",
                  jobTitle: "Actor",
                },
                {
                  "@type": "Person",
                  name: "Jeff Mills",
                  jobTitle: "Actor",
                },
                {
                  "@type": "Person",
                  name: "Michelle Keffer",
                  jobTitle: "Actor",
                },
              ],
              director: {
                "@type": "Person",
                name: "Sonnet Blanton",
                jobTitle: "Director",
              },
              author: {
                "@type": "Person",
                name: "L.B. Deyo",
                jobTitle: "Playwright",
              },
              producer: {
                "@type": "Person",
                name: "Christopher Shea",
                jobTitle: "Producer",
              },
              organizer: {
                "@type": "Organization",
                name: "Hyde Park Theatre",
                url: "https://www.hydeparktheatre.org/",
              },
              genre: ["Psychological Thriller", "Drama", "Theatre"],
              inLanguage: "en-US",
              duration: "PT120M",
              workPerformed: {
                "@type": "CreativeWork",
                name: "Apprehension",
                author: {
                  "@type": "Person",
                  name: "L.B. Deyo",
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
