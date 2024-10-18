import { Stack } from 'expo-router';

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="(menu)" options={{ headerShown: false }} />
			<Stack.Screen name="index" options={{ headerShown: false }}  />
		</Stack>
	);
};

export default RootLayout;
