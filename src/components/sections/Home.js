import { useState, useEffect } from 'react';
import { Zap, Code,} from 'lucide-react';
import { useFloatingElements } from '../hooks/useFloatingElements';

const Introduction = ({ setActiveSection }) => {
  const [heroAnimation, setHeroAnimation] = useState(0);
  const [statsAnimation, setStatsAnimation] = useState(false);
  const { floatingElements } = useFloatingElements();

  // Hero animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroAnimation(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats animation trigger
  useEffect(() => {
    setTimeout(() => setStatsAnimation(true), 1000);
  }, []);

  return (
    <div className="space-y-16 relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map(element => (
          <div
            key={element.id}
            className="absolute rounded-full animate-bounce opacity-30"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              backgroundColor: element.color,
              animationDelay: `${element.id * 0.2}s`,
              animationDuration: `${element.speed}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section with Dynamic Animations */}
      <div className="text-center relative z-10">
        <div className="mb-2 relative inline-block">
          {/* Animated rings around the title */}
          <div className="absolute -inset-10 rounded-full border-2 border-green-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute -inset-14 rounded-full border-2 border-white/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute -inset-12 rounded-full border border-green-400/30 animate-pulse"></div>
          
          <h1 className={`text-2xl font-black transition-all duration-1000 relative z-10 ${
            heroAnimation === 0 ? 'text-white' :
            heroAnimation === 1 ? 'text-transparent bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text' :
            heroAnimation === 2 ? 'text-white drop-shadow-[0_0_30px_rgba(0,255,136,0.5)]' :
            'text-transparent bg-gradient-to-r from-white via-green-400 to-white bg-clip-text'
          }`}>
            ONMETA
          </h1>
        </div>
        
        <div className="relative mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-white mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Animated subtitle */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <p className="text-2xl text-white/70 font-medium leading-relaxed">
            The most <span className="text-green-400 font-bold animate-pulse">powerful</span> fiat-to-crypto / crypto-to-fiat infrastructure for 
            <span className="text-white font-bold"> DeFi</span>, 
            <span className="text-green-400 font-bold"> Web3 Gaming</span>, and 
            <span className="text-white font-bold"> NFT marketplaces</span>. 
            Seamless on/off-ramp solutions with 
            <span className="text-green-400 font-bold animate-pulse"> enterprise-grade security</span>.
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
          <div className="absolute -right-8 top-0 w-1 h-full bg-gradient-to-b from-transparent to-green-400 animate-pulse"></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-6 mb-16">
          <button className="px-8 py-4 bg-transparent text-white rounded-2xl font-bold text-lg border-2 border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 hover:bg-white/5" onClick={()=>setActiveSection("intro")}>
            <span className="flex items-center space-x-2">
              <Code size={20} />
              <span>Intro</span>
            </span>
          </button>


          <button className="group px-8 py-4 bg-green-400 text-black rounded-2xl font-bold text-lg hover:bg-green-300 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/30 transform hover:scale-105 relative overflow-hidden" onClick={()=>setActiveSection("pre")}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center space-x-2">
              <Zap size={20} />
              <span>Get Started</span>
            </span>
          </button>
          
        </div>
      </div>

      {/* Stats Section with Counting Animation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {[
          { label: 'API Calls/Day', value: '50K+', color: '#00ff88' },
          { label: 'Uptime', value: '99.9%', color: '#ffffff' },
          { label: 'Countries', value: '3+', color: '#00ff88' },
          { label: 'Integrations', value: '60+', color: '#ffffff' }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className={`text-center p-6 rounded-2xl border-2 border-white/10 bg-black/50 hover:border-green-400/30 transition-all duration-700 hover:shadow-lg hover:shadow-green-400/10 transform hover:scale-105 ${
              statsAnimation ? 'animate-bounce' : ''
            }`}
            style={{ 
              animationDelay: `${index * 0.2}s`,
              animationDuration: '1s',
              animationFillMode: 'both'
            }}
          >
            <div 
              className="text-4xl font-black mb-2 transition-all duration-1000"
              style={{ color: stat.color }}
            >
              {statsAnimation ? stat.value : '0'}
            </div>
            <div className="text-white/60 text-sm font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
