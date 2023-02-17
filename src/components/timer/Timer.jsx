import styled from "styled-components"
import { useTimer } from "../../hooks/useTimer"

const Timer = () => {
 const { minutes, seconds, isTimerValid, handleReset, handleStart, handleStop} = useTimer(20)

  return (
    <StyledDiv>
        {isTimerValid ? (
        <StyledBtn onClick={handleStop}>stop</StyledBtn>
        ) : (
            <StyledBtn onClick={handleStart}>start</StyledBtn>
        )}
        <Time>{minutes}</Time>
        <Time>:</Time>
        <Time>{seconds}</Time>        
        <StyledBtn onClick={handleReset}>reset</StyledBtn>
    </StyledDiv>  
    )
}

export default Timer
  
const StyledDiv = styled.div`
    width: 700px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 3px solid blue;
    background-color: #000000;
    margin: 10px auto;
`
const Time = styled.span`
    color: white;
    font-size: 1.5rem;
`
const StyledBtn = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f6f6ff;
    color: #000000;
    border: none;
    /* border-radius: 15px; */
    font-size: 1.1rem;
`