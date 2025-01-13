import StyleDetail from "./StyleDetail";

interface IStyleDetail {
    name: string
}

const details: IStyleDetail[] = [
    {
        name: "Background Color"
    },
    {
        name: "Primary Color"
    },
    {
        name: "Primary Action Color"
    },
    {
        name: "Primary Border Color"
    },
    {
        name: "Primary Font"
    },
    {
        name: "Secondary Color"
    },
    {
        name: "Secondary Action Color"
    },
    {
        name: "Secondary Action Color"
    },
    {
        name: "Secondary Font"
    }
]

export default function StyleInfo() {
  return (
    <div className="grid rounded-lg bg-white">
        {details.map((detail,i) => <StyleDetail key={`${detail.name}-${i}`} color="white" label={detail.name}/>)}
    </div>
  );
}
