/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				game: ["DM Sans"],
			},
			colors: {
				"accent-1": "#333",
			},
		},
	},
	variants: {},
	plugins: [
		require("@designbycode/tailwindcss-text-stroke"),
		require("@tailwindcss/typography"),
		require("daisyui"),
	],
	daisyui: {
		themes: ["light", "dark", "cupcake", "bumblebee"],
	},
};
