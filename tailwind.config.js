// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('./src/assets/Images/Rectangle 1.png')",
      },
    }
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui')],
};



