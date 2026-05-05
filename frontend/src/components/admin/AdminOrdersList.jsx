import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useAuthStore from '../../store/useAuthStore';

const AdminOrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuthStore();

    const fetchData = useCallback(async () => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            const [ordersRes, usersRes] = await Promise.all([
                axios.get('/api/admin/orders', config),
                axios.get('/api/admin/users', config)
            ]);
            setOrders(ordersRes.data);
            setDrivers(usersRes.data.filter(u => u.role === 'driver'));
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }, [user.token]);

    useEffect(() => {
        if (user && user.role === 'admin') {
            fetchData();
        }
    }, [user, fetchData]);

    const handleAssignDriver = async (orderId, driverId) => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.put(`/api/admin/orders/${orderId}/assign`, { driverId }, config);
            fetchData();
        } catch (err) {
            alert('Error assigning driver');
        }
    };

    if (loading) return <div className="loading-state">Loading orders...</div>;

    return (
        <div className="admin-list glass-card fade-in">
            <div className="list-header">
                <h2>📦 Order History</h2>
                <span className="badge">{orders.length} orders</span>
            </div>

            {orders.length === 0 ? (
                <div className="empty-state">
                    <p>🛒 No orders placed yet.</p>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ORDER ID</th>
                                <th>CUSTOMER</th>
                                <th>TOTAL</th>
                                <th>STATUS</th>
                                <th>ASSIGN DRIVER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="mono-id">#{order._id.substring(18)}</td>
                                    <td>
                                        <div className="customer-info">
                                            <span className="customer-name">{order.user?.name || 'Guest'}</span>
                                            <span className="customer-email">{order.user?.email || ''}</span>
                                        </div>
                                    </td>
                                    <td className="price-cell">£{order.totalPrice.toFixed(2)}</td>
                                    <td>
                                        {order.isDelivered ? (
                                            <span className="status-badge delivered">✓ Delivered</span>
                                        ) : (
                                            <span className="status-badge pending">⏳ Processing</span>
                                        )}
                                    </td>
                                    <td>
                                        {!order.isDelivered && (
                                            <select 
                                                className="driver-select"
                                                value={order.assignedDriver || ''}
                                                onChange={(e) => handleAssignDriver(order._id, e.target.value)}
                                            >
                                                <option value="">Select Driver</option>
                                                {drivers.map(d => (
                                                    <option key={d._id} value={d._id}>{d.name}</option>
                                                ))}
                                            </select>
                                        )}
                                        {order.isDelivered && <span className="assigned-info">Completed</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminOrdersList;
