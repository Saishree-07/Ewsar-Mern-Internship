/*import logo from './logo.svg';
import './App.css';
import React,{createContext, useState} from 'react';
import { Container } from './Container';
export const themeContext = createContext();

const App = () => {
  const [theme,setTheme] = useState("light");
  const [style,setStyle] = useState({backgroundColor:'crimson',color:'black'})
  const ToggleTheme = () => {
    setTheme((curr)=>(curr==="light"?"dark":"light"))
  }
  return (
    
    <div>
      <themeContext.Provider value={{theme,style}}>
      <h1 style={style}> App Component</h1>
      <h1>Theme : {theme} </h1>
      <button onClick={ToggleTheme}>onClick</button>
      <Container theme={theme}/>
      </themeContext.Provider>
      </div>
  );
}
*/
/*
import React from "react";
import { Counter } from "./Counterclock";
const App = () => {
  return(
    <Counter />
  )
}
*/
/*
import React from "react";
import { Colors } from "./Colors";
const App = () => {
  return (
    <Colors />
  )
}
  */
 /*
import React from "react"
import "./Style.css"

const App = () => {
  return (
    <div>
 
<h1 class ="app-name">MY APP
<h2 class = "second">second line</h2></h1>
<h1 class="app-name">MY APP
<h2 class = "second">second line</h2>


</h1>
<h2 class="select"> stylecomponent</h2>
    </div>
  )
}
*/
import React from "react"
import { Form } from "./Form"
const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App
