import { useTheme } from "../hooks/useTheme";
import Container from "./Container";

type ErrorProps = {
  error: string
}

export default function Error({ error }: ErrorProps) {
  const { themeConfig } = useTheme();

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        className="fixed top-0 right-0 bottom-0 left-0 opacity-50"
        style={{ backgroundColor: themeConfig.palette.primary }}
      />
      <Container
        classNames="w-full h-full md:w-96 md:h-96 flex flex-col justify-center items-center z-10"
      >
        <h2
          className="text-2xl m-4"
          style={{ color: themeConfig.palette.secondaryText, fontFamily: themeConfig.customStyles.primaryFont }}
        >
          {error}
        </h2>
      </Container>
    </div>
  );
}
