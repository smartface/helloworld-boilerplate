import React, { createContext, useState, useEffect } from 'react';
import themes, { ThemeType } from '@smartface-generated/themes';

const ThemeContext = createContext({
  styles: themes.baseTheme,
  setTheme: (theme: ThemeType) => {},
  theme: 'baseTheme',
});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<ThemeType>('baseTheme');
  const [styles, setstyles] = useState<typeof themes[ThemeType]>(
    themes.baseTheme,
  );

  useEffect(() => {
    setstyles(themes[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ styles, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
