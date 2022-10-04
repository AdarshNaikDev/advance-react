import { useState, useEffect } from 'react';

const HarshaCode = () => {
    let timeWithoutSeconds = new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', hour12:false})
    const [todoList, setTodoList] = useState("");
    const [systemTime2, setSystemTime2] = useState(timeWithoutSeconds);
    const [clicked,setClicked] = useState(false);
    const [inputtime, setInputtime] = useState("")
    let  userTime="";

    useEffect(() => {
        console.log("useeffect triggered")
        console.log(systemTime2)    
        if(inputtime == systemTime2)
        {
             alert("alarm alert")
        }
        setInterval(updateTime, 2000)
        
    },[systemTime2])

    function updateTime(){
        let ctime = new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', hour12:false});
        //let newSystemTime = new Date().toLocaleTimeString();
       //setSystemTime(newSystemTime)
        setSystemTime2(ctime)

    
    }

    function setAlarm(){
    
        console.log("Meeting set success",inputtime)
        userTime = inputtime
        
        let newval = inputtime.split("")
        if(newval.length >0)
        {
            setClicked(true)
        }
        else{
            setClicked(false)
        }
        
    }

     
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        const data = e.target,
        newTodo = {
            taskTitle: data.taskTitle.value,
            date:      data.date.value,
            time:      data.time.value
        }
        setInputtime(newTodo.time)
        console.log("Meeting set success",inputtime)
        setAlarm();

        // let newTodo = {
        //     taskTitle: e.target.taskTitle.value,
        //     date: e.target.value,
        //     time: e.target.value
        // }

       setTodoList([...todoList, newTodo]);
      
    }

    const deleteTodo = (taskTitle) => {
    
       // splice(indexNumber, howmanydelete)
       // todoList.splice(e.target.value, 1)
    
    const task = todoList.filter( (x) => {
             return x.taskTitle !== taskTitle
        })
        console.log('updatedTask ===> ', task);
        setTodoList(task);
    }

    return(
       
     <div>
        <form onSubmit = {handleSubmit}>
         <label>Title:</label>
         <input type="text" className="form-control" name="taskTitle"></input>
         <br></br>
         <label>Date:</label>
         <input type="date" className="form-control" name="date" ></input>
         <br></br>
         <label>Time:</label>
         <input type="time" className="form-control" name="time" ></input>
         <br></br>
         <button type="submit" className="btn btn-success" >SUBMIT</button>
        </form>
        <ul>
            {
               todoList.length > 0 && todoList.map((task, index) => {
                    return(
                    <li key = {index}>
                        {task.taskTitle} at {task.time}, date {task.date}

                        <button type="button"  className= "btn btn-danger" onClick={() => deleteTodo(task.taskTitle)} value={index}> Delete </button>

                    </li>
                    )
                })
            }
        </ul>
    </div>
       
    )
}

export default HarshaCode;