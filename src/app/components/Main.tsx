"use client"
import useApi from '../hooks/useApi';
import ThemeInfo from './ThemeInfo';
import StyleInfo from './StyleInfo';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Error from './Error';
import { useTheme } from '../hooks/useTheme';
import { tryParseJson } from '@/utils';

const MAX_PER_DAY = 5;
const COOLDOWN = 60 * 1000; 
const apiUrl = "https://themomatic-server.bouhm.workers.dev"

export default function Main() {
  const { isLoading, error, data, generateTheme } = useApi(apiUrl);
  const { themeConfig, setThemeConfig } = useTheme();
  const [errorMessage, setErrorMessage] = useState(error);

  const [requests, setRequests] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);

  useEffect(() => {
    checkDailyReset();
    loadRequestsState();
  }, []);

  const loadRequestsState = () => {
    const prevRequests = JSON.parse(localStorage.getItem('requests')!) || [];
    const now = new Date().getTime();

    // Filter out timestamps older than 24 hours
    const validRequests = prevRequests.filter((timestamp: number) => now - timestamp < 24 * 60 * 60 * 1000);
    localStorage.setItem('requests', JSON.stringify(validRequests));

    setRequests(validRequests.length);
    if (validRequests.length > 0 && now - validRequests[validRequests.length - 1] < COOLDOWN) {
      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), COOLDOWN - (now - validRequests[validRequests.length - 1]));
    }
  };

  const checkDailyReset = () => {
    const lastReset = localStorage.getItem('lastReset');
    const now = new Date();

    if (!lastReset || new Date(lastReset).toDateString() !== now.toDateString()) {
      localStorage.setItem('requests', JSON.stringify([]));
      localStorage.setItem('lastReset', now.toISOString());
      setRequests(0);
    }
  };

  useEffect(() => {
    if (data != null) {
      setThemeConfig(data)
    }

  }, [data, setThemeConfig])

  useEffect(() => {
    setErrorMessage(error)
  }, [error, setErrorMessage])

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
    if (isCooldown || requests >= MAX_PER_DAY) {
      setErrorMessage("Too many requests; try again later.")
      return;
    }

    // Keep track of total number of requests by user
    const now = new Date().getTime();
    const prevRequests = JSON.parse(localStorage.getItem('requests')!) || [];

    prevRequests.push(now);
    localStorage.setItem('requests', JSON.stringify(prevRequests));

    setRequests(prevRequests.length);
    setIsCooldown(true);

    // Set cooldown in between requests
    setTimeout(() => setIsCooldown(false), COOLDOWN);

    generateTheme(query);
  }

  function handleCloseError() {
    setErrorMessage('');
  }

  const { palette, customStyles } = themeConfig;

  return (
    <>
      {isLoading && <Loader />}
      {errorMessage && <Error error={errorMessage} onClose={handleCloseError} />}
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
