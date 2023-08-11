import React, { useRef, useEffect, useContext } from 'react';
import { Appearance, AppState } from 'react-native';
import $$AppRouter from '@smartface-generated/routers';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '@app/context';

const MainRouter = () => {
    const appState = useRef(AppState.currentState);
    const {setTheme} = useContext(ThemeContext);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                console.log('App has come to the foreground!');
                const colorScheme = Appearance.getColorScheme();
                if (colorScheme === 'dark') {
                    setTheme('defaultTheme')
                } else if (colorScheme === 'light') {
                    setTheme('baseTheme')
                }
            }

            appState.current = nextAppState;
            console.log('AppState', appState.current);
        });

        return () => {
            console.log("[DEL]: Remove AppState subscription")
            subscription.remove();
        };
    }, []);

    return (
        <NavigationContainer>
            <$$AppRouter />
        </NavigationContainer>
    );
};

export default MainRouter;
