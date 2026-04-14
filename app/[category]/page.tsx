import Details from "@/components/details";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BackstoryContent from "@/components/backstory-content";
import ConnectContent from "@/components/connect-content";
import { CATEGORY_DATA } from "@/constants/content";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryKey = category?.toLowerCase() as keyof typeof CATEGORY_DATA;
  const selectCategory = CATEGORY_DATA[categoryKey];

  if (!selectCategory) {
    return { title: "Page Not Found | Feelm Tales" };
  }

  const fullTitle = `${selectCategory.title} — Feelm Tales`;

  return {
    title: fullTitle,
    description: selectCategory.description,
    openGraph: {
      title: fullTitle,
      description: selectCategory.description,
      siteName: "Feelm Tales",
      url: `https://feelmtales.com${selectCategory.href}`,
      type: "website",
      images: [{ url: selectCategory.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: selectCategory.description,
      images: [selectCategory.image],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { category } = await params;

  if (!category) {
    notFound();
  }

  const categoryKey = category.toLowerCase() as keyof typeof CATEGORY_DATA;
  const selectCategory = CATEGORY_DATA[categoryKey];

  if (!selectCategory) {
    notFound();
  }

  if (categoryKey === "backstory") {
    return <BackstoryContent />;
  }

  if (categoryKey === "connect") {
    return <ConnectContent />;
  }

  return (
    <Details 
      title={selectCategory.title} 
      description={selectCategory.description} 
      services={[...selectCategory.services]}
      category={categoryKey}
    />
  );
}