/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        retro_red: '#F51720',
        dark_mode: '#3d3d3d',
        retro_yellow: '#F8D210',
        retro_pink: '#FA26A0',
        retro_cyan: '#2FF3E0',
        white: '#EAEFF2',
      }
    },
  },
  plugins: [
    
  ],
});

