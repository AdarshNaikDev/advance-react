import React from 'react'

function ChildToParent(props) {
  return (
   <>
    <div>
        Child Component
        <hr></hr>
        <button onClick={()=>{
            props.changeText('Adarsh')
        }}>Click here to see the magic</button>
    </div>
   </>
  )
}

export default ChildToParent