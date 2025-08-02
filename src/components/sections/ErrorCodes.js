import React from 'react';
import { errorCodes } from '../../data/constants';

const ErrorCodes = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-6 text-white">
          Error Codes
        </h1>
        <p className="text-2xl text-white/70">
          Complete reference for API error handling
        </p>
      </div>
      
      <div className="space-y-6">
        {errorCodes.map(error => (
          <div key={error.code} className="p-8 rounded-3xl border-2 border-white/10 bg-black hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${error.color} 0%, transparent 70%)`
              }}
            />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {error.code} - {error.title}
                </h3>
                <p className="text-white/70 text-lg">{error.desc}</p>
              </div>
              <span 
                className="px-6 py-3 bg-white/10 text-white rounded-2xl font-mono text-xl font-bold border-2 border-white/20 group-hover:border-green-400/50 transition-colors"
              >
                {error.code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ErrorCodes;