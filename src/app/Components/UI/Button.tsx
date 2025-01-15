import { PropsWithChildren } from "react";

type ButtonProps = {
    primary?: boolean
    style: string
} & PropsWithChildren

export default function Button({ primary, style, children }: ButtonProps) {
    const buttonClassNames = primary ? 'bg-white border-black' : 'bg-black border-white'

    return (
        <button 
            className={`text-center ${buttonClassNames}`}
            style={style ? JSON.parse(style) : {}}
        >
            {children}
        </button>
    )
}