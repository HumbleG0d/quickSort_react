export function Button({ name, handelFunction}){
  return(
    <button 
      className={`b_${name}`} 
      onClick={handelFunction}
    >{name}</button>
  )
}