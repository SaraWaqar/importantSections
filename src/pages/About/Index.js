import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { ExampleContext } from "../../context/exampleContext/Index";

const Index = () => {
  const {value, setValue} = useContext(ExampleContext);

  return (
    <Container>
 
      <h2>{value}</h2>
      <h2>About sara 1</h2>

    </Container>
  );
};

export default Index;
