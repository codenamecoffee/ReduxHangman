/* Redux. */
import { createSlice } from '@reduxjs/toolkit';

/* Data. */
import wordList from '../../wordList.json';

/* Get a random word from the wordList array. */
function getNewWord () {
	/* Use of Math method for getting a random index. */
	return wordList[Math.floor(Math.random()*wordList.length)];
};

const initialState = {
	secretWord: getNewWord(),
};

const wordSlice = createSlice({
	name: 'word',
	initialState,
	reducers: {
		setSecretWord: (state) => {
			state.secretWord = getNewWord();
		},
	},
});

export const { setSecretWord } = wordSlice.actions;

export default wordSlice.reducer;