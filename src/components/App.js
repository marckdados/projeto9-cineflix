import Topo from "./Topo";
import styled from "styled-components";
import Cartaz from "./Cartaz";

export default function App() {
  return (
    <Container>
      <Topo />
      <Cartaz />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;
