import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Package, Heart, LogOut, MapPin, Phone, ShoppingBag, Settings, CreditCard, Bell, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const stats = [
    { icon: ShoppingBag, label: 'Orders', value: '0' },
    { icon: Heart, label: 'Wishlist', value: wishlistItems.length.toString() },
    { icon: Package, label: 'In Cart', value: cartItems.length.toString() },
  ];

  const menuItems = [
    { icon: Package, label: 'My Orders', description: 'Track your orders', href: '/products' },
    { icon: Heart, label: 'Wishlist', description: `${wishlistItems.length} saved items`, href: '/wishlist' },
    { icon: ShoppingBag, label: 'Cart', description: `${cartItems.length} items in cart`, href: '/cart' },
    { icon: CreditCard, label: 'Payment Methods', description: 'Manage payments', href: '#' },
    { icon: MapPin, label: 'Addresses', description: 'Shipping addresses', href: '#' },
    { icon: Bell, label: 'Notifications', description: 'Manage alerts', href: '#' },
    { icon: Settings, label: 'Settings', description: 'Account settings', href: '#' },
  ];

  return (
    <div className="min-h-screen py-6 md:py-10">
      <div className="container max-w-3xl">
        {/* Profile Header */}
        <div className="border border-border rounded-md shadow-sm mb-6">
          <div className="p-6 md:p-8 border-b border-border">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-border rounded-full flex items-center justify-center">
                <User className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
              </div>
              
              {/* User Info */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-xl md:text-2xl font-semibold text-foreground mb-1">{user.name}</h1>
                <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </p>
              </div>

              {/* Logout Button - Desktop */}
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="hidden md:flex"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 border border-border rounded-md">
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-lg md:text-xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="border border-border rounded-md shadow-sm mb-6">
          <div className="p-4 md:p-6 border-b border-border">
            <h2 className="text-base font-semibold text-foreground">Personal Information</h2>
          </div>
          <div className="p-4 md:p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <User className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Full Name</p>
                  <p className="text-sm text-foreground">{user.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="text-sm text-foreground">123 Main Street, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="border border-border rounded-md shadow-sm mb-6">
          <div className="p-4 md:p-6 border-b border-border">
            <h2 className="text-base font-semibold text-foreground">Quick Menu</h2>
          </div>
          <div className="divide-y divide-border">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
              >
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Logout Button */}
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full md:hidden"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
