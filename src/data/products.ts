export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  description: string;
  category: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Beauty Products",
    slug: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    productCount: 124
  },
  {
    id: "2",
    name: "Mobiles",
    slug: "mobiles",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    productCount: 89
  },
  {
    id: "3",
    name: "Electronics",
    slug: "electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop",
    productCount: 256
  },
  {
    id: "4",
    name: "Clothes",
    slug: "clothes",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop",
    productCount: 432
  },
  {
    id: "5",
    name: "Fruits",
    slug: "fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop",
    productCount: 67
  },
  {
    id: "6",
    name: "Toys",
    slug: "toys",
    image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
    productCount: 198
  },
  {
    id: "7",
    name: "Home Items",
    slug: "home",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    productCount: 312
  },
  {
    id: "8",
    name: "Shoes",
    slug: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    productCount: 178
  },
  {
    id: "9",
    name: "Watches",
    slug: "watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    productCount: 94
  }
];

export const products: Product[] = [
  // Beauty Products
  {
    id: "beauty-1",
    title: "Luxury Skincare Set",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.8,
    reviewCount: 234,
    description: "Complete luxury skincare routine featuring premium ingredients. Includes cleanser, toner, serum, and moisturizer for radiant, youthful skin.",
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "beauty-2",
    title: "Premium Makeup Palette",
    price: 54.99,
    originalPrice: 74.99,
    discount: 27,
    rating: 4.6,
    reviewCount: 189,
    description: "Professional-grade makeup palette with 24 stunning shades. Perfect for everyday looks to glamorous evenings.",
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Mobiles
  {
    id: "mobile-1",
    title: "ProMax Smartphone 15",
    price: 999.99,
    originalPrice: 1199.99,
    discount: 17,
    rating: 4.9,
    reviewCount: 567,
    description: "The ultimate smartphone experience with cutting-edge technology. Features 6.7-inch OLED display, 5G connectivity, and professional-grade camera system.",
    category: "mobiles",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "mobile-2",
    title: "Galaxy Ultra S24",
    price: 849.99,
    originalPrice: 999.99,
    discount: 15,
    rating: 4.7,
    reviewCount: 423,
    description: "Premium Android smartphone with AI-powered features. 200MP camera, 5000mAh battery, and stunning design.",
    category: "mobiles",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580910051074-3eb694886f2c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Electronics
  {
    id: "electronics-1",
    title: "Wireless Noise-Canceling Headphones",
    price: 279.99,
    originalPrice: 349.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 892,
    description: "Industry-leading noise cancellation with premium sound quality. 30-hour battery life and ultra-comfortable design for all-day wear.",
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "electronics-2",
    title: "4K Ultra HD Smart TV 65\"",
    price: 799.99,
    originalPrice: 1099.99,
    discount: 27,
    rating: 4.6,
    reviewCount: 345,
    description: "Immersive 4K viewing experience with Dolby Vision and Atmos. Smart features with voice control and streaming apps built-in.",
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Clothes
  {
    id: "clothes-1",
    title: "Designer Cashmere Sweater",
    price: 189.99,
    originalPrice: 249.99,
    discount: 24,
    rating: 4.7,
    reviewCount: 156,
    description: "Luxuriously soft 100% cashmere sweater. Timeless design perfect for any occasion, available in multiple colors.",
    category: "clothes",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "clothes-2",
    title: "Premium Denim Jacket",
    price: 129.99,
    originalPrice: 169.99,
    discount: 24,
    rating: 4.5,
    reviewCount: 234,
    description: "Classic denim jacket with modern fit. Made from sustainable materials with attention to detail.",
    category: "clothes",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Fruits
  {
    id: "fruits-1",
    title: "Organic Fruit Basket",
    price: 49.99,
    originalPrice: 64.99,
    discount: 23,
    rating: 4.9,
    reviewCount: 89,
    description: "Fresh organic fruits delivered to your door. Includes seasonal selection of apples, oranges, berries, and exotic fruits.",
    category: "fruits",
    images: [
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568702846914-96b305d2uj65?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Toys
  {
    id: "toys-1",
    title: "STEM Building Blocks Set",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 312,
    description: "Educational building blocks that inspire creativity and engineering skills. 500+ pieces for endless possibilities.",
    category: "toys",
    images: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560859251-d563a49c5e4a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  // Home Items
  {
    id: "home-1",
    title: "Minimalist Ceramic Vase Set",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    rating: 4.6,
    reviewCount: 178,
    description: "Elegant handcrafted ceramic vases. Set of 3 in complementary sizes, perfect for modern home decor.",
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Shoes
  {
    id: "shoes-1",
    title: "Premium Running Shoes",
    price: 159.99,
    originalPrice: 199.99,
    discount: 20,
    rating: 4.7,
    reviewCount: 456,
    description: "High-performance running shoes with advanced cushioning technology. Lightweight and breathable for ultimate comfort.",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "shoes-2",
    title: "Classic Leather Oxford",
    price: 199.99,
    originalPrice: 259.99,
    discount: 23,
    rating: 4.8,
    reviewCount: 234,
    description: "Handcrafted Italian leather Oxford shoes. Timeless elegance with superior comfort for the modern gentleman.",
    category: "shoes",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=600&fit=crop"
    ],
    inStock: true
  },
  // Watches
  {
    id: "watches-1",
    title: "Swiss Automatic Watch",
    price: 599.99,
    originalPrice: 799.99,
    discount: 25,
    rating: 4.9,
    reviewCount: 167,
    description: "Premium Swiss automatic movement with sapphire crystal. Water-resistant to 100m with elegant stainless steel case.",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=600&fit=crop"
    ],
    inStock: true,
    featured: true
  },
  {
    id: "watches-2",
    title: "Smart Fitness Watch",
    price: 299.99,
    originalPrice: 379.99,
    discount: 21,
    rating: 4.6,
    reviewCount: 534,
    description: "Advanced health tracking with heart rate, SpO2, and sleep monitoring. GPS, 7-day battery, and premium build quality.",
    category: "watches",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&h=600&fit=crop"
    ],
    inStock: true
  }
];

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.category === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.title.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
};
