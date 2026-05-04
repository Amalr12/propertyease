import { notFound } from "next/navigation";
import { properties } from "@/app/data/each-properties-data";
import PropertyHeroSection from "@/app/components/pages/properties_id/Property_id-hero";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({ params }: PageProps) {
  // ✅ FIX: await params
  const { slug } = await params;

  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-gray-100  p-4">
      <PropertyHeroSection {...property} />
    </div>
  );
}

// ✅ Static generation
export function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}