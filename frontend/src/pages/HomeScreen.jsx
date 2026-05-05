import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter, Heart, Truck, ShieldCheck, Zap, ArrowRight, Mail, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import useCartStore from '../store/useCartStore';
import useSearchStore from '../store/useSearchStore';
import useWishlistStore from '../store/useWishlistStore';
import useLocationStore from '../store/useLocationStore';

// Module-level cache — persists across navigations within the same session
let _productsCache = null;

const HomeScreen = () => {
    const [products, setProducts] = useState(_productsCache || []);
    const [loading, setLoading] = useState(!_productsCache);
    const [activeCategory, setActiveCategory] = useState('All');
    const { addItem } = useCartStore();
    const { query } = useSearchStore();
    const { wishlistItems, toggleWishlist } = useWishlistStore();
    const { postcode, toggleModal } = useLocationStore();

    const categories = [
        { name: 'All', icon: '🌟' },
        { name: 'Fruits', icon: '🍎' },
        { name: 'Vegetables', icon: '🥦' },
        { name: 'Dairy', icon: '🥛' },
        { name: 'Meat', icon: '🥩' },
        { name: 'Bakery', icon: '🥐' },
        { name: 'Pantry', icon: '🍯' },
        { name: 'Beverages', icon: '🥤' }
    ];

    useEffect(() => {
        // If already cached, skip the API call entirely — instant load
        if (_productsCache) return;

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/products');
                _productsCache = data; // store in module cache
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesQuery = !query || 
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    if (loading) return (
        <div className="loading-state-full">
            <div className="loader"></div>
            <p>Gathering fresh groceries for you...</p>
        </div>
    );

    return (
        <div className="home-screen fade-in">
            {/* Premium Hero Section */}
            <section className="hero-premium">
                <div className="hero-content">
                    <span className="hero-badge">🌿 100% Organic & Fresh</span>
                    
                    <h1>Freshness <br /><span className="text-gradient">At Your Doorstep</span></h1>
                    <p>Order the finest quality groceries, hand-picked for your family. Delivered within 60 minutes.</p>

                    {/* Delivery Availability Widget - Cleanly integrated */}
                    <div className="delivery-widget-hero glass-card" onClick={() => toggleModal(true)}>
                        <div className="widget-icon"><MapPin size={24} /></div>
                        <div className="widget-text">
                            <span>{postcode ? `Delivering to ${postcode}` : 'Check Delivery Availability'}</span>
                            <small>Enter your postcode for faster service</small>
                        </div>
                        <ArrowRight size={20} className="arrow" />
                    </div>
                    
                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg" onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}>
                            Shop Now <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="blob-bg"></div>
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800" alt="Fresh Groceries" className="hero-img" referrerPolicy="no-referrer" />
                </div>
            </section>

            {/* Trust Badges Row */}
            <section className="trust-badges-row">
                <div className="badge-item">
                    <div className="badge-icon"><Truck size={24} /></div>
                    <div className="badge-text">
                        <h4>Free Delivery</h4>
                        <p>On orders over £20</p>
                    </div>
                </div>
                <div className="badge-item">
                    <div className="badge-icon"><ShieldCheck size={24} /></div>
                    <div className="badge-text">
                        <h4>Secure Checkout</h4>
                        <p>100% Protected Payment</p>
                    </div>
                </div>
                <div className="badge-item">
                    <div className="badge-icon"><Zap size={24} /></div>
                    <div className="badge-text">
                        <h4>Ultra Fast</h4>
                        <p>Under 60 mins delivery</p>
                    </div>
                </div>
            </section>

            <div id="shop" className="shop-section">
                <div className="section-header">
                    <h2>Explore Categories</h2>
                    <p>Find what you need by browsing our sections</p>
                </div>

                <div className="category-bar-premium glass-card">
                    <div className="category-scroll">
                        {categories.map(cat => (
                            <button 
                                key={cat.name}
                                className={`category-btn-p ${activeCategory === cat.name ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.name)}
                            >
                                <span className="cat-icon">{cat.icon}</span>
                                <span className="cat-name">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="product-grid">
                    {filteredProducts.map((product) => {
                        const isWishlisted = wishlistItems.some(x => x._id === product._id);
                        return (
                            <div key={product._id} className="product-card glass-card">
                                <button 
                                    className={`wishlist-toggle ${isWishlisted ? 'active' : ''}`}
                                    onClick={() => toggleWishlist(product)}
                                >
                                    <Heart size={20} fill={isWishlisted ? "var(--error)" : "none"} />
                                </button>
                                <Link to={`/product/${product._id}`} className="product-image-link">
                                    <div className="product-image">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            referrerPolicy="no-referrer"
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://placehold.co/500x400/e8f5e9/2e7d32?text=${encodeURIComponent(product.name)}`;
                                            }}
                                        />
                                    </div>
                                </Link>
                                <div className="product-info">
                                    <span className="category-tag">{product.category}</span>
                                    <Link to={`/product/${product._id}`}>
                                        <h3 className="clickable-title">{product.name}</h3>
                                    </Link>
                                    <div className="rating">
                                        <Star size={16} fill="var(--accent)" stroke="var(--accent)" />
                                        <span>{product.rating}</span>
                                    </div>
                                    <div className="product-footer">
                                        <span className="price">£{product.price.toFixed(2)}</span>
                                        <button 
                                            className="add-to-cart-btn"
                                            onClick={() => {
                                                addItem(product, 1);
                                                toast.success(`${product.name} added to cart!`);
                                            }}
                                        >
                                            <ShoppingCart size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="no-products glass-card">
                        <Filter size={48} color="#ccc" />
                        <p>No products found matching your search.</p>
                        <button className="btn btn-outline" onClick={() => setActiveCategory('All')}>Clear Filters</button>
                    </div>
                )}
            </div>

            {/* Newsletter Section */}
            <section className="newsletter-section glass-card">
                <div className="newsletter-content">
                    <Mail size={48} color="var(--primary)" />
                    <h2>Subscribe to our newsletter</h2>
                    <p>Get daily updates on fresh stocks and exclusive discounts!</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email address" className="input" />
                        <button className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default HomeScreen;
