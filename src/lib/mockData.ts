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
        { size: 'XXL', chestMin: 114, chestMax: 120, waistMin: 100, waistMax: 106 },
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