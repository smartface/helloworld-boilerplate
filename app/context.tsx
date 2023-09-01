import React, { createContext, useState, useEffect } from 'react';
import themes, { ThemeType, SmartfaceThemeContextType } from '@smartface-generated/themes';

const ThemeContext = createContext<SmartfaceThemeContextType>({
    ...themes.baseTheme,
    setTheme: (theme: ThemeType) => { },
    theme: 'baseTheme',
});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
    const [theme, setTheme] = useState<ThemeType>('baseTheme');
    const [themeConfig, setThemeConfig] = useState<{ styles: SmartfaceThemeContextType['styles'], variables: SmartfaceThemeContextType['variables'] }>({ ...themes[theme] });

    useEffect(() => {
        setThemeConfig({ ...themes[theme] });
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ ...themeConfig, setTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
