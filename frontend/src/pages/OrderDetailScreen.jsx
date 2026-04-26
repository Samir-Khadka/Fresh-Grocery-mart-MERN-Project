import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Package, Truck, CheckCircle, Clock, MapPin, CreditCard, ArrowLeft } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';

const OrderDetailScreen = () => {
    const { id } = useParams();
    const { user } = useAuthStore();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                const { data } = await axios.get(`/api/orders/${id}`, config);
                setOrder(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchOrder();
    }, [id, user]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) return <div className="loading-state">Fetching order details...</div>;
    if (!order) return <div className="error-state">Order not found.</div>;

    const steps = [
        { name: 'Paid', icon: <CreditCard size={24} />, key: 'Paid' },
        { name: 'Processing', icon: <Package size={24} />, key: 'Processing' },
        { name: 'Out for Delivery', icon: <Truck size={24} />, key: 'Out for Delivery' },
        { name: 'Delivered', icon: <CheckCircle size={24} />, key: 'Delivered' }
    ];

    const currentStepIndex = steps.findIndex(s => s.key === order.status);

    return (
        <div className="order-detail-screen container fade-in">
            <div className="detail-top-nav no-print">
                <Link to="/my-orders" className="back-link">
                    <ArrowLeft size={18} /> Back to My Orders
                </Link>
                <button className="btn btn-outline btn-print" onClick={handlePrint}>
                    <CreditCard size={18} /> Print Invoice
                </button>
            </div>

            <div className="order-detail-header">
                <h1>Order #{order._id.substring(18)}</h1>
                <span className="order-timestamp">Placed on {new Date(order.createdAt).toLocaleString()}</span>
            </div>

            {/* Status Stepper */}
            <div className="status-stepper glass-card">
                {steps.map((step, index) => (
                    <div key={index} className={`step ${index <= currentStepIndex ? 'active' : ''}`}>
                        <div className="step-icon-box">
                            {step.icon}
                        </div>
                        <span className="step-name">{step.name}</span>
                        {index < steps.length - 1 && <div className="step-line"></div>}
                    </div>
                ))}
            </div>

            <div className="order-grid-layout">
                <div className="order-items-section glass-card">
                    <h3>Order Items</h3>
                    <div className="items-list">
                        {order.orderItems.map((item, idx) => (
                            <div key={idx} className="order-item-row">
                                <img src={item.image} alt={item.name} />
                                <div className="item-info">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-price-qty">{item.quantity} x £{item.price.toFixed(2)}</span>
                                </div>
                                <span className="item-total">£{(item.quantity * item.price).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="order-summary-section">
                    <div className="info-card glass-card">
                        <h3><MapPin size={18} /> Delivery Address</h3>
                        <p>{order.shippingAddress.address}</p>
                        <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                        <p>{order.shippingAddress.country}</p>
                    </div>

                    <div className="info-card glass-card">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>£{(order.totalPrice - order.shippingPrice).toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>£{order.shippingPrice.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>£{order.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailScreen;
