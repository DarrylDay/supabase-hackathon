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
				eden: ["Akaya Kanadaka"],
			},
			colors: {
				"accent-1": "#333",
			},
			keyframes: {
				fadeInOut: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				fadeInOut: "fadeInOut 1s ease-in-out",
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
