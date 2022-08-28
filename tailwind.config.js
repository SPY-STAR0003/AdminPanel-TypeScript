/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        heart : {
          "0%" : {
            boxShadow : "0 0 2px #67e8f9",
            transform : "scale(1.01)"
            
          },
          "50%" : {
            boxShadow : "0 0 20px 0 #06b6d4",
            transform : "scale(1.1)",
            borderColor : "#06b6d4"
          },
          "100%" : {
            boxShadow: "0 0 2px #67e8f9",
            transform : "scale(1.01)"
          }
        }
      },
      animation: {
        "heart" : "3s cubic-bezier(0.4, 0, 1, 1) infinite heart"
        // animation: 3s ease-in 1s 2 reverse both paused slidein;

      }
    },
  },
  plugins: [],
}