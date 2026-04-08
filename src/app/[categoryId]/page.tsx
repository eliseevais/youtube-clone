import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video in category: ...",
};

type CategoryIdPageProps = {
  params: Promise<{ categoryId: string }>;
};

export default async function CategoryIdPage({ params }: CategoryIdPageProps) {
  const data = await params;
  const categoryId = data.categoryId;

  return <div>CategoryIdPage: {categoryId}</div>;
}
