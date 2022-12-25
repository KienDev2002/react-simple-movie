/** @type {import('tailwindcss').Config} */
// file đặt biến
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                // đặt biến body
                body: ["DM Sans", "sans-serif"],
            },
            // đặt biến primary là biến mùa chính
            colors: {
                primary: "#F62682",
                secondary: "#6F5CF1",
            },
        },
    },
    plugins: [],
};
