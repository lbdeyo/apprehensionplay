import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Apprehension Play - Get in Touch",
  description:
    "Contact the Apprehension play team for tickets, press inquiries, or general questions. Playing at Hyde Park Theatre, Austin, Oct 9-Nov 1, 2024.",
  keywords:
    "Apprehension contact, theatre tickets, press inquiries, Hyde Park Theatre contact, Austin play contact",
  openGraph: {
    title: "Contact Us | Apprehension Play - Get in Touch",
    description:
      "Get in touch with the Apprehension play team for tickets, press inquiries, and general questions about the show.",
    url: "https://apprehensionplay.com/contact",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Apprehension Play Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Apprehension Play - Get in Touch",
    description:
      "Contact the Apprehension play team for tickets and inquiries.",
    images: ["/meta-image.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
