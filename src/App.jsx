import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let a = 95;
  console.log(a);

  // const test=()=>{
  //   console.log("my test is good");
  // }
  // test();

  // let demo=(name)=>{
  //   console.log("my demo is name",name);
  // }
  // demo("hero");
  // react is variable define is let and const

  let arr = ["deep", "good"]
  for (let data in arr) {
    console.log(data);
    // console.log(arr[data]);
  }
  for (let mydata of arr) {
    console.log(mydata);
  }
  // arr.forEach(element => {
  //   console.log(arr[element]);
  // });

  // let obj = { "name": "deep", "age": 30 }
  // for (let da in obj) {
  //   console.log(da);
  // }
  // Object.entries(obj).map((ele) => {
  //   console.log(ele);
  // })

  //
  let arr1=["apple","cow","ceo","boss"];


  //destrucring

  let bn=[1,2,45,3,56];
  function sum(a,c,v,m,b) {
    return a+c+v+m+b
  }
  console.log(sum(...bn));

  return (
    <>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas repudiandae esse odit ad quis quos in vero quae cum cupiditate voluptate, ducimus deleniti quo quod debitis, ab atque facilis?</p>
    </>
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
