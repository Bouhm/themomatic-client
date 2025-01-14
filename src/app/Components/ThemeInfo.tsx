import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./UI/Heading";
import SearchBar from "./UI/SearchBar";

export default function ThemeInfo() {
  return (
    <div className="flex flex-col gap-4">
        <Heading>
            Generate theme samples with AI
        </Heading>
        <h3 className="text-xl md:min-h-44 md:text-2xl">
            Transform a concept into a website theme. Powered by LLM agents.
        </h3>
        <SearchBar placeholder="Enter a theme" />
        <h2 className="text-lg md:text-xl font-bold">
          Examples
        </h2>
        <div className="grid">
            <ThemeThumbnail />
        </div>
    </div>
  );
}
