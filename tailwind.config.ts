import type {Config} from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/*.html'],
  theme: {
    colors: {
      mainColorTheme: 'rgba(242, 236, 228, 1)',
    },
    extend: {},
    fontFamily: {
      display: ['greycliff-cf, sans-serif'],
    },
  },
  plugins: [daisyui],
} satisfies Config;
