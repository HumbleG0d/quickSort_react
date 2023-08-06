import { Button } from "./Button";

export function AddTodo(){
  return (
    <>
      <input type="text" className="input"/>
      <Button name={'Agregar'}/>
    </>
  )
}