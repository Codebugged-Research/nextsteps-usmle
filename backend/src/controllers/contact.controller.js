import { sendContactFormEmail } from '../services/email.service.js';

export const submitContactForm = async (req, res, next) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            const error = new Error('Name, email, and message are required');
            error.statusCode = 400;
            throw error;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            const error = new Error('Invalid email address');
            error.statusCode = 400;
            throw error;
        }

        // Send email
        await sendContactFormEmail({ name, email, phone, message });

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully. We will get back to you soon!',
        });
    } catch (error) {
        next(error);
    }
};
