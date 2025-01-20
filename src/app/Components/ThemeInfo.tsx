import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./ui/Heading";
import SearchBar from "./ui/SearchBar";

type ThemeInfoProps = {
  font: string
  pageStyle: string
  inputStyle: string
  textColor: string
  onSubmit: (query: string) => void
}

export default function ThemeInfo({ font, pageStyle, inputStyle, textColor, onSubmit }: ThemeInfoProps) {
  const customStyle = { ...JSON.parse(pageStyle ?? ''), font }
  
  return (
    <div 
      className="flex flex-col gap-4"
      style={customStyle}
    >
        <Heading color={textColor}>
            Generate theme samples with AI
        </Heading>
      <h3
        className="text-xl md:min-h-44 md:text-2xl"
        style={{color: textColor}}
      >
            Transform a concept into a website theme. Powered by LLM agents.
        </h3>
        <SearchBar style={inputStyle} placeholder="Enter a theme" onSubmit={onSubmit} />
      <h2
        className="text-lg md:text-xl font-bold"
        style={{color: textColor}}
      >
          Examples
        </h2>
        <div className="grid">
            <ThemeThumbnail />
        </div>
    </div>
  );
}
