import { useEffect, useState } from "react"

export const useTimer = (time) => {
  const [timer, setTimer] = useState(time)
  const [isTimerValid, setIsTimerValid] = useState(false)

  const getPadTime = (time) => time.toString().padStart(2, "0")   

    const minutes = getPadTime(Math.floor(timer / 60));
    const seconds = getPadTime(timer - minutes * 60)

    useEffect(()=>{
        const interval = setInterval(()=>{
            isTimerValid &&
              setTimer((timer) => (timer >= 1 ? timer - 1 : 0))
        }, 1000)
        if (timer === 0) setIsTimerValid(false)
        return ()=>{
            clearInterval(interval)
        }
    }, [isTimerValid, timer])
   const handleStart = ()=>{
    setIsTimerValid(true)
   }
   const handleStop = ()=>{
    setIsTimerValid(false)
   }
   const handleReset = ()=>{
    setIsTimerValid(false)
    setTimer(time)
   }

  return {
    minutes,
    seconds,
    handleReset,
    handleStart,
    handleStop,
    isTimerValid
  }
}

