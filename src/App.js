import styled from "styled-components";
import Counter from "./components/counter/Counter";
import InputPassword from "./components/input/InputPassword";
import InputsEmail from "./components/input/InputsEmail";
import InputText from "./components/input/InputText";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <StyledApp>
      <Counter/>
      <Timer/>
      <Container>
        <InputsEmail/>
        <InputPassword/>
        <InputText/>
      </Container>
    </StyledApp>
  );
}

export default App;


const StyledApp = styled.div`
`
const Container = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  background-color: black;
  border: 3px solid rgb(1, 131, 40);
`;