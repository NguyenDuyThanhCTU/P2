/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        p: "375px",
        d: "1024px",
      },

      backgroundImage: {},
      backgroundColor: {},

      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        redPrimmary: "#ed1b2e",
        Blue3D: "#1D1D3D",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        blueAdmin: "#74affc",
        purpleAdmin: "#bb86fc37",
        purpleHover: "#BB86FC",
        BlueFF: "#1A49FF",
        grayBg: "#dbe3e9",
      },
      fontSize: {
        content: "48px",
        normal: "18px",
      },
    },
  },

  plugins: [],
};
