module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#222222',
      'button-black': '#222529',
      'button-border-black': '#343b44',
      'pink': '#d16cfc',
      'button-pink': 'rgba(177, 130, 251, 0.54)',
      'button-border-pink': 'rgba(177, 130, 251, 0.54)',
      'white': '#ffffff',
      'dark-1': '#222529',
      'dark-2': '#282c32',
      'dark-3': '#1c1e20',
      'dark-4': '#202328',
      'mid-grey-1': '#1c1e20',
      'mid-grey-2': '#5c6a7e',
      'mid-grey-3': '#24282d',
      'mid-grey-4': '#515F73',
      'light-grey-1': '#7f97a1',
      'purple-primary': '#b182fb',
      'purple-secondary': '#d16cfc',
      'pink': '#f952fe',
      'input-text-light': '#72849f',
      'input-border': '#2d333d',
      'panel-background-color': '#21252b',
      'button-group-border-grey': 'rgba(64, 72, 85, 0.75)',
      'textual-traits-background-color': 'rgba(177, 130, 251, 0.2)',
      'card-border-grey': 'rgba(92, 106, 126, 0.5)',
      'card-background-grey': 'rgba(92, 106, 126, 0.5)',
      'nft-input-bg': 'rgba(40, 44, 50, 0.3)',
      'search-bg': 'rgba(0, 0, 0, 0.3)'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
      'background-gradient': 'rgb(118, 208, 248)',
      'background-gradient-primary':
        "linear-gradient(to right , rgba(118, 208, 248, 1) 0%, rgba(152, 146, 250, 1) 24%, rgba(177, 130, 251, 1) 51%, rgba(209, 108, 252, 1) 75%, rgba(249, 82, 254, 1) 100%)",
      
      'background-gradient-secondary': `linear-gradient(
        to right,
        rgba(118, 208, 248, 1) 0%,
        rgba(152, 146, 250, 1) 24%,
        rgba(177, 130, 251, 1) 51%,
        rgba(209, 108, 252, 1) 75%,
        rgba(249, 82, 254, 1) 100%
    )`
      },
      backgroundImage: {
        'background-gradient-primary':
        "linear-gradient(to right , rgba(118, 208, 248, 1) 0%, rgba(152, 146, 250, 1) 24%, rgba(177, 130, 251, 1) 51%, rgba(209, 108, 252, 1) 75%, rgba(249, 82, 254, 1) 100%)",
        'background-gradient-secondary': `linear-gradient(
          to right,
          rgba(118, 208, 248, 1) 0%,
          rgba(152, 146, 250, 1) 24%,
          rgba(177, 130, 251, 1) 51%,
          rgba(209, 108, 252, 1) 75%,
          rgba(249, 82, 254, 1) 100%
      )`,
      'background-gradient-btn': `linear-gradient(97.83deg, #7517F8 9.62%, #E423FF 114.65%)`
      }
    },
  },
  plugins: [],
}