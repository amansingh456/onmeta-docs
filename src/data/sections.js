// src/data/sections.js
import { Globe, Activity, Coins, CreditCard, Webhook, Shield, Code } from 'lucide-react';

export const sections = [
  { id: 'introduction', title: 'Introduction', icon: Globe },
  { id: 'flows', title: 'API Flows', icon: Activity },
  { id: 'onramp', title: 'OnRamp', icon: Coins },
  { id: 'offramp', title: 'OffRamp', icon: CreditCard },
  { id: 'webhooks', title: 'Webhooks', icon: Webhook },
  { id: 'errors', title: 'Error Codes', icon: Shield },
  { id: 'sdk', title: 'SDK', icon: Code }
];
