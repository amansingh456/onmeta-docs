// src/components/sections/APIFlows.js
import React from 'react';
import FlowDiagram from '../ui/FlowDiagram';
import { useAnimations } from '../hooks/useAnimations';
import { onRampSteps } from '../../data/constants';

const APIFlows = ({ glowEffect }) => {
  const { animationStage } = useAnimations();

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-6 text-white">
          API Flow Diagrams
        </h1>
        <p className="text-2xl text-white/70">
          Interactive visualizations of OnMeta API workflows
        </p>
      </div>
      
      <FlowDiagram steps={onRampSteps} activeStage={animationStage} glowEffect={glowEffect} />
      
      <div className="bg-black rounded-3xl p-12 border-2 border-white/10 hover:border-green-400/20 transition-colors">
        <h3 className="text-4xl font-black mb-8 text-center text-white">
          <span className="inline-block animate-pulse">🔄</span>
          <span className="mx-4">OffRamp API Flow</span>
          <span className="inline-block animate-pulse">🔄</span>
        </h3>
        <div className="text-center text-white/70 text-xl">
          <p>Similar flow for crypto-to-fiat conversion with enhanced security protocols</p>
        </div>
      </div>
    </div>
  );
};

export default APIFlows;