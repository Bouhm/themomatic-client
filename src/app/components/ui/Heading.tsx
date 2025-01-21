import { useTheme } from "@/app/hooks/useTheme";
import { PropsWithChildren } from "react";

export default function Heading({ children }: PropsWithChildren) {
    const { themeConfig } = useTheme()

    return (
        <h1
            className="inline-block text-4xl text-center md:text-left md:text-6xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 background-color:none"
            style={{color: themeConfig.palette.primaryText, fontFamily: themeConfig.customStyles.primaryFont }}
        >
            {children}
        </h1>
    )
}