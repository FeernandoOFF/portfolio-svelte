/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				mydark: {
					primary: '#0BA5E9',

					secondary: '#F471B5',

					accent: '#6DE6B7',

					neutral: '#94A3B8',

					'base-100': '#10172A',

					info: '#9135E9',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#f43f5e'
				}
			},
			'light'
		]
	}
};
