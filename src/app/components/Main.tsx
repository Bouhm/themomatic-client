"use client"
import useApi from '../hooks/useApi';
import ThemeInfo from './ThemeInfo';
import StyleInfo from './StyleInfo';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Error from './Error';
import { useTheme } from '../hooks/useTheme';
import { tryParseJson } from '@/utils';

export default function Main() {
  const apiUrl = "http://127.0.0.1:8787"
  const { isLoading, error, data, generateTheme } = useApi(apiUrl);
  const { themeConfig, setThemeConfig } = useTheme();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (data != null) {
      setThemeConfig(data)
    }

  }, [data, setThemeConfig])

  useEffect(() => {
    setShowError(!!error)
  }, [error, setShowError])

  useEffect(() => {
    // Add dynamic fonts
    const { primaryFont, secondaryFont } = themeConfig.customStyles;
    const formattedFonts = `family=${primaryFont}&family=${secondaryFont}`.split(',')[0].replace(/ /g, '+').replace("'", "");
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?${formattedFonts}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.backgroundColor = themeConfig.palette.primary;

  }, [themeConfig])

  function handleSubmit(query: string) {
    generateTheme(query);
  }

  function handleCloseError() {
    setShowError(false);
  }

  const { palette, customStyles } = themeConfig;

  return (
    <>
      {isLoading && <Loader />}
      {showError && <Error error={error!} onClose={handleCloseError} />}
      <main
        className="flex flex-wrap p-6 pt-0 md:flex-nowrap max-w-screen-2xl md:max-w-screen-full"
        style={{ fontFamily: customStyles.secondaryFont, color: palette.secondaryText }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-25 z-[-1]"
          style={tryParseJson(customStyles.background)}
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
