# Next Steps USMLE - Frontend

A modern, responsive web application for USMLE preparation services built with React, TypeScript, and Vite.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn UI
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Payment**: Stripe Checkout (via backend API)

## ✨ Features

- 🎓 USMLE Step 1 & Step 2 CK program information
- 📝 CV Building services showcase
- 🏥 Clinical Rotations program details
- 💼 Residency Match Strategy information
- 📧 Contact form with EmailJS integration
- 💳 Stripe payment integration (USD only)
- 📄 PDF downloads (1000 Cases, Brochures)
- 🌐 Multi-page navigation with smooth scrolling
- 📱 Fully responsive design
- ♿ Accessible UI components
- 🎨 Modern glassmorphic design
- ⚡ Lightning-fast performance with Vite

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- EmailJS account (for contact form)
- Backend API running (for payments)

## 🛠️ Installation

1. **Clone and navigate to the project**
   ```bash
   cd frontend
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
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_API_URL=http://localhost:5000
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:8080`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🌍 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier | `service_858me2t` |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template identifier | `template_g3lih65` |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | `xxxxxxxxxxxx` |
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` |

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Navbar.tsx      # Main navigation
│   │   ├── Footer.tsx      # Footer component
│   │   ├── ContactForm.tsx # Email contact form
│   │   └── ...
│   ├── pages/              # Route pages
│   │   ├── Index.tsx       # Homepage
│   │   ├── Payment.tsx     # Payment page
│   │   ├── PaymentSuccess.tsx
│   │   ├── PaymentCancel.tsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and helpers
│   ├── App.tsx             # Root component with routing
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
│   ├── 1000_Cases_Step 1.pdf
│   └── ...
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Key Pages

### Homepage (`/`)
- Hero section with CTA
- Step 1 & 2 CK preparation info
- CV building services
- Pricing and features
- Testimonials
- Contact information

### Payment (`/payment`)
- Student information collection
- Country selection (India/Others)
- Dynamic amount input (INR/USD)
- Stripe integration for USD payments
- Email notification for India payments

### Payment Success (`/payment/success`)
- Success confirmation
- Auto-redirect to home (5 seconds)
- Email confirmation notice

### Payment Cancel (`/payment/cancel`)
- Cancellation message
- Retry option
- Auto-redirect to home (5 seconds)

### Contact (`/contact`)
- Contact form with EmailJS
- Real-time form validation
- Success/error notifications

## 🔌 API Integration

The frontend communicates with the backend API for:

### Payment Flow (USD)
```typescript
POST /api/payments/checkout
Body: {
  amount: number,
  currency: "usd",
  email: string,
  metadata: {
    name: string,
    phone: string,
    paymentType: string,
    studentId: string
  }
}
```

### India Payments
- Handled locally with toast notification
- No API call required
- Manual follow-up by team

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add email service (Gmail recommended)
3. Create email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{med_school}}`
   - `{{message}}`
4. Copy Service ID, Template ID, and Public Key to `.env`

See `EMAILJS_SETUP.md` for detailed instructions.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates optimized files in the `dist/` directory.

### Deployment Platforms
- **Vercel**: Connect GitHub repo, auto-deploy
- **Netlify**: Drag & drop `dist/` folder
- **AWS S3 + CloudFront**: Upload `dist/` contents
- **GitHub Pages**: Use `gh-pages` package

### Environment Variables for Production
Update these in your hosting platform:
```env
VITE_API_URL=https://api.nextstepsusmle.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 Key Features Implementation

### Payment Integration
- Conditional rendering based on country selection
- India: Toast notification, manual follow-up
- Others: Stripe Checkout redirect via backend API
- Success/Cancel page handling with auto-redirect

### Email Contact Form
- EmailJS integration for zero-backend email sending
- Form validation
- Loading states
- Success/error toast notifications
- Form reset after submission

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images and assets

### PDF Downloads
- Direct downloads from `public/` folder
- 1000 Cases Step 1 PDF
- Program brochures
- No authentication required

## 🐛 Troubleshooting

### Contact form not sending emails
- Verify EmailJS credentials in `.env`
- Check EmailJS dashboard for service status
- Ensure template variables match code
- Restart dev server after `.env` changes

### Payment not working
- Ensure backend is running on correct port
- Verify `VITE_API_URL` points to backend
- Check browser console for CORS errors
- Confirm Stripe keys in backend

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check TypeScript errors: Fix type issues
- Verify all imports are correct

## 📝 License

Proprietary - Next Steps USMLE © 2026

## 📞 Support

For technical support or questions:
- Email: admin@nextstepsusmle.com
- Website: https://nextstepsusmle.com

---

**Note**: This is the frontend application. The backend API is required for payment processing. See `../backend/README.md` for backend setup.
