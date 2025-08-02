// src/App.js
import React, { useState, useRef } from 'react';
import Navigation from './components/common/Navigation';
import Sidebar from './components/common/Sidebar';
import Introduction from './components/sections/Introduction';
import APIFlows from './components/sections/APIFlows';
import OnRamp from './components/sections/OnRamp';
import OffRamp from './components/sections/OffRamp';
import Webhooks from './components/sections/Webhooks';
import ErrorCodes from './components/sections/ErrorCodes';
import SDK from './components/sections/SDK';
import { useMouseTracking } from './components/hooks/useMouseTracking';
import { sections } from './data/sections';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
      copyToClipboard
    };

    switch (activeSection) {
      case 'introduction':
        return <Introduction {...commonProps} />;
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
      case 'sdk':
        return <SDK {...commonProps} />;
      default:
        return <Introduction {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex pt-20">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarOpen={sidebarOpen}
        />

        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
          <div className="max-w-6xl mx-auto p-8" ref={containerRef}>
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;