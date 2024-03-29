import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      screens:{
        '3xl':'1680px',

        'sm': '100px',
        'md': '700px',
        'lg': '1040px'
      
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'pt-sans': ['PT Sans', 'sans-serif']
        
      },
      fontSize: {
        'large': '1rem',
        'x-large': '1.25rem',
        'small':  '0.5rem'
      },

    },
  },
  plugins: [],
};
export default config;
