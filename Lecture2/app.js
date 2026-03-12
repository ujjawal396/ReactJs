 import React from "react";
 import ReactDOM from "react-dom/client";
import { jsxs } from "react/jsx-runtime";
 
//JSX(TRANSPILED before it reaches js)-parcel-babel
//Babel=>transpiles into react.createelement=>js object=>HTMLelement(render)
 const TitleElement=()=>{
   return (<h1>Namaste React using jsx</h1>)
 }

//everything in react is component
//class based component
//functinal component

//component composition
const HeadingElement=()=>{
   return (
      <div>
      <TitleElement/>
         <h1>Rahul is my friend</h1>
      </div>
   
   

)
}

const headingElement2=()=> (<h1>rahul is my friend</h1>)







    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingElement/>);