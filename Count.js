
import React, { useState } from "react";



function Increment() {
   const [add, setadd]= useState(0)
   
   function Reset(){
   const int_value = 0;
   }
   
    return(
        <>
           <h1>Count Increment and Decrement</h1> 
           <div className="Header">
           <h2>This is {add} Number</h2>
           <button onClick={()=> setadd(add + 1)}>+</button>
           <button onClick={()=> setadd(add - 1)}>-</button>
           <button onClick={()=> setadd(0)}>Reset</button>
           </div>

           </>
           
       
    
    )
}
export default Increment;