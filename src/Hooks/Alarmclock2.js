import React,{useState, useEffect} from "react";

const Alarmclock2 = () => {

   
    let time = new Date().toLocaleTimeString()
    let timeWithoutSeconds = new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', hour12:false})
    //let time = new Date().toLocaleTimeString('en-US', {hour:'2-digit', minute:'2-digit', hour12:false});
    // console.log("type of time", typeof(time))
    const [systemTime, setSystemTime] = useState(time)//system time
    const [systemTime2, setSystemTime2] = useState(timeWithoutSeconds)
    const [inputtime, setInputtime] = useState("")
    const [clicked,setClicked] = useState(false)
    //const [alarm, setAlarm] = useState(false)
    const myname = "Adarsh"
    
    let userTime="";

    useEffect(()=>{
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
        let newSystemTime = new Date().toLocaleTimeString();
       
        setSystemTime(newSystemTime)
        setSystemTime2(ctime)

    
    }


    function updateCtime(event){
        setInputtime(event.target.value)
        console.log(event.target.value)
        

    }
    
    function checkAlarm(){
        console.log("check alarm function",inputtime)
        //console.log(systemTIme)
        // if(inputtime == systemTime)
        // {
        //      alert("alarm alert")
        // }
        
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
       {/* {checkAlarm()} */}
       <div className="pt-52 h-screen bg-rose-500">
       <div className="flex items-center justify-center">
       <input type="time" value={inputtime} onChange={updateCtime}></input>
       
       </div>
       <div className="items-center justify-center flex pt-5">
       <button className="bg-green-500 py-2 px-2 rounded-lg" onClick={setAlarm}>Set Alarm</button>
       </div>
       
       <h1 className="text-white text-center text-3xl pt-5">CURRENT SYSTEM TIME</h1>
        <h1 className="text-center font-bold text-2xl ">
        {systemTime}
        </h1>
        {clicked ? <h1> Alarm is set to {inputtime} </h1> : null}
        
        
       </div>

       
       
       </>
    )
}

export default Alarmclock2;