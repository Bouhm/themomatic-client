import ThemeInfo from "./Components/ThemeInfo";
import StyleInfo from "./Components/StyleInfo";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <main className="flex flex-wrap md:flex-nowrap max-w-screen-2xl md:max-w-screen-full">
        <div className="flex-auto w-full md:w-3/5 p-18 md:pt-28 md:pl-28 md:pr-8">
          <ThemeInfo />
        </div>
        <div className="flex-initial w-full md:w-2/5 p-18 md:pt-28 md:pr-28 md:pl-8">
          <StyleInfo />
        </div>
      </main>
    </div>
  );
}
