import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white">
      {/* Main Footer */}
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* About */}
          <div>
            <h4 className="text-xs text-gray-400 font-medium uppercase mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">About Us</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Careers</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Flipkart Stories</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Press</a></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="text-xs text-gray-400 font-medium uppercase mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Payments</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Shipping</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Cancellation & Returns</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">FAQ</a></li>
            </ul>
          </div>
          
          {/* Consumer Policy */}
          <div>
            <h4 className="text-xs text-gray-400 font-medium uppercase mb-4">Consumer Policy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Return Policy</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Security</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Privacy</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Sitemap</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-xs text-gray-400 font-medium uppercase mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Facebook</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">Twitter</a></li>
              <li><a href="#" className="text-xs text-gray-300 hover:underline">YouTube</a></li>
            </ul>
          </div>
          
          {/* Mail Us */}
          <div>
            <h4 className="text-xs text-gray-400 font-medium uppercase mb-4">Mail Us</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          
          {/* Registered Office */}
          <div>
            <h4 className="text-xs text-gray-400 font-medium uppercase mb-4">Registered Office</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India<br />
              CIN: U51109KA2012PTC066107<br />
              Telephone: 044-45614700
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">🛒</span> Become a Seller
              </span>
              <span className="flex items-center gap-2">
                <span>📢</span> Advertise
              </span>
              <span className="flex items-center gap-2">
                <span>🎁</span> Gift Cards
              </span>
              <span className="flex items-center gap-2">
                <span>❓</span> Help Center
              </span>
            </div>
            <p className="text-xs text-gray-400">© 2024 ShopMart.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
