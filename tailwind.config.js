// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom gradient colors
        gradient: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          blue: '#3B82F6',
          indigo: '#6366F1',
          emerald: '#10B981',
          teal: '#14B8A6',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite',
        bounce: 'bounce 3s ease-in-out infinite',
        typewriter: 'typewriter 4s steps(40) infinite',
        spin: 'spin 1.5s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        'border-spin': 'border-spin 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'grid-dark': "radial-gradient(circle, rgba(55, 65, 81, 0.3) 1px, transparent 1px)",
        'grid-light': "radial-gradient(circle, rgba(209, 213, 219, 0.3) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '30px 30px',
        '200%': '200% 100%',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.5)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-emerald': '0 0 15px rgba(16, 185, 129, 0.5)',
        'inner-xl': 'inset 0 10px 15px -3px rgb(0 0 0 / 0.1)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'filter': 'filter, backdrop-filter',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(to right, var(--tw-gradient-stops))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.bg-grid': {
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        },
        '.animate-shimmer': {
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        },
        '.animate-typing-cursor': {
          borderRight: '2px solid',
          animation: 'pulse 1s infinite',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}