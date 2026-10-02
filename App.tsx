import { TamaguiProvider, View } from 'tamagui';
import { config } from './tamagui.config';

export default function App() {
	return (
		<TamaguiProvider config={config} defaultTheme="light">
			<View width={200} height={200} bg="$background" />
		</TamaguiProvider>
	);
}
