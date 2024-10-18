import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Props } from './types';

export const Tag = (props: Props) => {
	return (
		<TouchableHighlight
			onPress={props.onSelect}
			style={props.isSelected ? styles.tagSelected : styles.tag}>
			<Text style={props.isSelected ? styles.selectedTest : styles.text}>{props.title}</Text>
		</TouchableHighlight>
	);
};
const styles = StyleSheet.create({
	tag: {
		paddingTop: 9,
		paddingBottom: 9,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: '#25272d',
		borderRadius: 36,
		marginRight: 8,
	},
	tagSelected: {
		paddingTop: 9,
		paddingBottom: 9,
		paddingLeft: 12,
		paddingRight: 12,
		backgroundColor: 'white',
		borderRadius: 36,
		marginRight: 8,
	},

	text: {
		color: 'white',
		fontSize: 14,
		fontWeight: '400',
	},
	selectedTest: {
		color: '#373946',
		fontSize: 14,
		fontWeight: '400',
	},
});
