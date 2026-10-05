import { defaultConfig } from '@tamagui/config/v5';
import { animations } from '@tamagui/config/v5-rn';
import { createTamagui, createFont, isWeb, type GenericFont } from 'tamagui';
import { createThemes } from '@tamagui/theme-builder';
import {
	v5ComponentThemes,
	v5GrandchildrenThemes,
	defaultChildrenThemes,
} from '@tamagui/themes/v5';

import { templates } from './tamagui.config.ts.d/templates';

function getThemePalette(themeName: keyof typeof defaultChildrenThemes) {
	return {
		palette: {
			light: Object.values(defaultChildrenThemes[themeName].light),
			dark: Object.values(defaultChildrenThemes[themeName].dark),
		},
	};
}
const fonts = {
	heading: createFont({
		family: isWeb ? 'Inter, Helvetica, Arial, sans-serif' : 'Inter',
		size: defaultConfig.fonts.heading.size,
		lineHeight: defaultConfig.fonts.heading.lineHeight,
		weight: {
			1: '100',
			2: '200',
			3: '300',
			4: '400',
			5: '500',
			6: '600',
			7: '700',
			8: '800',
			true: '800',
		},
		letterSpacing: {
			1: 2,
			2: 1.5,
			3: 1,
			4: 0.5,
			5: 0,
			6: -0.5,
			7: -1,
			8: -1.5,
			9: -2,
			true: 0,
		},
		// (native only) swaps out fonts by face/style
		face: {
			100: { normal: 'Inter Thin', italic: 'Inter Thin' },
			200: { normal: 'Inter Extra Light', italic: 'Inter Extra Light' },
			300: { normal: 'Inter Light', italic: 'Inter Light' },
			400: { normal: 'Inter', italic: 'Inter' },
			500: { normal: 'Inter Medium', italic: 'Inter Medium' },
			600: { normal: 'Inter Semi Bold', italic: 'Inter Semi Bold' },
			700: { normal: 'Inter', italic: 'Inter' },
			800: { normal: 'Inter Extra Bold', italic: 'Inter Extra Bold' },
			900: { normal: 'Inter Black', italic: 'Inter Black' },
			1000: { normal: 'Inter Black', italic: 'Inter Black' },
			true: { normal: 'Inter', italic: 'Inter' },
		},
	}),

	body: createFont({
		family: isWeb ? 'Inter, Helvetica, Arial, sans-serif' : 'Inter',
		size: defaultConfig.fonts.body.size,
		lineHeight: defaultConfig.fonts.body.lineHeight,
		weight: {
			1: '100',
			2: '200',
			3: '300',
			4: '400',
			5: '500',
			6: '600',
			7: '700',
			8: '800',
			true: '800',
		},
		letterSpacing: {
			1: 2,
			2: 1.5,
			3: 1,
			4: 0.5,
			5: 0,
			6: -0.5,
			7: -1,
			8: -1.5,
			9: -2,
			true: 0,
		},
		// (native only) swaps out fonts by face/style
		face: {
			100: { normal: 'Inter Thin', italic: 'Inter Thin' },
			200: { normal: 'Inter Extra Light', italic: 'Inter Extra Light' },
			300: { normal: 'Inter Light', italic: 'Inter Light' },
			400: { normal: 'Inter', italic: 'Inter' },
			500: { normal: 'Inter Medium', italic: 'Inter Medium' },
			600: { normal: 'Inter Semi Bold', italic: 'Inter Semi Bold' },
			700: { normal: 'Inter', italic: 'Inter' },
			800: { normal: 'Inter Extra Bold', italic: 'Inter Extra Bold' },
			900: { normal: 'Inter Black', italic: 'Inter Black' },
			1000: { normal: 'Inter Black', italic: 'Inter Black' },
			true: { normal: 'Inter', italic: 'Inter' },
		},
	}),
};

const gdThemes = {
	...v5GrandchildrenThemes,
	softBackground: { template: 'softBackground' },
	button: { template: 'button' },
	selectItem: { template: 'selectItem' },
	menuItem: { template: 'menuItem' },
};

/*
 * TODO: Move away from component themes and create a component library instead.
 */

const themes = createThemes({
	base: {
		palette: {
			light: [
				'rgb(253, 252, 252)',
				'rgb(242, 237, 237)',
				'rgb(229, 220, 220)',
				'rgb(218, 205, 205)',
				'rgb(205, 188, 188)',
				'rgb(194, 173, 173)',
				'rgb(181, 155, 155)',
				'rgb(170, 141, 141)',
				'rgb(157, 123, 123)',
				'rgb(147, 108, 108)',
				'rgb(44, 33, 33)',
				'rgb(3, 2, 2)',
			],
			dark: [
				'rgb(27, 26, 31)',
				'rgb(37, 35, 42)',
				'rgb(49, 46, 56)',
				'rgb(59, 56, 67)',
				'rgb(69, 65, 78)',
				'rgb(82, 77, 92)',
				'rgb(92, 86, 103)',
				'rgb(101, 95, 114)',
				'rgb(114, 107, 128)',
				'rgb(124, 116, 139)',
				'rgb(240, 234, 234)',
				'rgb(253, 252, 252)',
			],
		},

		extra: {
			light: {
				...defaultChildrenThemes.neutral.light,
				...{ neutral1: '#CCCCCC' },
				shadowColor: 'rgba(0,0,0,0.1)',
			},
			dark: {
				...defaultChildrenThemes.neutral.dark,
				...{ neutral1: '#CCCCCC' },
				shadowColor: 'rgba(0,0,0,0.4)',
			},
		},
	},

	accent: {
		palette: {
			light: [
				'rgb(105, 55, 129)',
				'rgb(114, 60, 139)',
				'rgb(123, 64, 150)',
				'rgb(135, 70, 164)',
				'rgb(143, 75, 175)',
				'rgb(151, 84, 182)',
				'rgb(157, 94, 186)',
				'rgb(166, 109, 192)',
				'rgb(172, 119, 197)',
				'rgb(179, 130, 201)',
				'rgb(238, 236, 249)',
				'rgb(238, 236, 249)',
			],
			dark: [
				'rgb(38, 26, 96)',
				'rgb(44, 31, 112)',
				'rgb(51, 35, 128)',
				'rgb(57, 39, 144)',
				'rgb(63, 44, 160)',
				'rgb(70, 48, 176)',
				'rgb(76, 53, 192)',
				'rgb(86, 63, 202)',
				'rgb(100, 79, 207)',
				'rgb(114, 95, 211)',
				'rgb(221, 217, 242)',
				'rgb(238, 236, 249)',
			],
		},
	},

	childrenThemes: {
		neutral: getThemePalette('neutral'),
	},
	grandChildrenThemes: gdThemes,

	templates,
	componentThemes: Object.assign({}, v5ComponentThemes, {
		Input: { template: 'base' },
		Button: { template: 'button' },
	}),
});

export const config = createTamagui({
	...defaultConfig,
	animations,
	fonts,
	themes,
	media: {
		...defaultConfig.media,
	},
});

type MofiConfig = typeof config;

declare module 'tamagui' {
	interface TamaguiCustomConfig extends MofiConfig { }
}
