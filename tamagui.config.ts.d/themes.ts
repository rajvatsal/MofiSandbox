import { createV5Theme, defaultChildrenThemes } from '@tamagui/config/v5';
import { v5ComponentThemes } from '@tamagui/themes/v5';
import {
	yellow,
	yellowDark,
	red,
	redDark,
	green,
	greenDark,
} from '@tamagui/colors';

const darkPalette = [
	'hsla(250, 12%, 12%, 1)',
	'hsla(250, 12%, 16%, 1)',
	'hsla(250, 12%, 20%, 1)',
	'hsla(250, 12%, 25%, 1)',
	'hsla(250, 12%, 29%, 1)',
	'hsla(250, 12%, 33%, 1)',
	'hsla(250, 12%, 37%, 1)',
	'hsla(250, 12%, 42%, 1)',
	'hsla(250, 12%, 46%, 1)',
	'hsla(250, 12%, 50%, 1)',
	'hsla(0, 15%, 93%, 1)',
	'hsla(0, 15%, 99%, 1)',
];
const lightPalette = [
	'hsla(250, 12%, 94%, 1)',
	'hsla(250, 12%, 89%, 1)',
	'hsla(250, 12%, 84%, 1)',
	'hsla(250, 12%, 79%, 1)',
	'hsla(250, 12%, 74%, 1)',
	'hsla(250, 12%, 70%, 1)',
	'hsla(250, 12%, 65%, 1)',
	'hsla(250, 12%, 60%, 1)',
	'hsla(250, 12%, 55%, 1)',
	'hsla(250, 12%, 50%, 1)',
	'hsla(0, 15%, 15%, 1)',
	'hsla(0, 15%, 1%, 1)',
];

// Your custom accent color theme
const accentLight = {
	accent1: 'hsla(251, 51%, 24%, 1)',
	accent2: 'hsla(251, 51%, 29%, 1)',
	accent3: 'hsla(251, 51%, 33%, 1)',
	accent4: 'hsla(251, 51%, 38%, 1)',
	accent5: 'hsla(251, 51%, 42%, 1)',
	accent6: 'hsla(251, 51%, 47%, 1)',
	accent7: 'hsla(251, 51%, 51%, 1)',
	accent8: 'hsla(251, 51%, 56%, 1)',
	accent9: 'hsla(251, 51%, 60%, 1)',
	accent10: 'hsla(251, 51%, 65%, 1)',
	accent11: 'hsla(250, 50%, 95%, 1)',
	accent12: 'hsla(250, 50%, 95%, 1)',
};

const accentDark = {
	accent1: 'hsla(251, 51%, 24%, 1)',
	accent2: 'hsla(251, 51%, 28%, 1)',
	accent3: 'hsla(251, 51%, 32%, 1)',
	accent4: 'hsla(251, 51%, 36%, 1)',
	accent5: 'hsla(251, 51%, 40%, 1)',
	accent6: 'hsla(251, 51%, 44%, 1)',
	accent7: 'hsla(251, 51%, 48%, 1)',
	accent8: 'hsla(251, 51%, 52%, 1)',
	accent9: 'hsla(251, 51%, 56%, 1)',
	accent10: 'hsla(251, 51%, 60%, 1)',
	accent11: 'hsla(250, 50%, 90%, 1)',
	accent12: 'hsla(250, 50%, 95%, 1)',
};

const builtThemes = createV5Theme({
	darkPalette,
	lightPalette,
	componentThemes: v5ComponentThemes,
	accent: {
		light: accentLight,
		dark: accentDark,
	},
	childrenThemes: {
		// Include default color themes (blue, red, green, yellow, etc.)
		...defaultChildrenThemes,

		// Semantic color themes for warnings, errors, and success states
		warning: {
			light: yellow,
			dark: yellowDark,
		},
		error: {
			light: red,
			dark: redDark,
		},
		success: {
			light: green,
			dark: greenDark,
		},
	},
});

export type Themes = typeof builtThemes;

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes =
	process.env.TAMAGUI_ENVIRONMENT === 'client' &&
		process.env.NODE_ENV === 'production'
		? ({} as any)
		: (builtThemes as any);
