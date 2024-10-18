import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Props } from './types';
import { Chevron } from '@/assets/icons/Chevron';
import { Search } from '@/assets/icons/Search';

export const Header = (props: Props) => {
	return (
		<View style={styles.header}>
			<TouchableOpacity onPress={props.onBack}>
				<Chevron />
			</TouchableOpacity>

			<View style={styles.textContent}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.subtitle}>{props.subtitle}</Text>
			</View>
			<TouchableOpacity onPress={props.onSearch}>
				<Search />
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	header: {
		paddingTop: 45,
		paddingRight: 16,
		paddingBottom: 14,
		paddingLeft: 16,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#181A1F',
	},
	textContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: 'semibold',
		color: 'white',
	},
	subtitle: {
		fontSize: 16,
		fontWeight: 'regular',
		color: '#A5A9BA',
	},
});
