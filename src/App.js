// src/App.js
import { useState, useRef } from 'react';
import Navigation from './components/common/Navigation';
import Sidebar from './components/common/Sidebar';
import Home from './components/sections/Home';
import APIFlows from './components/sections/UserFlow';
import OnRamp from './components/sections/OnRamp';
import OffRamp from './components/sections/OffRamp';
import Webhooks from './components/sections/Webhooks';
import ErrorCodes from './components/sections/ErrorCodes';
import { useMouseTracking } from './components/hooks/useMouseTracking';
import { sections } from './data/sections';
import Prerequesite from './components/sections/Prerequesite';
import Intro from './components/sections/Intro';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEndpoints, setExpandedEndpoints] = useState({});
  const [activeTab, setActiveTab] = useState({});
  
  const containerRef = useRef(null);
  const { mousePosition, glowEffect } = useMouseTracking(containerRef);

  const toggleEndpoint = (endpointId) => {
    setExpandedEndpoints(prev => ({
      ...prev,
      [endpointId]: !prev[endpointId]
    }));
  };

  const setActiveTabForEndpoint = (endpointId, tab) => {
    setActiveTab(prev => ({
      ...prev,
      [endpointId]: tab
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const renderActiveSection = () => {
    const commonProps = {
      glowEffect,
      expandedEndpoints,
      activeTab,
      toggleEndpoint,
      setActiveTabForEndpoint,
      copyToClipboard,
      setActiveSection
    };

    switch (activeSection) {
      case 'home':
        return <Home {...commonProps} />;
        case 'intro':
        return <Intro {...commonProps} />;
        case 'pre':
        return <Prerequesite {...commonProps} />;
      case 'flows':
        return <APIFlows {...commonProps} />;
      case 'onramp':
        return <OnRamp {...commonProps} />;
      case 'offramp':
        return <OffRamp {...commonProps} />;
      case 'webhooks':
        return <Webhooks {...commonProps} />;
      case 'errors':
        return <ErrorCodes {...commonProps} />;
      default:
        return <Home {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex pt-20">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className={`flex-1 ml-80 transition-all duration-300`}>
          <div className="max-w-6xl mx-auto p-8" ref={containerRef}>
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;