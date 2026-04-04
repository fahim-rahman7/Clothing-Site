export type Category = 'Hoodie' | 'Sweatshirt' | 'Trouser' | 'Polo Shirt' | 'T-Shirt';

export interface Product {
  id: string;
  title: string;
  price: number;
  discountPrice?: number;
  category: Category;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  isFeatured?: boolean;
  isDiscounted?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface WishlistItem extends Product {}
