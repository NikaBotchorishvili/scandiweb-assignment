/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			colors: {
				active: "#5ECE7B",
				primary: "#1D1F22",
			},
		},
	},
	plugins: [],
};
