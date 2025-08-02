import React from 'react';
import EndpointCard from '../ui/EndpointCard';
import { apiEndpoints } from '../../data/apiEndpoints';

const OnRamp = ({ 
  expandedEndpoints, 
  activeTab, 
  toggleEndpoint, 
  setActiveTabForEndpoint, 
  copyToClipboard 
}) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-6 text-white">
          OnRamp API
        </h1>
        <p className="text-2xl text-white/70">
          Convert fiat currency to cryptocurrency tokens
        </p>
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