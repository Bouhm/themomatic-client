import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import Container from "./Container";

const texts = ["Artificially intelligencing...", "Googling specific CSS...", "Chatting with chatbots...", "Downloading more intelligence...", "Cooking...", "Booping the beeps..."]

export default function Loader() {
  const { themeConfig } = useTheme();
  const [currentText, setCurrentText] = useState<string>(texts[0]);

  useEffect(() => {
    // Pick a random text and random duration
    const cycleText = () => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        const randomDuration = Math.floor(Math.random() * (5000 - 1000) + 3000);

        setCurrentText(texts[randomIndex]);
        setTimeout(cycleText, randomDuration);
    };

    const initialTimeout = setTimeout(cycleText); 
    return () => clearTimeout(initialTimeout); // Cleanup on unmount
  }, []);

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="fixed top-0 right-0 bottom-0 left-0 opacity-50"
        style={{ backgroundColor: themeConfig.palette.primary }}
      />
      <Container
        classNames="w-full h-full md:w-96 md:h-96 flex flex-col justify-center items-center z-10"
      >
        <h2
          className="text-2xl m-4"
          style={{ color: themeConfig.palette.secondaryText, fontFamily: themeConfig.customStyles.primaryFont }}
        >
          Loading...
        </h2>
        <div
          className="w-20 h-20"
          style={{
            border: "16px solid #f3f3f3",
            borderTop: "16px solid black",
            borderRadius: "50%",
            animation: "spin 2s linear infinite"
          }}
        />
        <h2
          className="text-l m-6"
          style={{ color: themeConfig.palette.secondaryText, fontFamily: themeConfig.customStyles.secondaryFont }}
        >
          {currentText}
        </h2>
      </Container>
    </div>
  );
}
