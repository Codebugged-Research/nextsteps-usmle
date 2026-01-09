import Stripe from 'stripe';
import { sendPaymentNotification, sendCustomerConfirmation } from '../services/email.service.js';

const stripe = new Stripe(process.env.STRIPE_TEST_KEY);

export const handleWebhook = async (req, res, next) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;

                console.log('Payment successful for session:', session.id);

                const emailData = {
                    amount: session.amount_total / 100,
                    currency: session.currency,
                    email: session.customer_details?.email || session.customer_email,
                    metadata: session.metadata,
                    sessionId: session.id
                };

                await sendPaymentNotification(emailData);
                console.log('Payment notification email sent to admin');

                await sendCustomerConfirmation(emailData);
                console.log('Payment confirmation email sent to customer:', emailData.email);
                break;

            case 'payment_intent.succeeded':
                break;

            case 'payment_intent.payment_failed':
                break;

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        res.json({ received: true });
    } catch (error) {
        console.error('Error handling webhook:', error);
        next(error);
    }
};
