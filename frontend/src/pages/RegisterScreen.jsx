import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../store/useAuthStore';

const RegisterScreen = () => {
    const [searchParams] = useSearchParams();
    const roleParam = searchParams.get('role') || 'user';
    const redirect = searchParams.get('redirect') || '/';
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [license, setLicense] = useState('');
    const [noCriminalRecord, setNoCriminalRecord] = useState(false);
    
    const { register, user, loading, error } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(redirect);
        }
    }, [user, navigate, redirect]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roleParam === 'driver' && !noCriminalRecord) {
            toast.error('You must confirm that you have no criminal record to apply as a driver.');
            return;
        }
        register(name, email, password, roleParam, { licenseNumber: license });
    };

    return (
        <div className="login-screen fade-in">
            <div className="login-card glass-card">
                <h2>Create Account</h2>
                <p>Join us today and get fresh groceries delivered.</p>

                {error && <div className="error-alert">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            className="input" 
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {roleParam === 'driver' && (
                        <div className="driver-fields fade-in">
                            <div className="form-group">
                                <label>Driving License Number</label>
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder="e.g. ABC1234567"
                                    value={license}
                                    onChange={(e) => setLicense(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group-checkbox">
                                <input 
                                    type="checkbox" 
                                    id="noCriminalRecord"
                                    checked={noCriminalRecord}
                                    onChange={(e) => setNoCriminalRecord(e.target.checked)}
                                />
                                <label htmlFor="noCriminalRecord">I confirm I have no criminal cases or record.</label>
                            </div>
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="login-footer">
                    <span>Already have an account?</span>
                    <Link to={`/login?redirect=${redirect === '/' ? '' : redirect}`} className="link">Sign In</Link>
                </div>
            </div>

        </div>
    );
};

export default RegisterScreen;
