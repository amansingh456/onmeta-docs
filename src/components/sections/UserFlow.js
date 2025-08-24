import { useState } from 'react';
import FlowDiagram from '../ui/FlowDiagram';
import { useAnimations } from '../hooks/useAnimations';
import { onRampSteps } from '../../data/constants';
import { Code } from 'lucide-react';
import { offRampSteps } from '../../data/constants';

const APIFlows = ({ glowEffect }) => {
  const { animationStage } = useAnimations();
  const [activeFlow, setActiveFlow] = useState('onRamp');

  return (
    <div className="space-y-8">  
      <div className="flex">
        <div className="relative bg-bg-secondary backdrop-blur-sm rounded-2xl border border-border-secondary">
          <div 
            className={`absolute top-1 bottom-1 bg-gradient-to-r from-primary-accent to-primary-accent rounded-xl shadow-lg transition-all duration-500 ease-out ${
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
                  ? "text-black"
                  : "text-primary-muted hover:text-primary-text"
              }`}
            >
              <Code size={20} />
              <span>OnRamp Flow</span>
            </button>
            
            <button
              onClick={() => setActiveFlow("offRamp")}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 z-10 ${
                activeFlow === "offRamp"
                  ? "text-black"
                  : "text-primary-muted hover:text-primary-text"
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
          glowEffect={glowEffect} 
        />
      )}
      
      {activeFlow === 'offRamp' && (
        <FlowDiagram 
          steps={offRampSteps} 
          activeStage={animationStage} 
          glowEffect={glowEffect} 
        />
      )}
    </div>
  );
};

export default APIFlows;