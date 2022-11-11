import React from "react";
import { createContext } from "react";
import Child1 from "./Child1";
import Child3 from "./Child3";


const Dataa = createContext();
const SomeData = createContext();
const DataObj = createContext();

const Parent1 = ()=>{
    
    const someObj={
        namee:"Adarsh",
        education: "BE",
        technology: "React"
    }
  

    return(

        <>
        <Dataa.Provider value = {"thappa"}>
            <SomeData.Provider value={"technical "}>
        <h1>
            Parent Component
        </h1>
        <Child1/>
        </SomeData.Provider>
        </Dataa.Provider>

        <DataObj.Provider value = {someObj}>
            <Child3/>
        </DataObj.Provider>
       
        </>
    )
}

export default Parent1;
export {Dataa, SomeData};
export {DataObj}