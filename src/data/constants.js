import { Shield, Coins, Database, CreditCard, Zap, ArrowRight, Globe } from 'lucide-react';

export const onRampSteps = [
  { id: 'login', title: 'User Login', desc: 'Authenticate user', icon: Shield, color: '#00ff88' },
  { id: 'quote', title: 'Fetch Quote', desc: 'Get conversion rates', icon: Coins, color: '#ff0080' },
  { id: 'kyc', title: 'KYC Check', desc: 'Verify identity', icon: Database, color: '#0080ff' },
  { id: 'bank', title: 'Link Bank/UPI', desc: 'Connect payment method', icon: CreditCard, color: '#ff8000' },
  { id: 'order', title: 'Create Buy Order', desc: 'Initialize transaction', icon: Zap, color: '#8000ff' },
  { id: 'pay', title: 'Make Payment', desc: 'Execute payment', icon: ArrowRight, color: '#ff4000' },
  { id: 'status', title: 'Fetch Order Status', desc: 'Check completion', icon: Globe, color: '#ffff00' }
];

export const offRampSteps = [
  { id: 'login', title: 'User Login', desc: 'Authenticate user', icon: Shield, color: '#00ff88' },
  { id: 'quote', title: 'Fetch Quote', desc: 'Get conversion rates', icon: Coins, color: '#ff0080' },
  { id: 'kyc', title: 'KYC Check', desc: 'Verify identity', icon: Database, color: '#0080ff' },
  { id: 'bank', title: 'Link Bank', desc: 'Connect payment method', icon: CreditCard, color: '#ff8000' },
  { id: 'order', title: 'Create Sell Order', desc: 'Initialize transaction', icon: Zap, color: '#8000ff' },
  { id: 'pay', title: 'Update TxnHash', desc: 'Update txnHash with OrderId', icon: ArrowRight, color: '#ff4000' },
  { id: 'status', title: 'Fetch Order Status', desc: 'Check completion', icon: Globe, color: '#ffff00' }
];



export const errorCodes = [
  { code: 400, title: 'Bad Request', desc: 'Invalid request parameters', color: '#ff4444' },
  { code: 401, title: 'Unauthorized', desc: 'Authentication required', color: '#ff8800' },
  { code: 403, title: 'Forbidden', desc: 'Insufficient permissions', color: '#ffaa00' },
  { code: 404, title: 'Not Found', desc: 'Resource not found', color: '#0088ff' },
  { code: 429, title: 'Rate Limited', desc: 'Too many requests', color: '#8800ff' },
  { code: 500, title: 'Server Error', desc: 'Internal server error', color: '#ff0088' }
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