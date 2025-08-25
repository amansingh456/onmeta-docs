import { useState } from 'react';
import FlowDiagram from '../ui/FlowDiagram';
import { useAnimations } from '../hooks/useAnimations';
import { onRampSteps } from '../../data/constants';
import { Code } from 'lucide-react';
import { offRampSteps } from '../../data/constants';

const APIFlows = () => {
  const { animationStage } = useAnimations();
  const [activeFlow, setActiveFlow] = useState('onRamp');

  return (
    <div className="space-y-8 bg-light-bg dark:bg-primary-bg">  
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
              <span>OnRamp Flow</span>
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
              <span>OffRamp Flow</span>
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Flow Diagrams */}
      {activeFlow === 'onRamp' && (
        <FlowDiagram 
          steps={onRampSteps} 
          activeStage={animationStage} 

        />
      )}
      
      {activeFlow === 'offRamp' && (
        <FlowDiagram 
          steps={offRampSteps} 
          activeStage={animationStage} 
        />
      )}
    </div>
  );
};

export default APIFlows; 