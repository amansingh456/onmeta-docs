import React from 'react';
import { Search, Menu, X, Cpu } from 'lucide-react';

const Navigation = ({
  sections,
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
  sidebarOpen,
  setSidebarOpen
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b-2 border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Cpu className="text-black" size={24} />
              </div>
              <span className="text-3xl font-black text-white">
                OnMeta API
              </span>
            </div>
            
            <div className="hidden md:flex space-x-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === section.id
                      ? 'bg-green-400 text-black shadow-lg transform scale-105'
                      : 'text-white/60 hover:text-green-400 hover:bg-green-400/10 border border-white/10 hover:border-green-400/30'
                  }`}
                >
                  <section.icon size={16} />
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
              <input
                type="text"
                placeholder="Search endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-2 border-white/10 focus:outline-none focus:border-green-400/50 transition-all bg-black/50 text-white placeholder-white/40 font-medium"
              />
            </div>
            
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-3 rounded-xl bg-black border-2 border-white/10 text-white hover:border-green-400/30 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;