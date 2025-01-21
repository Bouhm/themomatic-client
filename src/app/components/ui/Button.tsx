import { useTheme } from "@/app/hooks/useTheme";
import { tryParseJson } from "@/utils";
import { PropsWithChildren } from "react";

type ButtonProps = {
    primary?: boolean
    onClick?: () => void
} & PropsWithChildren

export default function Button({ primary, onClick, children }: ButtonProps) {
    const { themeConfig } = useTheme();
    const buttonStyle = primary ? themeConfig.customStyles.primaryButton : themeConfig.customStyles.secondaryButton;
    const buttonColor = primary ? themeConfig.palette.primaryAction : themeConfig.palette.secondaryAction;
    const buttonStyles = { ...tryParseJson(buttonStyle), backgroundColor: buttonColor }

    function handleOnClick() {  
        if (onClick) {
            onClick();
        }
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