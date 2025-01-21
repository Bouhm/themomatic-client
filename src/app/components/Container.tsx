import { PropsWithChildren } from "react";
import { useTheme } from "../hooks/useTheme";
import { tryParseJson } from "@/utils";

type ContainerProps = {
  classNames?: string
} & PropsWithChildren

export default function Container({ classNames, children }: ContainerProps) {
  const { themeConfig } = useTheme();

  return (
    <div
      className={`p-4 ${classNames}`}
      style={tryParseJson(themeConfig.customStyles.container) ?? {}
    }>
      {children}
    </div>
  );
}
