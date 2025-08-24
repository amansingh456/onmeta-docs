const Sidebar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <div className={`fixed left-0 h-[calc(100vh-5rem)] w-80 transform transition-transform duration-300 z-40 ${
      true ? 'translate-x-0' : '-translate-x-full'
    } bg-primary-bg border-r-2 border-border-primary fixed`}>
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary-accent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

    
      <div className="p-8 relative z-10">  
        <nav className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-500 flex items-center space-x-4 relative overflow-hidden group ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-border-accent-subtle to-border-secondary text-primary-text shadow-2xl transform scale-105 border-2 border-border-accent'
                  : 'text-primary-subtle hover:text-primary-text hover:bg-bg-hover border border-border-secondary hover:border-border-accent-light hover:shadow-lg hover:shadow-shadow-accent-light'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Active indicator */}
              {activeSection === section.id && (
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-accent to-primary-text animate-pulse"></div>
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-border-accent-light to-transparent"></div>
              
              <section.icon size={18} className={`transition-all duration-300 ${
                activeSection === section.id ? 'text-primary-accent animate-pulse' : 'group-hover:text-primary-accent'
              }`} />
              <span className="relative z-10">{section.title}</span>
              
              {/* Ripple effect */}
              {activeSection === section.id && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-primary-accent rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-primary-accent rounded-full animate-pulse"></div>
                </div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;