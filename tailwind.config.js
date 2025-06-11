/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ext-primary": "var(--ext-primary)",
        "ext-bg": "var(--ext-bg)",
        "ext-text": "var(--ext-text)",
        "ext-border": "var(--ext-border)",
        "ext-shadow": "var(--ext-shadow)",
        "ext-hover": "var(--ext-hover)",
      },
    },
  },
  plugins: [],
  // Ensure all styles are included
  safelist: [
    {
      pattern:
        /(bg|text|border|shadow|hover:bg)-ext-(primary|bg|text|border|shadow|hover)/,
    },
  ],
};
