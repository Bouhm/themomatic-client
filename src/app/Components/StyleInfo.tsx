import { camelCaseToTitle } from "@/utils";
import { IPalette } from "../data/interfaces";
import StyleDetail from "./StyleDetail";
import Button from "./ui/Button";

type StyleInfoProps = {
    palette: IPalette
    containerStyle: string
    buttonStyle: string
}

export default function StyleInfo({ palette, containerStyle, buttonStyle }: StyleInfoProps) {
    const { secondaryColor, primaryActionColor, secondaryActionColor } = palette;
    const buttonColors = [primaryActionColor, secondaryActionColor];
    const style = { ...JSON.parse(containerStyle ?? ''), backgroundColor: secondaryColor }

    return (
        <div className="p-4" style={style}>
            <div 
                className="grid grid-cols-2 p-6 md:min-h-96"
            >
                {Object.entries(palette).map((entry, i) => {
                    return <StyleDetail key={`${entry[0]}-${i}`} color={entry[1].toUpperCase()} label={camelCaseToTitle(entry[0])} />
                })}
            </div>
            <Button colors={buttonColors} style={buttonStyle} primary>Copy</Button>
            <Button colors={buttonColors} style={buttonStyle}>Clear</Button>
        </div>
    );
}
