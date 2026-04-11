import ServiceDetail from "@/components/service-detail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SERVICE_DATA = {
  "prewedding": {
    title: "Prewedding Session",
    investment: "Starts at $1,500",
    deliverables: "50+ Edited Photos",
    description: "A full day of coverage to ensure every moment is preserved forever.",
    included: ["Timeline Assistance", "Print Rights", "High Res Files", "Location Scouting"],
    image: "/images/prewedding-meta.jpg"
  },
  "engagement": {
    title: "Engagement Session",
    investment: "Starts at $800",
    deliverables: "30+ Edited Photos",
    description: "Capturing the raw emotion and the promise of your new journey together.",
    included: ["1 Hour Session", "Online Gallery", "High Res Files", "Outfit Guide"],
    image: "/images/engagement-meta.jpg"
  },
  "wedding": {
    title: "Wedding Collection",
    investment: "Starts at $4,500",
    deliverables: "600+ Edited Photos",
    description: "Documenting your sacred union with a cinematic and storytelling approach.",
    included: ["Full Day Coverage", "Second Photographer", "Physical Album", "Same Day Edit"],
    image: "/images/wedding-meta.jpg"
  },
  "maternity": {
    title: "Maternity Portrait",
    investment: "Starts at $750",
    deliverables: "25+ Edited Photos",
    description: "Honoring the strength and beauty of new life beginning within you.",
    included: ["1.5 Hour Session", "Studio or Outdoor", "Private Gallery", "Print Rights"],
    image: "/images/maternity-meta.jpg"
  },
  "family": {
    title: "Family Portrait",
    investment: "Starts at $900",
    deliverables: "40+ Edited Photos",
    description: "Preserving the warmth and chaotic beauty of your family's unique tale.",
    included: ["Full Family Session", "Directing & Posing", "High Res Files", "Heirloom Options"],
    image: "/images/family-meta.jpg"
  }
};

interface PageProps {
  params: Promise<{
    category: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, category } = await params;
  const data = SERVICE_DATA[service.toLowerCase() as keyof typeof SERVICE_DATA];

  if (!data) return { title: "Service | Feelm Tales" };

  const fullTitle = `${data.title} - ${category.replace("-", " ").toUpperCase()} | Feelm Tales`;

  return {
    title: fullTitle,
    description: data.description,
    openGraph: {
      title: fullTitle,
      description: data.description,
      siteName: "Feelm Tales",
      images: [{ url: data.image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: data.description,
      images: [data.image],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { category, service } = await params;
  const data = SERVICE_DATA[service.toLowerCase() as keyof typeof SERVICE_DATA];

  if (!data) {
    notFound();
  }

  return (
    <ServiceDetail
      title={data.title}
      category={category}
      investment={data.investment}
      deliverables={data.deliverables}
      description={data.description}
      included={data.included}
    />
  );
}