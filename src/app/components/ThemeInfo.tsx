import { useTheme } from "../hooks/useTheme";
import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./ui/Heading";
import SearchBar from "./ui/SearchBar";
import cptheme from "../data/cyberpunk.json";
import htheme from "../data/halloween.json";
import satheme from "../data/swissalps.json";

type ThemeInfoProps = {
  onSubmit: (query: string) => void
}

const examples = ["halloween", "cyberpunk", "swissalps"];

export default function ThemeInfo({ onSubmit }: ThemeInfoProps) {
  const { themeConfig, setThemeConfig } = useTheme()
  const { title, description, palette } = themeConfig!;

  function handleClickExample(example: string) {
    switch (example) {
      case "halloween":
        setThemeConfig(htheme);
        break;
      case "cyberpunk":
        setThemeConfig(cptheme);
        break;
      case "swissalps":
        setThemeConfig(satheme);
        break;
      default:
        break;
    }
  }

  return (
    <div 
      className="flex flex-col gap-4 background:none"
      style={{ color: palette.primaryText }}
    >
      <Heading>
        {title}
      </Heading>
      <h3
        className="text-xl md:min-h-44 md:text-2xl"
      >
        {description}
      </h3>
      <SearchBar placeholder="Enter a theme" onSubmit={onSubmit} />
      <h2
        className="text-lg md:text-xl font-bold mt-6"
      >
        Examples
      </h2>
      <div className="flex gap-6 mb-6">
        {examples.map((example) => {
          return <ThemeThumbnail key={example} imgName={example} onClick={() => handleClickExample(example)} />
        })}
      </div>
    </div>
  );
}
