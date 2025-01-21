import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./ui/Heading";
import SearchBar from "./ui/SearchBar";

type ThemeInfoProps = {
  title: string
  description: string
  font: string
  inputStyle: string
  textColor: string
  onSubmit: (query: string) => void
}

export default function ThemeInfo({ title, description, font, inputStyle, textColor, onSubmit }: ThemeInfoProps) {
  const customStyle = { font }
  
  return (
    <div 
      className="flex flex-col gap-4 background:none"
      style={customStyle}
    >
      <Heading font={font} color={textColor}>
            {title}
        </Heading>
      <h3
        className="text-xl md:min-h-44 md:text-2xl"
        style={{color: textColor}}
      >
          {description}
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
