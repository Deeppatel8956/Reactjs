import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor]=useState('olive');
  const Red=()=>{
    setColor('red')
  }
  const Orange=()=>{
    setColor('orange')
  }
  const Black=()=>{
    setColor('black')
  }
  const Blue=()=>{
    setColor('blue')
  }
  const Yellow=()=>{
    setColor('yellow')
  }
  const Ged=()=>{
    setColor('grey')
  }
  const God=()=>{
    setColor('green')
  }
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    {/* <div class="flex">
    <div class="shadow-md ..."><div class="flex-none w-14 h-14">
    01
  </div>
  </div>
  <div class="flex-initial w-64 h-14 bg-sky-500/100">
    02
  </div>
  <div class="flex-initial w-32 h-14">
    03
  </div>
</div> */}
      <div className="width-screen  h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 mb-8 inset-x-0 px-2">
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}} onClick={Red}>red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}onClick={God}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}} onClick={Blue}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'grey'}}onClick={Ged}>Grey</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}
          onClick={Black}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'yellow'}} onClick={Yellow}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}} onClick={Orange}>Orange</button>
          </div></div>
      </div>
   
    </>
  )
}

export default App
