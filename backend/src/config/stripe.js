import Stripe from 'stripe';

const apiKey = process.env.STRIPE_TEST_KEY;

if (!apiKey) {
    throw new Error('STRIPE_TEST_KEY is required');
}

const stripe = new Stripe(apiKey);

export default stripe;
