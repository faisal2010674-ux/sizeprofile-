import { Brand, Product } from '../types';

export const BRANDS: Brand[] = [
  // Original brands
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
  },

  // NEW BRANDS - Indian & International Fashion Brands
  {
    id: 'max',
    name: 'MAX',
    logoText: 'MAX',
    tagline: 'Fashion for All',
    description: 'Trendy, affordable fashion from the Landmark Group. Generous, relaxed fits across categories.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 92, chestMax: 98, waistMin: 78, waistMax: 84 },
        { size: 'M', chestMin: 98, chestMax: 104, waistMin: 84, waistMax: 90 },
        { size: 'L', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
        { size: 'XXL', chestMin: 116, chestMax: 122, waistMin: 102, waistMax: 108 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 82, inseamMax: 84 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    logoText: 'LIFESTYLE',
    tagline: 'Your Style Destination',
    description: 'Premium department store brand offering contemporary fashion. True-to-size with modern cuts.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 83 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 84 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 85 },
      ]
    }
  },
  {
    id: 'marks-spencer',
    name: 'Marks & Spencer',
    logoText: 'M&S',
    tagline: 'Quality Worth Every Penny',
    description: 'British heritage brand with precise, consistent sizing. Known for quality fabrics and classic fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 84, chestMax: 89, waistMin: 70, waistMax: 75 },
        { size: 'S', chestMin: 89, chestMax: 94, waistMin: 75, waistMax: 80 },
        { size: 'M', chestMin: 94, chestMax: 99, waistMin: 80, waistMax: 85 },
        { size: 'L', chestMin: 99, chestMax: 104, waistMin: 85, waistMax: 90 },
        { size: 'XL', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XXL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'westside',
    name: 'Westside',
    logoText: 'WESTSIDE',
    tagline: 'Style Your Way',
    description: 'Tata Group fashion brand with youthful, trendy designs. Slightly relaxed fits for everyday wear.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'zudio',
    name: 'Zudio',
    logoText: 'ZUDIO',
    tagline: 'Smart Fashion, Smart Price',
    description: 'Value fashion from Trent Limited. Simple, wearable basics with generous, comfortable sizing.',
    categories: ['tops', 'bottoms'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 92, chestMax: 98, waistMin: 78, waistMax: 84 },
        { size: 'M', chestMin: 98, chestMax: 104, waistMin: 84, waistMax: 90 },
        { size: 'L', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
        { size: 'XXL', chestMin: 116, chestMax: 122, waistMin: 102, waistMax: 108 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'benetton',
    name: 'United Colors of Benetton',
    logoText: 'BENETTON',
    tagline: 'Color is Life',
    description: 'Italian brand known for vibrant colors and knitwear. European sizing runs slightly slim.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 86, chestMax: 90, waistMin: 70, waistMax: 74 },
        { size: 'S', chestMin: 90, chestMax: 94, waistMin: 74, waistMax: 78 },
        { size: 'M', chestMin: 94, chestMax: 98, waistMin: 78, waistMax: 82 },
        { size: 'L', chestMin: 98, chestMax: 102, waistMin: 82, waistMax: 86 },
        { size: 'XL', chestMin: 102, chestMax: 106, waistMin: 86, waistMax: 90 },
      ]
    }
  },
  {
    id: 'ralph-lauren',
    name: 'Ralph Lauren',
    logoText: 'RALPH LAUREN',
    tagline: 'Timeless American Style',
    description: 'Classic American luxury with preppy aesthetics. Offers Classic, Slim, and Custom fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 86, chestMax: 91, waistMin: 71, waistMax: 76 },
        { size: 'S', chestMin: 91, chestMax: 97, waistMin: 76, waistMax: 81 },
        { size: 'M', chestMin: 97, chestMax: 102, waistMin: 81, waistMax: 87 },
        { size: 'L', chestMin: 102, chestMax: 107, waistMin: 87, waistMax: 93 },
        { size: 'XL', chestMin: 107, chestMax: 113, waistMin: 93, waistMax: 99 },
        { size: 'XXL', chestMin: 113, chestMax: 119, waistMin: 99, waistMax: 105 },
      ],
      bottoms: [
        { size: '28', chestMin: 0, chestMax: 0, waistMin: 71, waistMax: 73, inseamMin: 80, inseamMax: 82 },
        { size: '30', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 78, inseamMin: 81, inseamMax: 83 },
        { size: '32', chestMin: 0, chestMax: 0, waistMin: 81, waistMax: 83, inseamMin: 82, inseamMax: 84 },
        { size: '34', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 88, inseamMin: 83, inseamMax: 85 },
        { size: '36', chestMin: 0, chestMax: 0, waistMin: 91, waistMax: 93, inseamMin: 84, inseamMax: 86 },
      ]
    }
  },
  {
    id: 'us-polo-assn',
    name: 'U.S. Polo Assn.',
    logoText: 'U.S. POLO ASSN.',
    tagline: 'Authentic American Heritage',
    description: 'Official brand of the United States Polo Association. Sporty, relaxed fits with classic styling.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 92, chestMax: 98, waistMin: 78, waistMax: 84 },
        { size: 'M', chestMin: 98, chestMax: 104, waistMin: 84, waistMax: 90 },
        { size: 'L', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
        { size: 'XXL', chestMin: 116, chestMax: 122, waistMin: 102, waistMax: 108 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 81, inseamMax: 83 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 82, inseamMax: 84 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 83, inseamMax: 85 },
      ]
    }
  },
  {
    id: 'roadster',
    name: 'Roadster',
    logoText: 'ROADSTER',
    tagline: 'Urban Casuals',
    description: 'Myntra\'s in-house brand for casual wear. Trendy, youth-focused designs with relaxed fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'snitch',
    name: 'Snitch',
    logoText: 'SNITCH',
    tagline: 'Modern Menswear',
    description: 'Contemporary men\'s fashion brand with sharp, tailored fits. Runs slightly slim for a modern silhouette.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 88, chestMax: 94, waistMin: 74, waistMax: 80 },
        { size: 'M', chestMin: 94, chestMax: 100, waistMin: 80, waistMax: 86 },
        { size: 'L', chestMin: 100, chestMax: 106, waistMin: 86, waistMax: 92 },
        { size: 'XL', chestMin: 106, chestMax: 112, waistMin: 92, waistMax: 98 },
        { size: 'XXL', chestMin: 112, chestMax: 118, waistMin: 98, waistMax: 104 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 74, waistMax: 78, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'rare-rabbit',
    name: 'Rare Rabbit',
    logoText: 'RARE RABBIT',
    tagline: 'Thoughtfully Crafted',
    description: 'Premium Indian brand focusing on quality fabrics and minimalist designs. True-to-size with refined fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'levis',
    name: 'Levi\'s',
    logoText: "LEVI'S",
    tagline: 'Original Denim Since 1873',
    description: 'Iconic American denim brand. Known for numbered fits (501, 511, etc.). Waist/inseam sizing for bottoms.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: '28x30', chestMin: 0, chestMax: 0, waistMin: 71, waistMax: 73, inseamMin: 76, inseamMax: 78 },
        { size: '30x30', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 78, inseamMin: 76, inseamMax: 78 },
        { size: '32x30', chestMin: 0, chestMax: 0, waistMin: 81, waistMax: 83, inseamMin: 76, inseamMax: 78 },
        { size: '34x30', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 88, inseamMin: 76, inseamMax: 78 },
        { size: '36x30', chestMin: 0, chestMax: 0, waistMin: 91, waistMax: 93, inseamMin: 76, inseamMax: 78 },
        { size: '30x32', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 78, inseamMin: 81, inseamMax: 83 },
        { size: '32x32', chestMin: 0, chestMax: 0, waistMin: 81, waistMax: 83, inseamMin: 81, inseamMax: 83 },
        { size: '34x32', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: '36x32', chestMin: 0, chestMax: 0, waistMin: 91, waistMax: 93, inseamMin: 81, inseamMax: 83 },
      ]
    }
  },
  {
    id: 'flying-machine',
    name: 'Flying Machine',
    logoText: 'FLYING MACHINE',
    tagline: 'Young, Free, Denim',
    description: 'Arvind Fashion\'s youth denim brand. Trendy washes and modern fits. Runs true to size.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: '28', chestMin: 0, chestMax: 0, waistMin: 71, waistMax: 73, inseamMin: 78, inseamMax: 80 },
        { size: '30', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 78, inseamMin: 79, inseamMax: 81 },
        { size: '32', chestMin: 0, chestMax: 0, waistMin: 81, waistMax: 83, inseamMin: 80, inseamMax: 82 },
        { size: '34', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: '36', chestMin: 0, chestMax: 0, waistMin: 91, waistMax: 93, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'bear-house',
    name: 'The Bear House',
    logoText: 'THE BEAR HOUSE',
    tagline: 'Premium Comfort Wear',
    description: 'Premium loungewear and basics brand. Focus on supersoft fabrics and relaxed, comfortable fits.',
    categories: ['tops', 'bottoms'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 92, chestMax: 98, waistMin: 78, waistMax: 84 },
        { size: 'M', chestMin: 98, chestMax: 104, waistMin: 84, waistMax: 90 },
        { size: 'L', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
        { size: 'XXL', chestMin: 116, chestMax: 122, waistMin: 102, waistMax: 108 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 76, inseamMax: 78 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 77, inseamMax: 79 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 78, inseamMax: 80 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 79, inseamMax: 81 },
      ]
    }
  },
  {
    id: 'souled-store',
    name: 'The Souled Store',
    logoText: 'THE SOULED STORE',
    tagline: 'Pop Culture Fashion',
    description: 'Official pop culture merchandise brand. Graphic tees and casuals with relaxed, unisex fits.',
    categories: ['tops', 'bottoms'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 94, chestMax: 100, waistMin: 80, waistMax: 86 },
        { size: 'M', chestMin: 100, chestMax: 106, waistMin: 86, waistMax: 92 },
        { size: 'L', chestMin: 106, chestMax: 112, waistMin: 92, waistMax: 98 },
        { size: 'XL', chestMin: 112, chestMax: 118, waistMin: 98, waistMax: 104 },
        { size: 'XXL', chestMin: 118, chestMax: 124, waistMin: 104, waistMax: 110 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 76, inseamMax: 78 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 77, inseamMax: 79 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 78, inseamMax: 80 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 79, inseamMax: 81 },
      ]
    }
  },
  {
    id: 'fame-forever',
    name: 'Fame Forever',
    logoText: 'FAME FOREVER',
    tagline: 'Trendy Youth Fashion',
    description: 'Fast fashion brand for young adults. Trend-driven designs with generous, forgiving fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 92, chestMax: 98, waistMin: 78, waistMax: 84 },
        { size: 'M', chestMin: 98, chestMax: 104, waistMin: 84, waistMax: 90 },
        { size: 'L', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
        { size: 'XXL', chestMin: 116, chestMax: 122, waistMin: 102, waistMax: 108 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'indian-terrain',
    name: 'Indian Terrain',
    logoText: 'INDIAN TERRAIN',
    tagline: 'Sophisticated Menswear',
    description: 'Premium Indian menswear brand. Tailored fits with attention to detail. Runs slightly slim.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 88, chestMax: 94, waistMin: 74, waistMax: 80 },
        { size: 'M', chestMin: 94, chestMax: 100, waistMin: 80, waistMax: 86 },
        { size: 'L', chestMin: 100, chestMax: 106, waistMin: 86, waistMax: 92 },
        { size: 'XL', chestMin: 106, chestMax: 112, waistMin: 92, waistMax: 98 },
        { size: 'XXL', chestMin: 112, chestMax: 118, waistMin: 98, waistMax: 104 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 74, waistMax: 78, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'allen-solly',
    name: 'Allen Solly',
    logoText: 'ALLEN SOLLY',
    tagline: 'Friday Dressing Everyday',
    description: 'Aditya Birla Fashion brand. Smart casuals with modern fits. True-to-size with quality fabrics.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'randb',
    name: 'R&B',
    logoText: 'R&B',
    tagline: 'Casual Cool',
    description: 'Reliance Retail\'s youth fashion brand. Trendy casuals with relaxed, comfortable fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'go-colors',
    name: 'Go Colors',
    logoText: 'GO COLORS',
    tagline: 'Color Your Bottomwear',
    description: 'Specialist bottomwear brand with extensive color range. Focus on fit and fabric innovation.',
    categories: ['bottoms'],
    sizeCharts: {
      bottoms: [
        { size: 'XS', chestMin: 0, chestMax: 0, waistMin: 68, waistMax: 72, inseamMin: 76, inseamMax: 78 },
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 72, waistMax: 76, inseamMin: 77, inseamMax: 79 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 80 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 79, inseamMax: 81 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 80, inseamMax: 82 },
        { size: 'XXL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 81, inseamMax: 83 },
      ]
    }
  },
  {
    id: 'red-tape',
    name: 'Red Tape',
    logoText: 'RED TAPE',
    tagline: 'Leather & Lifestyle',
    description: 'Premium leather and footwear brand expanded into apparel. Structured fits with quality materials.',
    categories: ['tops', 'bottoms', 'outerwear', 'shoes'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'pantaloons',
    name: 'Pantaloons',
    logoText: 'PANTALOONS',
    tagline: 'Fashion for the Family',
    description: 'ABFRL\'s flagship department store brand. Wide range with family-friendly, true-to-size fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 90, chestMax: 96, waistMin: 76, waistMax: 82 },
        { size: 'M', chestMin: 96, chestMax: 102, waistMin: 82, waistMax: 88 },
        { size: 'L', chestMin: 102, chestMax: 108, waistMin: 88, waistMax: 94 },
        { size: 'XL', chestMin: 108, chestMax: 114, waistMin: 94, waistMax: 100 },
        { size: '3XL', chestMin: 120, chestMax: 126, waistMin: 106, waistMax: 112 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
        { size: 'XXL', chestMin: 0, chestMax: 0, waistMin: 92, waistMax: 96, inseamMin: 83, inseamMax: 85 },
      ]
    }
  },
  {
    id: 'pant-project',
    name: 'Pant Project',
    logoText: 'PANT PROJECT',
    tagline: 'The Perfect Pant',
    description: 'Specialist pant brand focusing on fit, fabric, and function. Extensive size range including tall/short.',
    categories: ['bottoms'],
    sizeCharts: {
      bottoms: [
        { size: '28', chestMin: 0, chestMax: 0, waistMin: 71, waistMax: 73, inseamMin: 78, inseamMax: 80 },
        { size: '30', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 78, inseamMin: 79, inseamMax: 81 },
        { size: '32', chestMin: 0, chestMax: 0, waistMin: 81, waistMax: 83, inseamMin: 80, inseamMax: 82 },
        { size: '34', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: '36', chestMin: 0, chestMax: 0, waistMin: 91, waistMax: 93, inseamMin: 82, inseamMax: 84 },
        { size: '38', chestMin: 0, chestMax: 0, waistMin: 96, waistMax: 98, inseamMin: 83, inseamMax: 85 },
        { size: '40', chestMin: 0, chestMax: 0, waistMin: 101, waistMax: 103, inseamMin: 84, inseamMax: 86 },
      ]
    }
  },
  {
    id: 'ownd',
    name: 'OWND',
    logoText: 'OWND',
    tagline: 'Own Your Style',
    description: 'Flipkart\'s private label fashion brand. Trendy designs at accessible prices with relaxed fits.',
    categories: ['tops', 'bottoms', 'outerwear'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 92, chestMax: 98, waistMin: 78, waistMax: 84 },
        { size: 'M', chestMin: 98, chestMax: 104, waistMin: 84, waistMax: 90 },
        { size: 'L', chestMin: 104, chestMax: 110, waistMin: 90, waistMax: 96 },
        { size: 'XL', chestMin: 110, chestMax: 116, waistMin: 96, waistMax: 102 },
        { size: 'XXL', chestMin: 116, chestMax: 122, waistMin: 102, waistMax: 108 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },

  // Additional brands for new products
  {
    id: 'adidas',
    name: 'Adidas',
    logoText: 'ADIDAS',
    tagline: 'Impossible is Nothing',
    description: 'Global sportswear leader with performance-focused designs and iconic 3-stripes heritage.',
    categories: ['tops', 'bottoms', 'outerwear', 'shoes'],
    sizeCharts: {
      tops: [
        { size: 'XS', chestMin: 84, chestMax: 89, waistMin: 72, waistMax: 77 },
        { size: 'S', chestMin: 89, chestMax: 94, waistMin: 77, waistMax: 82 },
        { size: 'M', chestMin: 94, chestMax: 99, waistMin: 82, waistMax: 87 },
        { size: 'L', chestMin: 99, chestMax: 104, waistMin: 87, waistMax: 92 },
        { size: 'XL', chestMin: 104, chestMax: 110, waistMin: 92, waistMax: 98 },
        { size: 'XXL', chestMin: 110, chestMax: 116, waistMin: 98, waistMax: 104 },
      ],
      bottoms: [
        { size: 'XS', chestMin: 0, chestMax: 0, waistMin: 72, waistMax: 76, inseamMin: 78, inseamMax: 80 },
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 80, inseamMin: 79, inseamMax: 81 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 80, waistMax: 84, inseamMin: 80, inseamMax: 82 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 84, waistMax: 88, inseamMin: 81, inseamMax: 83 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 88, waistMax: 92, inseamMin: 82, inseamMax: 84 },
        { size: 'XXL', chestMin: 0, chestMax: 0, waistMin: 92, waistMax: 96, inseamMin: 83, inseamMax: 85 },
      ]
    }
  },
  {
    id: 'puma',
    name: 'Puma',
    logoText: 'PUMA',
    tagline: 'Forever Faster',
    description: 'German sportswear brand blending performance and lifestyle. Known for sleek designs and comfort.',
    categories: ['tops', 'bottoms', 'outerwear', 'shoes'],
    sizeCharts: {
      tops: [
        { size: 'S', chestMin: 88, chestMax: 94, waistMin: 74, waistMax: 80 },
        { size: 'M', chestMin: 94, chestMax: 100, waistMin: 80, waistMax: 86 },
        { size: 'L', chestMin: 100, chestMax: 106, waistMin: 86, waistMax: 92 },
        { size: 'XL', chestMin: 106, chestMax: 112, waistMin: 92, waistMax: 98 },
        { size: 'XXL', chestMin: 112, chestMax: 118, waistMin: 98, waistMax: 104 },
      ],
      bottoms: [
        { size: 'S', chestMin: 0, chestMax: 0, waistMin: 74, waistMax: 78, inseamMin: 78, inseamMax: 80 },
        { size: 'M', chestMin: 0, chestMax: 0, waistMin: 78, waistMax: 82, inseamMin: 79, inseamMax: 81 },
        { size: 'L', chestMin: 0, chestMax: 0, waistMin: 82, waistMax: 86, inseamMin: 80, inseamMax: 82 },
        { size: 'XL', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 90, inseamMin: 81, inseamMax: 83 },
        { size: 'XXL', chestMin: 0, chestMax: 0, waistMin: 90, waistMax: 94, inseamMin: 82, inseamMax: 84 },
      ]
    }
  },
  {
    id: 'wrangler',
    name: 'Wrangler',
    logoText: 'WRANGLER',
    tagline: 'Real. Comfortable. Jeans.',
    description: 'Iconic American denim brand since 1947. Authentic western heritage with durable construction.',
    categories: ['bottoms', 'outerwear'],
    sizeCharts: {
      bottoms: [
        { size: '28x30', chestMin: 0, chestMax: 0, waistMin: 71, waistMax: 73, inseamMin: 76, inseamMax: 78 },
        { size: '30x30', chestMin: 0, chestMax: 0, waistMin: 76, waistMax: 78, inseamMin: 76, inseamMax: 78 },
        { size: '32x30', chestMin: 0, chestMax: 0, waistMin: 81, waistMax: 83, inseamMin: 76, inseamMax: 78 },
        { size: '34x30', chestMin: 0, chestMax: 0, waistMin: 86, waistMax: 88, inseamMin: 76, inseamMax: 78 },
        { size: '36x30', chestMin: 0, chestMax: 0, waistMin: 91, waistMax: 93, inseamMin: 76, inseamMax: 78 },
        { size: '38x30', chestMin: 0, chestMax: 0, waistMin: 96, waistMax: 98, inseamMin: 76, inseamMax: 78 },
      ]
    }
  },
];

export const PRODUCTS: Product[] = [
  // Original 5 products
  {
    id: 'p1',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Essential Cotton Tee',
    category: 'tops',
    price: 29.99,
    imageUrl: '111.png',
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
    imageUrl: '126.png',
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
    imageUrl: '124.png',
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
    imageUrl: '123.png',
    description: 'Classic oxford shirt with a contemporary relaxed fit.',
    availableSizes: ['S', 'M', 'L', 'XXL']
  },
  {
    id: 'p5',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Slim Fit Chinos',
    category: 'bottoms',
    price: 49.90,
    imageUrl: '125.png',
    description: 'Tailored chinos with a hint of stretch for movement.',
    availableSizes: ['S', 'M', 'L']
  },

  // T-Shirts & Casual Tops (using 127.png, 128.png, 130.png, 301.png, 302.png, 309.png, 310.png, 311.png, 312.png, 313.png, 314.png)
  {
    id: 'p6',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Organic Cotton Basic Tee',
    category: 'tops',
    price: 14.99,
    imageUrl: '127.png',
    description: 'Sustainably sourced organic cotton t-shirt in relaxed fit.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p7',
    brandId: 'uniqlo',
    brandName: 'Uniqlo',
    name: 'AIRism Cotton Crew Neck',
    category: 'tops',
    price: 22.90,
    imageUrl: '128.png',
    description: 'Breathable AIRism technology keeps you cool and dry all day.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p8',
    brandId: 'nike',
    brandName: 'Nike',
    name: 'Sportswear Club T-Shirt',
    category: 'tops',
    price: 32.00,
    imageUrl: '130.png',
    description: 'Classic Nike Sportswear tee with embroidered Swoosh logo.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p9',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Graphic Print T-Shirt',
    category: 'tops',
    price: 25.99,
    imageUrl: '301.png',
    description: 'Contemporary graphic print on premium cotton jersey.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p10',
    brandId: 'max',
    brandName: 'MAX',
    name: 'Striped Cotton T-Shirt',
    category: 'tops',
    price: 12.99,
    imageUrl: '302.png',
    description: 'Classic horizontal stripes on soft cotton blend fabric.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p11',
    brandId: 'flying-machine',
    brandName: 'Flying Machine',
    name: 'Vintage Wash Graphic Tee',
    category: 'tops',
    price: 499.00,
    imageUrl: '309.png',
    description: 'Retro-inspired graphic with vintage wash finish.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p12',
    brandId: 'roadster',
    brandName: 'Roadster',
    name: 'Oversized Drop Shoulder Tee',
    category: 'tops',
    price: 799.00,
    imageUrl: '310.png',
    description: 'Trendy oversized fit with dropped shoulders for street style.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p13',
    brandId: 'souled-store',
    brandName: 'The Souled Store',
    name: 'Pop Culture Graphic Tee',
    category: 'tops',
    price: 599.00,
    imageUrl: '311.png',
    description: 'Official licensed pop culture artwork on premium cotton.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p14',
    brandId: 'zudio',
    brandName: 'Zudio',
    name: 'Basic Solid Color Tee',
    category: 'tops',
    price: 299.00,
    imageUrl: '312.png',
    description: 'Everyday essential solid tee in versatile colors.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p15',
    brandId: 'fame-forever',
    brandName: 'Fame Forever',
    name: 'Trend Print T-Shirt',
    category: 'tops',
    price: 349.00,
    imageUrl: '313.png',
    description: 'Fashion-forward prints for the style-conscious youth.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p16',
    brandId: 'indian-terrain',
    brandName: 'Indian Terrain',
    name: 'Premium Cotton Crew Neck',
    category: 'tops',
    price: 899.00,
    imageUrl: '314.png',
    description: 'Sophisticated minimal design with premium fabric quality.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  // Shirts & Formal Tops (using 303.png, 304.png, 305.png, 306.png, 307.png, 308.png)
  {
    id: 'p17',
    brandId: 'ralph-lauren',
    brandName: 'Ralph Lauren',
    name: 'Classic Fit Oxford Shirt',
    category: 'tops',
    price: 89.50,
    imageUrl: '303.png',
    description: 'Timeless Oxford cloth button-down with signature pony embroidery.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p18',
    brandId: 'us-polo-assn',
    brandName: 'U.S. Polo Assn.',
    name: 'Performance Polo Shirt',
    category: 'tops',
    price: 49.99,
    imageUrl: '304.png',
    description: 'Moisture-wicking polo with stretch for active lifestyle.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p19',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Slim Fit Formal Shirt',
    category: 'tops',
    price: 45.99,
    imageUrl: '305.png',
    description: 'Modern slim fit shirt in premium cotton poplin.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p20',
    brandId: 'marks-spencer',
    brandName: 'Marks & Spencer',
    name: 'Non-Iron Formal Shirt',
    category: 'tops',
    price: 35.00,
    imageUrl: '306.png',
    description: 'Innovative non-iron technology for crisp look all day.',
    availableSizes: ['15"', '15.5"', '16"', '16.5"', '17"', '17.5"']
  },
  {
    id: 'p21',
    brandId: 'benetton',
    brandName: 'United Colors of Benetton',
    name: 'Color Block Casual Shirt',
    category: 'tops',
    price: 55.00,
    imageUrl: '307.png',
    description: 'Vibrant color-blocking design in soft cotton blend.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p22',
    brandId: 'westside',
    brandName: 'Westside',
    name: 'Linen Blend Casual Shirt',
    category: 'tops',
    price: 1299.00,
    imageUrl: '308.png',
    description: 'Breathable linen blend perfect for warm weather styling.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  // Hoodies & Sweatshirts (using fda191239692dac0d780138e178d2f3ca58ad08b.avif, fimgd-Banner-Images-01-26-04-21-11-27-34.jpg)
  {
    id: 'p23',
    brandId: 'nike',
    brandName: 'Nike',
    name: 'Club Fleece Hoodie',
    category: 'outerwear',
    price: 65.00,
    imageUrl: 'fda191239692dac0d780138e178d2f3ca58ad08b.avif',
    description: 'Premium brushed fleece hoodie with iconic Swoosh.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p24',
    brandId: 'adidas',
    brandName: 'Adidas',
    name: 'Essentials Fleece Hoodie',
    category: 'outerwear',
    price: 55.00,
    imageUrl: 'fimgd-Banner-Images-01-26-04-21-11-27-34.jpg',
    description: 'Classic 3-stripes hoodie in soft cotton-poly fleece.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p25',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Oversized Hooded Sweatshirt',
    category: 'outerwear',
    price: 39.99,
    imageUrl: '127.png',
    description: 'Relaxed oversized fit with dropped shoulders and kangaroo pocket.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p26',
    brandId: 'uniqlo',
    brandName: 'Uniqlo',
    name: 'HEATTECH Fleece Hoodie',
    category: 'outerwear',
    price: 49.90,
    imageUrl: '128.png',
    description: 'Warm HEATTECH lining with soft fleece exterior.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p27',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Structured Zip Hoodie',
    category: 'outerwear',
    price: 59.99,
    imageUrl: '130.png',
    description: 'Modern zip-up hoodie with structured fit and metal hardware.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p28',
    brandId: 'puma',
    brandName: 'Puma',
    name: 'Classic Logo Hoodie',
    category: 'outerwear',
    price: 55.00,
    imageUrl: '309.png',
    description: 'Heritage Puma logo on comfortable cotton blend fleece.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  // Jeans & Denim
  {
    id: 'p29',
    brandId: 'levis',
    brandName: "Levi's",
    name: '501 Original Fit Jeans',
    category: 'bottoms',
    price: 89.50,
    imageUrl: '111.png',
    description: 'The iconic straight fit that started it all.',
    availableSizes: ['28x30', '28x32', '30x30', '30x32', '32x30', '32x32', '34x30', '34x32', '36x30', '36x32']
  },
  {
    id: 'p30',
    brandId: 'levis',
    brandName: "Levi's",
    name: '511 Slim Fit Jeans',
    category: 'bottoms',
    price: 79.50,
    imageUrl: '125.png',
    description: 'Modern slim fit with room to move.',
    availableSizes: ['28x30', '28x32', '30x30', '30x32', '32x30', '32x32', '34x30', '34x32', '36x30', '36x32']
  },
  {
    id: 'p31',
    brandId: 'flying-machine',
    brandName: 'Flying Machine',
    name: 'Skinny Fit Stretch Jeans',
    category: 'bottoms',
    price: 1499.00,
    imageUrl: '301.png',
    description: 'Ultra-skinny fit with comfortable stretch denim.',
    availableSizes: ['28', '30', '32', '34', '36', '38']
  },
  {
    id: 'p32',
    brandId: 'wrangler',
    brandName: 'Wrangler',
    name: 'Regular Fit Denim Jeans',
    category: 'bottoms',
    price: 49.99,
    imageUrl: '302.png',
    description: 'Classic regular fit jeans built for durability.',
    availableSizes: ['28x30', '30x30', '32x30', '34x30', '36x30', '38x30']
  },
  {
    id: 'p33',
    brandId: 'roadster',
    brandName: 'Roadster',
    name: 'Tapered Fit Jeans',
    category: 'bottoms',
    price: 1299.00,
    imageUrl: '305.png',
    description: 'Contemporary tapered leg with modern mid-rise.',
    availableSizes: ['28', '30', '32', '34', '36', '38']
  },
  {
    id: 'p34',
    brandId: 'rare-rabbit',
    brandName: 'Rare Rabbit',
    name: 'Premium Selvedge Jeans',
    category: 'bottoms',
    price: 2999.00,
    imageUrl: '306.png',
    description: 'Japanese selvedge denim with premium finishing.',
    availableSizes: ['28', '30', '32', '34', '36']
  },

  // Chinos & Trousers
  {
    id: 'p35',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Slim Fit Chinos',
    category: 'bottoms',
    price: 49.90,
    imageUrl: '125.png',
    description: 'Tailored chinos with a hint of stretch for movement.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p36',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Tapered Fit Chinos',
    category: 'bottoms',
    price: 34.99,
    imageUrl: '123.png',
    description: 'Modern tapered chinos in cotton twill with stretch.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p37',
    brandId: 'uniqlo',
    brandName: 'Uniqlo',
    name: 'Smart Ankle Pants',
    category: 'bottoms',
    price: 39.90,
    imageUrl: '126.png',
    description: 'Wrinkle-resistant ankle-length trousers for work or casual.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p38',
    brandId: 'marks-spencer',
    brandName: 'Marks & Spencer',
    name: 'Tailored Fit Trousers',
    category: 'bottoms',
    price: 45.00,
    imageUrl: '307.png',
    description: 'Sharp tailored trousers with crease retention technology.',
    availableSizes: ['30"', '32"', '34"', '36"', '38"', '40"']
  },
  {
    id: 'p39',
    brandId: 'ralph-lauren',
    brandName: 'Ralph Lauren',
    name: 'Classic Fit Chino',
    category: 'bottoms',
    price: 79.50,
    imageUrl: '308.png',
    description: 'Timeless chino in premium cotton twill with hidden pocket.',
    availableSizes: ['28', '30', '32', '34', '36', '38', '40']
  },
  {
    id: 'p40',
    brandId: 'pant-project',
    brandName: 'Pant Project',
    name: 'The Everyday Pant',
    category: 'bottoms',
    price: 1999.00,
    imageUrl: '303.png',
    description: 'Engineered for perfect fit with 4-way stretch fabric.',
    availableSizes: ['28', '30', '32', '34', '36', '38', '40', '42']
  },

  // Shorts
  {
    id: 'p41',
    brandId: 'nike',
    brandName: 'Nike',
    name: 'Dri-FIT Training Shorts',
    category: 'bottoms',
    price: 35.00,
    imageUrl: '124.png',
    description: 'Lightweight training shorts with mesh liner and zip pockets.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p42',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Cotton Blend Bermuda Shorts',
    category: 'bottoms',
    price: 24.99,
    imageUrl: '127.png',
    description: 'Relaxed fit bermuda shorts in soft cotton blend.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p43',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Tailored Shorts',
    category: 'bottoms',
    price: 39.99,
    imageUrl: '128.png',
    description: 'Structured tailored shorts for smart-casual occasions.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p44',
    brandId: 'max',
    brandName: 'MAX',
    name: 'Casual Drawstring Shorts',
    category: 'bottoms',
    price: 599.00,
    imageUrl: '130.png',
    description: 'Comfortable drawstring shorts with side pockets.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },

  // Women's Dresses & Skirts
  {
    id: 'p45',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Midi Wrap Dress',
    category: 'tops',
    price: 69.99,
    imageUrl: '309.png',
    description: 'Flattering wrap dress in flowing viscose fabric.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p46',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Floral Print Mini Dress',
    category: 'tops',
    price: 34.99,
    imageUrl: '310.png',
    description: 'Feminine floral print on lightweight fabric.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p47',
    brandId: 'uniqlo',
    brandName: 'Uniqlo',
    name: 'AIRism Cotton Dress',
    category: 'tops',
    price: 39.90,
    imageUrl: '311.png',
    description: 'Comfortable AIRism dress for everyday wear.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p48',
    brandId: 'marks-spencer',
    brandName: 'Marks & Spencer',
    name: 'Pleated Midi Skirt',
    category: 'bottoms',
    price: 35.00,
    imageUrl: '312.png',
    description: 'Elegant pleated midi skirt with elasticated waist.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p49',
    brandId: 'westside',
    brandName: 'Westside',
    name: 'A-Line Mini Skirt',
    category: 'bottoms',
    price: 899.00,
    imageUrl: '313.png',
    description: 'Flattering A-line mini in structured cotton blend.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p50',
    brandId: 'zudio',
    brandName: 'Zudio',
    name: 'Tiered Maxi Skirt',
    category: 'bottoms',
    price: 799.00,
    imageUrl: '314.png',
    description: 'Bohemian tiered maxi skirt in lightweight fabric.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },

  // Jackets & Outerwear
  {
    id: 'p51',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Bomber Jacket',
    category: 'outerwear',
    price: 89.99,
    imageUrl: '304.png',
    description: 'Classic bomber silhouette in technical nylon fabric.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p52',
    brandId: 'nike',
    brandName: 'Nike',
    name: 'Windrunner Jacket',
    category: 'outerwear',
    price: 95.00,
    imageUrl: '305.png',
    description: 'Iconic windbreaker with chevron design and water-repellent finish.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p53',
    brandId: 'levis',
    brandName: "Levi's",
    name: 'Trucker Jacket',
    category: 'outerwear',
    price: 89.50,
    imageUrl: '306.png',
    description: 'The original denim trucker jacket since 1967.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p54',
    brandId: 'ralph-lauren',
    brandName: 'Ralph Lauren',
    name: 'Water-Repellent Field Jacket',
    category: 'outerwear',
    price: 149.50,
    imageUrl: '307.png',
    description: 'Functional field jacket with multiple utility pockets.',
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p55',
    brandId: 'marks-spencer',
    brandName: 'Marks & Spencer',
    name: 'Wool Blend Coat',
    category: 'outerwear',
    price: 129.00,
    imageUrl: '308.png',
    description: 'Sophisticated wool blend coat for formal occasions.',
    availableSizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p56',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Oversized Blazer',
    category: 'outerwear',
    price: 59.99,
    imageUrl: '303.png',
    description: 'Modern oversized blazer in lightweight suiting fabric.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },

  // Sweaters & Knitwear
  {
    id: 'p57',
    brandId: 'uniqlo',
    brandName: 'Uniqlo',
    name: 'Cashmere Crew Neck Sweater',
    category: 'tops',
    price: 79.90,
    imageUrl: '309.png',
    description: '100% premium cashmere in classic crew neck silhouette.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p58',
    brandId: 'zara',
    brandName: 'Zara',
    name: 'Merino Wool Turtleneck',
    category: 'tops',
    price: 59.99,
    imageUrl: '310.png',
    description: 'Fine merino wool turtleneck for layering or solo wear.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p59',
    brandId: 'h&m',
    brandName: 'H&M',
    name: 'Chunky Knit Cardigan',
    category: 'tops',
    price: 49.99,
    imageUrl: '311.png',
    description: 'Oversized chunky knit cardigan with button front.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'p60',
    brandId: 'ralph-lauren',
    brandName: 'Ralph Lauren',
    name: 'Cable Knit Cotton Sweater',
    category: 'tops',
    price: 99.50,
    imageUrl: '312.png',
    description: 'Classic cable knit in premium cotton with pony emblem.',
    availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
];