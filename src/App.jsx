import { useState } from 'react'
import './App.css'

function App() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [sum, setSum] = useState(0);

  const handleInput1Change = (event) =>{
    const inputValue =parseInt(event.target.value)
 setInput1(inputValue)
   setSum(inputValue + input2)


  }


  const handleInput2Change = (event) =>{
    const inputValue =parseInt(event.target.value)
    setInput2(inputValue)
      setSum(inputValue + input1)
    
  }


  return (
    <>
      <input type="number" value={input1} onChange={handleInput1Change} />
      <input type="number" value={input2} onChange={handleInput2Change} />

      <div> جمع دو عدد : {sum}</div>
    </>
  )
}

export default App
