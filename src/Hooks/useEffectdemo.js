import React, {useState, useEffect} from "react";

const UseEffectdemo = ()=>{
    
    const[number, setNumber] = useState(1)
    useEffect(()=>{
        console.log("use effect got executed")

    },[number])

    return (
        <>
          <div className="h-screen bg-slate-300">
            <h1>Number of times you clicked the button {number}</h1>
          <button className="bg-green-600 py-2 px-3 mt-4" onClick={()=>{setNumber(number + 1)}}>Click me</button>
          </div>
          
        </>
    )

}

export default UseEffectdemo