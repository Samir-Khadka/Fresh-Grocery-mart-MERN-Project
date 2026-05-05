import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import CartScreen from './pages/CartScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import CheckoutScreen from './pages/CheckoutScreen';
import AdminDashboard from './pages/AdminDashboard';
import DriverDashboard from './pages/DriverDashboard';
import WishlistScreen from './pages/WishlistScreen';
import MyOrdersScreen from './pages/MyOrdersScreen';
import OrderDetailScreen from './pages/OrderDetailScreen';
import ProfileScreen from './pages/ProfileScreen';
import ProductScreen from './pages/ProductScreen';
import PostcodeModal from './components/PostcodeModal';

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="app fade-in">
        <Header />
        <PostcodeModal />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/wishlist" element={<WishlistScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
            <Route path="/my-orders" element={<MyOrdersScreen />} />
            <Route path="/order/:id" element={<OrderDetailScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/driver" element={<DriverDashboard />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <span className="logo-text">FRESH</span>
              <p>Delivering high-quality, organic, and farm-fresh groceries directly to your doorstep. Your health, our priority.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Shop Products</Link></li>
                <li><Link to="/cart">My Shopping Cart</Link></li>
                <li><Link to="/my-orders">Track My Orders</Link></li>
                <li><Link to="/login">Account Login</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li><MapPin size={18} /> <span>123 Grocery Lane, London, UK</span></li>
                <li><Phone size={18} /> <span>+44 20 7946 0000</span></li>
                <li><Mail size={18} /> <span>support@freshsupermarket.com</span></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Partner with Us</h4>
              <p style={{fontSize: '14px', color: '#888', marginBottom: '15px'}}>Want to earn with us? Join our delivery fleet today.</p>
              <Link to="/register?role=driver" className="footer-cta">Become a Driver</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-flex">
                <p>&copy; 2026 Fresh Supermarket. All rights reserved.</p>
                <div className="legal-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
