import React, {useState} from 'react'

function Usestatedemo() {

    const[title, setTitle] = useState("Welcome to React")
    const [btcolor, setbtColor] = useState("bg-blue-500")

    const clickHandler = ()=>{
        setbtColor("bg-orange-600")
        if(title == "Welcome to React")
        {
            setTitle("Welcome to Adarsh's code")
        }
        else{
            setTitle("Welcome to React")
        }
        
    }

  return (
    <>
        <div className='bg-slate-400 h-screen  '>
        <h2 className='text-black text-center pt-10 text-3xl'>{title}</h2>
        <div className='flex items-center justify-center mt-9'>
    
        <button className={` ${btcolor} hover:bg-blue-700 text-white font-bold py-2 px-4 `}  onClick={clickHandler}>
        Click here 
        </button>
        </div>
       
        </div>
        
    </>
    
  )
}

export default Usestatedemo