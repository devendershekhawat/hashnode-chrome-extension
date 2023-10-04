import React, { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import useStorage from "../../hooks/useStorage";

interface IThemeContext {
    theme: 'dark' | 'light'
    setTheme: Dispatch<SetStateAction<'dark' | 'light'>> | (() => void)
}

export const ThemeContext = createContext<IThemeContext>({
    theme: 'dark',
    setTheme: () => {}
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const { value: theme, setItem: setTheme} = useStorage('theme', 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            return;
        }
        document.documentElement.classList.remove('dark');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.prototype.Context = ThemeContext;