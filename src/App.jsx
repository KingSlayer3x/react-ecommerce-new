import { useState, useEffect } from 'react';
import './App.css'

function App() {
 return (
  <div></div>
 );   
}
export default App;



// inside App return 
{/* <div>
      <button onClick={() => setShowCounter(!showCounter)}>{" "}Show Counter</button>
      {showCounter && (
        <Counter />
        )}
    </div> */}
// function Counter() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       console.log("Component Mounted");
//       return () => {
//         console.log("Component Unmounted");
//       }
//     },[])
//     useEffect(()=> {
//       console.log("component updated");
//     },[count]);
//   return(
//     <button onClick={() => setCount(count + 1)}>{count}</button>
//   )
// }


// capture mouse x

// const [x, setX] = useState(0);

//     useEffect(() => {
//       function handleMove(e) {
//         setX(e.clientX);
//       }
//       window.addEventListener("mousemove", handleMove);
//       // cleanup runs on unmount or dependency change
//       return () => {
//         window.removeEventListener("mousemove", handleMove);
//       };
//     },[]); // subscribe once
//   return (
//     <p>Mouse X: {x}</p>
//   )

// old way of fetching data, the new way is with tanstack query
// useEffect(() => {
//       async function fetchUsers() {
//         try{
//           const response = await fetch("https://jsonplaceholder.typicode.com/users");
//           const data = await response.json();
//           console.log(data);
//         } catch (err) {}
//       }
//       fetchUsers();
//     },[])
//     return (
//       <div>

//       </div>
//     )
// }