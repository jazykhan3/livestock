/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "collection-1-70-main-text-dark-light-mode": "var(--collection-1-70-main-text-dark-light-mode)",
        "collection-1-text": "var(--collection-1-text)",
      },
    },
  },
  plugins: [],
};
