/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#22c55e',
        'border-color': '#e5e7eb',
        'primary-color': '#3b82f6',
        'danger-color': '#ef4444',
      },
      boxShadow: {
        'filters-shadow': '0px 0px 20px -4px rgb(34 197 94)'
      }
    },
  },
  plugins: [],
}

