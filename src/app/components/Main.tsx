"use client"
import DefaultTheme from '../data/defaultTheme.json';
import useApi from '../hooks/useApi';
import ThemeInfo from './ThemeInfo';
import StyleInfo from './StyleInfo';
import { useEffect, useState } from 'react';

export default function Main() {
  const apiUrl = "http://127.0.0.1:8787"
  const { isLoading, error, data, generateTheme } = useApi(apiUrl);
  const [currentTheme, setCurrentTheme] = useState(DefaultTheme);

  useEffect(() => {
    if (data != null) {
      setCurrentTheme(data)
    }

    const theme = data ?? currentTheme;
    document.body.style.backgroundColor = theme.palette.primary;
  }, [isLoading, error, data, currentTheme])

  useEffect(() => {
    const { primaryFont, secondaryFont } = currentTheme.customStyles;
    const formattedFonts = `family=${primaryFont}&family=${secondaryFont}`.split(',')[0].replace(/ /g, '+');
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, [currentTheme])

  function handleSubmit(query: string) {
    generateTheme(query);
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  const { title, description, customStyles, palette } = currentTheme;

  return (
    <main
      className="flex flex-wrap md:flex-nowrap max-w-screen-2xl md:max-w-screen-full"
      style={{ fontFamily: customStyles.secondaryFont }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-40 z-[-1]"
        style={JSON.parse(currentTheme.customStyles.background)}
      />
      <div className="flex-auto w-full md:w-3/5 p-18 md:pt-28 md:pl-28 md:pr-8">
        <ThemeInfo 
          title={title}
          description={description}
          font={customStyles.primaryFont}
          textColor={palette.primaryTextColor}
          inputStyle={customStyles.input} 
          onSubmit={handleSubmit}
        />
      </div>
      <div className="flex-initial w-full md:w-2/5 p-18 md:pt-28 md:pr-28 md:pl-8">
        <StyleInfo 
          palette={palette}
          containerStyle={customStyles.container} 
          buttonStyles={[customStyles.primaryButton,customStyles.secondaryButton]}
        />
      </div>
    </main>
  );
}
