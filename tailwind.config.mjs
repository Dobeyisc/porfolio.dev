/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1E1E1E',
				ice: '#003159'
			},
		},
	},
	plugins: [],
}
