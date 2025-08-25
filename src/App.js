import { useState, useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/common/Navigation';
import Sidebar from './components/common/Sidebar';
import Home from './components/sections/Home';
import APIFlows from './components/sections/UserFlow';
import OnRamp from './components/sections/OnRamp';
import OffRamp from './components/sections/OffRamp';
import Webhooks from './components/sections/Webhooks';
import { sections } from './data/sections';
import Prerequesite from './components/sections/Prerequesite';
import Intro from './components/sections/Intro';
import Kyc from './components/sections/Kyc';

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEndpoints, setExpandedEndpoints] = useState({});
  const [activeTab, setActiveTab] = useState({});
  
  const containerRef = useRef(null);

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
        case 'kyc':
          return <Kyc {...commonProps}/>
      case 'webhooks':
        return <Webhooks {...commonProps} />;
      default:
        return <Home {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-primary-bg overflow-x-hidden">
      <Navigation
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex pt-20 bg-light-bg dark:bg-primary-bg">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className={`flex-1 ml-80 transition-all duration-300 bg-light-bg dark:bg-primary-bg`}>
          <div className="max-w-6xl mx-auto p-8 bg-light-bg dark:bg-primary-bg" ref={containerRef}>
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;