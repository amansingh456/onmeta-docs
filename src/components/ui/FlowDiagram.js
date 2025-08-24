const FlowDiagram = ({ steps, activeStage, glowEffect }) => (
  <div className="relative overflow-hidden rounded-3xl bg-primary-bg border-2 border-border-secondary p-12 shadow-2xl">
    <div 
      className="absolute inset-0 opacity-20 transition-all duration-1000"
      style={{
        background: `radial-gradient(circle at ${glowEffect.x}% ${glowEffect.y}%, var(--color-primary-accent) 0%, transparent 70%)`
      }}
    />
   
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
                ? 'border-primary-text bg-bg-glass scale-110 shadow-2xl' 
                : isPast
                ? 'border-border-primary bg-bg-secondary shadow-lg'
                : isNext
                ? 'border-border-accent-subtle bg-bg-secondary/40 shadow-md'
                : 'border-border-secondary bg-bg-surface'
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
                  ? 'bg-primary-text text-black animate-pulse' 
                  : isPast 
                  ? 'bg-primary-muted text-black' 
                  : 'bg-primary-faint text-primary-subtle'
              }`}
              style={{
                boxShadow: isActive ? `0 0 30px ${step.color}` : 'none'
              }}
            >
              <Icon size={28} className={isActive ? 'animate-bounce' : ''} />
            </div>
            
            <h4 className={`font-bold mb-3 text-lg transition-colors duration-300 ${
              isActive ? 'text-primary-text' : isPast ? 'text-primary-muted' : 'text-primary-faint'
            }`}>
              {step.title}
            </h4>
            <p className={`text-sm transition-colors duration-300 ${
              isActive ? 'text-primary-muted' : isPast ? 'text-primary-subtle' : 'text-primary-faint'
            }`}>
              {step.desc}
            </p>
            
            {index < steps.length - 1 && (
              <div className="absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2 z-20">
                <div 
                  className={`h-full transition-all duration-700 ${
                    isPast ? 'bg-primary-text' : 'bg-border-accent-subtle'
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