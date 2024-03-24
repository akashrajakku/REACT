import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [countervalue, setCountervalue] = useState(0) 
  //setCountervalue ek state hai aur hr state apne aap me ek function h aur wo ek callback expect krta hai to niche humne ek callback likha hai countervalue naam ka jo humare counter k value ko upgrade kr rha
  
  // agr hum upr let ki jgh const likhein tb v same kaam hoga , kyunki array ko agr humne const bna diya to uska ye mtlb ni hai ki hum usme change ni kr skte
  /*
const addValue = () => {
   countervalue=countervalue+1;
   setCountervalue(countervalue)
}
   */
   /* 
   above code succeded in updating variable value but at the same time failed to update the UI of the wepage , ie counter is being constantly updated but UI updation is not there. That's the point where React comes in, React reacts to the updation of variable in UI
   
   In order to solve above problem we make use of various hooks in React, hooks does the simple work, it identifies the variable that is being updated and update the value at every place in the dom*/


const removeValue = () => {
  countervalue=countervalue-1;
  setCountervalue(countervalue)
}

/*
if we want to update values as per our wish we can't do 

below code will only update value by 1 due to diffing algo of react where it updates dom in batch form and will see ki hr line ek hi kaam kr rhi counter ko update krne ka to counter ek hi bar update hoga

const addValue = () => {
  //countervalue=countervalue+1;
  setCountervalue(countervalue+1)
  setCountervalue(countervalue+1)
  setCountervalue(countervalue+1)
  setCountervalue(countervalue+1)
}

instead we can do:
below code will update value +4 at a time 


const addValue = () => {
  //countervalue=countervalue+1;
  setCountervalue(countervalue => countervalue+1)
  setCountervalue(countervalue => countervalue+1)
  setCountervalue(countervalue => countervalue+1)
  setCountervalue(countervalue => countervalue+1)
}
*/






/*
1. make remove element code
should not go below zero*/ 

  return (
    <>
     
     <h1>Counter Project</h1>
     <h2>Counter Value: {countervalue}</h2>
     <button 
     onClick={addValue}>Add Value</button>
     <br />
     <h3>Counter value is {countervalue}</h3>
     <button
     onClick={removeValue}>Remove Value</button>
     <h4>Counter value is updated here also: {countervalue}</h4>
    </>
  )
}

export default App
