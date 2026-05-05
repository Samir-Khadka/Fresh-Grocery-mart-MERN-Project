import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import useWishlistStore from '../store/useWishlistStore';
import useCartStore from '../store/useCartStore';

const WishlistScreen = () => {
    const { wishlistItems, removeFromWishlist } = useWishlistStore();
    const { addItem } = useCartStore();

    return (
        <div className="wishlist-screen container fade-in">
            <Link to="/" className="back-link no-print">
                <ArrowLeft size={18} /> Continue Shopping
            </Link>

            <div className="wishlist-header">
                <h1>My Wishlist <Heart size={32} fill="var(--error)" color="var(--error)" /></h1>
                <p>You have {wishlistItems.length} items saved for later.</p>
            </div>

            {wishlistItems.length === 0 ? (
                <div className="empty-wishlist glass-card">
                    <Heart size={64} color="#ccc" />
                    <h2>Your wishlist is empty</h2>
                    <p>Save items you like to find them easily later.</p>
                    <Link to="/" className="btn btn-primary">Discover Products</Link>
                </div>
            ) : (
                <div className="product-grid">
                    {wishlistItems.map((product) => (
                        <div key={product._id} className="product-card glass-card">
                            <button 
                                className="wishlist-remove-btn"
                                onClick={() => {
                                    removeFromWishlist(product._id);
                                    toast.success('Removed from wishlist');
                                }}
                                title="Remove"
                            >
                                <Trash2 size={18} />
                            </button>
                            <Link to={`/product/${product._id}`} className="product-image-link">
                                <div className="product-image">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        referrerPolicy="no-referrer"
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
                                    <span>{product.rating} ({product.numReviews})</span>
                                </div>
                                <div className="product-footer">
                                    <span className="price">£{product.price.toFixed(2)}</span>
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={() => {
                                            addItem(product, 1);
                                            toast.success(`${product.name} added to cart!`);
                                        }}
                                        title="Add to Cart"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishlistScreen;
