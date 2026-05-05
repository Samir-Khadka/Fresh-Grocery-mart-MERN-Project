import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, User, Search, MapPin, ChevronDown, LogOut, Package, ShieldCheck, Truck, X, Heart } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';
import useCartStore from '../store/useCartStore';
import useLocationStore from '../store/useLocationStore';
import useSearchStore from '../store/useSearchStore';
import useWishlistStore from '../store/useWishlistStore';

import useDebounce from '../hooks/useDebounce';
import useClickOutside from '../hooks/useClickOutside';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const dropdownRef = useRef(null);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    
    const { user, logout } = useAuthStore();
    const { cartItems } = useCartStore();
    const { wishlistItems } = useWishlistStore();
    const { postcode, toggleModal } = useLocationStore();
    const { query, setQuery } = useSearchStore();

    const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const wishlistCount = wishlistItems.length;

    const debouncedQuery = useDebounce(query, 300);

    // Fetch search suggestions using debounced value
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (debouncedQuery.length > 1) {
                try {
                    const { data } = await axios.get(`/api/products?keyword=${debouncedQuery}`);
                    setSuggestions(data.slice(0, 5));
                } catch (error) {
                    console.error(error);
                }
            } else {
                setSuggestions([]);
            }
        };
        fetchSuggestions();
    }, [debouncedQuery]);

    // Handle clicks outside
    useClickOutside(dropdownRef, () => setDropdownOpen(false));
    useClickOutside(searchRef, () => setSearchFocused(false));

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        navigate('/login');
    };

    return (
        <header className="header glass-card">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <div className="logo-icon">🥦</div>
                    <div className="logo-text-group">
                        <span className="logo-text">FRESH</span>
                        <span className="logo-sub">SUPERMARKET</span>
                    </div>
                </Link>

                <div className="search-container" ref={searchRef}>
                    <div className={`search-bar ${searchFocused ? 'focused' : ''}`}>
                        <Search size={20} className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search 5,000+ products..." 
                            className="search-input" 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setSearchFocused(true)}
                        />
                        {query && <X size={18} className="clear-search" onClick={() => setQuery('')} />}
                    </div>

                    {searchFocused && suggestions.length > 0 && (
                        <div className="search-suggestions glass-card fade-in">
                            {suggestions.map(s => (
                                <Link 
                                    key={s._id} 
                                    to={`/product/${s._id}`} 
                                    className="suggestion-item"
                                    onClick={() => setSearchFocused(false)}
                                >
                                    <img src={s.image} alt={s.name} />
                                    <div className="suggestion-info">
                                        <span className="name">{s.name}</span>
                                        <span className="price">£{s.price.toFixed(2)}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <nav className="nav-menu">
                    <div className="location-info clickable" onClick={() => toggleModal(true)}>
                        <MapPin size={20} />
                        <span>{postcode || 'Set Location'}</span>
                    </div>

                    <Link to="/wishlist" className="nav-item wishlist-link">
                        <Heart size={24} />
                        {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
                    </Link>

                    <Link to="/cart" className="nav-item cart-link">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    {user ? (
                        <div className="profile-dropdown-container" ref={dropdownRef}>
                            <button 
                                className="profile-trigger" 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <div className="avatar-sm">
                                    {user.image ? (
                                        <img src={`${user.image}?${new Date().getTime()}`} alt="Profile" className="avatar-img-sm" />
                                    ) : (
                                        user.name.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <span className="user-name-text">{user.name.split(' ')[0]}</span>
                                <ChevronDown size={16} className={`chevron ${dropdownOpen ? 'rotate' : ''}`} />
                            </button>

                            {dropdownOpen && (
                                <div className="profile-dropdown glass-card fade-in">
                                    <div className="dropdown-header">
                                        <strong>{user.name}</strong>
                                        <span>{user.email}</span>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    
                                    <Link to="/profile" onClick={() => setDropdownOpen(false)} className="dropdown-item">
                                        <User size={18} /> <span>My Profile</span>
                                    </Link>
                                    
                                    <Link to="/my-orders" onClick={() => setDropdownOpen(false)} className="dropdown-item">
                                        <Package size={18} /> <span>My Orders</span>
                                    </Link>

                                    {user.role === 'admin' && (
                                        <Link to="/admin" onClick={() => setDropdownOpen(false)} className="dropdown-item admin-opt">
                                            <ShieldCheck size={18} /> <span>Admin Panel</span>
                                        </Link>
                                    )}

                                    {user.role === 'driver' && (
                                        <Link to="/driver" onClick={() => setDropdownOpen(false)} className="dropdown-item driver-opt">
                                            <Truck size={18} /> <span>Driver Dashboard</span>
                                        </Link>
                                    )}

                                    <div className="dropdown-divider"></div>
                                    <button onClick={handleLogout} className="dropdown-item logout">
                                        <LogOut size={18} /> <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="nav-item login-btn">
                            <User size={24} />
                            <span>Login</span>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
