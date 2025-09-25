'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartStore';

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
};

const ItemList = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Classic White Sneakers',
      price: 89.99,
      originalPrice: 129.99,
      image: '/placeholder-sneaker.jpg', // Replace with actual image path
      category: 'Footwear',
      rating: 4.5,
      reviewCount: 128,
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: 59.99,
      image: '/placeholder-jeans.jpg', // Replace with actual image path
      category: 'Bottoms',
      rating: 4.2,
      reviewCount: 89,
    },
    {
      id: 3,
      name: 'Casual T-Shirt',
      price: 29.99,
      image: '/placeholder-tshirt.jpg', // Replace with actual image path
      category: 'Tops',
      rating: 4.7,
      reviewCount: 215,
    },
    {
      id: 4,
      name: 'Leather Jacket',
      price: 199.99,
      originalPrice: 249.99,
      image: '/placeholder-jacket.jpg', // Replace with actual image path
      category: 'Outerwear',
      rating: 4.8,
      reviewCount: 56,
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: 109.99,
      image: '/placeholder-running.jpg', // Replace with actual image path
      category: 'Footwear',
      rating: 4.6,
      reviewCount: 178,
    },
    {
      id: 6,
      name: 'Denim Jacket',
      price: 79.99,
      originalPrice: 99.99,
      image: '/placeholder-denim.jpg', // Replace with actual image path
      category: 'Outerwear',
      rating: 4.4,
      reviewCount: 92,
    },
  ]);

  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      ...product,
      quantity: 1 // Initialize quantity to 1 when adding to cart
    }));
    
    // Show notification
    setNotificationMessage(`${product.name} added to cart!`);
    setShowNotification(true);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Collection</h2>
          <p className="mt-4 text-xl text-gray-300">Discover our curated selection of premium products</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Glass effect container */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group-hover:border-orange-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-2xl"></div>
              </div>
              
              <div className="relative h-80 z-10">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800/80 to-gray-900/80">
                  <span className="text-gray-400">Product Image</span>
                </div>
                {product.originalPrice && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r hover:cursor-pointer from-orange-500 to-amber-600 text-white py-3 font-medium transition-all duration-300 backdrop-blur-sm ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  Add to Cart
                </button>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <p className="text-sm text-gray-300/80">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white drop-shadow">${product.price.toFixed(2)}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-400/80 line-through">${product.originalPrice.toFixed(2)}</p>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center">
                  <div className="flex text-yellow-400 drop-shadow">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-300/80">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;