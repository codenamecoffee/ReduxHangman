/* Style. */
import '../stylesheets/ThemeButton.css';

/* ThemeButton Component. */
export function ThemeButton ({ dynamicText, toggleTheme, theme }) {
  
  return (
    <button 
      className="theme-btn"
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? 'whitesmoke' : 'gray',
        color: theme === 'light' ? '#000' : 'blue',
        borderColor: theme === 'light' ? 'black' : 'black'
      }}  
    >
      {dynamicText}
    </button>
  )
};

