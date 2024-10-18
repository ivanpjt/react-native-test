import { PanResponder, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import Catalog from '@/widgets/Catalog/ui/Catalog';
import { OrderSheet } from '@/widgets/OrderSheet/ui/OrderSheet';
import { router } from 'expo-router';

const index = () => {
	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (evt, gestureState) => {
				return Math.abs(gestureState.dx) > 20;
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx > 0) {
					router.canGoBack() && router.back();
				}
			},
		})
	).current;
	return (
		<View style={styles.container} {...panResponder.panHandlers}>
			<StatusBar barStyle="light-content" />
			<Catalog />
			<OrderSheet loyalty={10} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#181A1F',
		height: '100%',
	},
});
export default index;
