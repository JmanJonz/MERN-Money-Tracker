import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState(null);
  const [amount, setAmount] = useState(null);
  const [alreadyBeenSubmitted, setAlreadyBeenSubmitted] = useState(false);

  return (
    <section>
      <h1>Finance Tracker</h1>
      <form>
        <button onClick={(e) => {
          e.preventDefault();
          setInput("income")
        }}>Income</button>
        <button onClick={(e) => {
          e.preventDefault();
          setInput("expense")
        }}>Expense</button>
        <h2>Transaction Type: {input}</h2>
        <input onChange={(e)=>{
          setAmount(e.target.value)
        }} type='number'/>
        <button onClick={(e) => {
          e.preventDefault();
          setAlreadyBeenSubmitted(true);
        }}>Track</button>
        {alreadyBeenSubmitted ? <h2>{amount} Has Been Tracked!</h2> : <h2></h2>};
      </form>
    </section>
  )
}

export default App
