import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, Shield, Tag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import EmptyState from '@/components/common/EmptyState';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal, totalSavings, clearCart } = useCart();

  const shipping = subtotal >= 500 ? 0 : 40;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-12">
          <EmptyState
            icon={ShoppingBag}
            title="Your cart is empty"
            description="Looks like you haven't added anything to your cart yet."
            actionLabel="Shop Now"
            actionHref="/products"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-4">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="text-foreground">Shopping Cart</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-card border border-border rounded-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <h1 className="text-lg font-medium text-foreground">
                  My Cart ({items.length})
                </h1>
                <button 
                  onClick={clearCart}
                  className="text-xs text-primary hover:underline"
                >
                  Clear Cart
                </button>
              </div>

              <div className="divide-y divide-border">
                {items.map((item) => (
                  <div key={item.product.id} className="p-4">
                    <div className="flex gap-4">
                      <Link to={`/product/${item.product.id}`} className="shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.title}
                          className="w-24 h-24 object-contain bg-white rounded"
                        />
                      </Link>
                      
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/product/${item.product.id}`}
                          className="text-sm text-foreground hover:text-primary line-clamp-2"
                        >
                          {item.product.title}
                        </Link>
                        <p className="text-xs text-muted-foreground capitalize mt-1">{item.product.category}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-bold text-foreground">
                            ₹{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                          {item.product.originalPrice > item.product.price && (
                            <>
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{(item.product.originalPrice * item.quantity).toLocaleString()}
                              </span>
                              <span className="text-sm text-success font-medium">
                                {item.product.discount}% off
                              </span>
                            </>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border border-border rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-muted transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 text-sm font-medium border-x border-border">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-muted transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-sm text-foreground font-medium hover:text-primary uppercase"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80">
            <div className="bg-card border border-border rounded-sm sticky top-28">
              <div className="px-4 py-3 border-b border-border">
                <h2 className="text-xs font-bold text-muted-foreground uppercase">Price Details</h2>
              </div>
              
              <div className="p-4 space-y-3 text-sm">
                <div className="flex justify-between text-foreground">
                  <span>Price ({items.length} items)</span>
                  <span>₹{(subtotal + totalSavings).toLocaleString()}</span>
                </div>
                
                {totalSavings > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Discount</span>
                    <span>−₹{totalSavings.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-foreground">
                  <span>Delivery Charges</span>
                  <span className={shipping === 0 ? 'text-success' : ''}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total Amount</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
                
                {totalSavings > 0 && (
                  <p className="text-success text-sm">
                    You will save ₹{totalSavings.toLocaleString()} on this order
                  </p>
                )}
              </div>
              
              <div className="p-4 border-t border-border">
                <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link to="/checkout">
                    Place Order
                  </Link>
                </Button>
              </div>
              
              <div className="px-4 pb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Safe and Secure Payments. Easy returns.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
