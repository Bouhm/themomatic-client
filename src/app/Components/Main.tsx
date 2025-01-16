"use client";
import Head from 'next/head';
import DefaultTheme from '../data/defaultTheme.json';
import { useEffect } from 'react';
import { IThemeConfig } from '../data/interfaces';
import useApi from '../hooks/useApi';
import ThemeInfo from './ThemeInfo';
import StyleInfo from './StyleInfo';

export default function Home() {
  const { data, error, isLoading } = useApi<IThemeConfig>('');
  let themeConfig = data ?? DefaultTheme;
  const { palette, customStyles } = themeConfig;

  let googleFontUrl;

  useEffect(() => {
    document.body.style.backgroundColor = themeConfig.palette.primaryColor;
    googleFontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(customStyles.font)};1&display=swap`;
  }, [data])

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
      {/* dynamically load fonts */}
      <Head>
        <link rel="stylesheet" href={googleFontUrl} />
      </Head>
      <main
        className="flex flex-wrap md:flex-nowrap max-w-screen-2xl md:max-w-screen-full"
      >
        <div className="flex-auto w-full md:w-3/5 p-18 md:pt-28 md:pl-28 md:pr-8">
          <ThemeInfo 
            font={customStyles.font!}
            pageStyle={customStyles.backgroundStyle} 
            inputStyle={customStyles.inputStyle} 
          />
        </div>
        <div className="flex-initial w-full md:w-2/5 p-18 md:pt-28 md:pr-28 md:pl-8">
          <StyleInfo 
            palette={palette}
            containerStyle={customStyles.containerStyle} 
            buttonStyle={customStyles.buttonStyle}
          />
        </div>
      </main>
    </>
  );
}
