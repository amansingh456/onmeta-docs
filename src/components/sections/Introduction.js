import React, { useState, useEffect } from 'react';
import { Zap, Code, Coins, CreditCard, Shield, Sparkles } from 'lucide-react';
import { useFloatingElements } from '../hooks/useFloatingElements';

const Introduction = ({ glowEffect }) => {
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
        <div className="mb-8 relative inline-block">
          {/* Animated rings around the title */}
          <div className="absolute -inset-20 rounded-full border-2 border-green-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute -inset-16 rounded-full border-2 border-white/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute -inset-12 rounded-full border border-green-400/30 animate-pulse"></div>
          
          <h1 className={`text-8xl font-black transition-all duration-1000 relative z-10 ${
            heroAnimation === 0 ? 'text-white' :
            heroAnimation === 1 ? 'text-transparent bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text' :
            heroAnimation === 2 ? 'text-white drop-shadow-[0_0_30px_rgba(0,255,136,0.5)]' :
            'text-transparent bg-gradient-to-r from-white via-green-400 to-white bg-clip-text'
          }`}>
            OnMeta API
          </h1>
        </div>
        
        <div className="relative mb-12">
          <h2 className="text-4xl font-bold mb-6 text-white/90">
            Documentation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-white mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Animated subtitle */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <p className="text-2xl text-white/70 font-medium leading-relaxed">
            The most <span className="text-green-400 font-bold animate-pulse">powerful</span> fiat-to-crypto infrastructure for 
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
          <button className="group px-8 py-4 bg-green-400 text-black rounded-2xl font-bold text-lg hover:bg-green-300 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/30 transform hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center space-x-2">
              <Zap size={20} />
              <span>Get Started</span>
            </span>
          </button>
          
          <button className="px-8 py-4 bg-transparent text-white rounded-2xl font-bold text-lg border-2 border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 transform hover:scale-105 hover:bg-white/5">
            <span className="flex items-center space-x-2">
              <Code size={20} />
              <span>View API</span>
            </span>
          </button>
        </div>
      </div>

      {/* Stats Section with Counting Animation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {[
          { label: 'API Calls/Day', value: '1M+', color: '#00ff88' },
          { label: 'Uptime', value: '99.9%', color: '#ffffff' },
          { label: 'Countries', value: '50+', color: '#00ff88' },
          { label: 'Integrations', value: '1000+', color: '#ffffff' }
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

      {/* Feature Cards with Enhanced Animations */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { 
            title: 'OnRamp', 
            desc: 'Convert fiat currency to crypto tokens with instant processing and competitive rates.', 
            icon: Coins, 
            color: '#00ff88',
            delay: '0s'
          },
          { 
            title: 'OffRamp', 
            desc: 'Exchange crypto tokens back to fiat with multiple withdrawal options.', 
            icon: CreditCard, 
            color: '#ffffff',
            delay: '0.2s'
          },
          { 
            title: 'KYC & Security', 
            desc: 'Built-in KYC verification and enterprise-grade security protocols.', 
            icon: Shield, 
            color: '#00ff88',
            delay: '0.4s'
          }
        ].map((feature) => (
          <div 
            key={feature.title}
            className="group p-8 bg-black rounded-3xl border-2 border-white/10 hover:border-green-400/30 transition-all duration-700 hover:shadow-2xl transform hover:scale-105 hover:rotate-1 relative overflow-hidden"
            style={{ 
              animationDelay: feature.delay,
              boxShadow: `0 0 0 rgba(0,255,136,0)`,
              transition: 'all 0.7s ease, box-shadow 0.7s ease'
            }}
          >
            {/* Animated background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${feature.color} 0%, transparent 70%)`
              }}
            />
            
            {/* Floating icon */}
            <div className="relative mb-6">
              <feature.icon 
                className="w-16 h-16 text-white group-hover:text-green-400 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 relative z-10" 
              />
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-500 relative z-10">
              {feature.title}
            </h3>
            <p className="text-white/70 group-hover:text-white/90 transition-colors duration-500 text-lg relative z-10 leading-relaxed">
              {feature.desc}
            </p>
            
            {/* Corner decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-400/0 group-hover:border-green-400/50 transition-colors duration-500"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-green-400/0 group-hover:border-green-400/50 transition-colors duration-500"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Network Support Section */}
      <div className="bg-black rounded-3xl p-12 border-2 border-white/10 hover:border-green-400/20 transition-all duration-700 relative overflow-hidden group">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-8 text-white text-center">
            <span className="inline-block animate-pulse">🌐</span>
            <span className="mx-4">Supported Networks & Currencies</span>
            <span className="inline-block animate-pulse">🌐</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-400 flex items-center space-x-3">
                <Sparkles className="animate-pulse" size={20} />
                <span>Fiat Currencies</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {['INR', 'PHP', 'USD'].map((currency, index) => (
                  <span 
                    key={currency} 
                    className="px-6 py-3 bg-white/10 text-white rounded-2xl text-lg font-bold border border-white/20 hover:border-green-400/50 hover:bg-green-400/10 hover:text-green-400 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/20 transform hover:scale-110 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.1 + 0.3}s`
                    }}
                  >
                    {""} 
                 
                  </span>
                     //TODO : check this glowEffect before it was network
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
