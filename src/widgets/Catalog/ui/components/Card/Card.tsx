import { Image, StyleSheet, Text, View } from 'react-native';
import { Props } from './types';
import { Recomendation } from '@/assets/icons/Recomendation';
import { Button } from '@/shared/ui/Button/Button';
import { Plus } from '@/assets/icons/Plus';
import { CashBack } from '@/assets/icons/Cashback';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export const Card = (props: Props) => {
	return (
		<View style={styles.cart}>
			<View style={styles.imageWrapper}>
				<Image
					resizeMode="contain"
					style={styles.image}
					source={require('@/assets/images/product.jpg')}
				/>
				<LinearGradient
					colors={['#e90c69', '#ff7066']}
					start={{
						x: 0.5 - 0.5 * Math.cos(42 * (Math.PI / 180)),
						y: 0.5 - 0.5 * Math.sin(42 * (Math.PI / 180)),
					}}
					end={{
						x: 0.5 + 0.5 * Math.cos(42 * (Math.PI / 180)),
						y: 0.5 + 0.5 * Math.sin(42 * (Math.PI / 180)),
					}}
					style={styles.badge}>
					<CashBack />
					<Text style={styles.badgeText}>{props.loyalty}%</Text>
				</LinearGradient>
			</View>
			<View style={styles.info}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.weight}>{props.weight}</Text>
				<Text style={styles.price}>{props.price} ₽</Text>
				<View style={styles.recomendation}>
					<Recomendation />
					<Text style={styles.recomendationText}>{props.recommendation}% рекомендуют</Text>
				</View>
			</View>
			<Button>
				<View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
					<Plus />
					<Text style={{ color: 'white' }}>Добавить</Text>
				</View>
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	cart: {
		backgroundColor: '#25272D',
		margin: 10,
		padding: 10,
		borderRadius: 16,
		width: 175,
	},
	image: {
		width: '100%',
		borderRadius: 16,
	},
	imageWrapper: {
		position: 'relative',
		overflow: 'hidden',
	},

	info: {
		marginTop: 12,
		marginBottom: 8,
	},
	badge: {
		padding: 4,
		position: 'absolute',
		bottom: 8,
		left: 4,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 4,
		borderRadius: 8,
	},
	badgeText: {
		fontSize: 12,
		fontWeight: '400',
		color: 'white',
	},
	title: {
		fontWeight: '500',
		fontSize: 16,
		color: 'white',
		marginBottom: 8,
	},

	weight: {
		fontSize: 12,
		fontWeight: '400',
		color: '#A5A9BA',
		marginBottom: 12,
	},
	price: {
		fontWeight: '500',
		fontSize: 16,
		color: 'white',
		marginBottom: 12,
	},
	recomendation: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		gap: 10,
		width: '100%',
	},
	recomendationText: {
		fontSize: 10,
		fontWeight: '400',
		color: 'white',

	},
});
