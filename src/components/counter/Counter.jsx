import { useCounter } from '../../hooks/useCounter'
import styled from "styled-components"

const Counter = () => {
    const {count, increment, decrement, reset} = useCounter()
  return (
    <CounterConteiner>
        <StyledBtn onClick={increment}>increment</StyledBtn>
        <Time>{count}</Time>
        <StyledBtn onClick={decrement}>decrement</StyledBtn>
        <StyledBtn onClick={reset}>reset</StyledBtn>
        
    </CounterConteiner>
  )
}

export default Counter

const CounterConteiner = styled.div`
    width: 700px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    border: 2px solid red;
    background-color: #000000;
    margin: 50px auto;
`
const Time = styled.span`
    color: white;
    font-size: 1.5rem;
`
const StyledBtn = styled.button`
    width: 130px;
    height: 30px;
    background-color: #f6f6ff;
    color: #000000;
    border: none;
    font-size: 1.1rem;
`