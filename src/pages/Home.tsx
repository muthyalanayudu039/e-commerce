import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/common/ProductCard';
import VerticalProductScroller from '@/components/home/VerticalProductScroller';
import { categories, getFeaturedProducts, products } from '@/data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const electronicsProducts = products.filter(p => p.category === 'electronics').slice(0, 6);
  const mobileProducts = products.filter(p => p.category === 'mobiles').slice(0, 6);
  const fashionProducts = products.filter(p => p.category === 'clothes').slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Banner Carousel */}
      <section>
        <div className="container py-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-md overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
              <div className="text-white mb-4 md:mb-0">
                <p className="text-xs uppercase tracking-wide mb-1">Best Deals</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Big Savings Days</h2>
                <p className="text-white/80 text-sm">Up to 80% off on Electronics, Fashion & More</p>
                <Link to="/products" className="inline-block mt-4 bg-white text-primary px-6 py-2 rounded-md font-medium text-sm hover:bg-gray-100">
                  Shop Now
                </Link>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80" 
                alt="Sale banner" 
                className="w-48 h-32 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Row */}
      <section className="py-4">
        <div className="container">
          <div className="flex items-center justify-between overflow-x-auto gap-4 pb-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="flex flex-col items-center gap-2 min-w-[80px] hover:text-primary transition-colors"
              >
                <div className="w-16 h-16 rounded-md overflow-hidden bg-muted shadow-sm">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <span className="text-xs font-medium text-center whitespace-nowrap">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deal of the Day - With Vertical Scroller */}
      <section className="mt-3">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-foreground">Best Deals</h2>
              <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-md">
                Limited Time Offer
              </span>
            </div>
            <Link to="/products" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {/* Main Products Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {featuredProducts.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* Vertical Scroller on Right */}
            <div className="hidden lg:block lg:col-span-1">
              <VerticalProductScroller products={featuredProducts.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>

      {/* Electronics Section */}
      <section className="mt-3">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Best of Electronics</h2>
            <Link to="/products?category=electronics" className="bg-primary text-primary-foreground text-xs px-4 py-2 rounded-md font-medium hover:bg-primary/90">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {electronicsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mt-3">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-secondary/80 to-secondary rounded-md p-6 flex items-center justify-between shadow-md">
              <div>
                <p className="text-sm font-medium text-secondary-foreground">Minimum 50% Off</p>
                <h3 className="text-xl font-bold text-secondary-foreground">Fashion Deals</h3>
                <Link to="/products?category=clothes" className="text-secondary-foreground text-sm underline mt-2 inline-block">Shop Now</Link>
              </div>
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&q=80" alt="Fashion" className="w-24 h-24 object-cover rounded-md" />
            </div>
            <div className="bg-gradient-to-r from-primary/80 to-primary rounded-md p-6 flex items-center justify-between shadow-md">
              <div>
                <p className="text-sm font-medium text-primary-foreground">Up to 70% Off</p>
                <h3 className="text-xl font-bold text-primary-foreground">Mobile Accessories</h3>
                <Link to="/products?category=mobiles" className="text-primary-foreground text-sm underline mt-2 inline-block">Shop Now</Link>
              </div>
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=80" alt="Mobile" className="w-24 h-24 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobiles Section */}
      <section className="mt-3">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Top Mobiles</h2>
            <Link to="/products?category=mobiles" className="bg-primary text-primary-foreground text-xs px-4 py-2 rounded-md font-medium hover:bg-primary/90">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mobileProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Section */}
      <section className="mt-3">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Fashion Top Picks</h2>
            <Link to="/products?category=clothes" className="bg-primary text-primary-foreground text-xs px-4 py-2 rounded-md font-medium hover:bg-primary/90">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fashionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="mt-3 mb-3">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Trending Now</h2>
            <Link to="/products" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.slice(0, 12).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
