import Container from "./ui/Container";
import Image from "next/image";

type ThemeThumbnailProps = {
  imgName: string
  onClick: (name: string) => void
}

export default function ThemeThumbnail({ imgName, onClick }: ThemeThumbnailProps) {
  function handleClick() {
    onClick(imgName);
  }

  return (
    <Container
      classNames="flex-initial rounded-xl w-24 sm:w-28 relative overflow-hidden aspect-square"
    >
      <Image
        className="absolute top-0 right-0 bottom-0 left-0 cursor-pointer object-cover"
        src={`/examples/${imgName}.webp`}
        alt={imgName}
        width="128" height="128"
        onClick={handleClick}
      />
    </Container>
  );
}
