import Stripe from 'stripe';

const apiKey = process.env.STRIPE_SECRET_KEY;

if (!apiKey) {
    throw new Error('STRIPE_SECRET_KEY is required');
}

const stripe = new Stripe(apiKey);

export default stripe;
