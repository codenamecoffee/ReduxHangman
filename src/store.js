/* Redux. */
import { configureStore } from '@reduxjs/toolkit';

/* Reducers. */
import wordReducer from './features/word/wordSlice.js';
import lettersReducer from './features/letters/lettersSlice.js';
import themeReducer from './features/theme/themeSlice.js';

export const store = configureStore({
    reducer: {
			word: wordReducer,
			letters: lettersReducer,
            theme: themeReducer,
    },
});