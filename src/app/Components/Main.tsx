"use client";
import Head from 'next/head';
import ThemeInfo from "./ThemeInfo";
import StyleInfo from "./StyleInfo";
import DefaultTheme from '../Data/defaultTheme.json';
import { useEffect, useState } from 'react';
import { IThemeConfig } from '../Data/interfaces';

export default function Home() {
  const [styleConfig, setStyleConfig] = useState<IThemeConfig>();
  let googleFontUrl;

  useEffect(() => {
    setStyleConfig(DefaultTheme)
    googleFontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(DefaultTheme.customStyle.font)};1&display=swap`; 
  }, []);
  
  return (
    <>
      {/* dynamically load fonts */}
      <Head>
        <link rel="stylesheet" href={googleFontUrl} />
      </Head>
      <main className="flex flex-wrap md:flex-nowrap max-w-screen-2xl md:max-w-screen-full">
        <div className="flex-auto w-full md:w-3/5 p-18 md:pt-28 md:pl-28 md:pr-8">
          <ThemeInfo />
        </div>
        <div className="flex-initial w-full md:w-2/5 p-18 md:pt-28 md:pr-28 md:pl-8">
          <StyleInfo />
        </div>
      </main>
    </>
  );
}
