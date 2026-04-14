import Details from "@/components/details";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const CATEGORY_DATA = {
  "the-beginning": {
    title: "Beginning",
    description: "Abadikan momen awal perjalanan cinta melalui Pre-Wedding dan Tunangan.",
    services: ["Pre-wedding", "Engagement"],
    image: "https://picsum.photos/id/103/1200/630",
  },
  "the-union": {
    title: "Union",
    description: "Merayakan janji suci dan kebersamaan di hari pernikahan Anda.",
    services: ["Wedding Day", "Holy Matrimony"],
    image: "https://picsum.photos/id/111/1200/630",
  },
  "the-legacy": {
    title: "Legacy",
    description: "Menyimpan memori berharga mulai dari kelahiran hingga momen hangat keluarga.",
    services: ["Maternity", "Newborn", "Family Portrait"],
    image: "https://picsum.photos/id/115/1200/630",
  },
  backstory: {
    title: "Backstory",
    description: "Menceritakan kisah cinta Anda melalui dokumentasi perjalanan hubungan.",
    services: [],
    image: "https://picsum.photos/id/120/1200/630",
  },
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const selectCategory = CATEGORY_DATA[category?.toLowerCase() as keyof typeof CATEGORY_DATA];

  if (!selectCategory) {
    return { title: "Package Not Found | Feelm Tales" };
  }

  const fullTitle = `${selectCategory.title} Package | Feelm Tales`;
  return {
    title: fullTitle,
    description: selectCategory.description,
    openGraph: {
      title: fullTitle,
      description: selectCategory.description,
      siteName: "Feelm Tales",
      images: [{ url: selectCategory.image }],
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

  return (
    <Details 
      title={selectCategory.title} 
      description={selectCategory.description} 
      services={selectCategory.services}
      category={category}
    />
  );
}