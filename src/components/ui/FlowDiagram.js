const FlowDiagram = ({ steps, activeStage }) => (
  <div className="relative overflow-hidden rounded-3xl bg-light-surface dark:bg-primary-surface border border-light-brdr dark:border-primary-brdr p-12 shadow-2xl">
    <div
      className="absolute inset-0 opacity-20 transition-all duration-1000"
    />

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index === activeStage;
        const isPast = index < activeStage;

        return (
          <div
            key={step.id}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-700 transform hover:scale-105 ${
              isActive
                ? "border-light-accent dark:border-primary-accent scale-110 shadow-2xl bg-light-accent/10 dark:bg-primary-accent/10"
                : isPast
                ? "border-light-brdr dark:border-primary-brdr bg-light-accent/5 dark:bg-primary-accent/5 shadow-lg"
                : "border-light-brdr dark:border-primary-brdr bg-light-surface dark:bg-primary-surface"
            }`}
          >
            {isActive && (
              <div className="absolute inset-0 rounded-2xl animate-pulse opacity-50 bg-light-accent/10 dark:bg-primary-accent/10 shadow-lg shadow-light-accent/30 dark:shadow-primary-accent/30" />
            )}

            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 relative z-10 ${
                isActive
                  ? "bg-light-accent dark:bg-primary-accent text-white shadow-lg shadow-light-accent/40 dark:shadow-primary-accent/40"
                  : isPast
                  ? "bg-light-accent/20 dark:bg-primary-accent/20 text-light-accent dark:text-primary-accent"
                  : "bg-light-bg dark:bg-primary-bg text-light-textSec dark:text-primary-textSec border border-light-brdr dark:border-primary-brdr"
              }`}
            >
              <Icon size={28} className={isActive ? "animate-bounce" : ""} />
            </div>

            <h4
              className={`font-bold mb-3 text-lg transition-colors duration-300 ${
                isActive
                  ? "text-light-accent dark:text-primary-accent"
                  : isPast
                  ? "text-light-text dark:text-primary-text"
                  : "text-light-textSec dark:text-primary-textSec"
              }`}
            >
              {step.title}
            </h4>
            <p
              className={`text-sm transition-colors duration-300 ${
                isActive
                  ? "text-light-text dark:text-primary-text"
                  : isPast
                  ? "text-light-textSec dark:text-primary-textSec"
                  : "text-light-textSec dark:text-primary-textSec opacity-75"
              }`}
            >
              {step.desc}
            </p>

            {index < steps.length - 1 && (
              <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-light-brdr dark:bg-primary-brdr transform -translate-y-1/2 z-20">
                <div
                  className={`h-full transition-all duration-700 ${
                    isPast 
                      ? "bg-light-accent dark:bg-primary-accent shadow-sm shadow-light-accent/50 dark:shadow-primary-accent/50" 
                      : "bg-light-brdr dark:bg-primary-brdr"
                  }`}
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