/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        innovation: "url('/assets/Innovation.jpg')",
        security: "url('/assets/Team_1.jpg')",
        tech: "url('/assets/Introbg.jpg')",
        trial: "url('/assets/Virtual.jpeg')",
        abbg: "url('/assets/ServiceBg.jpg')",
      },
      animation: {
        bounce: "bounce 5s infinite",
      },
      spacing: {
        5: "1.25rem",
        10: "2.5rem",
        20: "5rem",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(-8px)", // Small bounce up
          },
          "50%": {
            transform: "translateY(0)", // Return to original position
          },
          "75%": {
            transform: "translateY(-8px)", // Small bounce up again
          },
        },
      },
    },
  },
  plugins: [],
};