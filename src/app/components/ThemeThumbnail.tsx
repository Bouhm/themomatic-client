import Container from "./Container";
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
      classNames="rounded-xl bg-white w-28 h-28 relative overflow-hidden"
    >
      <Image
        className="absolute top-0 right-0 bottom-0 left-0 object-cover cursor-pointer"
        src={`/examples/${imgName}.webp`}
        alt={imgName}
        width="128" height="128"
        onClick={handleClick}
      />
    </Container>
  );
}
