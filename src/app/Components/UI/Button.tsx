import { PropsWithChildren } from "react";

type ButtonProps = {
    primary?: boolean
} & PropsWithChildren

export default function Button({  primary, children }: ButtonProps) {
    const buttonStyle = primary ? 'bg-white border-black' : 'bg-black border-white'

    return (
        <button className={`rounded-full border-solid border-4 text-center ${buttonStyle}`}>
            {children}
        </button>
    )
}