import Image from "next/image";
import SearchBar from "./Components/UI/SearchBar";
import ThemeInfo from "./Components/ThemeInfo";
import StyleInfo from "./Components/StyleInfo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex w-full justify-center p-36">
        <div className="flex-auto w-3/5">
          <ThemeInfo />
        </div>
        <div className="flex-initial w-2/5">
          <StyleInfo />
        </div>
      </main>
    </div>
  );
}
