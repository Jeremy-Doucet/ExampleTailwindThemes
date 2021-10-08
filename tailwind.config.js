module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "large-h1": "var(--large-h1)",
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        p1: "var(--p1)",
        p2: "var(--p2)",
        p3: "var(--p3)",
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-light": "var(--color-secondary-light)",
      },
      borderColor: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-light": "var(--color-secondary-light)",
        gray: "var(--border-gray)",
      },
      textColor: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-light": "var(--color-secondary-light)",
      },
    },
  },
  variants: {},
  plugins: [],
};
