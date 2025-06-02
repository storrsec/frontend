/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cyber-hero': "url('/images/cyber-bg.jpg')", // <-- Update path to match your actual image location
      },
    },
  },
  plugins: [],
};
