/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: [
      "../src/components/**/*.{js,jsx,ts,tsx}", 
      "../index.html",
      "../src/stories/*{tsx, ts, mdx}"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
