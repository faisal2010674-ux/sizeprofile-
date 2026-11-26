import { BRANDS } from '@/lib/mockData';
import BrandDetailClient from './BrandDetailClient';

// Static export: generate all brand paths at build time
export async function generateStaticParams() {
  return BRANDS.map((b) => ({ id: b.id }));
}

export default function BrandDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <BrandDetailClient params={params} />;
}