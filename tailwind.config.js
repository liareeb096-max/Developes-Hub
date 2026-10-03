/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#080b12', panel: '#0f1420', accent: '#7c3aed', cyan: '#22d3ee' },
      boxShadow: { glow: '0 0 45px rgba(124,58,237,.18)' },
    },
  },
  plugins: [],
}
