/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors using CSS variables
        'bg-primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'bg-tertiary': 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-tertiary': 'rgb(var(--color-text-tertiary) / <alpha-value>)',
        'border-primary': 'rgb(var(--color-border-primary) / <alpha-value>)',
        'border-secondary': 'rgb(var(--color-border-secondary) / <alpha-value>)',
        'accent-blue': 'rgb(var(--color-accent-blue) / <alpha-value>)',
        'accent-purple': 'rgb(var(--color-accent-purple) / <alpha-value>)',
      },
      boxShadow: {
        'theme': '0 4px 6px -1px rgb(var(--color-shadow) / var(--shadow-opacity)), 0 2px 4px -1px rgb(var(--color-shadow) / calc(var(--shadow-opacity) * 0.6))',
        'theme-lg': '0 10px 15px -3px rgb(var(--color-shadow) / var(--shadow-opacity)), 0 4px 6px -2px rgb(var(--color-shadow) / calc(var(--shadow-opacity) * 0.5))',
        'theme-xl': '0 20px 25px -5px rgb(var(--color-shadow) / var(--shadow-opacity)), 0 10px 10px -5px rgb(var(--color-shadow) / calc(var(--shadow-opacity) * 0.4))',
      }
    },
  },
  plugins: [],
};
