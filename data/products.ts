export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  slug: string;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  color: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Urban Runner Pro',
    category: 'Sneakers',
    price: 159,
    slug: 'urban-runner-pro',
    isNew: true,
    description: 'Lightweight performance sneaker built for the city streets.',
    color: '#1a1a1a',
  },
  {
    id: '2',
    name: 'Classic Oxford',
    category: 'Formal',
    price: 229,
    slug: 'classic-oxford',
    description: 'Timeless leather oxford, hand-stitched for perfection.',
    color: '#3d2b1f',
  },
  {
    id: '3',
    name: 'Chelsea Boot',
    category: 'Boots',
    price: 279,
    originalPrice: 329,
    slug: 'chelsea-boot',
    isSale: true,
    description: 'Sleek Chelsea boot in premium full-grain leather.',
    color: '#2c1810',
  },
  {
    id: '4',
    name: 'Minimal Loafer',
    category: 'Casual',
    price: 189,
    slug: 'minimal-loafer',
    isNew: true,
    description: 'Effortless style meets all-day comfort.',
    color: '#8b7355',
  },
  {
    id: '5',
    name: 'High-Top Street',
    category: 'Sneakers',
    price: 149,
    slug: 'high-top-street',
    description: 'Street-ready high-top with premium canvas upper.',
    color: '#f5f5f0',
  },
  {
    id: '6',
    name: 'Desert Boot',
    category: 'Boots',
    price: 219,
    slug: 'desert-boot',
    isNew: true,
    description: 'The original desert boot, reimagined for modern life.',
    color: '#c4a882',
  },
  {
    id: '7',
    name: 'Sport Elite',
    category: 'Running',
    price: 179,
    originalPrice: 219,
    slug: 'sport-elite',
    isSale: true,
    description: 'Performance running shoe with carbon fiber plate.',
    color: '#111827',
  },
  {
    id: '8',
    name: 'Suede Derby',
    category: 'Formal',
    price: 199,
    slug: 'suede-derby',
    description: 'Italian suede derby in rich earth tones.',
    color: '#6b4c3b',
  },
];

export const categories = [
  { name: 'Sneakers', count: 24, bg: '#1a1a1a' },
  { name: 'Boots', count: 18, bg: '#2c1810' },
  { name: 'Formal', count: 12, bg: '#3d2b1f' },
];
