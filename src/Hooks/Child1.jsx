
import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import Child2 from "./Child2";
import { Dataa, SomeData } from "./Parent1";
import { DataObj } from "./Parent1";
const Child1 = ()=>{

    const fname = useContext(Dataa)
    const someData = useContext(SomeData)
    const dd = useContext(DataObj)

    return(
        <>
        <h1>
            Welcome to child one {fname}
            <Child2/>
            Displaying some data : {someData}

            simply trying to access {dd.namee}
        </h1>
        </>
    )

}

export default Child1;