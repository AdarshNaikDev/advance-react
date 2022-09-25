import React,{useState} from 'react'

function AddAndClear() {
    
    const myBioData = [
        {id:0, name:"Adarsh Naik", age: "23"},
        {id:1, name:"Manoj Kumar", age: "28"},
        {id:3, name:"Prasad Paterl", age: "34"},
        {id:4, name:"Bharath Bhatta", age: "74"}
        

    ]

    const [mydata, setMyData] = useState(myBioData)

    function deleteHandler(){
        setMyData([]);
    }

  return (
    <>
        <div className='h-screen bg-orange-400 items-center justify-center'>
        <div className='flex-col text-center py-5'>
        

        {mydata.map((vandeData)=>{
            return (<h1 key={vandeData.id}>Name: {vandeData.name} Age: {vandeData.age}</h1>)
        })}
         
        </div>
            
        <div className='flex items-center justify-center mt-5'>   
        <button className='bg-slate-600  text-white px-4 py-2 rounded-md ' onClick={deleteHandler}>
                click to delete
        </button>
        </div>
            
        </div>
    </>
  )
}

export default AddAndClear