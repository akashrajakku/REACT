import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-100"
    style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button 
        onClick={()=> setColor("red")}
        //onclick is a special function that expects a callback , we can also pass reference to onclick but that way we won't be able to pass parameters to our functions , so it is required to pass the above way 

        className="outline-none px-4 rounded-full py-1 text-white shadow-m" style={{backgroundColor: "red"}}>RED</button>

        <button 
        onClick={()=> setColor("blue")}
        className="outline-none px-4 rounded-full py-1 text-white shadow-m" style={{backgroundColor: "blue"}}>BLUE</button>

        <button 
        onClick={()=> setColor("pink")}
        className="outline-none px-4 rounded-full py-1 text-black shadow-m" style={{backgroundColor: "pink"}}>PINK</button>

        <button 
        onClick={()=> setColor("brown")}
        className="outline-none px-4 rounded-full py-1 text-white shadow-m" style={{backgroundColor: "brown"}}>BROWN</button>

        <button 
        onClick={()=> setColor("green")}
        className="outline-none px-4 rounded-full py-1 text-white shadow-m" style={{backgroundColor: "green"}}>GREEN</button>

        <button 
        onClick={()=> setColor("yellow")}
        className="outline-none px-4 rounded-full py-1 text-black shadow-m" style={{backgroundColor: "yellow"}}>YELLOW</button>

        <button 
        onClick={()=> setColor("black")}
        className="outline-none px-4 rounded-full py-1 text-white shadow-m" style={{backgroundColor: "black"}}>BLACK</button>

        <button 
        onClick={()=> setColor("violet")}
        className="outline-none px-4 rounded-full py-1 text-black shadow-m" style={{backgroundColor: "violet"}}>VIOLET</button>
     </div>
  </div>
</div>
  )
}

export default App
