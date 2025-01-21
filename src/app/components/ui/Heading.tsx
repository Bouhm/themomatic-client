import { PropsWithChildren } from "react";

type HeadingProps = {
    color: string
    font: string
} & PropsWithChildren

export default function Heading({ color, font, children }: HeadingProps) {
    return (
        <h1
            className="inline-block text-4xl text-center md:text-left md:text-6xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 background-color:none"
            style={{color, fontFamily: font }}
        >
            {children}
        </h1>
    )
}