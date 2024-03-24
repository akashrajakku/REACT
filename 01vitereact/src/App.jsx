
import Test from './Test';

function App() {

  const userName='Akash Raj is my name'
  
  return (
    
    /*
    <Test />

    <h1>hi</h1> // this code gives an error "Adjacent JSX elements must be wrapped in an enclosing tag. " 

    to solve above problem we use fragments concept.. fragment is nothing but an empty div , since we can render one html component at a time , so we render that fragment and bundle every other required html tags inside that fragment */

    /*

    Best Practices:

    1. Always save file name starting with capital letter
    2. Keep component function first letter capital 
    3. During import keep first letter capital . some library may give error some may not, but it is best  practice
    keep the file extension .jsx while working in vite .
    */

    
/*
##imp for interview

    {userName}</h1> , here username wala part is called evaluated expression, mtlb yahan hum js ni  blki js ka evaluated expression likhte h , koi if else wagairah y koi v evaluation ni kr skte 
    */
    <>
      <h1>Intro: {userName}</h1>
      <Test />
      <button>This is a button</button>
      <h2>This is the fourth html component </h2>

    </>


  )
}

export default App
