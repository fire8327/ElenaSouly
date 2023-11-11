/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}','./index.html'],
  theme: {
    gridTemplateColumns: {     
      '1':'[full-start] repeat(1, minmax(0, 1fr)) [full-end]',
      '2':'[full-start] repeat(2, minmax(0, 1fr)) [full-end]',
      '3':'[full-start] repeat(3, minmax(0, 1fr)) [full-end]',
      '4':'[full-start] repeat(4, minmax(0, 1fr)) [full-end]',
      '5':'[full-start] repeat(5, minmax(0, 1fr)) [full-end]',
      '6':'[full-start] repeat(6, minmax(0, 1fr)) [full-end]',
      '7':'[full-start] repeat(7, minmax(0, 1fr)) [full-end]',
      '8':'[full-start] repeat(8, minmax(0, 1fr)) [full-end]',
      '9':'[full-start] repeat(9, minmax(0, 1fr)) [full-end]',
      '10':'[full-start] repeat(10, minmax(0, 1fr)) [full-end]',
      '11':'[full-start] repeat(11, minmax(0, 1fr)) [full-end]',
      '12':'[full-start] repeat(12, minmax(0, 1fr)) [full-end]',      
    }
  },
  plugins: [],
}
