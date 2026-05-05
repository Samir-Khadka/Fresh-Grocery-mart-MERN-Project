import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Plus, Trash2, Edit3, Save, X, Image as ImageIcon, Tag, Hash, DollarSign, FileText } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';

const AdminProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);
    const [newData, setNewData] = useState({
        name: '', price: '', description: '', image: '', category: 'Fruits', stock: ''
    });
    const { user } = useAuthStore();

    const fetchProducts = useCallback(async () => {
        try {
            const { data } = await axios.get('/api/products');
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this product permanently?')) return;
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.delete(`/api/admin/products/${id}`, config);
            toast.success('Product deleted');
            fetchProducts();
        } catch (error) {
            toast.error('Error deleting product');
        }
    };

    const handleEditStart = (product) => {
        setEditingId(product._id);
        setEditData({ ...product });
    };

    const handleEditSave = async () => {
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.put(`/api/admin/products/${editingId}`, editData, config);
            toast.success('Product updated');
            setEditingId(null);
            fetchProducts();
        } catch (error) {
            toast.error('Error updating product');
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!newData.name || !newData.price || !newData.description) {
            return toast.error('Please fill in all required fields');
        }
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            await axios.post('/api/admin/products', newData, config);
            toast.success('New product added successfully!');
            setShowAddForm(false);
            setNewData({ name: '', price: '', description: '', image: '', category: 'Fruits', stock: '' });
            fetchProducts();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error creating product');
        }
    };

    if (loading) return <div className="loading-state">Loading product catalog...</div>;

    return (
        <div className="admin-list glass-card fade-in">
            <div className="list-header">
                <div>
                    <h2>🛒 Product Inventory</h2>
                    <p className="subtitle">Manage your supermarket stock and pricing</p>
                </div>
                <button 
                    className={`btn ${showAddForm ? 'btn-outline' : 'btn-primary'}`} 
                    onClick={() => setShowAddForm(!showAddForm)}
                >
                    {showAddForm ? <X size={18} /> : <Plus size={18} />}
                    {showAddForm ? 'Close Form' : 'Add New Product'}
                </button>
            </div>

            {showAddForm && (
                <div className="add-product-overlay fade-in">
                    <div className="add-product-modal glass-card">
                        <div className="modal-header">
                            <h3>✨ Add New Product</h3>
                            <button className="close-btn" onClick={() => setShowAddForm(false)}><X size={20} /></button>
                        </div>
                        
                        <form onSubmit={handleCreate} className="modern-form">
                            <div className="form-grid">
                                <div className="form-main">
                                    <div className="input-group">
                                        <label><Tag size={16} /> Product Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. Organic Red Apples" 
                                            value={newData.name} 
                                            onChange={e => setNewData({...newData, name: e.target.value})} 
                                            required 
                                        />
                                    </div>

                                    <div className="row-group">
                                        <div className="input-group">
                                            <label><DollarSign size={16} /> Price (£)</label>
                                            <input 
                                                type="number" 
                                                step="0.01" 
                                                placeholder="0.00" 
                                                value={newData.price} 
                                                onChange={e => setNewData({...newData, price: e.target.value})} 
                                                required 
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label><Hash size={16} /> Stock</label>
                                            <input 
                                                type="number" 
                                                placeholder="Quantity" 
                                                value={newData.stock} 
                                                onChange={e => setNewData({...newData, stock: e.target.value})} 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label>Category</label>
                                        <select value={newData.category} onChange={e => setNewData({...newData, category: e.target.value})}>
                                            <option value="Fruits">Fruits</option>
                                            <option value="Vegetables">Vegetables</option>
                                            <option value="Dairy">Dairy</option>
                                            <option value="Meat">Meat</option>
                                            <option value="Bakery">Bakery</option>
                                            <option value="Pantry">Pantry</option>
                                            <option value="Beverages">Beverages</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label><ImageIcon size={16} /> Image URL</label>
                                        <input 
                                            type="text" 
                                            placeholder="https://images.unsplash.com/..." 
                                            value={newData.image} 
                                            onChange={e => setNewData({...newData, image: e.target.value})} 
                                        />
                                    </div>
                                </div>

                                <div className="form-sidebar">
                                    <div className="image-preview-box">
                                        {newData.image ? (
                                            <img src={newData.image} alt="Preview" onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Invalid+URL'} />
                                        ) : (
                                            <div className="no-image">
                                                <ImageIcon size={40} />
                                                <p>Image Preview</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-group">
                                        <label><FileText size={16} /> Description</label>
                                        <textarea 
                                            rows="4"
                                            placeholder="Tell us about this product..." 
                                            value={newData.description} 
                                            onChange={e => setNewData({...newData, description: e.target.value})} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline" onClick={() => setShowAddForm(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Create Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="table-responsive">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT DETAILS</th>
                            <th>PRICE</th>
                            <th>STOCK</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p._id} className={editingId === p._id ? 'editing-row active' : ''}>
                                <td className="img-cell">
                                    <img src={p.image} alt={p.name} className="product-thumb" />
                                </td>
                                <td>
                                    {editingId === p._id ? (
                                        <div className="edit-fields">
                                            <input type="text" value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} />
                                            <select value={editData.category} onChange={e => setEditData({...editData, category: e.target.value})}>
                                                <option value="Fruits">Fruits</option>
                                                <option value="Vegetables">Vegetables</option>
                                                <option value="Dairy">Dairy</option>
                                                <option value="Meat">Meat</option>
                                                <option value="Bakery">Bakery</option>
                                                <option value="Pantry">Pantry</option>
                                                <option value="Beverages">Beverages</option>
                                            </select>
                                        </div>
                                    ) : (
                                        <div className="product-info-cell">
                                            <span className="p-name">{p.name}</span>
                                            <span className="cat-pill">{p.category}</span>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    {editingId === p._id ? (
                                        <div className="price-input-wrapper">
                                            <span>£</span>
                                            <input type="number" step="0.01" value={editData.price} onChange={e => setEditData({...editData, price: e.target.value})} />
                                        </div>
                                    ) : (
                                        <span className="price-text">£{Number(p.price).toFixed(2)}</span>
                                    )}
                                </td>
                                <td>
                                    {editingId === p._id ? (
                                        <input type="number" className="stock-input" value={editData.stock} onChange={e => setEditData({...editData, stock: e.target.value})} />
                                    ) : (
                                        <span className={`stock-badge ${p.stock < 10 ? 'low' : 'in'}`}>{p.stock} units</span>
                                    )}
                                </td>
                                <td>
                                    <div className="action-btns">
                                        {editingId === p._id ? (
                                            <>
                                                <button className="icon-btn success" title="Save" onClick={handleEditSave}><Save size={18} /></button>
                                                <button className="icon-btn danger" title="Cancel" onClick={() => setEditingId(null)}><X size={18} /></button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="icon-btn primary" title="Edit" onClick={() => handleEditStart(p)}><Edit3 size={18} /></button>
                                                <button className="icon-btn danger" title="Delete" onClick={() => handleDelete(p._id)}><Trash2 size={18} /></button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductsList;
