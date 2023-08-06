export function Button({name}){
  return(
    <button className={`b_${name}`} >{name}</button>
  )
}