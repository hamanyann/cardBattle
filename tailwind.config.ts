import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--foreground))',
      },
    },
    fontFamily: {
      'noto-serif-jp': ['Noto Serif JP', 'sans-serif'],
    },
    animation: {
      shake: 'shake 0.5s ease-in-out infinite',
    },
    keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
        '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
