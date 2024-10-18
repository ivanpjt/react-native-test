import { Arrows } from '@/assets/icons/Arrows';
import { Button } from '@/shared/ui/Button/Button';
import { Tag } from '@/shared/ui/Tag/Tag';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export const Filter = () => {
	const [selecteTag, setSelecteTag] = useState<number>();
	const mockData = [
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
		{
			title: 'Кофе',
		},
	];
	return (
		<View style={styles.container}>
			<Button types="filter">
				<Arrows />
			</Button>
			<ScrollView horizontal style={styles.filter} showsHorizontalScrollIndicator={false}>
				{mockData.map((item, index) => (
					<Tag
						key={index}
						title={item.title}
						isSelected={selecteTag === index}
						onSelect={() => setSelecteTag(index)}
					/>
				))}
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 16,
		gap: 12,
		paddingBottom: 12,
	},
	filter: {
		flexDirection: 'row',
		display: 'flex',
		gap: 8,
	},
	button: {},
});
