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
			},
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
