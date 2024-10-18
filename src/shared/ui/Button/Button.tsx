import { StyleSheet, TouchableOpacity } from 'react-native';
import { Props } from './types';

export const Button = ({ types = 'primary', ...props }: Props) => {
	return (
		<TouchableOpacity onPress={props.onClick} style={styles[types]}>
			{props.children}
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	primary: {
		paddingTop: 14,
		paddingBottom: 14,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: '#3e434d',
		color: '#fff',
		borderRadius: 12,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 6,
		flexDirection: 'row',
		fontSize: 12,
		fontWeight: '400',
	},
	order: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 40,
		paddingRight: 40,
		backgroundColor: '#bdff00',
		color: '#333',
		borderRadius: 12,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		fontSize: 14,
		fontWeight: '600',
	},

	filter: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#262930',
		padding: 9,
        borderRadius: 14
	},
});
