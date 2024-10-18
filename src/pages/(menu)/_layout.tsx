import { Header } from '@/widgets/Header/ui/Header';
import { router, Stack } from 'expo-router';

const MenuLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					header: () => {
						return <Header title="Menu" subtitle="Costa Coffe" onBack={() => router.canGoBack() && router.back()} />;
					},
				}}
			/>
		</Stack>
	);
};

export default MenuLayout;
