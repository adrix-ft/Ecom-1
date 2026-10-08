export type ProductCategory = 'Outerwear' | 'Knitwear' | 'Leather' | 'Objects';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  price: number;
  originalPrice?: number;
  badge?: 'BESTSELLER' | 'NEW' | 'LIMITED' | 'SALE';
  soldOut?: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  detailedDescription: string;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  millName: string;
  millLocation: string;
  materialComposition: string;
  careInstructions: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  slug: string;
  tag: 'PHILOSOPHY' | 'CRAFT' | 'CARE';
  readTime: string;
  title: string;
  summary: string;
  content: string[];
  image: string;
  author: string;
  date: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  productName: string;
  rating: number;
  text: string;
  verifiedYear: string;
}
