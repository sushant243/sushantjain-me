import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FCFCFC',
          beige: '#F5EFE7',
          'beige-dark': '#EDE4D8',
          coral: '#FF9B7D',
          'coral-dark': '#FF7A54',
          'text-primary': '#1A1A1A',
          'text-secondary': '#4A4A4A',
        },
      },
      fontSize: {
        '5.5xl': '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        hindi: ['Noto Serif Devanagari', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
        poem: {
          css: {
            lineHeight: '1.9',
            '& p': {
              marginBottom: '1.5em',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config