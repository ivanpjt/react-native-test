import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { Props } from './types';
import { CashBack } from '@/assets/icons/Cashback';
import { Button } from '@/shared/ui/Button/Button';

export const OrderSheet = (props: Props) => {
	return (
		<View style={styles.sheet}>
			<View style={styles.loyaltyBlock}>
				<Text style={styles.text}>Вы получите</Text>
				<LinearGradient
					colors={['#ff7066', '#e90c69']}
					start={{
						x: 0.5 - 0.5 * Math.cos(221 * (Math.PI / 180)),
						y: 0.5 - 0.5 * Math.sin(221 * (Math.PI / 180)),
					}}
					end={{
						x: 0.5 + 0.5 * Math.cos(221 * (Math.PI / 180)),
						y: 0.5 + 0.5 * Math.sin(221 * (Math.PI / 180)),
					}}
					style={styles.badge}>
					<CashBack />
					<Text style={styles.badgeText}>{props.loyalty} баллов</Text>
				</LinearGradient>
			</View>
			<Button types="order">
				<View
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row',
						gap: 8,
					}}>
					<Text style={{ fontSize: 14, fontWeight: '600', color: '#333333' }}>
						Перейти к заказу
					</Text>
					<Text style={{ fontSize: 14, fontWeight: '500', color: '#506B00' }}>
						5400 ₽
					</Text>
				</View>
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	sheet: {
		paddingBottom: 30,
		width: '100%',
		paddingTop: 12,
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: '#181A1F',
		display: 'flex',
		alignItems: 'center',
        justifyContent: 'space-between',
		flexDirection: 'row',
		gap: 12,
	},
	badge: {
		borderRadius: 8,
		padding: 6,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 4,
	},
	badgeText: {
		fontSize: 12,
		fontWeight: '400',
		color: '#fff',
	},
	text: {
		fontSize: 12,
		fontWeight: '400',
		color: 'rgba(255, 255, 255, 0.5)',
	},
	loyaltyBlock: {
		gap: 8,
	},
});
