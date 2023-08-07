import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let arr = [1, 20, 30, 40, 50, 60, 4000, 8000];
  console.log(arr.length);
  //push  method adds a new element to an array (at the end):
  arr.push("i am deep");
  console.log(arr);
  //pop delet last element
  arr.pop();
  console.log(arr);
  //The join() method also joins all array elements into a string.
  arr.join("+");
  console.log(arr);
  //the shift() method removes the first array element and "shifts" all other elements to a lower index.
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.shift());
  //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
  const doil=[1,2,40,500,8000,9000];
  console.log(doil.unshift(10000));
  //Array elements can be deleted using the JavaScript operator delete.
   let arr11=[1,20,300,400];
   let arr23=["hello"];
   let arr45=arr11.concat(arr23);
   console.log(arr45);
   //The splice() method can be used to add new items to an array:
   //0 means how many elements remove
   let arr10=[1,20,300,400];
   arr10.splice(2, 0, "Lemon", "Kiwi","orang");
   console.log(arr10);
   //the slice() method slices out a piece of an array into a new array.
   console.log(arr10.slice(0));
   //The indexOf() method searches an array for an element value and returns its position.
   let fruite=["Banana", "Orange", "Apple", "Mango"]
   console.log("Apple");
   //Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
   const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
   console.log(fruits3.includes("Mango"));
   //The Array.keys() method returns an Array Iterator object with the keys of an array.
   console.log(arr10.keys());
   //The findIndex() method returns the index of the first array element that passes a test function.
  //  console.log(arr10.findIndex(1));
  // The sort() method sorts an array alphabetically:
  console.log(arr10.sort());
  return (
    <><h1>Monstar</h1></>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
