const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: 'jit',
    content: ["./build/**/*.html"],
    theme: {
        fontFamily: {
            inter: ["Inter", ...defaultTheme.fontFamily.sans],
            pj: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
            vol: ["volund"],
            rec: ["recoleta"]
        },
        extend: {
            colors: {
                amber: colors.amber,
                teal: colors.teal,
                orange: colors.orange,
                rose: colors.rose,
                "wf-pink": '#F16278',
                "wf-peach": '#EFB8A8',
                "wf-black": '#341018',
                "wf-burg": '#73253E',
                "wf-brown": '#9C555B',
                "wf-white": '#e6d4d3',
                "wf-light-peach": "#efe5e2",
                "wf-print-bg": '#DFCCCB',
                "wf-print-bg-2": '#D6A59E'
            },
            backgroundImage: (theme) => ({
                'wf-pink-bg': "url(/build/images/pale-rose-background.png)",
                'wf-nft-bg': "url(/build/images/wf-nft-bg.png)"
            })
        },
    },
    variants: {
        extend: {
            fontFamily: {

            }
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
    corePlugins: {
        animation: false,
        float: false,
    },
};