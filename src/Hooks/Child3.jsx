
import React from "react";
import { useContext } from "react";
import { DataObj } from "./Parent1";

const Child3 = ()=>{
    const daa = useContext(DataObj)
    
    return(
        <>
        My name is {daa.namee}
        I completed my education in {daa.education}
        Passionate to work on {daa.technology}
       
        </>
    )
}

export default Child3;