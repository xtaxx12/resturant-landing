/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    dark: '#0f0f0f',
                    charcoal: '#1a1a1a',
                    gold: '#d4af37',
                    goldHover: '#b5952f',
                    cream: '#f5f5f5',
                    gray: '#a3a3a3'
                }
            }
        }
    },
    plugins: [],
}
