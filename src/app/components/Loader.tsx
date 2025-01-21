import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import Modal from "./Modal";

const texts = ["Artificially intelligencing...", "Googling very specific CSS questions...", "Chatting with chatbots...", "Downloading more intelligence...", "Cooking...", "Booping the beeps..."]

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
    <Modal>
      <h2
        className="text-2xl m-4"
        style={{ color: themeConfig.palette.secondaryText, fontFamily: themeConfig.customStyles.primaryFont }}
      >
        Loading...
      </h2>
      <div
        className="w-20 h-20"
        style={{
          border: `14px solid ${themeConfig.palette.primary}`,
          borderTop: `14px solid ${themeConfig.palette.secondary}`,
          borderRadius: "50%",
          animation: "spin 2s linear infinite"
        }}
      />
      <h2
        className="text-l m-6 text-center"
        style={{ color: themeConfig.palette.secondaryText, fontFamily: themeConfig.customStyles.secondaryFont }}
      >
        {currentText}
      </h2>
    </Modal>
  );
}
