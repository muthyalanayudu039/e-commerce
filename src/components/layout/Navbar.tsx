import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  LogOut,
  ChevronDown,
  MapPin
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        {/* Main Navbar */}
        <div className="container">
          <div className="flex items-center gap-4 h-14">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 lg:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <span className="text-xl font-bold">Shop<span className="text-secondary">Mart</span></span>
            </Link>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
              <div className="flex w-full bg-white rounded-sm overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for Products, Brands and More"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 text-foreground text-sm focus:outline-none"
                />
                <button type="submit" className="px-4 text-primary">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
            
            {/* Actions */}
            <div className="flex items-center gap-1 ml-auto">
              {/* User Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setIsUserMenuOpen(true)}
                onMouseLeave={() => setIsUserMenuOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 hover:bg-primary-foreground/10 rounded">
                  <User className="w-5 h-5" />
                  <span className="hidden lg:inline text-sm font-medium">
                    {isAuthenticated ? user?.name.split(' ')[0] : 'Login'}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-0 w-56 bg-card text-card-foreground rounded shadow-lg border border-border py-2 z-50">
                    {!isAuthenticated ? (
                      <>
                        <div className="px-4 py-2 border-b border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">New customer?</span>
                            <Link to="/login" className="text-primary text-sm font-medium">Sign Up</Link>
                          </div>
                        </div>
                        <Link to="/login" className="flex items-center gap-3 px-4 py-2 hover:bg-muted text-sm">
                          <User className="w-4 h-4" /> My Profile
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-muted text-sm">
                          <User className="w-4 h-4" /> My Profile
                        </Link>
                        <Link to="/wishlist" className="flex items-center gap-3 px-4 py-2 hover:bg-muted text-sm">
                          Wishlist {wishlistItems > 0 && `(${wishlistItems})`}
                        </Link>
                        <button 
                          onClick={logout}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-muted text-sm w-full text-left"
                        >
                          <LogOut className="w-4 h-4" /> Logout
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              {/* Cart */}
              <Link
                to="/cart"
                className="flex items-center gap-2 px-4 py-2 hover:bg-primary-foreground/10 rounded"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-secondary text-secondary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline text-sm font-medium">Cart</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="flex bg-white rounded-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-foreground text-sm focus:outline-none"
            />
            <button type="submit" className="px-4 text-primary">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </header>
      
      {/* Category Bar */}
      <nav className="bg-card border-b border-border hidden lg:block sticky top-14 z-40">
        <div className="container">
          <div className="flex items-center gap-8 h-12 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="text-sm text-foreground hover:text-primary whitespace-nowrap font-medium"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-card overflow-y-auto">
            <div className="p-4 bg-primary text-primary-foreground">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-xs text-primary-foreground/70">{user?.email}</p>
                  </div>
                </div>
              ) : (
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Login & Signup</p>
                  </div>
                </Link>
              )}
            </div>
            
            <nav className="py-2">
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Wishlist {wishlistItems > 0 && `(${wishlistItems})`}
              </Link>
              <Link
                to="/cart"
                className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Cart {cartItems > 0 && `(${cartItems})`}
              </Link>
              
              <div className="border-t border-border my-2" />
              
              <p className="px-4 py-2 text-xs text-muted-foreground font-medium uppercase">Categories</p>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.slug}`}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              
              {isAuthenticated && (
                <>
                  <div className="border-t border-border my-2" />
                  <button
                    onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted w-full"
                  >
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
