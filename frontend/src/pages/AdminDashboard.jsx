import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Package, ShoppingBag, Users, TrendingUp, BarChart as BarChartIcon, LayoutDashboard, History } from 'lucide-react';
import { 
    ResponsiveContainer, 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    LineChart, 
    Line,
    AreaChart,
    Area
} from 'recharts';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import AdminProductsList from '../components/admin/AdminProductsList';
import AdminOrdersList from '../components/admin/AdminOrdersList';
import AdminUsersList from '../components/admin/AdminUsersList';

const AdminDashboard = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalOrders: 0,
        totalUsers: 0,
        revenue: 0,
        salesByDate: []
    });
    const [activeView, setActiveView] = useState('dashboard'); // 'dashboard', 'products', 'orders', 'users'

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/');
            return;
        }

        const fetchStats = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                };
                const { data } = await axios.get('/api/admin/stats', config);
                setStats(data);
            } catch (error) {
                console.error('Error fetching admin stats:', error);
            }
        };

        fetchStats();
    }, [user, navigate]);

    return (
        <div className="admin-dashboard fade-in">
            <div className="admin-header">
                <div className="header-text">
                    <h1>Admin Control Center</h1>
                    <p>Real-time analytics and management for your marketplace.</p>
                </div>
                <div className="header-actions">
                    <button 
                        className={`nav-btn ${activeView === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveView('dashboard')}
                    >
                        <LayoutDashboard size={18} /> Overview
                    </button>
                    <button 
                        className={`nav-btn ${activeView === 'products' ? 'active' : ''}`}
                        onClick={() => setActiveView('products')}
                    >
                        <Package size={18} /> Products
                    </button>
                    <button 
                        className={`nav-btn ${activeView === 'orders' ? 'active' : ''}`}
                        onClick={() => setActiveView('orders')}
                    >
                        <ShoppingBag size={18} /> Orders
                    </button>
                    <button 
                        className={`nav-btn ${activeView === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveView('users')}
                    >
                        <Users size={18} /> Users
                    </button>
                </div>
            </div>

            {activeView === 'dashboard' && (
                <>
                    <div className="stats-grid">
                        <div className="stat-card glass-card">
                            <div className="stat-icon products"><Package size={24} /></div>
                            <div className="stat-info">
                                <h3>{stats.totalProducts}</h3>
                                <p>Products</p>
                            </div>
                        </div>
                        <div className="stat-card glass-card">
                            <div className="stat-icon orders"><ShoppingBag size={24} /></div>
                            <div className="stat-info">
                                <h3>{stats.totalOrders}</h3>
                                <p>Total Orders</p>
                            </div>
                        </div>
                        <div className="stat-card glass-card">
                            <div className="stat-icon users"><Users size={24} /></div>
                            <div className="stat-info">
                                <h3>{stats.totalUsers}</h3>
                                <p>Active Users</p>
                            </div>
                        </div>
                        <div className="stat-card glass-card">
                            <div className="stat-icon revenue"><TrendingUp size={24} /></div>
                            <div className="stat-info">
                                <h3>£{stats.revenue.toFixed(2)}</h3>
                                <p>Total Revenue</p>
                            </div>
                        </div>
                    </div>

                    <div className="charts-container grid-2">
                        <div className="chart-box glass-card">
                            <div className="chart-header">
                                <h3><TrendingUp size={18} /> Revenue Trends (Last 7 Days)</h3>
                            </div>
                            <div className="chart-wrapper">
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={stats.salesByDate}>
                                        <defs>
                                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                        <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                            formatter={(value) => [`£${value.toFixed(2)}`, 'Sales']}
                                        />
                                        <Area type="monotone" dataKey="totalSales" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="chart-box glass-card">
                            <div className="chart-header">
                                <h3><History size={18} /> Order Volume</h3>
                            </div>
                            <div className="chart-wrapper">
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={stats.salesByDate}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                        <XAxis dataKey="_id" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                        />
                                        <Bar dataKey="count" fill="var(--secondary)" radius={[4, 4, 0, 0]} barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="admin-content-area">
                {activeView === 'products' && <AdminProductsList />}
                {activeView === 'orders' && <AdminOrdersList />}
                {activeView === 'users' && <AdminUsersList />}
            </div>

            <style jsx>{`
                .admin-dashboard { padding: 40px 0; }
                .admin-header { 
                    display: flex; justify-content: space-between; align-items: flex-end;
                    margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 20px;
                }
                .admin-header h1 { font-size: 32px; color: var(--primary); margin-bottom: 4px; }
                .admin-header p { color: var(--text-light); }
                
                .header-actions { display: flex; gap: 10px; }
                .nav-btn {
                    display: flex; align-items: center; gap: 8px; padding: 10px 18px;
                    border-radius: 12px; font-weight: 700; font-size: 14px;
                    color: var(--text-light); transition: all 0.3s ease;
                }
                .nav-btn:hover { background: #f5f5f5; color: var(--primary); }
                .nav-btn.active { background: var(--primary); color: white; }

                .stats-grid { 
                    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 
                    gap: 24px; margin-bottom: 40px; 
                }
                .stat-card { display: flex; align-items: center; gap: 20px; padding: 24px; }
                .stat-icon { 
                    width: 54px; height: 54px; border-radius: 16px; 
                    display: flex; align-items: center; justify-content: center; color: white; 
                }
                .stat-icon.products { background: linear-gradient(135deg, #66bb6a, #43a047); }
                .stat-icon.orders { background: linear-gradient(135deg, #42a5f5, #1e88e5); }
                .stat-icon.users { background: linear-gradient(135deg, #ffa726, #fb8c00); }
                .stat-icon.revenue { background: linear-gradient(135deg, #ab47bc, #8e24aa); }
                .stat-info h3 { font-size: 26px; font-weight: 800; margin-bottom: 4px; }
                .stat-info p { font-size: 13px; color: var(--text-light); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }

                .charts-container { margin-bottom: 40px; }
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
                .chart-box { padding: 24px; }
                .chart-header { margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
                .chart-header h3 { font-size: 18px; display: flex; align-items: center; gap: 8px; }
                .chart-wrapper { width: 100%; height: 300px; }

                @media (max-width: 992px) {
                    .admin-header { flex-direction: column; align-items: flex-start; gap: 20px; }
                    .grid-2 { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
