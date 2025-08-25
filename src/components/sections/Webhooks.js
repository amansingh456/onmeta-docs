import { useState } from "react";
import { Code } from 'lucide-react';
import OnrampWeb from "../ui/OnrampWebhook";
import OfframpWeb from "../ui/OfframpWebhook";

const Webhooks = ({
  expandedEndpoints,
  activeTab,
  toggleEndpoint,
  setActiveTabForEndpoint,
  copyToClipboard,
}) => {
   const [activeFlow, setActiveFlow] = useState('onRamp');
  return (
    <div className="space-y-6">
      <div className="flex-1">
        <p className="text-2xl text-light-text dark:text-primary-text">
          Real-time notifications for transaction updates
        </p>
      </div>

      <div className="flex">
        <div className="relative bg-light-surface dark:bg-primary-surface backdrop-blur-sm rounded-2xl border border-light-brdr dark:border-primary-brdr shadow-lg">
          <div 
             className={`absolute top-1 bottom-1 text-light-bg dark:text-primary-bg bg-gradient-to-r from-light-accent to-light-accent dark:from-primary-accent dark:to-primary-accent rounded-xl shadow-lg transition-all duration-500 ease-out ${
              activeFlow === "onRamp" 
                ? "left-1 right-1/2" 
                : "left-1/2 right-1"
            }`}
          />
          
          {/* Button Options */}
          <div className="relative flex">
            <button
              onClick={() => setActiveFlow("onRamp")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 z-10 ${
                activeFlow === "onRamp"
                  ? "text-light-bg dark:text-primary-bg"
                  : " text-light-text dark:text-light-bg"
              }`}
            >
              <Code size={20} />
              <span>OnRamp</span>
            </button>
            
            <button
              onClick={() => setActiveFlow("offRamp")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 z-10 ${
                activeFlow === "offRamp"
                  ? "text-light-bg dark:text-primary-bg"
                  : " text-light-text dark:text-light-bg"
              }`}
            >
              <Code size={20} />
              <span>OffRamp</span>
            </button>
          </div>
        </div>
      </div>

     {activeFlow==="onRamp" &&  <OnrampWeb expandedEndpoints={expandedEndpoints} activeTab={activeTab} toggleEndpoint={toggleEndpoint} setActiveTabForEndpoint={setActiveTabForEndpoint} />}         
    {activeFlow==="offRamp" &&  <OfframpWeb expandedEndpoints={expandedEndpoints} activeTab={activeTab} toggleEndpoint={toggleEndpoint} setActiveTabForEndpoint={setActiveTabForEndpoint} />}         
    </div>
  );
};

export default Webhooks;