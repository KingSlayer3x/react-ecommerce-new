import { useState, useEffect } from 'react';
import './App.css'

function App() {
    const [showCounter, setShowCounter] = useState(false);
    // mount > update > unmount
  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>{" "}Show Counter</button>
      {showCounter && (
        <Counter />
        )}
    </div>
  )
}

export default App;

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("Component Mounted");
      return () => {
        console.log("Component Unmounted");
      }
    },[])
    useEffect(()=> {
      console.log("component updated");
    },[count]);
  return(
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}