import Svg, { Circle, Rect, Path } from 'react-native-svg';
export const Plus = () => {
	return (
		<Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
			<Path
				d="M4.5 8H12.5"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M8.5 12V4"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};
