import { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import useLocationStore from '../store/useLocationStore';

const PostcodeModal = () => {
    const { isOpen, toggleModal, setPostcode } = useLocationStore();
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code.length < 3) {
            setError('Please enter a valid postcode (e.g., SW1)');
            return;
        }
        setPostcode(code.toUpperCase());
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content glass-card fade-in">
                <button className="modal-close" onClick={() => toggleModal(false)}>
                    <X size={20} />
                </button>
                
                <div className="modal-header">
                    <MapPin size={48} color="var(--primary)" />
                    <h2>Check Delivery Availability</h2>
                    <p>Enter your postcode to see products available in your area.</p>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="e.g. SW1" 
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        autoFocus
                    />
                    {error && <span className="error-text">{error}</span>}
                    <button type="submit" className="btn btn-primary w-full">Check Availability</button>
                </form>
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(8px);
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .modal-content {
                    width: 90%;
                    max-width: 450px;
                    padding: 40px;
                    text-align: center;
                    background: white;
                    position: relative;
                }
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    color: #888;
                    transition: all 0.3s ease;
                }
                .modal-close:hover {
                    color: var(--error);
                    transform: rotate(90deg);
                }
                .modal-header h2 {
                    margin: 20px 0 10px;
                    font-size: 24px;
                }
                .modal-header p {
                    color: var(--text-light);
                    margin-bottom: 30px;
                }
                .modal-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .error-text {
                    color: var(--error);
                    font-size: 14px;
                    font-weight: 500;
                }
                .w-full {
                    width: 100%;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
};

export default PostcodeModal;
