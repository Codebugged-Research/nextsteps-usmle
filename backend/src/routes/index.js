import express from 'express';
import paymentRoutes from './payment.routes.js';
import contactRoutes from './contact.routes.js';

const router = express.Router();

router.use('/payments', paymentRoutes);
router.use('/contact', contactRoutes);

export default router;
