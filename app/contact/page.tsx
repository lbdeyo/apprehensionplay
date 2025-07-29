import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Apprehension Play - Get in Touch",
    description: "Contact the Apprehension play team for tickets, press inquiries, or general questions. Playing at Hyde Park Theatre, Austin, Oct 9-Nov 1, 2024.",
    openGraph: {
        title: "Contact Us | Apprehension Play - Get in Touch",
        description: "Get in touch with the Apprehension play team for tickets and inquiries.",
    },
};

export default function ContactPage() {
    return <ContactForm />;
} 