/* Hooks. */
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Reducers. */
import { setChosenLetter, resetChosenLetters } from './features/letters/lettersSlice';
import { setSecretWord } from './features/word/wordSlice';

/* Components. */
import { Drawing } from './components/Drawing';
import { UnknownWord } from './components/UnknownWord'; 
import { Keyboard } from './components/Keyboard'; 

/* Style. */
import './App.css';

/* App Component. */
function App() {

  /* Prepared to dispatch reducers. */
  const dispatch = useDispatch();

   /* Get the theme color from the redux store. */
   const { themeColor } = useSelector((store) => store.theme);

  /* Change background color dinamycally functionality. */
  useEffect(() => {
    themeColor === 'light'
    ? document.body.style.backgroundColor = 'white'
    : document.body.style.backgroundColor = 'black';
  }, [themeColor]);

  /* Get secretWord from the redux store. */
  const { secretWord } = useSelector((store) => store.word); 

  /* Testing that it's a new word on every refresh. */
  useEffect(() => {
    console.log(secretWord);
  }, [secretWord]);

  /* Preparing arrays for storing the chosen letters. */
  let { chosenLetters } = useSelector((store) => store.letters);
  let wrongLetters = chosenLetters.filter(letter => !secretWord.includes(letter));

  /* Handle the results when the game has finished. */
  let loseGame = wrongLetters.length >= 6; // Six body parts
  let wonGame = secretWord
    .split('')
    .every(letter => chosenLetters.includes(letter));


  /* addChosenLetter's functionality. Use of useCallback hook to 
  update only the necessary things on each render of the component.*/
  const addChosenLetter = useCallback((letter) => {
    /* No allowed to choose more letters when the game has finished,
    or if the letter was already chosen. */
    if(chosenLetters.includes(letter) || loseGame || wonGame){
      return
    };
    /* add new chosen letter */
    dispatch(setChosenLetter(letter));
  }, [chosenLetters]);


  /* Real keyboard functionality. */
  useEffect(() => {
    const keyHandler = (event) => {
      const key = event.key;
      /* Ignore keys that are not a letter using regex. */
      if(!key.match(/^[a-z]$/)) {
        return
      };
      event.preventDefault();
      /* Check if the pressed letter was previously chosen or not. */
      addChosenLetter(key);
    }
    document.addEventListener('keypress', keyHandler);
    return () => {
      document.removeEventListener('keypress', keyHandler)
    }
  }, [chosenLetters]);


  /* 'Press Enter to refresh' functionality. */
  useEffect(() => {
    const enterHandler = (event) => {
      const key = event.key;
      if(key !== 'Enter'){
        return
      };
      event.preventDefault();
      /* Empty the chosen letters to play again. */
      dispatch(resetChosenLetters());
       /* Ask for a new secret word to guess. */
      dispatch(setSecretWord());
    };
    document.addEventListener('keypress', enterHandler);
    return () => {
      document.removeEventListener('keypress', enterHandler)
    }
  }, []);


  /* Move to the top functionality. (Small screens) */
  useEffect(() => {
    window.scrollTo(0,0);
  }, [loseGame, wonGame]);
  

  return (
    <div className='container1'>
      <div className='text' style={{
        color: themeColor === 'light' ? 'black' : 'white'
      }}>
        {wonGame && "Winner! - Refresh or press 'Enter' to try again"}
        {loseGame && "Nice Try - Refresh or press 'Enter' to try again"}
      </div>
      <Drawing mistakes={wrongLetters.length} />
      <UnknownWord 
        chosenLetters={chosenLetters}
        secretWord={secretWord}
        showWord={loseGame}   
      />
      <Keyboard 
        disabled={wonGame || loseGame}
        correctLetters={chosenLetters.filter(letter => secretWord.includes(letter))}
        wrongLetters={wrongLetters}
        addChosenLetter={addChosenLetter}
      />
    </div>
  );
};

export default App;
