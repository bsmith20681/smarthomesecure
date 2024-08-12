/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-block": "url('/images/eqiup-slide-shape-dark-blue.png')",
        "testimonial-comment": "url('/images/testimonial-comment.png')",
        "testimonial-comment-plain": "url('/images/testimonial-comment-plain.png')",
      },
      fontFamily: {
        sans: ["var(--font-cabin)"],
      },
      colors: {
        "adt-orange": {
          400: "#ED6637",
          DEFAULT: "#E64B15",
          600: "#B33A10",
          700: "#7F290C",
        },
        "adt-blue": {
          light: "#ECF7FF",
          DEFAULT: "#0061aa",
          dark: "#00233D",
        },
      },
    },
  },
  plugins: [],
};
