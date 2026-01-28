import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import EmptyState from '@/components/common/EmptyState';
import Rating from '@/components/common/Rating';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof items[0]) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream">
        <div className="container py-12">
          <EmptyState
            icon={Heart}
            title="Your wishlist is empty"
            description="Save items you love to your wishlist. They'll be waiting for you here when you're ready to shop!"
            actionLabel="Explore Products"
            actionHref="/products"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="container py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
            My Wishlist
          </h1>
          <p className="text-muted-foreground">{items.length} items saved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl border border-border overflow-hidden card-hover"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-square">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.discount > 0 && (
                  <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </Link>
              
              <div className="p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-foreground line-clamp-1 hover:text-secondary transition-colors">
                    {product.title}
                  </h3>
                </Link>
                
                <div className="mt-2">
                  <Rating rating={product.rating} size="sm" reviewCount={product.reviewCount} />
                </div>
                
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 btn-gold"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => removeFromWishlist(product.id)}
                    variant="outline"
                    size="icon"
                    className="text-destructive border-destructive/30 hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
