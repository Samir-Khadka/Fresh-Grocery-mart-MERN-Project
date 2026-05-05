import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { User, Mail, Lock, Shield, Save, Package, Camera, Upload } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';

const ProfileScreen = () => {
    const { user, updateUserInfo } = useAuthStore();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [image, setImage] = useState(user?.image || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            if (!name) setName(user.name);
            if (!email) setEmail(user.email);
            if (!image) setImage(user.image || '');
        }
    }, [user, name, email, image]);

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const { data } = await axios.post('/api/upload', formData, config);
            setImage(data);
            setUploading(false);
            toast.success('Image uploaded successfully');
        } catch (error) {
            console.error(error);
            setUploading(false);
            toast.error('Upload failed');
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match');
        }

        setLoading(true);
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await axios.put('/api/users/profile', { name, email, password, image }, config);
            
            updateUserInfo(data);
            toast.success('Profile updated successfully!');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error updating profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="profile-screen fade-in">
            <div className="profile-container">
                <div className="profile-header glass-card">
                    <div className="profile-banner"></div>
                    <div className="profile-info-main">
                        <div className="profile-avatar-container">
                            <div className="profile-avatar-large">
                                {image ? (
                                    <img src={`${image}?${new Date().getTime()}`} alt="Profile" className="avatar-img" />
                                ) : (
                                    user?.name?.charAt(0).toUpperCase()
                                )}
                            </div>
                            <label className="avatar-upload-btn">
                                <Camera size={18} />
                                <input type="file" onChange={uploadFileHandler} hidden />
                            </label>
                        </div>
                        <div className="profile-text">
                            <h1>{user?.name}</h1>
                            <span className="role-badge">{user?.role}</span>
                        </div>
                    </div>
                </div>

                <div className="profile-content grid-2">
                    <div className="profile-form-section glass-card">
                        <h3><User size={20} /> Personal Information</h3>
                        <form onSubmit={submitHandler} className="modern-form">
                            <div className="input-group">
                                <label>Profile Image URL</label>
                                <div className="input-with-icon">
                                    <Upload size={18} />
                                    <input 
                                        type="text" 
                                        value={image} 
                                        onChange={(e) => setImage(e.target.value)} 
                                        placeholder="Or upload using camera icon above"
                                    />
                                </div>
                            </div>
                            
                            <div className="input-group">
                                <label>Full Name</label>
                                <div className="input-with-icon">
                                    <User size={18} />
                                    <input 
                                        type="text" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Email Address</label>
                                <div className="input-with-icon">
                                    <Mail size={18} />
                                    <input 
                                        type="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="Enter email"
                                    />
                                </div>
                            </div>
                            
                            <div className="divider"></div>
                            
                            <div className="input-group">
                                <label>New Password (leave blank to keep current)</label>
                                <div className="input-with-icon">
                                    <Lock size={18} />
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        placeholder="Enter new password"
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Confirm New Password</label>
                                <div className="input-with-icon">
                                    <Lock size={18} />
                                    <input 
                                        type="password" 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                        placeholder="Confirm new password"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={loading || uploading}>
                                {loading ? 'Saving...' : <><Save size={18} /> Save Changes</>}
                            </button>
                        </form>
                    </div>

                    <div className="profile-stats-section">
                        <div className="stat-card glass-card">
                            <div className="stat-icon security"><Shield size={24} /></div>
                            <div className="stat-info">
                                <h4>Account Security</h4>
                                <p>Your account is protected with JWT encryption and secure password hashing.</p>
                            </div>
                        </div>
                        <div className="stat-card glass-card">
                            <div className="stat-icon orders"><Package size={24} /></div>
                            <div className="stat-info">
                                <h4>Account Status</h4>
                                <p>Your account is **Active** and verified. Thank you for being a part of Fresh Supermarket!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
