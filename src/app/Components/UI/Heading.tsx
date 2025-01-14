import { PropsWithChildren } from "react";

export default function Heading({ children }: PropsWithChildren) {
    return (
        <h1 className="inline-block text-2xl text-center md:text-left md:text-6xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            {children}
        </h1>
    )
}