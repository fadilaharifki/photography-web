import PortfolioDetail from "@/components/portfolio-detail";
import { Metadata } from "next";

interface PageProps {
  params: {
    category: string;
    service: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service, slug } = params;
  
  const formattedTitle = slug

  const formattedService = service

  const description = `${formattedTitle} - A professional ${formattedService} portfolio by Momenku. Capturing timeless stories in ${category}.`;
  const url = `https://momenku.com/${category}/${service}/${slug}`;

  return {
    title: `${formattedTitle} | ${formattedService} | Momenku`,
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${formattedTitle} | Momenku`,
      description: description,
      url: url,
      siteName: "Momenku",
      images: [
        {
          url: "https://picsum.photos/id/103/1200/630",
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} | Momenku`,
      description: description,
      images: ["https://picsum.photos/id/103/1200/630"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const { category, slug } = params;

  const formattedTitle = slug

  return (
    <PortfolioDetail
      title={formattedTitle}
      category={category}
    />
  );
}