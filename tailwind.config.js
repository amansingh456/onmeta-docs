module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary theme colors - Dark Theme
        primary: {
          bg: '#000000',        // Main background
          surface: '#000000',   // Surface/card backgrounds
          accent: '#00ff88',    // Primary accent (green)
          text: '#ffffff',      // Primary text
          muted: 'rgba(255, 255, 255, 0.7)',  // Muted text
          subtle: 'rgba(255, 255, 255, 0.6)',  // Subtle text
          faint: 'rgba(255, 255, 255, 0.4)',   // Faint text/placeholder
        },

        // Light theme colors
        light: {
          bg: '#ffffff',        // Main background
          surface: '#fafafa',   // Surface/card backgrounds
          'surface-secondary': '#f1f5f9',  // Secondary surfaces
          accent: '#10b981',    // Primary accent (emerald green)
          text: '#0f172a',      // Primary text (dark slate)
          muted: 'rgba(15, 23, 42, 0.7)',  // Muted text
          subtle: 'rgba(15, 23, 42, 0.6)',  // Subtle text
          faint: 'rgba(15, 23, 42, 0.4)',   // Faint text/placeholder
        },
        
        // Border colors - Dark Theme
        border: {
          primary: 'rgba(255, 255, 255, 0.15)',    // Main borders
          secondary: 'rgba(255, 255, 255, 0.10)',  // Secondary borders
          accent: 'rgba(0, 255, 136, 0.50)',       // Accent borders
          'accent-light': 'rgba(0, 255, 136, 0.30)', // Light accent borders
          'accent-subtle': 'rgba(0, 255, 136, 0.20)', // Subtle accent borders
        },

        // Light theme borders
        'border-light': {
          primary: 'rgba(15, 23, 42, 0.15)',     // Main borders
          secondary: 'rgba(15, 23, 42, 0.10)',   // Secondary borders
          accent: 'rgba(16, 185, 129, 0.50)',    // Accent borders
          'accent-light': 'rgba(16, 185, 129, 0.30)', // Light accent borders
          'accent-subtle': 'rgba(16, 185, 129, 0.20)', // Subtle accent borders
        },
        
        // Background variations - Dark Theme
        bg: {
          primary: '#000000',                    // Main background
          secondary: 'rgba(0, 0, 0, 0.50)',     // Semi-transparent backgrounds
          surface: 'rgba(255, 255, 255, 0.05)', // Light surface overlay
          hover: 'rgba(255, 255, 255, 0.10)',   // Hover backgrounds
          glass: 'rgba(0, 0, 0, 0.95)',         // Glass effect backgrounds
        },

        // Light theme backgrounds
        'bg-light': {
          primary: '#ffffff',                    // Main background
          secondary: 'rgba(15, 23, 42, 0.03)',  // Semi-transparent backgrounds
          surface: 'rgba(15, 23, 42, 0.03)',    // Light surface overlay
          hover: 'rgba(15, 23, 42, 0.05)',      // Hover backgrounds
          glass: 'rgba(255, 255, 255, 0.95)',   // Glass effect backgrounds
        },
        
        // Shadow colors - Dark Theme
        shadow: {
          primary: 'rgba(255, 255, 255, 0.10)',     // White shadows
          accent: 'rgba(0, 255, 136, 0.30)',        // Accent shadows
          'accent-light': 'rgba(0, 255, 136, 0.10)', // Light accent shadows
          glow: 'rgba(0, 255, 136, 0.50)',          // Glow effects
        },

        // Light theme shadows
        'shadow-light': {
          primary: 'rgba(15, 23, 42, 0.15)',     // Dark shadows
          accent: 'rgba(16, 185, 129, 0.30)',    // Accent shadows
          'accent-light': 'rgba(16, 185, 129, 0.20)', // Light accent shadows
          glow: 'rgba(16, 185, 129, 0.40)',      // Glow effects
        },
        
        // Gradient stops - Dark Theme
        gradient: {
          start: 'transparent',
          middle: 'rgba(255, 255, 255, 0.20)',
          end: 'transparent',
          'accent-start': '#00ff88',
          'accent-middle': '#ffffff',
          'accent-end': '#00ff88',
        },

        // Light theme gradients
        'gradient-light': {
          start: 'transparent',
          middle: 'rgba(15, 23, 42, 0.20)',
          end: 'transparent',
          'accent-start': '#10b981',
          'accent-middle': '#0f172a',
          'accent-end': '#10b981',
        },
        
        // Component specific - Dark Theme
        scrollbar: {
          track: 'rgba(255, 255, 255, 0.1)',
          thumb: 'rgba(0, 255, 136, 0.3)',
          'thumb-hover': 'rgba(0, 255, 136, 0.5)',
        },

        // Light theme scrollbar
        'scrollbar-light': {
          track: 'rgba(15, 23, 42, 0.1)',
          thumb: 'rgba(16, 185, 129, 0.3)',
          'thumb-hover': 'rgba(16, 185, 129, 0.5)',
        },
        
        yellow: {
          primary: '#facc15',
          muted: '#facc15',
          subtle: 'rgba(250, 204, 21, 0.30)',
          faint: 'rgba(250, 204, 21, 0.20)',
          comment: '#b45309',
        },

        // Floating elements - Dark Theme
        floating: {
          primary: '#00ff88',
          secondary: '#ffffff',
        },

        // Light theme floating elements
        'floating-light': {
          primary: '#10b981',
          secondary: '#0f172a',
        }
      },
      
      // Custom opacity values for consistency
      opacity: {
        '15': '0.15',
        '30': '0.30',
        '60': '0.60',
        '70': '0.70',
      },
      
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
      }
    },
  },
  plugins: [],
}