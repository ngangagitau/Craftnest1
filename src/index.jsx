import { useState, useEffect } from 'react';
import { FiShoppingBag, FiInstagram, FiTwitter, FiFacebook, FiMail, FiHelpCircle, FiFileText, FiX, FiMenu, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const CraftNestLanding = () => {
  const [email, setEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);

  // Sample products data
  const products = [
    { id: 1, name: 'Crochet Summer Top', price: 45.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Macrame Wall Hanging Kit', price: 29.99, category: 'DIY Kits', image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Handmade Ceramic Mug', price: 24.99, category: 'Handmade Arts', image: 'https://images.unsplash.com/photo-1536940385100-0931caa84956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Boho Crochet Sandals', price: 39.99, category: 'Crochet Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      review: "The crochet shoes are absolutely stunning! Perfect blend of comfort and style. I get compliments every time I wear them.",
      rating: 5
    },
    {
      name: "Michael T.",
      review: "The DIY kits are so well thought out. As a beginner, I appreciated the clear instructions and quality materials.",
      rating: 4
    },
  ];

  const categories = [
    { name: "All", description: "Browse all our products" },
    { name: "DIY Kits", description: "Everything you need to start your creative journey" },
    { name: "Handmade Arts", description: "Unique pieces crafted with passion" },
    { name: "Clothing", description: "Trendy, comfortable and sustainable" },
    { name: "Crochet Shoes", description: "Artisan footwear with personality" }
  ];

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navigation - Kept your original with small enhancements */}
      <nav className={`fixed w-full z-50 py-6 px-6 lg:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="text-2xl font-serif font-bold text-gray-900">CraftNest</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#" className="text-gray-700 hover:text-primary transition font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-primary transition font-medium">Shop</a>
          <a href="#" className="text-gray-700 hover:text-primary transition font-medium">Collections</a>
          <a href="#" className="text-gray-700 hover:text-primary transition font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-primary transition font-medium">Journal</a>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-primary transition relative">
            <FiShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          <button 
            className="md:hidden text-gray-700 hover:text-primary transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white mt-20 p-8 space-y-8">
          <a href="#" className="block text-2xl text-gray-800 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#" className="block text-2xl text-gray-800 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Shop</a>
          <a href="#" className="block text-2xl text-gray-800 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Collections</a>
          <a href="#" className="block text-2xl text-gray-800 hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#" className="block text-2xl text-gray-800 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Journal</a>
        </div>
      )}

      {/* Enhanced Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae" 
            alt="Artisan workshop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight animate-fadeIn">
            <span className="text-primary">Handcrafted</span> 
            <br />
            <span className="text-primary-light">With Love</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fadeIn delay-200">
            Discover unique pieces that tell stories of tradition and craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-300">
            <button className="btn-primary pulse">
              Shop Now
              <FiShoppingBag className="ml-2 inline" />
            </button>
            <button className="btn-outline group">
              Our Story
              <FiChevronRight className="ml-2 inline transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <FiChevronRight className="text-2xl text-gray-600 rotate-90" />
        </div>
      </section>

      {/* Featured Collections - Enhanced */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-light text-gray-900">
              Featured <span className="text-primary">Collections</span>
            </h2>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary flex items-center">
              View all <FiChevronRight className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 floating-item"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white">
                    <FiShoppingBag className="text-lg" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-primary font-medium">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                  
                  <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-sm text-primary hover:text-primary-light flex items-center">
                      View Details
                      <FiChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="text-xs uppercase tracking-wider border border-primary text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Kept your original */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-6">Our Craftsmanship Philosophy</h2>
            <p className="text-gray-600 mb-6">
              At CraftNest, we celebrate the artistry and dedication of skilled makers who pour their passion into every creation. 
              Each piece in our collection tells a story of tradition, innovation, and exceptional craftsmanship.
            </p>
            <p className="text-gray-600 mb-8">
              We partner directly with artisans around the world, ensuring fair compensation and preserving cultural heritage 
              while bringing you ethically-made, high-quality products for your home and wardrobe.
            </p>
            <button className="btn-outline group">
              Learn Our Story
              <FiChevronRight className="ml-2 inline transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-200 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Artisan at work" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Craft materials" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="aspect-square bg-gray-200 overflow-hidden rounded-lg col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Finished products" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-6 lg:px-12 bg-white pattern-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-light text-center mb-16">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          
          <div className="relative">
            <div className="relative h-64 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${currentTestimonial === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl italic text-gray-600 mb-6">
                      "{testimonial.review}"
                    </blockquote>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-gray-400 hover:text-primary transition"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-gray-400 hover:text-primary transition"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter - Kept your original with small enhancements */}
      <section className="py-20 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to receive updates on new collections, artisan stories, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <button 
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer - Kept your original with small enhancements */}
      <footer className="py-12 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-serif font-light mb-4">CraftNest</h3>
            <p className="text-gray-400">
              Celebrating handmade craftsmanship and supporting artisan communities worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">Artisans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-light transition footer-link">Journal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-primary-light transition"><FiInstagram className="text-xl" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition"><FiTwitter className="text-xl" /></a>
              <a href="#" className="text-gray-400 hover:text-primary-light transition"><FiFacebook className="text-xl" /></a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CraftNest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CraftNestLanding;