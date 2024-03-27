const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				interTight: ['Inter Tight', 'sans-serif'],
				kanit: ['Kanit', 'sans-serif'],
				unbounded: ['Unbounded', 'sans-serif']
			},
			colors: {
				accent: '#0097b2',
				body: '#454545',
				heading: '#101010',
				primary: '#101010',
				banner: '#f4f4f4',
				light: '#c1c1c1',
				darkbanner: '#181818'
			},
			backgroundImage: {
				'banner-image': "url('/src/lib/assets/images/creative-banner-2.png')"
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 20s linear infinite'
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				}
			}
		},
		screens: {
			sm: '576px',
			// => @media (min-width: 576px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '992px',
			// => @media (min-width: 992px) { ... }

			xl: '1200px',
			// => @media (min-width: 1200px) { ... }

			'2xl': '1400px'
			// => @media (min-width: 1400px) { ... }
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		// Iconify plugin
		addDynamicIconSelectors(),
		// Tailwind Scrollbar
		require('tailwind-scrollbar')({ nocompatible: true })
	]
};
