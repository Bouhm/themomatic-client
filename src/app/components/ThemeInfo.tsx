import { useTheme } from "../hooks/useTheme";
import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./ui/Heading";
import SearchBar from "./ui/SearchBar";

type ThemeInfoProps = {
  onSubmit: (query: string) => void
}

export default function ThemeInfo({ onSubmit }: ThemeInfoProps) {
  const { themeConfig } = useTheme()
  const { title, description, customStyles, palette } = themeConfig!;

  return (
    <div 
      className="flex flex-col gap-4 background:none"
      style={{ ...JSON.parse(customStyles.background), color: palette.primaryText }}
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
      <div className="flex justify-center md:justify-normal gap-6 mb-6">
          <ThemeThumbnail />
      </div>
    </div>
  );
}
