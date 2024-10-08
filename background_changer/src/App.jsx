import { useState } from 'react'


function App() {
  let [color, setColor ] = useState("cyan");

  return (
    <div className="w-full h-screen duration-100"
    style={{backgroundColor :color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2 ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"red"}}>
            Red</button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"yellow"}}>
            yellow</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"blue"}}>
            blue</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"green"}}>
            green</button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"lavender"}}>
            lavender</button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"olive"}}>
            olive</button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"purple"}}>
            purple</button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"pink"}}>
            pink</button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-xl "
            style={{backgroundColor:"white"}}>
            white</button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-xl "
            style={{backgroundColor:"black"}}>
            black</button>
        </div>
      </div>
    </div>
  )
}

export default App
