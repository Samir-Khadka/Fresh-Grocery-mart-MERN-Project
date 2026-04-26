import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import toast from 'react-hot-toast';
import useCartStore from '../store/useCartStore';

const ProductScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true);
    const { addItem } = useCartStore();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`/api/products/${id}`);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                toast.error('Product not found');
                navigate('/');
            }
        };
        fetchProduct();
    }, [id, navigate]);

    const addToCartHandler = () => {
        addItem(product, qty);
        toast.success('Added to basket!');
    };

    if (loading) return <div className="loading">Loading product details...</div>;

    return (
        <div className="product-screen fade-in">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <ArrowLeft size={20} /> Back
            </button>

            <div className="product-details-container glass-card">
                <div className="product-visuals">
                    <div className="main-image-box">
                        <img src={product.image} alt={product.name} referrerPolicy="no-referrer" />
                    </div>
                </div>

                <div className="product-content-info">
                    <span className="category-pill">{product.category}</span>
                    <h1>{product.name}</h1>
                    
                    <div className="rating-row">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={18} 
                                    fill={i < Math.floor(product.rating) ? 'var(--accent)' : 'none'} 
                                    stroke="var(--accent)" 
                                />
                            ))}
                        </div>
                        <span>{product.rating} ({product.numReviews} reviews)</span>
                    </div>

                    <div className="price-tag">£{product.price.toFixed(2)}</div>
                    
                    <p className="description">{product.description}</p>

                    <div className="purchase-section">
                        <div className="stock-info">
                            Status: <span className={product.stock > 0 ? 'in-stock' : 'out-stock'}>
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>

                        {product.stock > 0 && (
                            <div className="action-row">
                                <div className="qty-selector">
                                    <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                                    <span>{qty}</span>
                                    <button onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
                                </div>
                                <button className="btn btn-primary btn-lg" onClick={addToCartHandler}>
                                    <ShoppingCart size={20} /> Add to Basket
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="trust-badges">
                        <div className="badge">
                            <ShieldCheck size={20} />
                            <span>100% Quality Guaranteed</span>
                        </div>
                        <div className="badge">
                            <Truck size={20} />
                            <span>Fast Home Delivery</span>
                        </div>
                        <div className="badge">
                            <RotateCcw size={20} />
                            <span>Easy 7-Day Returns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductScreen;
