// src/data/sections.js
import { Globe, Activity, Coins, CreditCard, Webhook, GitPullRequestIcon, Shield, FileKeyIcon } from 'lucide-react';

export const sections = [
  { id: 'home', title: 'Home', icon: Globe },
  { id: 'intro', title: 'Intro', icon: Shield },
  { id: 'pre', title: 'Prerequesite', icon: GitPullRequestIcon },
  { id: 'flows', title: 'User Flow', icon: Activity },
  { id: 'onramp', title: 'OnRamp APIs', icon: Coins },
  { id: 'offramp', title: 'OffRamp APIs', icon: CreditCard },
  { id: 'kyc', title: 'KYC code', icon: FileKeyIcon },
  { id: 'webhooks', title: 'Webhooks', icon: Webhook },
];
