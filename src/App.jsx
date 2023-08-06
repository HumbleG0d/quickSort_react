import './App.css'
import './css/addTodo.css'
import './css/square.css'
import { AddTodo } from './components/AddTodo'
import { Button } from './components/Button'
import { useState } from 'react'
import { Square } from './components/Square'
import { quickSort } from './js/quick_sort.js'

function App() {

  const [arr , setArr] = useState([])

  const addNumer = (n) => {
    setArr((prevArr) => [
      ...prevArr,
      {id : prevArr.length , value : n },
    ])
  }

  const sortArray = (orderType) => {
    const sortArr = [...arr]
    quickSort(sortArr , 0 , sortArr.length - 1 , orderType)
    setArr(sortArr)
  }

  return (
    <>
      <section className='bar'>
        <AddTodo addNumber={addNumer} />
      </section>
      <section className='buttons'>
        <Button 
          name={'Ascendente'}
          handelFunction={() => {sortArray('ascendente')}}
        />
        <Button 
          name={'Descendente'}
          handelFunction={() => {sortArray('descendente')}}
        />
      </section>
      <section className='list'>
        {arr.map((n) => (
          <Square key={n.id} number={n.value}/>
        ))}
      </section>
    </>
  )
}

export default App
