import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ background: '#fff', color: '#000' });

  const toggleTheme = () => {
    const newTheme = theme.background === '#fff' ? { background: '#000', color: '#fff' } : { background: '#fff', color: '#000' };
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme.background === '#000');
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme.background === '#000');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


// import React, { createContext, useState, useEffect } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState({ background: '#fff', color: '#000' });

//   const toggleTheme = () => {
//     const newTheme = theme.background === '#fff' ? { background: '#000', color: '#fff' } : { background: '#fff', color: '#000' };
//     setTheme(newTheme);
//     document.body.classList.toggle('dark-theme', newTheme.background === '#000');
//   };

//   useEffect(() => {
//     document.body.classList.toggle('dark-theme', theme.background === '#000');
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
