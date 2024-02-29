/* Hooks. */
import { useSelector } from 'react-redux';

/* Style. */
import '../stylesheets/UnknownWord.css';

/* UnknownWord Component. */
export function UnknownWord ({ chosenLetters, secretWord, showWord }) {

	const { themeColor } = useSelector((store) => store.theme);

	/* Use of split and map methods to render the letters of 
		the secret word separately, taking into account whether 
		they were previously chosen or not. Use of the style 
		object to change the letter's visibility if it is a chosen 
		letter. */

	return <div className='container3'>
		{secretWord.split('').map((letter, index) => (
			<span className='placeForLetters' key={index} style={{
				borderBottomColor: themeColor === 'light' ? 'black' : 'white'
			}}>
				<span style={{
					visibility: chosenLetters.includes(letter) || showWord
						? 'visible'
						: 'hidden',
					color: !chosenLetters.includes(letter) || showWord
						? 'darkred'
						: themeColor === 'light' ? 'skyblue' : 'gray',
				}}>
					{letter}
				</span>
			</span>
		))}
	</div>
};