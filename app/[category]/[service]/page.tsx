import ServiceDetail from "@/components/service-detail";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SERVICE_DATA = {
  "prewedding": {
    title: "Prewedding Session",
    investment: "Starts at $1,500",
    deliverables: "50+ Edited Photos",
    image: "/images/prewedding-meta.jpg"
  },
  "engagement": {
    title: "Engagement Session",
    investment: "Starts at $800",
    deliverables: "30+ Edited Photos",
     image: "/images/engagement-meta.jpg"
  },
  "wedding": {
    title: "Wedding Collection",
    investment: "Starts at $4,500",
    deliverables: "600+ Edited Photos",
    image: "/images/wedding-meta.jpg"
  },
  "maternity": {
    title: "Maternity Portrait",
    investment: "Starts at $750",
    deliverables: "25+ Edited Photos",
    image: "/images/maternity-meta.jpg"
  },
  "family": {
    title: "Family Portrait",
    investment: "Starts at $900",
    deliverables: "40+ Edited Photos",
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
    openGraph: {
      title: fullTitle,
      siteName: "Feelm Tales",
      images: [{ url: data.image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
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
      serviceSlug={service}     
    />
  );
}