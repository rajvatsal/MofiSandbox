import {
	styled,
	Text,
	getFontSizeVariable,
	getVariableValue,
	type SizeTokens,
	type TextProps,
} from 'tamagui';
import type { FontWeightTokens, FontSizeTokens, GetProps } from '@tamagui/web';
import { Pressable as RNPressable } from 'react-native';
import { X } from '@tamagui/lucide-icons-2';
import type { IconProps } from '@tamagui/helpers-icon';

const MFPressable = styled(RNPressable, {
	name: 'Button',
	bg: '$background',
	pressStyle: {
		bg: '$backgroundPress',
		borderColor: '$borderColorPress',
	},
	hoverStyle: {
		bg: '$backgroundHover',
		borderColor: '$borderColorHover',
	},
	render: 'button',
});

type MFPressableProps = GetProps<typeof MFPressable>;

function MFButton(
	props: MFPressableProps & {
		size?: SizeTokens & FontSizeTokens;
		/*
		 * Type `IconComponent` isn't globally exported but rather declared for
		 * each icon in it's module using `IconProps`. They all have the same
		 * type so I am extracting it from the icon `X` and it should work
		 * for all the icons.
		 */
		icon?: typeof X;
		iconAfter?: typeof X;
		iconProps?: IconProps;
		iconAfterProps?: IconProps;
		textProps?: TextProps;
		children: React.ReactNode;
	},
) {
	const {
		size = '$4',
		icon: Icon = null,
		iconAfter: IconAfter = null,
		iconProps = {},
		iconAfterProps = {},
		textProps = {},
		children,
		...mfPressableProps
	} = props;
	const containerSize = {
		height: size,
		px: size,
	};
	const textSize = {
		fs: size,
		ls: size,
		lh: size,
	};
	const iconSize = getVariableValue(getFontSizeVariable(size));
	const maxGap = getVariableValue(getFontSizeVariable('$9'));
	const getSizeNumber = () =>
		typeof size === 'number' ? size : Number.parseInt(size.split('')[1]);

	return (
		<MFPressable
			{...mfPressableProps}
			display="flex"
			flexDirection="row"
			justify="center"
			items="center"
			gap={getSizeNumber() < 10 ? iconSize - 7 : maxGap}
			{...containerSize}
		>
			{Icon ? <Icon size={iconSize} {...iconProps} /> : null}
			{typeof children === 'string' ? (
				<Text {...textSize} {...textProps}>
					{children}
				</Text>
			) : (
				children
			)}
			{IconAfter ? <IconAfter size={iconSize} {...iconAfterProps} /> : null}
		</MFPressable>
	);
}

export { MFButton };
