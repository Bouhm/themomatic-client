import { PropsWithChildren } from "react";

type HeadingProps = {
    color: string
} & PropsWithChildren

export default function Heading({ color, children }: HeadingProps) {
    return (
        <h1
            className="inline-block text-4xl text-center md:text-left md:text-6xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
            style={{color}}
        >
            {children}
        </h1>
    )
}