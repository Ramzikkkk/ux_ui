export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'slate-white': '#f8fafc',
        'slate-dark': '#1e293b',
        accent: '#f59e0b',
        'soft-red': '#ef4444',
      },
      borderRadius: {
        'ui': '12px',
        'card': '16px',
      }
    },
  },
  plugins: [],
}