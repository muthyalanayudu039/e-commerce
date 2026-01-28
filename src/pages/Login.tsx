import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading, isAuthenticated } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    
    if (success) {
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex rounded-sm overflow-hidden shadow-lg">
        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-between w-2/5 bg-primary p-8 text-primary-foreground">
          <div>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <p className="text-primary-foreground/80">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/login-image-c5bcff89.png"
            alt="Login illustration"
            className="w-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 bg-card p-8">
          <div className="max-w-sm mx-auto">
            {/* Mobile Logo */}
            <div className="md:hidden text-center mb-8">
              <Link to="/">
                <span className="text-2xl font-bold text-primary">ShopMart</span>
              </Link>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 mb-6 bg-destructive/10 text-destructive rounded-sm text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                  required
                />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full border-0 border-b border-border rounded-none px-0 pr-10 focus-visible:ring-0 focus-visible:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <p className="text-xs text-muted-foreground">
                By continuing, you agree to our{' '}
                <a href="#" className="text-primary">Terms of Use</a> and{' '}
                <a href="#" className="text-primary">Privacy Policy</a>.
              </p>

              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                disabled={isLoading}
              >
                {isLoading ? 'Please wait...' : 'Login'}
              </Button>

              <div className="text-center">
                <Link to="/" className="text-sm text-primary hover:underline">
                  New here? Create an account
                </Link>
              </div>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 bg-muted rounded-sm">
              <p className="text-xs font-medium text-foreground mb-2">Demo Credentials:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p><span className="font-medium">Email:</span> user@gmail.com</p>
                <p><span className="font-medium">Password:</span> Namasthe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
