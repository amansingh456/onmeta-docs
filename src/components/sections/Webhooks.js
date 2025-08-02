import React from 'react';
import { Activity, Database } from 'lucide-react';
import { webhookEvents } from '../../data/constants';

const Webhooks = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-6 text-white">
          Webhook Events
        </h1>
        <p className="text-2xl text-white/70">
          Real-time notifications for transaction updates
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-black rounded-3xl border-2 border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center space-x-3">
            <Activity className="text-green-400 animate-pulse" size={24} />
            <span>OnRamp Events</span>
          </h3>
          <ul className="space-y-4 text-white/80">
            {webhookEvents.onramp.map(event => (
              <li key={event} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-green-400/20 transition-colors">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <code className="font-mono text-lg">{event}</code>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-8 bg-black rounded-3xl border-2 border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center space-x-3">
            <Database className="text-white animate-pulse" size={24} />
            <span>OffRamp Events</span>
          </h3>
          <ul className="space-y-4 text-white/80">
            {webhookEvents.offramp.map(event => (
              <li key={event} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-green-400/20 transition-colors">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <code className="font-mono text-lg">{event}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Webhooks