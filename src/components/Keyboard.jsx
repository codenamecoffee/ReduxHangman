/* Hooks. */
import { useSelector } from 'react-redux';

/* Style. */
import '../stylesheets/Keyboard.css';

const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/* Keyboard Component. */
export function Keyboard ({ disabled, correctLetters, wrongLetters, addChosenLetter }) {

	const { themeColor } = useSelector((store) => store.theme);

	/* Use of the map method to show every letter of the KEYS array 
	with the purpose of creating a virtual keyboard in the screen. */

	return <div className='keyboard'>
		{KEYS.map(key => {
			const isActive = correctLetters.includes(key);
			const isInactive = wrongLetters.includes(key);
			return (
				<button
					onClick={() => addChosenLetter(key)} 
					className={`
						buttonKey
						${isActive ? 'active' : ''}
						${isInactive ? 'inactive' : ''}
					`}
					disabled={isActive || isInactive || disabled}
					key={key}
					style={{
						cursor: disabled ? 'not-allowed' 
					  	: isActive ? 'not-allowed'
							: isInactive ? 'not-allowed'
							: 'pointer', 
						borderColor: themeColor === 'light' ? 'black' : 'white',
						color: themeColor === 'light' ? 'black' : 'white'
					}}
				>
					{key}
				</button>
			)
		})}
	</div>
};