import { PropsWithChildren } from "react";
import { useTheme } from "../hooks/useTheme";
import Container from "./Container";

export default function Error({ children }: PropsWithChildren) {
  const { themeConfig } = useTheme();

  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm flex justify-center items-center text-center z-10"
    >
      <div
        className="fixed top-0 right-0 bottom-0 left-0 opacity-50"
        style={{ backgroundColor: themeConfig.palette.primary }}
      />
      <Container
        classNames="p-4 w-9/12 h-96 md:w-96 md:h-96 flex flex-col justify-center items-center z-10 relative"
      >
        {children}
      </Container>
    </div>
  );
}
