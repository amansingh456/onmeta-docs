import { useState } from 'react';
import EndpointCard from '../ui/EndpointCard';
import { apiEndpoints } from '../../data/apiEndpoints';

const OnRamp = ({ 
  expandedEndpoints, 
  activeTab, 
  toggleEndpoint, 
  setActiveTabForEndpoint, 
  copyToClipboard 
}) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const baseUrls = {
    production: 'https://api.platform.onmeta.in',
    staging: 'https://stg.api.onmeta.in'
  };

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="text-2xl text-white/80">
            Convert fiat currency to cryptocurrency tokens
          </p>
        </div>
        
        <div className="relative">
          <button
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            className="hover:bg-white/10 text-white/60 transition-all duration-300 px-6 py-3 rounded-lg border border-white/10 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <span className="text-sm font-medium">Base URLs</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isToggleOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          
          <div className={`absolute right-0 top-full mt-2 bg-white/10 text-white/60 border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-out z-10 ${
            isToggleOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}>
            <div className="p-4 min-w-[320px]">
              <div className="space-y-3">
                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">Production</span>
                    <button
                      onClick={() => copyUrl(baseUrls.production)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-white"
                      title="Copy URL"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-black rounded px-3 py-2 font-mono text-sm text-gray-300 break-all">
                    {baseUrls.production}
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wide">Staging</span>
                    <button
                      onClick={() => copyUrl(baseUrls.staging)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-white"
                      title="Copy URL"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-black rounded px-3 py-2 font-mono text-sm text-gray-300 break-all">
                    {baseUrls.staging}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {apiEndpoints.onramp.map(endpoint => (
        <EndpointCard 
          key={endpoint.id} 
          endpoint={endpoint}
          isExpanded={expandedEndpoints[endpoint.id]}
          activeTab={activeTab[endpoint.id]}
          toggleEndpoint={toggleEndpoint}
          setActiveTabForEndpoint={setActiveTabForEndpoint}
          copyToClipboard={copyToClipboard}
        />
      ))}
    </div>
  );
};

export default OnRamp;