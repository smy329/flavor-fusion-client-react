/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('src/assets/bg/loginPage.jpeg')",
      },
    },
  },
  plugins: [require('daisyui')],
};
