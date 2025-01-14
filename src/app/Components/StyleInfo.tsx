import StyleDetail from "./StyleDetail";

interface IStyleDetail {
    name: string
}

const details: IStyleDetail[] = [
    {
        name: "Primary Color"
    },
    {
        name: "Secondary Color"
    },
    {
        name: "Primary Action Color"
    },
    {
        name: "Secondary Action Color"
    },
    {
        name: "Primary Border Color"
    },
    {
        name: "Secondary Border Color"
    },
    {
        name: "Primary Font"
    },
    {
        name: "Secondary Font"
    }
]

export default function StyleInfo() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg p-6 bg-white">
        {details.map((detail,i) => <StyleDetail key={`${detail.name}-${i}`} color="white" label={detail.name}/>)}
    </div>
  );
}
