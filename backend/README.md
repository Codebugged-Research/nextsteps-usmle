# Next Steps USMLE - Backend API

Production-ready Node.js backend API for handling payment processing via Stripe Checkout.

## 🚀 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Payment Processing**: Stripe API
- **Module System**: ES Modules
- **Environment**: dotenv
- **CORS**: Enabled for frontend communication
- **Dev Tool**: Nodemon (auto-restart)

## ✨ Features

- 💳 Stripe Checkout Session creation
- 🔒 Secure payment processing (USD only)
- 🌐 CORS-enabled API
- ✅ Input validation
- 🚫 Currency restriction (rejects non-USD)
- 📧 Email capture for payment confirmation
- 🔄 Success/Cancel redirect URLs
- 🛡️ Centralized error handling
- 📝 Comprehensive logging

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (test/live keys)
- Frontend application running

## 🛠️ Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Update `.env` with your credentials**
   ```env
   PORT=5000
   STRIPE_SECRET_KEY=sk_live_your_actual_stripe_key
   CLIENT_URL=http://localhost:8080
   SUCCESS_URL=http://localhost:8080/payment/success
   CANCEL_URL=http://localhost:8080/payment/cancel
   ```

5. **Start the server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:5000`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start server with Nodemon (auto-restart) |
| `npm run dev` | Alias for `npm start` |

## 🌍 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `STRIPE_SECRET_KEY` | Stripe secret key (test/live) | `sk_live_xxxxx` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:8080` |
| `SUCCESS_URL` | Stripe success redirect | `http://localhost:8080/payment/success` |
| `CANCEL_URL` | Stripe cancel redirect | `http://localhost:8080/payment/cancel` |

### Getting Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers → API Keys**
3. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)
4. Use test keys for development, live keys for production

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── stripe.js          # Stripe client initialization
│   ├── controllers/
│   │   └── payment.controller.js  # Payment logic
│   ├── services/
│   │   └── stripe.service.js  # Stripe API calls
│   ├── routes/
│   │   ├── index.js           # Route aggregator
│   │   └── payment.routes.js  # Payment endpoints
│   ├── middlewares/
│   │   └── error.middleware.js # Error handling
│   ├── app.js                 # Express app setup
│   └── server.js              # Entry point
├── .env                       # Environment variables
├── .env.example               # Environment template
├── .gitignore
└── package.json
```

## 🔌 API Endpoints

### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2026-01-06T12:00:00.000Z"
}
```

---

### Create Checkout Session
```http
POST /api/payments/checkout
```

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "amount": 50,
  "currency": "usd",
  "email": "student@example.com",
  "metadata": {
    "name": "John Doe",
    "phone": "+1234567890",
    "paymentType": "enrollment",
    "studentId": "STU-12345"
  }
}
```

**Success Response (200):**
```json
{
  "success": true,
  "sessionId": "cs_test_xxxxx",
  "url": "https://checkout.stripe.com/c/pay/cs_test_xxxxx"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Only USD currency is supported"
}
```

**Validation Rules:**
- ✅ `amount` must be > 0
- ✅ `currency` must be "usd" (case-insensitive)
- ✅ `email` is required
- ❌ Non-USD currencies are rejected

---

### Error Responses

**Missing Required Fields (400):**
```json
{
  "success": false,
  "error": "Amount is required"
}
```

**Invalid Amount (400):**
```json
{
  "success": false,
  "error": "Amount must be greater than 0"
}
```

**Stripe API Error (500):**
```json
{
  "success": false,
  "error": "Stripe error message"
}
```

## 🔄 Payment Flow

1. **Frontend sends payment request** to `/api/payments/checkout`
2. **Backend validates** amount, currency, and email
3. **Stripe Checkout Session** is created with line items
4. **Session URL returned** to frontend
5. **Frontend redirects** user to Stripe Checkout
6. **User completes payment** on Stripe's secure page
7. **Stripe redirects** to success/cancel URL based on outcome

## 🛡️ Security Features

- ✅ CORS protection (only allows specified origin)
- ✅ Environment variables for sensitive data
- ✅ Input validation on all endpoints
- ✅ Centralized error handling
- ✅ No API keys exposed in responses
- ✅ Stripe handles all payment data (PCI compliant)

## 🚀 Deployment

### Production Checklist

- [ ] Use **live** Stripe keys (`sk_live_`)
- [ ] Update `CLIENT_URL` to production domain
- [ ] Update success/cancel URLs to production
- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS
- [ ] Add rate limiting (optional)
- [ ] Set up logging service
- [ ] Configure monitoring (e.g., Sentry)

### Deployment Platforms

#### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### Render
1. Connect GitHub repository
2. Select backend folder
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables in dashboard

#### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create nextsteps-api

# Set environment variables
heroku config:set STRIPE_SECRET_KEY=sk_live_xxxxx
heroku config:set CLIENT_URL=https://nextstepsusmle.com

# Deploy
git push heroku main
```

#### DigitalOcean/AWS/VPS
```bash
# Install Node.js on server
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <repo-url>
cd backend

# Install dependencies
npm install

# Set up environment
cp .env.example .env
nano .env  # Update with production values

# Use PM2 for process management
npm install -g pm2
pm2 start src/server.js --name nextsteps-api
pm2 save
pm2 startup
```

### Environment Variables for Production

```env
PORT=5000
STRIPE_SECRET_KEY=sk_live_your_production_key
CLIENT_URL=https://nextstepsusmle.com
SUCCESS_URL=https://nextstepsusmle.com/payment/success
CANCEL_URL=https://nextstepsusmle.com/payment/cancel
NODE_ENV=production
```

## 🐛 Troubleshooting

### Stripe API Key Error
```
Error: You did not provide an API key
```
**Solution**: 
- Verify `.env` file exists in backend root
- Check `STRIPE_SECRET_KEY` is set correctly
- Restart the server after updating `.env`
- Use `import 'dotenv/config'` at top of `server.js`

### CORS Error
```
Access to fetch at 'http://localhost:5000' has been blocked by CORS policy
```
**Solution**:
- Update `CLIENT_URL` in `.env` to match frontend URL
- Restart backend server
- Check app.js CORS configuration

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**:
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use a different port
PORT=5001 npm start
```

### Stripe Test Mode Warning
```
Invalid API Key provided: sk_test_*****
```
**Solution**:
- Ensure you're using the correct key type
- Test keys for development (`sk_test_`)
- Live keys for production (`sk_live_`)
- Get keys from Stripe Dashboard → API Keys

## 📊 Testing

### Manual API Testing with cURL

**Health Check:**
```bash
curl http://localhost:5000/health
```

**Create Checkout Session:**
```bash
curl -X POST http://localhost:5000/api/payments/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 50,
    "currency": "usd",
    "email": "test@example.com",
    "metadata": {
      "name": "Test User",
      "paymentType": "enrollment"
    }
  }'
```

### Testing with Stripe Test Cards

Use these test card numbers in Stripe Checkout:

| Card Number | Result |
|-------------|--------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Card declined |
| `4000 0000 0000 9995` | Insufficient funds |

Use any future expiry date and any CVV.

## 📝 API Response Codes

| Code | Meaning |
|------|---------|
| 200 | Success - Checkout session created |
| 400 | Bad Request - Validation error |
| 404 | Not Found - Invalid endpoint |
| 500 | Internal Server Error - Stripe/server error |

## 🔍 Logging

The server logs:
- ✅ Server startup with port number
- ✅ Incoming requests
- ✅ Stripe API calls
- ✅ Error stack traces (development only)

## 📄 License

Proprietary - Next Steps USMLE © 2026

## 📞 Support

For technical issues:
- Email: admin@nextstepsusmle.com
- Stripe Support: https://support.stripe.com

---

**Note**: This backend API handles payment processing only. The frontend application is required for the complete user experience. See `../frontend/README.md` for frontend setup.
