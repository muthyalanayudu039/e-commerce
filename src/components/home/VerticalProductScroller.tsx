import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Product } from '@/data/products';

interface VerticalProductScrollerProps {
  products: Product[];
}

const VerticalProductScroller = ({ products }: VerticalProductScrollerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  if (products.length === 0) return null;

  const currentProduct = products[currentIndex];
  const discountPercentage = currentProduct.originalPrice
    ? Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="relative bg-card rounded-md shadow-md p-4 h-full flex flex-col"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-2 right-2 z-10 p-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
        aria-label="Previous product"
      >
        <ChevronUp className="w-4 h-4" />
      </button>
      <button
        onClick={goToNext}
        className="absolute bottom-2 right-2 z-10 p-1 bg-muted rounded-full hover:bg-muted/80 transition-colors"
        aria-label="Next product"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Product Content */}
      <Link to={`/product/${currentProduct.id}`} className="flex-1 flex flex-col">
        <div className="relative aspect-square w-full bg-muted rounded-md overflow-hidden mb-3">
          <img
            src={currentProduct.images[0]}
            alt={currentProduct.title}
            className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          {discountPercentage > 0 && (
            <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-md font-medium">
              {discountPercentage}% OFF
            </span>
          )}
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2">
            {currentProduct.title}
          </h3>
          
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                ₹{currentProduct.price.toLocaleString()}
              </span>
              {currentProduct.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{currentProduct.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {discountPercentage > 0 && (
              <p className="text-xs text-green-600 font-medium mt-1">
                Save ₹{(currentProduct.originalPrice! - currentProduct.price).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </Link>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1 mt-3">
        {products.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex % 5 ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalProductScroller;
