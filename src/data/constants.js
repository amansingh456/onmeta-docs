import { Shield, Coins, Database, CreditCard, Zap, ArrowRight, Globe, Code } from 'lucide-react';

export const onRampSteps = [
  { id: 'login', title: 'User Login', desc: 'Authenticate user', icon: Shield, color: '#00ff88' },
  { id: 'quote', title: 'Fetch Quote', desc: 'Get conversion rates', icon: Coins, color: '#ff0080' },
  { id: 'kyc', title: 'KYC Check', desc: 'Verify identity', icon: Database, color: '#0080ff' },
  { id: 'bank', title: 'Link Bank/UPI', desc: 'Connect payment method', icon: CreditCard, color: '#ff8000' },
  { id: 'order', title: 'Create Order', desc: 'Initialize transaction', icon: Zap, color: '#8000ff' },
  { id: 'pay', title: 'Pay to QR', desc: 'Execute payment', icon: ArrowRight, color: '#ff4000' },
  { id: 'utr', title: 'Update UTR', desc: 'Confirm transaction', icon: Database, color: '#00ffff' },
  { id: 'status', title: 'Order Status', desc: 'Check completion', icon: Globe, color: '#ffff00' }
];

export const errorCodes = [
  { code: 400, title: 'Bad Request', desc: 'Invalid request parameters', color: '#ff4444' },
  { code: 401, title: 'Unauthorized', desc: 'Authentication required', color: '#ff8800' },
  { code: 403, title: 'Forbidden', desc: 'Insufficient permissions', color: '#ffaa00' },
  { code: 404, title: 'Not Found', desc: 'Resource not found', color: '#0088ff' },
  { code: 429, title: 'Rate Limited', desc: 'Too many requests', color: '#8800ff' },
  { code: 500, title: 'Server Error', desc: 'Internal server error', color: '#ff0088' }
];

export const sdkList = [
  { lang: 'JavaScript', color: '#ffdd00', desc: 'Official Node.js SDK', icon: Code },
  { lang: 'Python', color: '#3776ab', desc: 'Python SDK for backend integration', icon: Database },
  { lang: 'Go', color: '#00add8', desc: 'High-performance Go SDK', icon: Zap },
  { lang: 'React', color: '#61dafb', desc: 'React components and hooks', icon: Globe }
];

export const webhookEvents = {
  onramp: [
    'order.created',
    'order.payment.pending',
    'order.payment.success',
    'order.completed'
  ],
  offramp: [
    'offramp.order.created',
    'offramp.crypto.received',
    'offramp.fiat.transferred',
    'offramp.completed'
  ]
};