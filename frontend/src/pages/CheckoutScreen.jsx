import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import useCartStore from '../store/useCartStore';
import useAuthStore from '../store/useAuthStore';

const CheckoutScreen = () => {
    const { cartItems, clearCart } = useCartStore();
    const { user } = useAuthStore();
    const navigate = useNavigate();

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('United Kingdom');
    const [loading, setLoading] = useState(false);
    
    // Promo Code State
    const [promoCode, setPromoCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [promoLoading, setPromoLoading] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    const shipping = subtotal > 50 ? 0 : 3.99;
    const total = Math.max(0, subtotal + shipping - discountAmount);

    const handleApplyPromo = async (e) => {
        e.preventDefault();
        if (!promoCode) return;
        setPromoLoading(true);
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                }
            };
            const { data } = await axios.post('/api/coupons/validate', { code: promoCode, cartTotal: subtotal }, config);
            
            setAppliedCoupon(data.code);
            let discount = 0;
            if (data.discountType === 'percentage') {
                discount = subtotal * (data.discountValue / 100);
            } else {
                discount = data.discountValue;
            }
            setDiscountAmount(discount);
            toast.success(`Coupon applied! £${discount.toFixed(2)} off.`);
        } catch (error) {
            setAppliedCoupon(null);
            setDiscountAmount(0);
            toast.error(error.response?.data?.message || 'Invalid coupon');
        } finally {
            setPromoLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                }
            };

            const orderData = {
                orderItems: cartItems.map(item => ({
                    name: item.name,
                    quantity: item.qty,
                    image: item.image,
                    price: item.price,
                    product: item.product
                })),
                shippingAddress: { address, city, postalCode, country },
                paymentMethod: 'Stripe',
                taxPrice: 0,
                shippingPrice: shipping,
                totalPrice: total,
                couponApplied: appliedCoupon,
                discountAmount: discountAmount
            };

            await axios.post('/api/orders', orderData, config);
            
            setLoading(false);
            clearCart();
            toast.success('Order placed successfully!');
            navigate('/my-orders');
        } catch (error) {
            setLoading(false);
            toast.error(error.response?.data?.message || 'Error creating order');
        }
    };

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    if (!user) {
        navigate('/login?redirect=checkout');
        return null;
    }

    return (
        <div className="checkout-screen fade-in">
            <h1>Checkout</h1>
            
            <div className="checkout-layout">
                <div className="checkout-form-container glass-card">
                    <h2>Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label>Address</label>
                            <input 
                                type="text" 
                                className="input" 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input 
                                    type="text" 
                                    className="input" 
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input 
                                type="text" 
                                className="input" 
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </div>
                        
                        <h2 style={{marginTop: '40px'}}>Payment Method</h2>
                        <div className="payment-method">
                            <input type="radio" id="stripe" name="payment" defaultChecked />
                            <label htmlFor="stripe">Credit or Debit Card (Stripe)</label>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-full"
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : `Place Order £${total.toFixed(2)}`}
                        </button>
                    </form>
                </div>

                <div className="order-summary glass-card">
                    <h2>Your Order</h2>
                    <div className="order-items-mini">
                        {cartItems.map(item => (
                            <div key={item.product} className="mini-item">
                                <img src={item.image} alt={item.name} />
                                <div className="mini-details">
                                    <span className="mini-name">{item.name}</span>
                                    <span className="mini-qty">Qty: {item.qty}</span>
                                </div>
                                <span className="mini-price">£{(item.qty * item.price).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-details">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>£{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>£{shipping.toFixed(2)}</span>
                        </div>
                        
                        <div className="promo-code-section" style={{ marginTop: '15px', marginBottom: '15px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '10px' }}>
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder="Promo code (e.g., mnow5)" 
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    disabled={appliedCoupon !== null}
                                />
                                <button type="submit" className="btn btn-secondary" disabled={promoLoading || appliedCoupon !== null}>
                                    {promoLoading ? '...' : appliedCoupon ? 'Applied' : 'Apply'}
                                </button>
                            </form>
                        </div>

                        {discountAmount > 0 && (
                            <div className="summary-row discount">
                                <span>Discount ({appliedCoupon})</span>
                                <span style={{ color: 'var(--error)' }}>-£{discountAmount.toFixed(2)}</span>
                            </div>
                        )}
                        
                        <div className="summary-total">
                            <span>Total</span>
                            <span>£{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutScreen;
