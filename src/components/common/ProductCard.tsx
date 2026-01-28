import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import Rating from './Rating';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);
  const discountPercent = product.discount > 0 ? product.discount : Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  if (viewMode === 'list') {
    return (
      <div className="flex gap-4 p-4 bg-card rounded-md shadow-md hover:shadow-lg transition-shadow">
        <Link to={`/product/${product.id}`} className="shrink-0">
          <div className="relative w-40 h-40 bg-muted rounded-md overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-contain p-2 rounded-md"
            />
          </div>
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm text-foreground hover:text-primary line-clamp-2">
              {product.title}
            </h3>
          </Link>
          
          <div className="mt-2">
            <Rating rating={product.rating} size="sm" reviewCount={product.reviewCount} />
          </div>
          
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-sm text-success font-medium">{discountPercent}% off</span>
              </>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
          
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => addToCart(product)}
              className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-sm text-sm font-medium hover:bg-secondary/90"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={cn(
                "p-1.5 border rounded-sm transition-colors",
                inWishlist ? "border-destructive text-destructive" : "border-border text-muted-foreground hover:border-foreground"
              )}
            >
              <Heart className={cn("w-4 h-4", inWishlist && "fill-current")} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card p-3 rounded-md shadow-md hover:shadow-lg transition-shadow group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-muted rounded-md overflow-hidden mb-3">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain p-2 rounded-md group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercent > 0 && (
            <span className="absolute top-2 left-2 bg-success text-success-foreground text-[10px] font-medium px-1.5 py-0.5 rounded-md">
              {discountPercent}% OFF
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className={cn(
              "absolute top-2 right-2 p-1.5 rounded-full bg-white shadow transition-colors",
              inWishlist ? "text-destructive" : "text-muted-foreground hover:text-destructive"
            )}
          >
            <Heart className={cn("w-4 h-4", inWishlist && "fill-current")} />
          </button>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground uppercase mb-1">{product.category}</p>
          <h3 className="text-sm text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <Rating rating={product.rating} size="sm" />
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-bold text-foreground">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-xs text-success font-medium">{discountPercent}% off</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
