import type { Metadata } from "next";
import MediaGallery from "./MediaGallery";

export const metadata: Metadata = {
  title: "Media Gallery | Apprehension Play Photos & Videos",
  description:
    "Browse behind-the-scenes photos, promotional images, and media content from the psychological thriller 'Apprehension' by L.B. Deyo.",
  openGraph: {
    title: "Media Gallery | Apprehension Play Photos & Videos",
    description:
      "Behind-the-scenes photos and promotional content from the psychological thriller 'Apprehension'.",
  },
};

export default function Media() {
  return <MediaGallery />;
}
