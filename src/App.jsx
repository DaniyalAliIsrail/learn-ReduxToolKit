import React, { useState } from "react"
import Child1 from "./components/Child1";
import { useSelector } from "react-redux";


function App() {

  const data = useSelector((c)=> c.show.value)
  
  return (
   <>
   <div>
    <h1>APP VALUE : {data} </h1>
    <Child1 />
 
   </div>
   </>
  )
}

export default App
