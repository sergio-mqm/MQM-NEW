import { fontFamily } from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			screens: {
				'sm': '480px',
				'md': '769px',
				'lg': '976px',
				'xl': '1440px'
			},

			colors: {
				'primary': '#031927',
				'secundary': '#9dd1f1',
				'terciary': '#509aa8',
				'blue-two': '#C8E0F4',
				'white': '#ffffff',
				'black': '#000000',
			},

			fontFamily: {
				primary: ['primary', ...fontFamily.sans],
				paragraph: ['paragraph'],
				titles: ['titles'],
				bold: ['Open Bold']
			},

			spacing: {
				'128': '32rem',
				'144': '36rem',
			},

			borderRadius: {
				'4xl': '2rem',
				'3xl': '2rem'
			}
		},
	},

	plugins: [
		require('daisyui'),
	],
}