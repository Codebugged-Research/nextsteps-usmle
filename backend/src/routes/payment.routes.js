import express from 'express';
import { checkout } from '../controllers/payment.controller.js';
import { handleWebhook } from '../controllers/webhook.controller.js';

const router = express.Router();

router.post('/checkout', checkout);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

export default router;
