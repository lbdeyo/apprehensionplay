import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Apprehension: A Play by L.B. Deyo | Austin Theatre",
  description:
    "Experience the psychological thriller 'Apprehension' at Hyde Park Theatre, Austin. Directed by Sonnet Blanton, starring Jennymarie Jemison, Jeff Mills, and Michelle Keffer. Oct 9-Nov 1, 2024.",
  keywords:
    "Apprehension play, L.B. Deyo, Austin theatre, Hyde Park Theatre, psychological thriller, Sonnet Blanton, Jennymarie Jemison, Jeff Mills, Michelle Keffer, tickets",
  openGraph: {
    title: "Apprehension: A Play by L.B. Deyo",
    description:
      "A psychological thriller set in a world where reality shifts and truth is shrouded in deceit. Playing at Hyde Park Theatre, Austin, Oct 9-Nov 1, 2024.",
    url: "https://apprehensionplay.com",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprehension: A Play by L.B. Deyo",
    description:
      "A psychological thriller at Hyde Park Theatre, Austin. Oct 9-Nov 1, 2024. Tickets on sale now!",
    images: ["/meta-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
