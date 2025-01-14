import StyleDetail from "./StyleDetail";
import Button from "./UI/Button";

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

export default function StyleInfo() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg p-6 md:min-h-96 bg-white">
        {details.map((detail,i) => <StyleDetail key={`${detail.name}-${i}`} color="white" label={detail.name}/>)}
        <Button primary>Primary</Button>
        <Button>Secondary</Button>
    </div>
  );
}
