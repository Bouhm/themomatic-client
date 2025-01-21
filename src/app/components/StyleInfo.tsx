import { camelCaseToTitle } from "@/utils";
import StyleDetail from "./StyleDetail";
import Button from "./ui/Button";
import Container from "./Container";
import { useTheme } from "../hooks/useTheme";

export default function StyleInfo() {
    const { themeConfig } = useTheme();
    const { palette, customStyles } = themeConfig;

    return (
        <Container>
            <div 
                className="flex flex-wrap gap-6 p-6 md:min-h-96"
            >
                {Object.entries(palette).map((entry, i) => {
                    return <StyleDetail key={`${entry[0]}-${i}`} color={entry[1].toUpperCase()} label={camelCaseToTitle(entry[0])} />
                })}
                <StyleDetail text={customStyles.primaryFont} label="Primary Font" />
                <StyleDetail text={customStyles.secondaryFont} label="Secondary Font" />
            </div>
            <Button primary>Primary</Button>
            <Button>Secondary</Button>
        </Container>
    );
}
