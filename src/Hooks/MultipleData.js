import React, { useState } from 'react'

function MultipleData() {
    let userNames = "";
    let dobs = "";
    let times = "";
    let defaultarr = []
    const [userInfo, setuserInfo] = useState({
        userName: "",
        dob: "",
        time: ""
    })
    console.log(userNames)
    function saveHandler() {
        setuserInfo((prev) => {
            if (userNames !== "") {
                prev.userName = userNames
            }
            if (dobs !== "") {
                prev.dob = dobs
            }
            if (times !== "") {
                prev.time = times
            }
            let oneObj = { ...prev }
            defaultarr.push(oneObj)
            console.log(defaultarr)
            return { ...prev }


        })


    }
    console.log(userInfo)
    return (
        <>

            <div>
                <input type="text" placeholder='Name'
                    onChange={(event) => userNames = event.target.value}
                />
                <br></br>
                <br></br>
                <input type="date" placeholder='Date of Birth'
                    onChange={(event) => dobs = event.target.value}
                // onChange={(event)=>
                //     setuserInfo((prev)=> ({...prev, dob:event.target.value}))
                //     }
                />
                <br></br>
                <br></br>
                <input type="time" placeholder='Enter time'
                    onChange={(event) => times = event.target.value}
                // onChange={(event)=>
                //     setuserInfo((prev)=> ({...prev, time:event.target.value}))
                //     }
                />
                <br></br>
                <br></br>
                <button className='bg-green-500 px-5 py-2 rounded-xl' onClick={saveHandler}>Save</button>
                

                <ul>
                    {defaultarr.map((data) => {
                        return <li>{data.userName}</li>
                        {/* <li>{data.dob}</li>
                         <li>{data.time}</li> */}
                    })}
                </ul>
            </div>

        </>



    )
}

export default MultipleData