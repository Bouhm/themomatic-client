"use client"
import useApi from '../hooks/useApi';
import ThemeInfo from './ThemeInfo';
import StyleInfo from './StyleInfo';
import { useEffect } from 'react';
import Loader from './Loader';
import { useTheme } from '../hooks/useTheme';

export default function Main() {
  const apiUrl = "http://127.0.0.1:8787"
  const { isLoading, error, data, generateTheme } = useApi(apiUrl);
  const { themeConfig, setThemeConfig } = useTheme();

  useEffect(() => {
    if (data != null) {
      setThemeConfig(data)
    }
  }, [data, setThemeConfig])

  useEffect(() => {
    // Add dynamic fonts
    const { primaryFont, secondaryFont } = themeConfig.customStyles;
    const formattedFonts = `family=${primaryFont}&family=${secondaryFont}`.split(',')[0].replace(/ /g, '+');
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.backgroundColor = themeConfig.palette.primary;

  }, [themeConfig])

  function handleSubmit(query: string) {
    generateTheme(query);
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  const { customStyles } = themeConfig;

  return (
    <>
      {isLoading && <Loader />}
      <main
        className="flex flex-wrap p-6 md:flex-nowrap max-w-screen-2xl md:max-w-screen-full"
        style={{ fontFamily: customStyles.secondaryFont }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-40 z-[-1]"
          style={JSON.parse(customStyles.background)}
        />
        <div className="flex-auto w-full md:w-3/5 p-18 md:pt-28 md:pl-28 md:pr-8">
          <ThemeInfo onSubmit={handleSubmit} />
        </div>
        <div className="flex-initial w-full md:w-2/5 p-18 md:pt-28 md:pr-28 md:pl-8">
          <StyleInfo />
        </div>
      </main>
    </>
  );
}
