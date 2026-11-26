import { PRODUCTS } from '@/lib/mockData';
import ProductDetailClient from './ProductDetailClient';

// Static export: generate all product paths at build time
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <ProductDetailClient params={params} />;
}