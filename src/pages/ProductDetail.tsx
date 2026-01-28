import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Minus, Plus, Truck, Shield, RefreshCcw, Check, Star } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import ImageCarousel from '@/components/common/ImageCarousel';
import Rating from '@/components/common/Rating';
import ProductCard from '@/components/common/ProductCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const product = getProductById(id || '');
  const inWishlist = product ? isInWishlist(product.id) : false;
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Product not found</h1>
          <Button asChild variant="outline">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discountPercent = product.discount > 0 ? product.discount : Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container py-3">
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-primary capitalize">{product.category}</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground line-clamp-1">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="container py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Images */}
          <div className="lg:w-2/5">
            <div className="bg-card border border-border rounded-md shadow-md p-4 sticky top-28">
              <ImageCarousel images={product.images} alt={product.title} />
              
              <div className="flex gap-2 mt-4">
                <Button 
                  onClick={handleAddToCart}
                  className={cn(
                    "flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90",
                    addedToCart && "bg-success hover:bg-success"
                  )}
                >
                  {addedToCart ? (
                    <><Check className="w-4 h-4 mr-2" /> Added!</>
                  ) : (
                    <><ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart</>
                  )}
                </Button>
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <div className="bg-card border border-border rounded-md shadow-md p-6">
              <p className="text-xs text-muted-foreground uppercase mb-1">{product.category}</p>
              <h1 className="text-lg font-medium text-foreground mb-2">{product.title}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 bg-success text-success-foreground text-xs font-bold px-1.5 py-0.5 rounded-sm">
                  {product.rating} <Star className="w-3 h-3 fill-current" />
                </span>
                <span className="text-sm text-muted-foreground">
                  {product.reviewCount.toLocaleString()} Ratings & Reviews
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-base text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-sm text-success font-medium">{discountPercent}% off</span>
                  </>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-muted-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-muted">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-medium border-x border-border">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-muted">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={cn("p-2 border rounded-sm", inWishlist ? "border-destructive text-destructive" : "border-border text-muted-foreground hover:text-destructive")}
                >
                  <Heart className={cn("w-5 h-5", inWishlist && "fill-current")} />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center">
                  <RefreshCcw className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">7 Day Return</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                  <p className="text-xs text-muted-foreground">Warranty</p>
                </div>
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-bold text-foreground mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="bg-card border border-border rounded-md shadow-md p-4 mt-4">
                <h2 className="text-base font-bold text-foreground mb-4">Similar Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
