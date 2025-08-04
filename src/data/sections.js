// src/data/sections.js
import { Globe, Activity, Coins, CreditCard, Webhook, Shield,  LucideCirclePoundSterling } from 'lucide-react';

export const sections = [
  { id: 'home', title: 'Home', icon: Globe },
  { id: 'intro', title: 'Intro', icon: Globe },
  { id: 'pre', title: 'Prerequesite', icon: LucideCirclePoundSterling },
  { id: 'flows', title: 'User Flow', icon: Activity },
  { id: 'onramp', title: 'OnRamp APIs', icon: Coins },
  { id: 'offramp', title: 'OffRamp APIs', icon: CreditCard },
  { id: 'webhooks', title: 'Webhooks', icon: Webhook },
  { id: 'errors', title: 'Error Codes', icon: Shield },
];
