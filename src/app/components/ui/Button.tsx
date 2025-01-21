import { useTheme } from "@/app/hooks/useTheme";
import { PropsWithChildren } from "react";

type ButtonProps = {
    primary?: boolean
} & PropsWithChildren

export default function Button({ primary, children }: ButtonProps) {
    const { themeConfig } = useTheme();
    const buttonStyle = primary ? themeConfig.customStyles.primaryButton : themeConfig.customStyles.secondaryButton;
    const buttonColor = primary ? themeConfig.palette.primaryAction : themeConfig.palette.secondaryAction;
    const buttonStyles = { ...JSON.parse(buttonStyle), backgroundColor: buttonColor }

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