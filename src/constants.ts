import { Product, Category } from './types';

export const CATEGORIES: Category[] = ['Hoodie', 'Sweatshirt', 'Trouser', 'Polo Shirt', 'T-Shirt'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Premium Black Hoodie',
    price: 1200,
    discountPrice: 999,
    category: 'Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'High-quality cotton blend hoodie, perfect for everyday wear. Features a soft fleece lining and adjustable drawstring hood.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    isDiscounted: true,
  },
  {
    id: '2',
    title: 'Classic Gray Sweatshirt',
    price: 850,
    category: 'Sweatshirt',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Minimalist gray sweatshirt made from premium breathable fabric. Ideal for layering or casual outings.',
    sizes: ['M', 'L', 'XL'],
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Slim Fit Navy Trousers',
    price: 1500,
    discountPrice: 1250,
    category: 'Trouser',
    image: 'https://images.unsplash.com/photo-1624371414361-e67094820344?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1624371414361-e67094820344?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Elegant slim-fit trousers designed for comfort and style. Perfect for both formal and semi-formal occasions.',
    sizes: ['30', '32', '34', '36'],
    isFeatured: true,
    isDiscounted: true,
  },
  {
    id: '4',
    title: 'White Polo Shirt',
    price: 750,
    category: 'Polo Shirt',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Classic white polo shirt with a refined collar and button placket. Made from soft piqué cotton.',
    sizes: ['S', 'M', 'L'],
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Oversized Graphic T-Shirt',
    price: 600,
    discountPrice: 450,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Trendy oversized t-shirt featuring a unique graphic print. Soft and comfortable for all-day wear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    isDiscounted: true,
  },
  {
    id: '6',
    title: 'Navy Blue Hoodie',
    price: 1100,
    category: 'Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Classic navy blue hoodie with a front kangaroo pocket. Durable and stylish.',
    sizes: ['S', 'M', 'L'],
    isFeatured: false,
  }
];
