import Container from "./Container";
import Heading from "./ui/Heading";

export default function Loader() {
    return (
      <div
        className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm"
      >
        <Container
          classNames="w-full h-full flex flex-col justify-center align-middle"
        >
          <Heading>Loading...</Heading>
          <div
            className="w-20 h-20"
            style={{
              border: "16px solid #f3f3f3",
              borderTop: "16px solid black",
              borderRadius: "50%",
              animation: "spin 2s linear infinite"
            }}
          >

          </div>
        </Container>
      </div>
    );
  }
  