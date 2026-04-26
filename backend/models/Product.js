const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: { type: String, required: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true, index: true },
    image: { type: String, required: true },
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

// Compound index for category + createdAt (common query pattern)
productSchema.index({ category: 1, createdAt: -1 });

module.exports = mongoose.model('Product', productSchema);
