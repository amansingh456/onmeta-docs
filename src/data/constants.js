import { Shield, Coins, Database, CreditCard, Zap, ArrowRight, Globe } from 'lucide-react';

export const onRampSteps = [
  { id: 'login', title: 'User Login', desc: 'Authenticate user', icon: Shield, },
  { id: 'quote', title: 'Fetch Quote', desc: 'Get conversion rates', icon: Coins,},
  { id: 'kyc', title: 'KYC Check', desc: 'Verify identity', icon: Database, },
  { id: 'bank', title: 'Link Bank/UPI', desc: 'Connect payment method', icon: CreditCard,  },
  { id: 'order', title: 'Create Buy Order', desc: 'Initialize transaction', icon: Zap,  },
  { id: 'pay', title: 'Make Payment', desc: 'Execute payment', icon: ArrowRight, },
  { id: 'status', title: 'Fetch Order Status', desc: 'Check completion', icon: Globe, }
];

export const offRampSteps = [
  { id: 'login', title: 'User Login', desc: 'Authenticate user', icon: Shield, },
  { id: 'quote', title: 'Fetch Quote', desc: 'Get conversion rates', icon: Coins,},
  { id: 'kyc', title: 'KYC Check', desc: 'Verify identity', icon: Database,  },
  { id: 'bank', title: 'Link Bank', desc: 'Connect payment method', icon: CreditCard,  },
  { id: 'order', title: 'Create Sell Order', desc: 'Initialize transaction', icon: Zap, },
  { id: 'pay', title: 'Update TxnHash', desc: 'Update txnHash with OrderId', icon: ArrowRight, },
  { id: 'status', title: 'Fetch Order Status', desc: 'Check completion', icon: Globe,}
];

