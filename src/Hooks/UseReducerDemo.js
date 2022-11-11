import React,{useReducer} from "react";

const UseReducerDemo = ()=>{
    const reducer = (state,action)=>{
        //console.log(action)
        if(action.type === "Increment")
        {
            return state+1
        }
        else
        if(action.type === "Decrement")
        {
            return state-1
        }
        

        
    }
    let initialstate = 0
    const [ state, dispatch] = useReducer(reducer, initialstate)

   

    return (
        <>
            <div className="h-screen bg-sky-300 pt-12 text-center">
                

                <h1>Add Number of Biostimulant: {state}</h1>
                <br></br>
                <br></br>
                <div className="flex items-center justify-center space-x-5">
                
                <div className="right-10">
                <button onClick={()=>dispatch({type:"Decrement"})}  className="text-4xl bg-red-600 px-5 py-2 hover:bg-red-500" >-</button>
                </div>
                <div className="left-10">
                <button onClick={()=>dispatch({type: "Increment"})} className="text-4xl bg-green-600 px-5 py-2 hover:bg-green-500 ">+</button>
                </div>
                </div>
                
            
              
            </div>
        </>
    )
}

export default UseReducerDemo