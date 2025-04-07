/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'modal-fade-in': 'fade-in 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'modal-fade-out': 'fade-out 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['BF Konkret Grotesk Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};