import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import { addDynamicIconSelectors } from '@iconify/tailwind';
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				interTight: ['Inter Tight', 'sans-serif'],
				kanit: ['Kanit', 'sans-serif'],
				unbounded: ['Unbounded', 'sans-serif'],
				titillium: ['Titillium Web', 'sans-serif']
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

			keyframes: {
				slideleft: {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				wave: {
					'100%': {
						width: '100%'
					}
				}
			},
			animation: {
				slideleft: 'slideleft 20s linear infinite',
				wave: 'wave 1s ease-in infinite'
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
		typography,
		forms,
		containerQueries,
		aspectRatio,
		// Iconify plugin
		addDynamicIconSelectors(),
		// Tailwind Scrollbar
		tailwindScrollbar({ nocompatible: true })
	]
} satisfies Config;
