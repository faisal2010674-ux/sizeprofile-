import { Brand, Product } from '../types';

export const BRANDS: Brand[] = [
  {
    id: 'zara',
    name: 'Zara',
    logoText: 'ZARA',
    tagline: 'Modern Elegance',
    description: 'High-end fashion for everyone. Sizing tends to be slightly slim and European-inspired.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 86, chestMax: 91, waistMin: 71, waistMax: 76, shouldersMin: 40, shouldersMax: 42 },
        { size: 'S', chestMin: 91, chestMax: 96, waistMin: 76, waistMax: 81, shouldersMin: 42, shouldersMax: 44 },
        { size: 'M', chestMin: 96, chestMax: 101, waistMin: 81, waistMax: 86, shouldersMin: 44, shouldersMax: 46 },
        { size: 'L', chestMin: 101, chestMax: 107, waistMin: 86, waistMax: 92, shouldersMin: 46, shouldersMax: 48 },
        { size: 'XL', chestMin: 107, chestMax: 113, waistMin: 92, waistMax: 98, shouldersMin: 48, shouldersMax: 50 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 83 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 82, inseamMax: 85 },
      ]
    }
  },
  {
    id: 'h&m',
    name: 'H&M',
    logoText: 'H&M',
    tagline: 'Fashion and Quality',
    description: 'Affordable, sustainable fashion. Tends to have more generous cuts compared to Zara.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 84, chestMax: 88, waistMin: 72, waistMax: 76 },
        { size: 'S', chestMin: 92, chestMax: 96, waistMin: 80, waistMax: 84 },
        { size: 'M', chestMin: 100, chestMax: 104, waistMin: 88, waistMax: 92 },
        { size: 'L', chestMin: 108, chestMax: 112, waistMin: 96, waistMax: 100 },
        { size: 'XL', chestMin: 116, chestMax: 120, waistMin: 104, waistMax: 108 },
      ]
    }
  },
  {
    id: 'uniqlo',
    name: 'Uniqlo',
    logoText: 'UNIQLO',
    tagline: 'LifeWear',
    description: 'Japanese-designed wardrobe essentials. Consistent sizing with focus on comfort.',
    categories: ['tops', 'bottoms'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 80, chestMax: 88, waistMin: 68, waistMax: 76 },
        { size: 'S', chestMin: 88, chestMax: 96, waistMin: 76, waistMax: 84 },
        { size: 'M', chestMin: 96, chestMax: 104, waistMin: 84, waistMax: 92 },
        { size: 'L', chestMin: 104, chestMax: 112, waistMin: 92, waistMax: 100 },
        { size: 'XL', chestMin: 112, chestMax: 120, waistMin: 100, waistMax: 108 },
      ]
    }
  },
  {
    id: 'nike',
    name: 'Nike',
    logoText: 'NIKE',
    tagline: 'Just Do It',
    description: 'Athletic apparel designed for performance. Athletic cut, often tailored for movement.',
    categories: ['tops', 'bottoms', 'shoes'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 88, chestMax: 96, waistMin: 73, waistMax: 81 },
        { size: 'M', chestMin: 96, chestMax: 104, waistMin: 81, waistMax: 89 },
        { size: 'L', chestMin: 104, chestMax: 112, waistMin: 89, waistMax: 97 },
        { size: 'XL', chestMin: 112, chestMax: 124, waistMin: 97, waistMax: 109 },
      ]
    }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Essential Cotton Tee',
    category: 'tops',
    price: 29.99,
    imageUrl: '/products/tee.jpg',
    description: 'A premium cotton basic for your everyday wardrobe.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p2',
    brandId: 'uniqlo',
    brandName: 'Uniqlo',
    name: 'Supima Cotton Crew Neck',
    category: 'tops',
    price: 19.90,
    imageUrl: '/products/uniqlo-tee.jpg',
    description: 'The highest quality cotton for ultimate comfort.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p3',
    brandId: 'nike',
    brandName: 'Nike',
    name: 'Dri-FIT Training Shirt',
    category: 'tops',
    price: 45.00,
    imageUrl: '/products/nike-shirt.jpg',
    description: 'Stay dry and focused during your most intense workouts.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p4',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Relaxed Fit Oxford Shirt',
    category: 'tops',
    price: 34.99,
    imageUrl: '/products/hm-shirt.jpg',
    description: 'Classic oxford shirt with a contemporary relaxed fit.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p5',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Slim Fit Chinos',
    category: 'bottoms',
    price: 49.90,
    imageUrl: '/products/zara-chinos.jpg',
    description: 'Tailored chinos with a hint of stretch for movement.',
    availableSizes: ['S', 'M', 'L']
  }
];
