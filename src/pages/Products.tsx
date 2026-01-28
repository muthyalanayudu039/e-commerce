import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import Rating from '@/components/common/Rating';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('popularity');

  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam) {
      result = result.filter(p => p.category === categoryParam);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Filter by price
    result = result.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by rating
    if (selectedRating) {
      result = result.filter(p => p.rating >= selectedRating);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [categoryParam, searchQuery, priceRange, selectedRating, sortBy]);

  const clearFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedRating(null);
    setSortBy('popularity');
    setSearchParams({});
  };

  const activeCategory = categories.find(c => c.slug === categoryParam);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container py-3">
          <nav className="text-xs text-muted-foreground">
            <span className="hover:text-primary cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            {activeCategory ? (
              <span className="text-foreground">{activeCategory.name}</span>
            ) : searchQuery ? (
              <span className="text-foreground">Search: "{searchQuery}"</span>
            ) : (
              <span className="text-foreground">All Products</span>
            )}
          </nav>
        </div>
      </div>

      <div className="container py-4">
        <div className="flex gap-4">
          {/* Filters Sidebar */}
          <aside className={cn(
            "w-60 shrink-0",
            isFilterOpen
              ? "fixed inset-0 z-50 bg-card p-4 overflow-y-auto lg:relative lg:p-0"
              : "hidden lg:block"
          )}>
            {isFilterOpen && (
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="bg-card border border-border rounded-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <h2 className="text-sm font-bold text-foreground uppercase">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Categories */}
              <div className="border-b border-border">
                <div className="px-4 py-3">
                  <h3 className="text-xs font-bold text-foreground uppercase mb-3">Categories</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={!categoryParam} 
                        onCheckedChange={() => setSearchParams({})}
                      />
                      <span className="text-sm text-foreground">All Products</span>
                    </label>
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox 
                          checked={categoryParam === category.slug}
                          onCheckedChange={() => setSearchParams({ category: category.slug })}
                        />
                        <span className="text-sm text-foreground">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="border-b border-border">
                <div className="px-4 py-3">
                  <h3 className="text-xs font-bold text-foreground uppercase mb-3">Price</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Under ₹500', range: [0, 500] },
                      { label: '₹500 - ₹1,000', range: [500, 1000] },
                      { label: '₹1,000 - ₹5,000', range: [1000, 5000] },
                      { label: 'Above ₹5,000', range: [5000, 100000] },
                    ].map((item) => (
                      <label key={item.label} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox 
                          checked={priceRange[0] === item.range[0] && priceRange[1] === item.range[1]}
                          onCheckedChange={() => setPriceRange(item.range)}
                        />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="px-4 py-3">
                <h3 className="text-xs font-bold text-foreground uppercase mb-3">Customer Ratings</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={selectedRating === rating}
                        onCheckedChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                      />
                      <span className="flex items-center gap-1 text-sm">
                        {rating}
                        <span className="text-success">★</span>
                        <span className="text-foreground">& above</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-card border border-border rounded-sm mb-4 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden text-sm text-primary font-medium"
                >
                  Filters
                </button>
                <span className="text-sm text-foreground">
                  Showing {filteredProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center border border-border rounded-sm overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-1.5 transition-colors",
                      viewMode === 'grid' ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
                    )}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-1.5 transition-colors",
                      viewMode === 'list' ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
                    )}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Sort By</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-2 py-1 border border-border rounded-sm bg-card text-foreground text-sm focus:outline-none focus:border-primary"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="discount">Discount</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={cn(
                viewMode === 'grid'
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  : "bg-card border border-border rounded-sm"
              )}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-sm text-center py-16">
                <p className="text-muted-foreground mb-4">No products found</p>
                <Button onClick={clearFilters} variant="outline" size="sm">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
