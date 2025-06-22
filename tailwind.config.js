// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
        robotoMono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
