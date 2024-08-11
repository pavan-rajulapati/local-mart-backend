const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const url = process.env.URL;

const handlePayment =  async (req, res) => {
    const { cartItems, totalAmount } = req.body;
    const userId = req.userId;

    try {
        // Create Stripe session
        const lineItems = cartItems.map(item => ({
            price_data: {
                currency: 'inr',
                unit_amount: item.productPrice * 100,  // Convert to smallest currency unit
                product_data: {
                    name: item.productName,
                    // Add more product details if needed
                }
            },
            quantity: item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${url}/success`,
            cancel_url: `${url}/cancel`,
        });

        await Order.create({
            userId: userId,
            items: cartItems.map(item => ({
                sellerId: item.sellerId,
                productId: item.productId,
                quantity: item.quantity,
                price: item.productPrice  
            })),
            totalAmount: totalAmount / 100  
        });

        res.json({ sessionUrl: session.url });
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ message: 'Failed to proceed with the checkout' });
    }
};

module.exports = router;

module.exports = handlePayment;
