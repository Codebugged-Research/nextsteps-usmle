import express from 'express';
import paymentRoutes from './payment.routes.js';

const router = express.Router();

router.use('/payments', paymentRoutes);

export default router;
