import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import useAuthStore from '../store/useAuthStore';

const CartScreen = () => {
    const navigate = useNavigate();
    const { cartItems, addItem, removeItem } = useCartStore();
    const { user } = useAuthStore();

    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

    const checkoutHandler = () => {
        if (!user) {
            navigate('/login?redirect=checkout');
        } else {
            navigate('/checkout');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart fade-in">
                <ShoppingBag size={80} color="#ccc" />
                <h2>Your trolley is empty</h2>
                <p>Looks like you haven't added anything to your trolley yet.</p>
                <Link to="/" className="btn btn-primary">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-screen fade-in">
            <h1>Your Shopping Trolley</h1>
            
            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.product} className="cart-item glass-card">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <Link to={`/product/${item.product}`}><h3>{item.name}</h3></Link>
                                <span className="cart-item-price">£{item.price.toFixed(2)}</span>
                            </div>
                            <div className="cart-item-qty">
                                <button 
                                    onClick={() => addItem({_id: item.product, ...item}, Math.max(1, item.qty - 1))}
                                    className="qty-btn"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="qty-value">{item.qty}</span>
                                <button 
                                    onClick={() => addItem({_id: item.product, ...item}, Math.min(item.stock, item.qty + 1))}
                                    className="qty-btn"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button 
                                className="remove-btn"
                                onClick={() => removeItem(item.product)}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary glass-card">
                    <h2>Summary</h2>
                    <div className="summary-row">
                        <span>Items ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</span>
                        <span>£{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>{subtotal > 50 ? 'FREE' : '£3.99'}</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>£{(subtotal + (subtotal > 50 ? 0 : 3.99)).toFixed(2)}</span>
                    </div>
                    <button 
                        onClick={checkoutHandler}
                        className="btn btn-primary w-full checkout-btn"
                    >
                        Go to Checkout <ArrowRight size={18} />
                    </button>
                    <div className="promo-section">
                        <input type="text" className="input" placeholder="Promo code (e.g. mnow5)" />
                        <button className="btn btn-secondary">Apply</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartScreen;
