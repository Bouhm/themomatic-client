import ThemeThumbnail from "./ThemeThumbnail";
import Heading from "./UI/Heading";
import SearchBar from "./UI/SearchBar";

export default function ThemeInfo() {
  return (
    <div className="flex flex-col">
        <Heading>
            Generate theme samples with AI
        </Heading>
        <SearchBar placeholder="Enter a theme" />
        <h3 className="g:-ml-2 lg:pl-2">
            Transform a concept into a website theme. Powered by LLM agents.
        </h3>
        <div className="grid">
            <ThemeThumbnail />
        </div>
    </div>
  );
}
