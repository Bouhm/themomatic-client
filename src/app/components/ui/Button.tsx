import { PropsWithChildren } from "react";

type ButtonProps = {
    primary?: boolean
    colors: string[]
    style: string
} & PropsWithChildren

export default function Button({ primary, colors, style, children }: ButtonProps) {
    const buttonStyles = { ...JSON.parse(style), backgroundColor: colors[+!!!primary] }

    function handleOnClick() {  
    }

    return (
        <button 
            className="text-center min-w-28 p-2 m-4"
            style={buttonStyles}
            onClick={handleOnClick}
        >
            <span>
                {children}
            </span>
        </button>
    )
}