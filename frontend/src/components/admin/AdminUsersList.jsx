import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/useAuthStore';

const AdminUsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // 'all', 'admin', 'driver', 'user'
    const { user: authUser } = useAuthStore();

    const fetchUsers = async () => {
        try {
            const config = { headers: { Authorization: `Bearer ${authUser.token}` } };
            const { data } = await axios.get('/api/admin/users', config);
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authUser && authUser.role === 'admin') fetchUsers();
    }, [authUser]);

    const handleRoleChange = async (userId, newRole) => {
        try {
            const config = { headers: { Authorization: `Bearer ${authUser.token}` } };
            await axios.put(`/api/admin/users/${userId}/role`, { role: newRole }, config);
            toast.success(`Role updated to ${newRole}`);
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error updating role');
        }
    };

    const handleVerifyDriver = async (userId, isVerified) => {
        try {
            const config = { headers: { Authorization: `Bearer ${authUser.token}` } };
            await axios.put(`/api/admin/users/${userId}/role`, { isVerified }, config);
            toast.success(isVerified ? 'Driver verified!' : 'Verification removed');
            fetchUsers();
        } catch (error) {
            toast.error('Error verifying driver');
        }
    };

    const handleDeleteUser = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            const config = { headers: { Authorization: `Bearer ${authUser.token}` } };
            await axios.delete(`/api/admin/users/${userId}`, config);
            toast.success('User deleted');
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error deleting user');
        }
    };

    if (loading) return <div className="loading-state">Loading users...</div>;

    const adminsCount = users.filter(u => u.role === 'admin').length;
    const driversCount = users.filter(u => u.role === 'driver').length;
    const buyersCount = users.filter(u => u.role === 'user').length;

    // Filter users based on selection
    const filteredUsers = filter === 'all' 
        ? users 
        : users.filter(u => u.role === filter);

    return (
        <div className="admin-list glass-card fade-in">
            <div className="list-header">
                <h2>👥 User Management</h2>
                <span className="badge">{users.length} total</span>
            </div>

            <div className="role-summary">
                <div 
                    className={`role-summary-item all ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    <span className="role-count">{users.length}</span>
                    <span>All Users</span>
                </div>
                <div 
                    className={`role-summary-item admin ${filter === 'admin' ? 'active' : ''}`}
                    onClick={() => setFilter('admin')}
                >
                    <span className="role-count">{adminsCount}</span>
                    <span>Admins</span>
                </div>
                <div 
                    className={`role-summary-item driver ${filter === 'driver' ? 'active' : ''}`}
                    onClick={() => setFilter('driver')}
                >
                    <span className="role-count">{driversCount}</span>
                    <span>Drivers</span>
                </div>
                <div 
                    className={`role-summary-item user ${filter === 'user' ? 'active' : ''}`}
                    onClick={() => setFilter('user')}
                >
                    <span className="role-count">{buyersCount}</span>
                    <span>Buyers</span>
                </div>
            </div>

            <div className="table-responsive">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(u => (
                            <tr key={u._id} className="fade-in">
                                <td>
                                    <div className="avatar" style={{ background: u.role === 'admin' ? '#ffebee' : u.role === 'driver' ? '#e3f2fd' : '#e8f5e9' }}>
                                        {u.name.charAt(0).toUpperCase()}
                                    </div>
                                </td>
                                <td className="user-name">{u.name}</td>
                                <td className="user-email">{u.email}</td>
                                <td>
                                    <select 
                                        className={`role-select ${u.role}`}
                                        value={u.role}
                                        onChange={(e) => handleRoleChange(u._id, e.target.value)}
                                        disabled={u._id === authUser._id}
                                    >
                                        <option value="user">User</option>
                                        <option value="driver">Driver</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td>
                                    {u.role === 'driver' ? (
                                        <div className="verify-toggle">
                                            {u.isVerified ? (
                                                <span className="status-badge verified" onClick={() => handleVerifyDriver(u._id, false)}>✓ Verified</span>
                                            ) : (
                                                <span className="status-badge pending" onClick={() => handleVerifyDriver(u._id, true)}>⚠ Pending Review</span>
                                            )}
                                        </div>
                                    ) : (
                                        <span className="status-badge active">✓ Active</span>
                                    )}
                                </td>
                                <td>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteUser(u._id)}
                                        disabled={u._id === authUser._id || u.role === 'admin'}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {filteredUsers.length === 0 && (
                <div className="empty-state">
                    <p>No users found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default AdminUsersList;
