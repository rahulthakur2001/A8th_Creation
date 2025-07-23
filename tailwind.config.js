export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-red-500',
    'text-center',
    'p-4',
  ],
  theme: {
    extend: {
      width: {
        120: "30rem", // ≈ 480px
      },
      scale: {
        140: "1.4",
      },
      rotate: {
        5: "5deg",
        10: "10deg",
        "-10": "-10deg",
      },
    },
  },
  plugins: [],
}
