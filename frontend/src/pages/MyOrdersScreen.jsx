import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuthStore from '../store/useAuthStore';

const MyOrdersScreen = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuthStore();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                };
                const { data } = await axios.get('/api/orders/myorders', config);
                setOrders(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        if (user) {
            fetchOrders();
        }
    }, [user]);

    if (loading) return <div className="loading-container">Loading your orders...</div>;

    return (
        <div className="orders-screen fade-in">
            <div className="orders-header">
                <h1>My Orders</h1>
                <p>Track and manage your recent grocery orders.</p>
            </div>

            {orders.length === 0 ? (
                <div className="empty-orders glass-card">
                    <div className="empty-icon">🛒</div>
                    <h2>No orders yet</h2>
                    <p>When you place an order, it will appear here.</p>
                    <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Start Shopping</button>
                </div>
            ) : (
                <div className="orders-list">
                    {orders.map(order => (
                        <Link to={`/order/${order._id}`} key={order._id} className="order-link-wrapper">
                            <div className="order-card glass-card">
                                <div className="order-header-row">
                                    <div className="order-meta">
                                        <span className="order-id">Order #{order._id.substring(18)}</span>
                                        <span className="order-date">{new Date(order.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className={`status-pill ${order.status?.toLowerCase().replace(/ /g, '-')}`}>
                                        {order.status || (order.isDelivered ? 'Delivered' : 'Processing')}
                                    </div>
                                </div>
                            
                            <div className="order-content">
                                <div className="order-items-preview">
                                    {order.orderItems.map((item, index) => (
                                        <div key={index} className="preview-item">
                                            <img src={item.image} alt={item.name} />
                                            <span>{item.quantity}x {item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="order-summary-box">
                                    <div className="summary-line">
                                        <span>Total Amount</span>
                                        <span className="order-total">£{order.totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="summary-line">
                                        <span>Shipping to</span>
                                        <span className="shipping-addr">{order.shippingAddress.city}</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

        </div>
    );
};

export default MyOrdersScreen;
