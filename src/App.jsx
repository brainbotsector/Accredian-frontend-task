import React, { useContext } from 'react';
import ReferEarn from './ReferEarn';
import { ThemeProvider, ThemeContext } from './ThemeContext'; 
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!theme) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <div className={`App ${theme.background === '#000' ? 'dark-theme' : ''}`}>
        <ReferEarn />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
