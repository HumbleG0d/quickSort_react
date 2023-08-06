import { Button } from "./Button";
import { useState } from "react";

export function AddTodo({ addNumber }){

  const [number , setNumber] = useState('')

  const changeValue = (e) => {
    const input_value = e.target.value
    setNumber(input_value === '' ? '' : parseInt(input_value))
  }

  const handelClick = () => {
    if(!isNaN(number)){
      addNumber(number)
    }
    setNumber('')
  }

  return (
    <>
      <input 
        type="text" 
        className="input"
        value={number === '' ? '' : number}
        onChange={changeValue}
      />
      <Button 
        name={'Agregar'}
        handelFunction={handelClick}
      />
    </>
  )
}