"use client"
import { PropsWithChildren, useContext } from "react";
import React, { createContext, useState } from 'react';
import { IThemeConfig } from '../data/interfaces';
import DefaultTheme from '../data/defaultTheme.json';

interface DataContextType {
    themeConfig: IThemeConfig;
    setThemeConfig: (data: IThemeConfig) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
    const [themeConfig, setThemeConfig] = useState<IThemeConfig>(DefaultTheme);

    return (
        <DataContext.Provider value={{ themeConfig, setThemeConfig }}>
            {children}
        </DataContext.Provider>
    );
};

export const useTheme = () => {
  const context = useContext(DataContext);
  return context!;
};