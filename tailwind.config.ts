import type { Config } from 'tailwindcss'

const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {},
    colors: {},
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config

export default config
