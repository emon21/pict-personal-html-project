

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    
  theme: {
    extend: {
        fontFamily:{
            // poppins:['poppins','sans-serif'],
            'display':['Work Sans', 'sans-serif']
        },
        container:{
            center:true,
            padding:'0px',
            screens:{
                'sm': "512px",
                'md': "720px",
                'lg': "1024px",
                'xl': "1140px",
                '2xl': "1320px"
            }
        },
       
    },
  },
  plugins: [
   
  ],
}

