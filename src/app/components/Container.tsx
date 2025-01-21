import { PropsWithChildren } from "react";
import { useTheme } from "../hooks/useTheme";

type ContainerProps = {
  classNames?: string
} & PropsWithChildren

export default function Container({ classNames, children }: ContainerProps) {
  const { themeConfig } = useTheme();

  return (
    <div
      className={`p-4 ${classNames}`}
      style={JSON.parse(themeConfig.customStyles.container) ?? {}
    }>
      {children}
    </div>
  );
}
