import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./ui/Heading";
import SearchBar from "./ui/SearchBar";

type ThemeInfoProps = {
  font: string
  pageStyle: string
  inputStyle: string
}

export default function ThemeInfo({ font, pageStyle, inputStyle }: ThemeInfoProps) {
  const customStyle = { ...JSON.parse(pageStyle ?? ''), font }
  
  return (
    <div 
      className="flex flex-col gap-4"
      style={customStyle}
    >
        <Heading>
            Generate theme samples with AI
        </Heading>
        <h3 className="text-xl md:min-h-44 md:text-2xl">
            Transform a concept into a website theme. Powered by LLM agents.
        </h3>
        <SearchBar style={inputStyle} placeholder="Enter a theme" />
        <h2 className="text-lg md:text-xl font-bold">
          Examples
        </h2>
        <div className="grid">
            <ThemeThumbnail />
        </div>
    </div>
  );
}
