/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/images/waves1.jpg')",
        'course': "url('/src/images/Course.jpg')",
      },
      fontFamily: {
        'permanent': ['Gloria Hallelujah', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}