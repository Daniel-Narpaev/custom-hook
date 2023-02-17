import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

const InputsEmail = () => {
  const { validError, changeInput, value, emailChangeHandler } = useInput("");
  return (
      <div>
        {validError ? <GoodH2>good job</GoodH2> : <ErrorH2>error</ErrorH2>}
        <Input
          onChange={changeInput}
          value={value}
          onBlur={emailChangeHandler}
          placeholder="Введите email"/>
      </div>
  );
};

export default InputsEmail;

const GoodH2 = styled.h2`
  color: blue;
  margin-left: 20px;
`;
const ErrorH2 = styled.h2`
  color: #ff0202;
  margin-left: 20px;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #b6bbb6;
  margin-left: 20px;
  border-radius: 5px;
  padding: 6px;
  outline: none;
  border: none;
  font-size: 1.4rem;
  background-color: rgb(199, 213, 228, 0.584);
  border: 1px solid rgb(179, 179, 179);

  &::placeholder{
    color: black;
  }

  &:focus {
    background-color: white;
  }
`;
