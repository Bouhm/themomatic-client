import { PropsWithChildren } from "react";

type ContainerProps = {
  style?: Record<string, number | string>
  classNames?: string
} & PropsWithChildren

export default function Container({ style, classNames, children }: ContainerProps) {
    return (
      <div className={`p-4 ${classNames}`} style={style ?? {}}>
        {children}
      </div>
    );
}
