import React from 'react';
import { Play, ChevronDown, ChevronRight, Copy, Sparkles } from 'lucide-react';

const EndpointCard = ({ 
  endpoint, 
  isExpanded, 
  activeTab, 
  toggleEndpoint, 
  setActiveTabForEndpoint, 
  copyToClipboard 
}) => {
  const activeTabForEndpoint = activeTab || 'request';

  return (
    <div className="mb-8 group">
      <div className="relative overflow-hidden rounded-2xl bg-black border-2 border-white/10 hover:border-green-400/30 transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.01]">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, #00ff88 0%, transparent 70%)`
          }}
        />
        
        <div 
          className="p-8 cursor-pointer flex items-center justify-between hover:bg-white/5 transition-all duration-300 relative z-10"
          onClick={() => toggleEndpoint(endpoint.id)}
        >
          <div className="flex items-center space-x-6">
            <span className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-300 ${
              endpoint.method === 'GET' 
                ? 'bg-black text-green-400 border-green-400/30 group-hover:border-green-400 group-hover:shadow-lg' 
                : 'bg-black text-white border-white/30 group-hover:border-green-400 group-hover:shadow-lg'
            }`}>
              {endpoint.method}
            </span>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                {endpoint.title}
              </h3>
              <code className="text-lg text-white/60 font-mono group-hover:text-green-400/80">
                {endpoint.path}
              </code>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="px-6 py-3 bg-green-400 text-black rounded-xl font-bold hover:bg-green-300 transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:shadow-green-400/20 transform hover:scale-105"
              onClick={(e) => { e.stopPropagation(); }}
            >
              <Play size={18} />
              <span>Try It</span>
            </button>
            <div className="text-white/60 group-hover:text-white transition-colors">
              {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="border-t-2 border-white/10">
            <div className="p-8 relative">
              <p className="text-white/80 mb-8 text-lg">{endpoint.description}</p>
              
              <div className="flex space-x-2 mb-8 bg-black/50 p-2 rounded-xl border border-white/10 w-fit">
                {['request', 'response', 'code'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                      activeTabForEndpoint === tab 
                        ? 'bg-green-400 text-black shadow-lg transform scale-105' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setActiveTabForEndpoint(endpoint.id, tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {activeTabForEndpoint === 'request' && (
                <div className="space-y-6">
                  {endpoint.required && endpoint.required.length > 0 && (
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
                        <Sparkles className="text-green-400" size={20} />
                        <span>Required Fields</span>
                        <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full border border-red-500/30">
                          Required
                        </span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {endpoint.required.map(field => (
                          <div key={field} className="p-4 bg-black/50 border-2 border-red-500/30 rounded-xl hover:border-red-500/50 transition-colors">
                            <code className="text-red-300 font-mono text-lg font-bold">{field}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-black/80 rounded-2xl p-6 relative border-2 border-white/10 hover:border-green-400/20 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80 font-bold">Request Body</span>
                      <button 
                        onClick={() => copyToClipboard(JSON.stringify(endpoint.requestBody || endpoint.queryParams, null, 2))}
                        className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-white/60 hover:text-green-400 border border-white/10 hover:border-green-400/30"
                      >
                        <Copy size={18} />
                      </button>
                    </div>
                    <pre className="text-sm text-green-400 overflow-x-auto font-mono">
                      <code>{JSON.stringify(endpoint.requestBody || endpoint.queryParams, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              )}

              {activeTabForEndpoint === 'response' && (
                <div className="bg-black/80 rounded-2xl p-6 relative border-2 border-white/10 hover:border-green-400/20 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80 font-bold">Response Body</span>
                    <button 
                      onClick={() => copyToClipboard(JSON.stringify(endpoint.response, null, 2))}
                      className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-white/60 hover:text-green-400 border border-white/10 hover:border-green-400/30"
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                  <pre className="text-sm text-green-400 overflow-x-auto font-mono">
                    <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                  </pre>
                </div>
              )}

              {activeTabForEndpoint === 'code' && (
                <div className="space-y-6">
                  <div className="bg-black/80 rounded-2xl p-6 border-2 border-white/10">
                    <h5 className="text-white font-bold mb-4 text-lg">cURL</h5>
                    <pre className="text-sm text-green-400 overflow-x-auto font-mono">
                      <code>{`curl -X ${endpoint.method} "https://api.onmeta.in${endpoint.path}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  ${endpoint.requestBody ? `-d '${JSON.stringify(endpoint.requestBody, null, 2)}'` : ''}`}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndpointCard;