/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-light": ["Neue-Machina-light"],
        "neue-regular": ["Neue-Machina-regular"],
        "neue-bold": ["Neue-Machina-bold"],
      },
      width: {
        basisImg: "224px",
        lgImg: "100%"
      },
      gridTemplateColumns: {
        imgSlider: "0.328fr, 1fr",
        categoryLg: "repeat(auto-fit, minmax(300px, 1fr))",
        categoryDefault: "repeat(auto-fit, minmax(200px, 1fr))",
        filter: "repeat(auto-fit, minmax(200px, 1fr))",
        favourites: "repeat(auto-fit, minmax(200px, 300px))",
        favouritesMobile: "repeat(auto-fit, minmax(150px, 200px))",
        cartItems: "minmax(200px, 1fr)",
        cTaOffer: "repeat(auto-fill, minmax(250px, 300px))"
      },
    },
  },
  plugins: [],
};
