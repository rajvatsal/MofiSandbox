import {
	PALETTE_BACKGROUND_OFFSET,
	type BuildTemplates,
} from '@tamagui/theme-builder';

const objectFromEntries = <const T extends readonly (readonly [string, any])[]>(
	entries: T,
): { [K in T[number]as K[0]]: K[1] } => {
	return Object.fromEntries(entries) as any;
};

const objectKeys = <O extends object>(obj: O): (keyof O)[] => {
	return Object.keys(obj) as (keyof O)[];
};

const getTemplates = () => {
	const lightTemplates = getBaseTemplates('light');
	const darkTemplates = getBaseTemplates('dark');
	const templates = {
		...objectFromEntries(
			objectKeys(lightTemplates).map(
				name => [`light_${name}`, lightTemplates[name]] as const,
			),
		),
		...objectFromEntries(
			objectKeys(darkTemplates).map(
				name => [`dark_${name}`, darkTemplates[name]] as const,
			),
		),
	};
	return templates as Record<
		keyof typeof templates,
		typeof lightTemplates.base
	>;
};

const getBaseTemplates = (scheme: 'dark' | 'light') => {
	const isLight = scheme === 'light';

	// our palettes have PALETTE_BACKGROUND_OFFSET things padding each end until you get to bg/color:
	// [accentBg, transparent1, transparent2, transparent3, transparent4, background, ...]
	const lighten = isLight ? -1 : 1;
	const darken = -lighten;

	// base
	const background = PALETTE_BACKGROUND_OFFSET;
	const borderColor = background + 2;
	const color = -background;

	// helper for surface themes - they need their own hover/press/focus calculations
	// because those need to be relative to their elevated background, not base
	const makeSurface = (offset: number, colorOffset = 0) => {
		const clr = color - colorOffset;
		const bg = background + offset;
		const brdr = borderColor + offset;

		return {
			color: clr,
			colorHover: clr + (isLight ? 0 : lighten),
			colorPress: clr,
			colorFocus: clr + darken,

			background: bg,
			// hover lightens always
			backgroundHover: bg + lighten,
			// press darkens always
			backgroundPress: bg + darken,
			// focus: lightens in dark mode, darkens in light
			backgroundFocus: bg + offset,
			backgroundActive: bg,

			borderColor: brdr,
			borderColorHover: brdr + lighten,
			borderColorFocus: brdr,
			borderColorPress: brdr + darken,
		};
	};

	// templates use the palette and specify index
	// negative goes backwards from end so -1 is the last item
	const base = {
		accentBackground: 0,
		accentColor: -0,
		background0: 1,
		background02: 2,
		background04: 3,
		background06: 4,
		background08: 5,
		color1: background,
		color2: background + 1,
		color3: background + 2,
		color4: background + 3,
		color5: background + 4,
		color6: background + 5,
		color7: background + 6,
		color8: background + 7,
		color9: background + 8,
		color10: background + 9,
		color11: background + 10,
		color12: background + 11,
		color0: -1,
		color02: -2,
		color04: -3,
		color06: -4,
		color08: -5,
		// v5 = we make this actually 1 up (surface1 technically from before)
		// this way "generics" are automatically differentiated from base bg

		placeholderColor: color - 3,
		colorTransparent: -1,

		color: color,
		colorHover: color + (isLight ? 0 : lighten),
		colorPress: color,
		colorFocus: color + darken,

		background: background,
		backgroundHover: background + 5,
		backgroundPress: background + 5,
		backgroundFocus: background,
		backgroundActive: background,

		borderColor: borderColor,
		borderColorHover: background + 6,
		borderColorFocus: borderColor,
		borderColorPress: background + 6,
	};

	const button = {
		color: color,
		colorHover: color,
		colorPress: color,
		colorFocus: color,

		background: base.color4,
		backgroundHover: base.color6,
		backgroundPress: base.color7,
		backgroundFocus: base.color6,
		backgroundActive: base.color7,

		borderColor: background,
		borderColorHover: base.color8,
		borderColorFocus: base.color8,
		borderColorPress: base.color8,
	};

	const menuItem = {
		color: color,
		colorHover: color,
		colorPress: color,
		colorFocus: color,

		background: background,
		backgroundHover: base.color3,
		backgroundPress: base.color5,
		backgroundFocus: base.color3,
		backgroundActive: base.color5,

		borderColor: borderColor,
		borderColorHover: base.color6,
		borderColorFocus: base.color6,
		borderColorPress: base.color4,
	};

	const selectItem = {
		color: color,
		colorHover: color,
		colorPress: color,
		colorFocus: color,

		background: base.color2,
		backgroundHover: base.color3,
		backgroundPress: base.color3,
		backgroundActive: base.color3,
		backgroundFocus: background + 2,

		borderColor: borderColor,
		borderColorHover: base.color6,
		borderColorFocus: base.color6,
		borderColorPress: base.color4,
	};

	let softBackground = makeSurface(1);
	softBackground = Object.assign(softBackground, {
		backgroundPress: base.color6,
		borderColor: 'rgba(0, 0, 0, 0)',
		borderColorPress: base.color8,
	});
	const surface1 = makeSurface(2, 1);
	const surface2 = makeSurface(3, 1);
	const surface3 = makeSurface(5, 1);

	const accent = Object.fromEntries(
		Object.entries(base).map(([key, index]) => {
			return [key, -index];
		}),
	);

	return {
		base,
		surface1,
		surface2,
		surface3,
		accent,
		softBackground,
		button,
		selectItem,
		menuItem,
	} satisfies BuildTemplates;
};

export const templates = getTemplates();
