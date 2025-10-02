import type { Metadata } from "next";
import MediaGallery from "./MediaGallery";

export const metadata: Metadata = {
  title: "Media Gallery | Apprehension Play Photos & Videos",
  description:
    "Browse behind-the-scenes photos, promotional images, and media content from the psychological thriller 'Apprehension' by L.B. Deyo.",
  keywords:
    "Apprehension photos, behind the scenes, promotional images, theatre media, Austin play gallery, L.B. Deyo media",
  openGraph: {
    title: "Media Gallery | Apprehension Play Photos & Videos",
    description:
      "Behind-the-scenes photos and promotional content from the psychological thriller 'Apprehension' at Hyde Park Theatre.",
    url: "https://apprehensionplay.com/media",
    images: [
      {
        url: "/img/media/social-04132025.png",
        width: 1200,
        height: 630,
        alt: "Apprehension Media Gallery - Behind the Scenes Photos",
      },
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apprehension Play Media Gallery",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Gallery | Apprehension Play Photos & Videos",
    description:
      "Behind-the-scenes photos and promotional content from the psychological thriller 'Apprehension'.",
    images: ["/img/media/social-04132025.png"],
  },
  alternates: {
    canonical: "/media",
  },
};

export default function Media() {
  return <MediaGallery />;
}
