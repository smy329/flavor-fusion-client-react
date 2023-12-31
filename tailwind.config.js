/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('src/assets/bg/loginPage.jpeg')",
        newsletter: "url('src/assets/bg/newsletter.jpg')",
        error: "url('src/assets/bg/404.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
};
