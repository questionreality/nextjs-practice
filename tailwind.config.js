module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5fafc",
          100: "#ecf4fa",
          200: "#cfe4f2",
          300: "#b2d3eb",
          400: "#78b3db",
          500: "#3e92cc",
          600: "#3883b8",
          700: "#2f6e99",
          800: "#25587a",
          900: "#1e4864",
        },
        secondary: {
          50: "#f5f8f8",
          100: "#ebf2f0",
          200: "#cddedb",
          300: "#afcbc5",
          400: "#74a399",
          500: "#387c6d",
          600: "#327062",
          700: "#2a5d52",
          800: "#224a41",
          900: "#1b3d35",
        },
      },
    },
  },
  variants: {
    extend: {
      // padding: ["first"],
      // borderWidth: ["last"],
    },
  },
  plugins: [],
};
