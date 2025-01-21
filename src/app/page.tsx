import Main from "./components/Main";
import { ThemeProvider } from "./hooks/useTheme";

export default function Home() {  
  return (
    <ThemeProvider>
      <div className="min-h-screen flex justify-center">
        <Main />
      </div>
    </ThemeProvider>
  );
}
