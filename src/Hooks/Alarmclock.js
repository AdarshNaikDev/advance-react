import React,{useState, useEffect} from "react";

const Alarmclock = () => {

   

    let time = new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', hour12:false});
    // console.log("type of time", typeof(time))
    const [evathtime, setevathtime] = useState(time)//system time
    const [inputtime, setInputtime] = useState("")
    const [clicked,setClicked] = useState(false)
    //const [alarm, setAlarm] = useState(false)
    const myname = "Adarsh"
    
    let userTime="";

    useEffect(()=>{
        console.log("useeffect triggered")
        if(inputtime == evathtime)
        {
             alert("alarm alert")
        }
        setInterval(updateTime, 60000)
        
    },[evathtime])

    function updateTime(){
        let ctime = new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', hour12:false});
        // let dtime = new Date().toLocaleTimeString('en-US')
        // date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
        setevathtime(ctime)

    
    }

    //setInterval(updateTime, 60000)
    //setInterval(checkAlarm, 30000)

    function updatectime(event){
        setInputtime(event.target.value)
        console.log(event.target.value)
        

    }
    
    function checkAlarm(){
        console.log(inputtime)
        //console.log(evathtime)
        if(inputtime == evathtime)
        {
             alert("alarm alert")
        }
        
    }
    
    

    function setAlarm(){
    
        console.log("ALarm set success",inputtime)
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

    return(
       <>
       {checkAlarm()}
       <div className="pt-52 h-screen bg-rose-500">
       <div className="flex items-center justify-center">
       <input type="time" value={inputtime} onChange={updatectime}></input>
       
       </div>
       <div className="items-center justify-center flex pt-5">
       <button className="bg-green-500 py-2 px-2 rounded-lg" onClick={setAlarm}>Set Alarm</button>
       </div>
       
       <h1 className="text-white text-center text-3xl pt-5">CURRENT TIME</h1>
        <h1 className="text-center font-bold text-2xl ">
        {evathtime}
        </h1>
        {clicked ? <h1> Alarm is set to {inputtime} </h1> : null}
        
        
       </div>

       
       
       </>
    )
}

export default Alarmclock;