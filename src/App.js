import Usestatedemo from "./Hooks/Usestatedemo";
//import './App.css';
//import './Hooks/FlexDemo.css'
import React, { createContext, useState } from "react";
import AddAndClear from "./Hooks/AddAndClear";
import UseEffectdemo from "./Hooks/useEffectdemo";
import Alarmclock from "./Hooks/Alarmclock";
import PropsExample from "./Hooks/PropsExample";
import PropsCompA from "./Hooks/PropsCompA";
import Alarmclock2 from "./Hooks/Alarmclock2";
import ChildToParent from "./Hooks/ChildToParent";
import UseReducerDemo from "./Hooks/UseReducerDemo";
import CrudFunction from "./Hooks/CrudFunction";
import MultipleData from "./Hooks/MultipleData";
import HarshaCode from "./Hooks/HarshaCode";
import UnderstandCSS from "./UnderstandCSS";
import ChildToParent2 from "./Hooks/ChildToParent2";
import Parent1 from "./Hooks/Parent1";
import Error404 from "./Hooks/Error404";
import FlexDemo from "./Hooks/FlexDemo";
import { Route, Routes } from "react-router-dom"
import ResponsivePage from "./Hooks/ResponsivePage";


const dataAppjs = createContext();

function App() {
  function fetchData() {
    alert("fetch data function from app.js");
  }
  let user = "Adarsh Naik";
  const [usrName, setusrName] = useState("Bharat");
  const [display, setDisplay] = useState(false);

  function displayhandler() {
    display ? setDisplay(false) : setDisplay(true);
  }

  function dataReaderFromChild(data) {
    alert(data);
  }
  return (
  
    <Routes>
    
      <Route  path="/"  exact element = {<Alarmclock/>}/>
      <Route  path="/addandclear"  exact element = {<AddAndClear/>}/>
      <Route  path="/alarmclock2"  exact element = {<Alarmclock2/>}/>
      <Route  path="/parent"  exact element = {<Parent1/>}/>
      <Route  path="/usestate"  exact element = {<Usestatedemo/>}/>
      <Route  path="/useeffect"  exact element = {<useeffectdemo/>}/>
      <Route  path="/usereducer"  exact element = {<usereducer/>}/>
      <Route  path="/propsex"  exact element = {<PropsExample/>}/>
      <Route path ="/responsive" exact element={<ResponsivePage/>}/>
      


      <Route path="*" element={<Error404/>}/>
    </Routes>
      
  );
}

export default App;
export { dataAppjs };
