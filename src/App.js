import Usestatedemo from './Hooks/Usestatedemo';
import './App.css';
import React,{useState} from 'react';
import AddAndClear from './Hooks/AddAndClear';
import UseEffectdemo from './Hooks/useEffectdemo';
import Alarmclock from './Hooks/Alarmclock';
import PropsExample from './Hooks/PropsExample';
import PropsCompA from './Hooks/PropsCompA';
import Alarmclock2 from './Hooks/Alarmclock2';
import ChildToParent from './Hooks/ChildToParent';
import UseReducerDemo from './Hooks/UseReducerDemo'
import CrudFunction from './Hooks/CrudFunction';
import MultipleData from './Hooks/MultipleData';
import HarshaCode from './Hooks/HarshaCode';
import UnderstandCSS from './UnderstandCSS'


function App() {
  
  function fetchData()
  {
    alert("fetch data function from app.js")
  }

  const[usrName, setusrName] = useState("Bharat")
  return (
    <>
      {/* <Usestatedemo/> */}
      {/* <AddAndClear/> */}
      {/* <UseEffectdemo/> */}
      {/* <Alarmclock/>  */}
      {/* <PropsCompA/>
      <PropsExample name={"Adarsh"} email={"adarsh@test.com"} />
      <PropsExample name={"Prasad"} email={"prasad@test.com"}  fetchDatafn={fetchData}/> */}
      {/* <h1>{usrName}</h1>
      <ChildToParent changeText={word => setusrName(word)}/> */}
      
      {/* <Alarmclock2 />  */}
      {/* <UseReducerDemo/> */}
      {/* <CrudFunction/> */}
      {/* <MultipleData/> */}
      {/* <HarshaCode/> */}
      <UnderstandCSS />
      
    </>
  )
}

export default App;
