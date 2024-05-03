/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.6)),url('/bg.jpg')",
        about:
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/about.jpg')",
        why: "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/bg2.jpg')",
        mission:
          "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('/bg3.png')",
        aboutus:
          "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('/team.jpg')",
        city: "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/city.jpg')",
        full: "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/full.jpg')",
        service:
          "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/service.jpg')",
        servicePage:
          "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/services.jpg')",
        tropical:
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/tropical.jpg')",
        asia: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/asia.jpg')",
        amazon:
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/amazon.jpeg')",
        african:
          "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('/african.jpg')",
        europe:
          "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('/europe.jpg')",
      },
    },
  },
  plugins: [],
};
