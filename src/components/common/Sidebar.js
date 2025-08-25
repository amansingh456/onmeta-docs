import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const Sidebar = ({ sections, activeSection, setActiveSection }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed left-0 h-[calc(100vh-5rem)] w-80 transform transition-transform duration-300 z-40 ${
        true ? "translate-x-0" : "-translate-x-full"
      } bg-light-bg dark:bg-primary-bg border-r-2 border-light-brdr dark:border-primary-brdr fixed`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-light-accent dark:via-primary-accent to-transparent animate-pulse"></div>
      </div>

      <div className="p-8 relative z-10 h-full flex flex-col">
        <nav className="space-y-3 flex-1">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-500 flex items-center space-x-4 relative overflow-hidden group ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-light-accent/40 to-white dark:from-primary-accent/40 dark:to-black text-slate-900 dark:text-white shadow-2xl transform scale-105 border-2 border-light-accent dark:border-primary-accent"
                  : "text-light-textSec dark:text-primary-textSec border border-light-brdr dark:border-primary-brdr hover:border-light-accent dark:hover:border-primary-accent hover:shadow-lg"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <section.icon
                size={18}
                className={`transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-light-accent dark:text-primary-accent animate-pulse"
                    : ""
                }`}
              />
              <span className="relative z-10">{section.title}</span>

              {/* Ripple effect */}
              {activeSection === section.id && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-light-accent dark:bg-primary-accent rounded-full animate-ping"></div>
                  <div className="absolute top-0 left-0 w-2 h-2 bg-light-accent dark:bg-primary-accent rounded-full animate-pulse"></div>
                </div>
              )}
            </button>
          ))}
        </nav>

       {/* Simple Theme Toggle */}
        <div className="mt-8 pt-4 border-t-2 border-light-accent dark:border-primary-accent">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-light-bg dark:bg-primary-bg border border-light-brdr dark:border-primary-brdr hover:border-light-accent dark:hover:border-primary-accent transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              {isDark ? (
                <Sun size={18} className="text-light-textSec dark:text-primary-textSec" />
              ) : (
                <Moon size={18} className="text-light-textSec dark:text-primary-textSec" />
              )}
              <span className="text-sm font-medium text-light-textSec dark:text-primary-textSec">
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
            
            {/* Simple Toggle Switch */}
            <div className="relative">
              <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${
                isDark ? 'bg-primary-accent' : 'bg-gray-300'
              }`}>
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                  isDark ? 'translate-x-5' : 'translate-x-0.5'
                }`}></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
