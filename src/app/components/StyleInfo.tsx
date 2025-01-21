import { camelCaseToTitle } from "@/utils";
import { IPalette } from "../data/interfaces";
import StyleDetail from "./StyleDetail";
import Button from "./ui/Button";
import { CSSProperties } from "react";


type StyleInfoProps = {
    palette: IPalette
    containerStyle: string
    buttonStyles: string[]
}

export default function StyleInfo({ palette, containerStyle, buttonStyles }: StyleInfoProps) {
    const { secondary, primaryAction, secondaryAction } = palette;
    const buttonColors = [primaryAction, secondaryAction];
    const style = { ...JSON.parse(containerStyle), backgroundColor: secondary } as CSSProperties;

    return (
        <div className="p-4" style={style}>
            <div 
                className="grid grid-cols-2 p-6 md:min-h-96"
            >
                {Object.entries(palette).map((entry, i) => {
                    return <StyleDetail key={`${entry[0]}-${i}`} color={entry[1].toUpperCase()} label={camelCaseToTitle(entry[0])} />
                })}
            </div>
            <Button colors={buttonColors} style={buttonStyles[0]} primary>Copy</Button>
            <Button colors={buttonColors} style={buttonStyles[1]}>Clear</Button>
        </div>
    );
}
