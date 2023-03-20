/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                dsr: "#e384ff",
                ylw: "#f4bc2b",
                dark: "#232323",
            },
            screens: {
                "2xl": "1320px",
            },
        },
        plugins: [],
    },
};
