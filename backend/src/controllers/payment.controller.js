import { createCheckoutSession } from '../services/stripe.service.js';
import { sendPaymentNotification, sendCustomerConfirmation } from '../services/email.service.js';

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

        // Send email notifications (don't wait for them to complete)
        const emailData = {
            amount: parseFloat(amount),
            currency: currency.toLowerCase(),
            email,
            metadata,
            sessionId: session.id
        };

        // Send notification to admin
        sendPaymentNotification(emailData).catch(err => {
            console.error('Failed to send payment notification:', err);
        });

        // Send confirmation to customer
        sendCustomerConfirmation(emailData).catch(err => {
            console.error('Failed to send customer confirmation:', err);
        });

        res.status(200).json({
            success: true,
            sessionId: session.id,
            url: session.url,
        });
    } catch (error) {
        next(error);
    }
};
