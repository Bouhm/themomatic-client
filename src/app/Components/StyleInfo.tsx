import StyleDetail from "./StyleDetail";
import Button from "./ui/Button";

interface IStyleDetail {
    name: string
}

const details: IStyleDetail[] = [
    {
        name: "Primary"
    },
    {
        name: "Secondary"
    },
    {
        name: "Primary Action"
    },
    {
        name: "Secondary Action"
    },
    {
        name: "Primary Border"
    },
    {
        name: "Secondary Border"
    },
    {
        name: "Primary Font"
    },
    {
        name: "Secondary Font"
    }
]

type StyleInfoProps = {
    color: string
    containerStyle: string
    buttonStyle: string
}

export default function StyleInfo({ color, containerStyle, buttonStyle }: StyleInfoProps) {
    const style = { ...JSON.parse(containerStyle ?? ''), backgroundColor: color }

    return (
    <div 
        className="grid grid-cols-2 gap-4 p-6 md:min-h-96"
        style={style}
    >
        {details.map((detail,i) => <StyleDetail key={`${detail.name}-${i}`} color="white" label={detail.name}/>)}
        <Button style={buttonStyle} primary>Primary</Button>
        <Button style={buttonStyle} >Secondary</Button>
    </div>
    );
}
