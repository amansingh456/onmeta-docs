import React from 'react';
import { Code, Database, Zap, Sparkles } from 'lucide-react';

const SDK = () => {
  const sdkList = [
    { lang: 'JavaScript', color: '#ffdd00', desc: 'Official Node.js SDK', icon: Code },
    { lang: 'Python', color: '#3776ab', desc: 'Python SDK for backend integration', icon: Database },
    { lang: 'Go', color: '#00add8', desc: 'High-performance Go SDK', icon: Zap },
    { lang: 'React', color: '#61dafb', desc: 'React components and hooks', icon: Sparkles }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-6 text-white">
          SDK & Libraries
        </h1>
        <p className="text-2xl text-white/70">
          Official SDKs and code examples
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {sdkList.map(sdk => (
          <div key={sdk.lang} className="group p-8 rounded-3xl border-2 border-white/10 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl transform hover:scale-105 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${sdk.color} 0%, transparent 70%)`
              }}
            />
            <sdk.icon className="w-12 h-12 text-white mb-6 relative z-10 group-hover:text-green-400 transition-colors" />
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10 group-hover:text-green-400 transition-colors">{sdk.lang}</h3>
            <p className="text-white/70 mb-6 text-lg relative z-10 group-hover:text-white/90 transition-colors">{sdk.desc}</p>
            <button 
              className="px-6 py-3 bg-green-400 text-black rounded-xl font-bold hover:bg-green-300 transition-all duration-300 hover:shadow-lg transform hover:scale-105 relative z-10"
            >
              Install SDK
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SDK;