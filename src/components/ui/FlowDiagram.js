import React from 'react';

const FlowDiagram = ({ steps, activeStage, glowEffect }) => (
  <div className="relative overflow-hidden rounded-3xl bg-black border-2 border-white/10 p-12 shadow-2xl">
    <div 
      className="absolute inset-0 opacity-20 transition-all duration-1000"
      style={{
        background: `radial-gradient(circle at ${glowEffect.x}% ${glowEffect.y}%, #00ff88 0%, transparent 70%)`
      }}
    />
    
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>

    <h3 className="text-4xl font-bold mb-12 text-center text-white relative z-10">
      <span className="inline-block animate-pulse">⚡</span>
      <span className="mx-4 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
        OnRamp API Flow
      </span>
      <span className="inline-block animate-pulse">⚡</span>
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === activeStage;
        const isPast = index < activeStage;
        const isNext = index === (activeStage + 1) % steps.length;
        
        return (
          <div
            key={step.id}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-700 transform hover:scale-105 ${
              isActive 
                ? 'border-white bg-black/80 scale-110 shadow-2xl' 
                : isPast
                ? 'border-white/30 bg-black/40 shadow-lg'
                : isNext
                ? 'border-white/20 bg-black/20 shadow-md'
                : 'border-white/10 bg-black/10'
            }`}
            style={{
              boxShadow: isActive 
                ? `0 0 40px ${step.color}40, inset 0 0 20px ${step.color}20` 
                : isPast 
                ? `0 0 20px ${step.color}20` 
                : 'none'
            }}
          >
            {isActive && (
              <div 
                className="absolute inset-0 rounded-2xl animate-pulse opacity-50"
                style={{
                  boxShadow: `inset 0 0 20px ${step.color}, 0 0 20px ${step.color}`
                }}
              />
            )}
            
            <div 
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 relative z-10 ${
                isActive 
                  ? 'bg-white text-black animate-pulse' 
                  : isPast 
                  ? 'bg-white/80 text-black' 
                  : 'bg-white/20 text-white/60'
              }`}
              style={{
                boxShadow: isActive ? `0 0 30px ${step.color}` : 'none'
              }}
            >
              <Icon size={28} className={isActive ? 'animate-bounce' : ''} />
            </div>
            
            <h4 className={`font-bold mb-3 text-lg transition-colors duration-300 ${
              isActive ? 'text-white' : isPast ? 'text-white/80' : 'text-white/50'
            }`}>
              {step.title}
            </h4>
            <p className={`text-sm transition-colors duration-300 ${
              isActive ? 'text-white/90' : isPast ? 'text-white/60' : 'text-white/40'
            }`}>
              {step.desc}
            </p>
            
            {index < steps.length - 1 && (
              <div className="absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2 z-20">
                <div 
                  className={`h-full transition-all duration-700 ${
                    isPast ? 'bg-white' : 'bg-white/20'
                  }`}
                  style={{
                    boxShadow: isPast ? `0 0 10px ${step.color}` : 'none'
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default FlowDiagram;