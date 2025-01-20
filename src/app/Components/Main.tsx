import DefaultTheme from '../data/defaultTheme.json';
import useApi from '../hooks/useApi';
import ThemeInfo from './ThemeInfo';
import StyleInfo from './StyleInfo';
import { useEffect, useState } from 'react';

export default function Main() {
  const apiUrl = "https://themomatic-server.bouhm.workers.dev"
  const { isLoading, error, data, generateTheme } = useApi(apiUrl);
  const [currentTheme, setCurrentTheme] = useState(DefaultTheme);

  useEffect(() => {
    if (data != null) {
      setCurrentTheme(data)
    }

    const theme = data ?? currentTheme;
    document.body.style.backgroundColor = theme.palette.primaryColor;
  }, [isLoading, error, data, currentTheme])

  function handleSubmit(query: string) {
    generateTheme(query);
  }

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  return (
    <>
      {/* dynamically load fonts */}
      <main
        className="flex flex-wrap md:flex-nowrap max-w-screen-2xl md:max-w-screen-full"
        style={JSON.parse(currentTheme.customStyles.backgroundStyle)}
      >
        <div className="flex-auto w-full md:w-3/5 p-18 md:pt-28 md:pl-28 md:pr-8">
          <ThemeInfo 
            font={currentTheme.customStyles.font!}
            pageStyle={currentTheme.customStyles.backgroundStyle} 
            inputStyle={currentTheme.customStyles.inputStyle} 
            onSubmit={handleSubmit}
          />
        </div>
        <div className="flex-initial w-full md:w-2/5 p-18 md:pt-28 md:pr-28 md:pl-8">
          <StyleInfo 
            palette={currentTheme.palette}
            containerStyle={currentTheme.customStyles.containerStyle} 
            buttonStyle={currentTheme.customStyles.buttonStyle}
          />
        </div>
      </main>
    </>
  );
}
