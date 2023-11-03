/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    screens:{
      mobile: '414px',
      tablet:'750px',
      desktop:'1400px',
    },
    extend: {},
  },
  plugins: [],
}