import stripe from '../config/stripe.js';

export const createCheckoutSession = async (amount, currency, customerEmail, metadata = {}) => {
    if (currency !== 'usd') {
        const error = new Error('Only USD currency is supported');
        error.statusCode = 400;
        throw error;
    }

    if (amount <= 0) {
        const error = new Error('Amount must be greater than 0');
        error.statusCode = 400;
        throw error;
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: currency,
                    product_data: {
                        name: 'USMLE Prep Payment',
                        description: metadata.description || 'Payment for USMLE preparation services',
                    },
                    unit_amount: Math.round(amount * 100),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: process.env.SUCCESS_URL,
        cancel_url: process.env.CANCEL_URL,
        customer_email: customerEmail,
        metadata: metadata,
    });

    return session;
};
