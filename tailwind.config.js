module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lgstrong: ["lgstrong"],
        strongg: ["strongg"],
        mediumm: ["mediumm"],
        normall: ["normall"],
        lightt: ["lightt"],
        elightt: ["elightt"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};
