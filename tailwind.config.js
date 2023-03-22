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
                darkdsr: "#37306B",
                lightdsr: "#66347F",
            },
            screens: {
                "2xl": "1320px",
            },
            backgroundImage: {
                "hero-pattern": "url('/img/hero.jpeg')",
                "sidebar-pattern": "url('/img/sidebar.webp')",
            },
            fontSize: {
                "10xl": "10rem",
            },
        },
        plugins: [],
    },
};
