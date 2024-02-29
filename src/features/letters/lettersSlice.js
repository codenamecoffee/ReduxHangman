/* Redux. */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	chosenLetters: [],
};

const lettersSlice = createSlice({
	name: 'letters',
	initialState,
	reducers: {
		setChosenLetter: (state, action) => {
			const letter = action.payload;
			state.chosenLetters = [...state.chosenLetters,letter];
		},
		resetChosenLetters: (state) => {
			state.chosenLetters = [];
		},
	},
});

export const { setChosenLetter, resetChosenLetters } = lettersSlice.actions;

export default lettersSlice.reducer;