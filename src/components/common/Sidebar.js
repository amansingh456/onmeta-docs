
const Sidebar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <div className={`fixed left-0 h-[calc(100vh-5rem)] w-80 transform transition-transform duration-300 z-40 ${
      true ? 'translate-x-0' : '-translate-x-full'
    } bg-black border-r-2 border-white/15 fixed`}>
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce opacity-20"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: Math.random() > 0.5 ? '#00ff88' : '#ffffff',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="p-8 relative z-10">  
        <nav className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-500 flex items-center space-x-4 relative overflow-hidden group ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-green-400/20 to-white/10 text-white shadow-2xl transform scale-105 border-2 border-green-400/50'
                  : 'text-white/60 hover:text-white hover:bg-white/10 border border-white/10 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-400/10'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Active indicator */}
              {activeSection === section.id && (
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-white animate-pulse"></div>
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-green-400/30 to-transparent"></div>
              
              <section.icon size={18} className={`transition-all duration-300 ${
                activeSection === section.id ? 'text-green-400 animate-pulse' : 'group-hover:text-green-400'
              }`} />
              <span className="relative z-10">{section.title}</span>
              
              {/* Ripple effect */}
              {activeSection === section.id && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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