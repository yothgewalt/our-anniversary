/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            dropShadow: {
                "party-popper": "0 0 2em rgb(232, 192, 45)",
            },
        },
        screens: {
            "280px": "280px",
            "360px": "360px",
            "390px": "390px",
            "768px": "768px",
            "820px": "820px",
            "912px": "912px",
            "1024px": "1024px"
        },
    },
    plugins: [],
}
