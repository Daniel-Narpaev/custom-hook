import { useState } from "react"

export const useInput = (initialValue)=>{
    const [value, setValue] = useState(initialValue)
    const [validError, setValidError] = useState(false)

    const changeInput = (e) => {
      setValue(e.target.value)
    }
    const emailChangeHandler = () => {
      setValidError(value.includes("@"))
    }
    const passwordChangeHandler = () => {
      setValidError(value.trim().length >= 5)
      }
      const textChangeHandler = () => {
        setValidError(value.trim().length >= 7 )
      }
   return {
    value,
    validError,
    changeInput,
    emailChangeHandler,
    passwordChangeHandler,
    textChangeHandler,
   }   
}