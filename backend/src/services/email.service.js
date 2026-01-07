import transporter from '../config/email.js';

/**
 * Send payment notification email
 * @param {Object} paymentData - Payment details
 */
export const sendPaymentNotification = async (paymentData) => {
    const { amount, currency, email, metadata, sessionId } = paymentData;

    const mailOptions = {
        from: `"Next Steps USMLE" <${process.env.EMAIL_USER}>`,
        to: process.env.PAYMENT_EMAIL || 'careers@nextstepscareer.com',
        subject: `New Payment Received - $${amount} USD`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #179BAE 0%, #11A8D4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
                    .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    .info-table td { padding: 10px; border-bottom: 1px solid #ddd; }
                    .info-table td:first-child { font-weight: bold; width: 40%; background: #f0f0f0; }
                    .amount { font-size: 24px; color: #179BAE; font-weight: bold; }
                    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0;">💳 New Payment Received</h1>
                    </div>
                    <div class="content">
                        <p>A new payment has been successfully processed through Stripe.</p>
                        
                        <h3>Payment Details</h3>
                        <table class="info-table">
                            <tr>
                                <td>Amount</td>
                                <td class="amount">$${amount} ${currency.toUpperCase()}</td>
                            </tr>
                            <tr>
                                <td>Customer Email</td>
                                <td>${email}</td>
                            </tr>
                            <tr>
                                <td>Session ID</td>
                                <td style="font-family: monospace; font-size: 11px;">${sessionId}</td>
                            </tr>
                            <tr>
                                <td>Date & Time</td>
                                <td>${new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'long',
            timeZone: 'America/New_York'
        })}</td>
                            </tr>
                        </table>

                        ${metadata && Object.keys(metadata).length > 0 ? `
                        <h3>Student Information</h3>
                        <table class="info-table">
                            ${metadata.name ? `<tr><td>Name</td><td>${metadata.name}</td></tr>` : ''}
                            ${metadata.phone ? `<tr><td>Phone</td><td>${metadata.phone}</td></tr>` : ''}
                            ${metadata.paymentType ? `<tr><td>Payment Type</td><td>${metadata.paymentType}</td></tr>` : ''}
                            ${metadata.studentId ? `<tr><td>Student ID</td><td>${metadata.studentId}</td></tr>` : ''}
                        </table>
                        ` : ''}

                        <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-left: 4px solid #179BAE; border-radius: 4px;">
                            <strong>⚠️ Action Required:</strong> Please follow up with the student to confirm enrollment and provide next steps.
                        </div>
                    </div>
                    <div class="footer">
                        <p>This is an automated notification from Next Steps USMLE Payment System<br>
                        © ${new Date().getFullYear()} Next Steps Career Corporation</p>
                    </div>
                </div>
            </body>
            </html>
        `,
        text: `
New Payment Received - Next Steps USMLE

Payment Details:
- Amount: $${amount} ${currency.toUpperCase()}
- Customer Email: ${email}
- Session ID: ${sessionId}
- Date: ${new Date().toLocaleString()}

${metadata && Object.keys(metadata).length > 0 ? `
Student Information:
${metadata.name ? `- Name: ${metadata.name}` : ''}
${metadata.phone ? `- Phone: ${metadata.phone}` : ''}
${metadata.paymentType ? `- Payment Type: ${metadata.paymentType}` : ''}
${metadata.studentId ? `- Student ID: ${metadata.studentId}` : ''}
` : ''}

Please follow up with the student to confirm enrollment.

---
Next Steps USMLE Payment System
        `.trim(),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Payment notification email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending payment notification email:', error);
        throw error;
    }
};

/**
 * Send payment confirmation email to customer
 * @param {Object} paymentData - Payment details
 */
export const sendCustomerConfirmation = async (paymentData) => {
    const { amount, currency, email, metadata } = paymentData;

    const mailOptions = {
        from: `"Next Steps USMLE" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Payment Confirmation - Next Steps USMLE',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #179BAE 0%, #11A8D4 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                    .content { background: white; padding: 30px; border: 1px solid #ddd; border-top: none; }
                    .success-icon { font-size: 48px; margin-bottom: 10px; }
                    .amount { font-size: 32px; color: #179BAE; font-weight: bold; margin: 20px 0; }
                    .info-box { background: #f0f8fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
                    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f9f9f9; }
                    .button { display: inline-block; padding: 12px 30px; background: #179BAE; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <div class="success-icon">✅</div>
                        <h1 style="margin: 0;">Payment Successful!</h1>
                    </div>
                    <div class="content">
                        <p>Dear ${metadata?.name || 'Student'},</p>
                        
                        <p>Thank you for your payment! Your transaction has been processed successfully.</p>
                        
                        <div style="text-align: center;">
                            <div class="amount">$${amount} ${currency.toUpperCase()}</div>
                            <p style="color: #666;">Payment received on ${new Date().toLocaleDateString()}</p>
                        </div>

                        <div class="info-box">
                            <h3 style="margin-top: 0; color: #179BAE;">What's Next?</h3>
                            <ul style="line-height: 2;">
                                <li>Our team will contact you within 24 hours</li>
                                <li>You will receive your course access credentials</li>
                                <li>Check your email for enrollment details</li>
                            </ul>
                        </div>

                        <p><strong>Need Help?</strong><br>
                        If you have any questions, please contact us at:<br>
                        📧 <a href="mailto:careers@nextstepscareer.com">careers@nextstepscareer.com</a><br>
                        📞 +1 214 306 6111</p>

                        <div style="text-align: center; margin-top: 30px;">
                            <a href="https://nextstepsusmle.com" class="button">Visit Our Website</a>
                        </div>
                    </div>
                    <div class="footer">
                        <p><strong>Next Steps Career Corporation</strong><br>
                        30 N Gould St, STE R, Sheridan, WY 82801, USA<br>
                        © ${new Date().getFullYear()} All rights reserved</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Customer confirmation email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending customer confirmation email:', error);
        // Don't throw - we don't want to fail the payment if customer email fails
        return { success: false, error: error.message };
    }
};

/**
 * Send contact form submission email
 * @param {Object} contactData - Contact form details
 */
export const sendContactFormEmail = async (contactData) => {
    const { name, email, phone, medSchool, message } = contactData;

    const mailOptions = {
        from: `"Next Steps USMLE Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL || 'admin@nextstepsusmle.com',
        replyTo: email,
        subject: `New Contact Form Submission - ${name}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #179BAE 0%, #11A8D4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; }
                    .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    .info-table td { padding: 12px; border-bottom: 1px solid #ddd; }
                    .info-table td:first-child { font-weight: bold; width: 30%; background: #f0f0f0; }
                    .message-box { background: white; padding: 20px; border-left: 4px solid #179BAE; border-radius: 4px; margin: 20px 0; }
                    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
                    </div>
                    <div class="content">
                        <p>You have received a new message from the Next Steps USMLE website contact form.</p>
                        
                        <h3>Contact Information</h3>
                        <table class="info-table">
                            <tr>
                                <td>Name</td>
                                <td>${name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            ${phone ? `
                            <tr>
                                <td>Phone</td>
                                <td><a href="tel:${phone}">${phone}</a></td>
                            </tr>
                            ` : ''}
                            ${medSchool ? `
                            <tr>
                                <td>Med School</td>
                                <td>${medSchool}</td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td>Date & Time</td>
                                <td>${new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'long',
            timeZone: 'America/New_York'
        })}</td>
                            </tr>
                        </table>

                        <h3>Message</h3>
                        <div class="message-box">
                            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
                        </div>

                        <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-left: 4px solid #179BAE; border-radius: 4px;">
                            <strong>💡 Quick Action:</strong> Click reply to respond directly to ${email}
                        </div>
                    </div>
                    <div class="footer">
                        <p>This is an automated notification from Next Steps USMLE Contact Form<br>
                        © ${new Date().getFullYear()} Next Steps Career Corporation</p>
                    </div>
                </div>
            </body>
            </html>
        `,
        text: `
New Contact Form Submission - Next Steps USMLE

Contact Information:
- Name: ${name}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ''}
${medSchool ? `- Med School: ${medSchool}` : ''}
- Date: ${new Date().toLocaleString()}

Message:
${message}

---
Reply to this email to respond to ${email}
        `.trim(),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Contact form email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending contact form email:', error);
        throw error;
    }
};
