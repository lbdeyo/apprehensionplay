import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Apprehension: A Play by L.B. Deyo | Austin Theatre",
  description:
    "Experience the psychological thriller 'Apprehension' at Hyde Park Theatre, Austin. Directed by Sonnet Blanton, starring Jennymarie Jemison, Jeff Mills, and Michelle Keffer. Oct 9-Nov 1, 2024.",
  openGraph: {
    title: "Apprehension: A Play by L.B. Deyo",
    description:
      "A psychological thriller set in a world where reality shifts and truth is shrouded in deceit. Playing at Hyde Park Theatre, Austin, Oct 9-Nov 1, 2024.",
  },
};

export default function Page() {
  return <HomePage />;
}
