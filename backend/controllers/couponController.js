const Coupon = require('../models/Coupon');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Validate a coupon code
// @route   POST /api/coupons/validate
// @access  Private
const validateCoupon = asyncHandler(async (req, res) => {
    const { code, cartTotal } = req.body;

    const coupon = await Coupon.findOne({ code, isActive: true });

    if (!coupon) {
        res.status(404);
        throw new Error('Invalid or inactive coupon code');
    }

    if (coupon.expiryDate < new Date()) {
        res.status(400);
        throw new Error('Coupon has expired');
    }

    if (cartTotal < coupon.minSpend) {
        res.status(400);
        throw new Error(`Minimum spend of £${coupon.minSpend} required for this coupon`);
    }

    res.json({
        code: coupon.code,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue
    });
});

module.exports = { validateCoupon };
