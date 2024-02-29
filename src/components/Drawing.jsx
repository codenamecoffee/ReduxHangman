/* Hooks. */
import { useDispatch, useSelector } from 'react-redux';

/* Reducers. */
import { setThemeColor } from '../features/theme/themeSlice';

/* Components. */
import { ThemeButton } from './ThemeButton.jsx';

/* Style. */
import '../stylesheets/Drawing.css';

/* Drawing Component. */
export function Drawing ({ mistakes }) {
	
	const dispatch = useDispatch();
	const { themeColor } = useSelector((store) => store.theme);

	/* JSX elements to show dinamically . */
	const HEAD = ( 
		<div className='head' style={{
			borderColor: themeColor === 'light' ? 'black' : 'white'
		}} />
	);

	const BODY = (
		<div className='hangmanBody' style={{
			backgroundColor: themeColor === 'light' ? 'black' : 'white'
		}} />
	);

	const RIGHT_ARM = (
		<>
			<div className='rightArm' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='rightForeArm' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
		</>
	);

	const LEFT_ARM = (
		<>
			<div className='leftArm' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='leftForeArm' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
		</>
	);

	const RIGHT_LEG = (
		<>
			<div className='rightLeg' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='rightcalf' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
		</>
	);

	const LEFT_LEG = (
		<>
			<div className='leftLeg' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='leftcalf' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
		</>
	);

	const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

/* Use of map method to render parts of the 
	hangman's body according to the amount of
	wrong letters the player is choosing. */

/* Rest of the drawing using self closing 
	div elements. */

	return (
		<div className='container2'>

			{BODY_PARTS.map((bodyPart, index) => {
				if(index < mistakes) {
					return (
			  		<span key={index}>{bodyPart}</span>
					);
				}
			})}

			<ThemeButton 
				dynamicText={ themeColor === 'light' ? 'NightMode:Off' : 'NightMode:On'}
				toggleTheme={() => dispatch(setThemeColor())}
				theme={themeColor}
			/>
			<div className='hook' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='top' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='column' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
			<div className='bottom' style={{
				backgroundColor: themeColor === 'light' ? 'black' : 'white'
			}} />
		</div>
	)
};