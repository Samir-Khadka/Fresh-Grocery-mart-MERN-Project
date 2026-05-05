import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Truck, MapPin, Package, CheckCircle, Navigation } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const DriverDashboard = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();
    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDeliveries = useCallback(async () => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            const { data } = await axios.get('/api/orders/driverorders', config);
            setDeliveries(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [user.token]);

    useEffect(() => {
        if (!user || user.role !== 'driver') {
            navigate('/');
            return;
        }
        fetchDeliveries();
    }, [user, navigate, fetchDeliveries]);

    const updateStatus = async (orderId, status) => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.put(`/api/orders/${orderId}/status`, { status }, config);
            toast.success(`Order marked as ${status}`);
            fetchDeliveries();
        } catch (err) {
            toast.error('Error updating delivery status');
        }
    };

    if (loading) return <div className="loading-state">Loading your assignments...</div>;

    return (
        <div className="driver-dashboard container fade-in">
            <div className="driver-header">
                <h1>🚚 Driver Assignment Center</h1>
                <p>Track your assigned deliveries and fulfill orders in real-time.</p>
            </div>

            {deliveries.length === 0 ? (
                <div className="empty-deliveries glass-card">
                    <Package size={64} color="#ccc" />
                    <h2>No deliveries assigned</h2>
                    <p>You'll see orders here once an administrator assigns them to you.</p>
                </div>
            ) : (
                <div className="deliveries-list">
                    {deliveries.map(delivery => (
                        <div key={delivery._id} className="delivery-card glass-card">
                            <div className="delivery-icon">
                                <Truck size={32} color="var(--primary)" />
                            </div>
                            <div className="delivery-details">
                                <div className="delivery-title-row">
                                    <h3>Order #{delivery._id.substring(18)}</h3>
                                    <span className={`status-pill ${delivery.status?.toLowerCase().replace(/ /g, '-')}`}>
                                        {delivery.status || 'Paid'}
                                    </span>
                                </div>
                                <div className="delivery-info">
                                    <MapPin size={16} />
                                    <span>{delivery.shippingAddress.address}, {delivery.shippingAddress.city}</span>
                                </div>
                                <div className="delivery-items-count">
                                    {delivery.orderItems.length} items • £{delivery.totalPrice.toFixed(2)}
                                </div>
                            </div>
                            
                            <div className="delivery-actions">
                                {delivery.status === 'Paid' || delivery.status === 'Processing' ? (
                                    <button 
                                        className="btn btn-outline"
                                        onClick={() => updateStatus(delivery._id, 'Out for Delivery')}
                                    >
                                        <Navigation size={18} /> Start Delivery
                                    </button>
                                ) : delivery.status === 'Out for Delivery' ? (
                                    <button 
                                        className="btn btn-success"
                                        onClick={() => updateStatus(delivery._id, 'Delivered')}
                                    >
                                        <CheckCircle size={18} /> Mark as Delivered
                                    </button>
                                ) : (
                                    <div className="completed-tag">
                                        <CheckCircle size={20} /> <span>Delivered</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DriverDashboard;
