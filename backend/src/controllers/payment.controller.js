import { createCheckoutSession } from '../services/stripe.service.js';

export const checkout = async (req, res, next) => {
    try {
        const { amount, currency = 'usd', email, metadata } = req.body;

        if (!amount) {
            const error = new Error('Amount is required');
            error.statusCode = 400;
            throw error;
        }

        if (!email) {
            const error = new Error('Email is required');
            error.statusCode = 400;
            throw error;
        }

        const session = await createCheckoutSession(
            parseFloat(amount),
            currency.toLowerCase(),
            email,
            metadata
        );

        // Don't send emails here - wait for webhook confirmation from Stripe
        res.status(200).json({
            success: true,
            sessionId: session.id,
            url: session.url,
        });
    } catch (error) {
        next(error);
    }
};
