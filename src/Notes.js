/*
website: react.org , react.dev
=> A javascript library for building  user interface & also used to build (SPA)single page Application.
=> Reactjs was created by Facebook in 2011 by Jorden Walke. And it is open soure.
=> To know react before you have to understand the pre-requisites like: HTML, CSS, JAVASCRIPT.


Tools :
Chrome, vscode, nodejs/npm , git/github accounts 

concepts like: chrome Dev tools, Npm, Linux/terminal shortcuts 


Download Tools :
chrome Download
vs code download
nodejs ->use LTS(long time support)-stable version
git/github download

check in terminals (or) Shortcut keys:
node -v, node --version
npm -v, npx -v
git --version

cls, clear
pwd (present working directory)
cd .. -> backward
cd Desktop/hello -> forward
cd (current directory)
cd ~ home directory

Browser Devtools:
-> When we develop App we use it ,
-> panels -> Element, Console, Lighthouse, Network
-> React Developer Tools
-> Redux Devtools

React:
1.Architecture
2.React installation
3.React folder structure

1.Architecture:
                        Frontend(html,css,js)

                            ⬆️ ⬇️ reactjs

                        web Api's / services

                            ⬆️ ⬇️  node+express

                        Database (MangoDB)
        
=> Reactjs will communicate with web Api service first then Database using (nodejs,python)


2.React installation:
  npx create-react-app app-name
  npm start

  to check installed: npm -v, npx -v 
  npm - already developers written the code we are using it.
  ex: npmjs.com 

  npm init -> package.json
  npm i react-toastify --save  -> node-modules
  npm install 

  http://localhost:3000/manifest.json 

  // React will use internally webpack/Babel
  Babel -> babeljs.io -> used to convert Es6 code to Es5 Code (for old users)
  webpack -> we use many time .js /.css/.png files -> webpack converts to single file.

  Note:
  => Vs-Code is also chrome.
  => to prove : help - toggle developer tools

3.React folder structure:
    Browser - index.html - index.js - App.js 

// node_modules => collection of js libraries.
// package.json => Register of node_modules.
// index.html   => one & only entire html file in the react appliction.
// index.js     => render(sending)
                App.js data into index.html 
// App.js   => Default component 
// Browser  =>locolhost:3000

//gitignore     => to remove unwanted files like node_modules, package.json while pusing code to github
//App.test.js   => It is for testing components.
//setupTests.js => It is the setup part for testing.
import '@testing-library/jest-dom';
-------------------------------------------------------------------
// React start:
// React components:
   => A Component is a piece of reuseable code which we can reuse at any point indivudual code at any time.
   => Components are like functions that return HTML elements.
   => To create component we use :
        1.function component ✔️
        2.class component
   =>While creating Function component rules:
        1. First letter should be Capital.
        2. There should be One Jsx element.

Ex:1 

import React from 'react';
import ReactDom from 'react-dom/client';

function PrintName(){
    return <div> Hello world!! </div>
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <div>
        <PrintName/>
    </div>
)
--------------------------------------------------------------------

//JSX Element:
//without JSX:
    import React, { createElement } from "react";

// Ex:1 
    function App() {
                                 //passing 3 arguments
       return React.createElement("h3",{className:"heading"},"My name is Srikanth")
    }

//Ex:2 
    function App() {
        return React.createElement("div",{className:"container"},React.
                    createElement("h1",{className:"heading"},"Hello Srikanth"))
    }

    export default App;


//With JSX:
Ex:1 
    import React from "react";

    function App(){
    return <h2>Hello world </h2>
    }

    export default App

Ex:2 
    import React from "react";

    function App(){
        //js starts
        const firstname = "Emma";
        const lastname = "Watson";

        const user = {
            firstName:"Srikanth",
            lastName:"Yadav"
        }

        function printName(user) {
            return `My full Name is ${user.firstName} ${user.lastName}`;

        }
        //js ends

    //jsx starts
    return (
        <section onClick={{}}>
        <header>
            <p>{10+10}</p>
            <h1>Hello World {firstname+" "+ lastname} </h1>
            <h3>{printName(user)}</h3>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Id repellat temporibus magni veritatis quidem quis nostrum illo blanditiis facere accusantium! Illo,
            reiciendis minima ad consequuntur voluptates exercitationem nemo cumque dolor deserunt suscipit cum, 
            similique.
            </p>
        </header>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, asperiores?</p>
        <img src="sdfg" alt={user.firstName} />
        </section>
    )
    //jsx ends here
    }

    export default App

Note:
<> </> ->React.Fragment -> Helps in styling & Performance.
{}  => Template Syntax
JSX =>  stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React Application.

className => instead of class keyword
weback+babel
Jsx - js
onClick={} => use camelCase
object => key value pairs
assets - images folder
----------------------------------------------------------------------------------

//React Render Elements:
    import React from 'react'
    function App() {
        return (
            <section className="container">
            <h1>hello {new Date().toLocaleTimeString()}</h1>
            </section>
        )
    }
    export default App

    const root = ReactDOM.createRoot(document.getElementById('root'));
    setInterval(() => {
        root.render(
            <React.StrictMode>
            <App />
            </React.StrictMode>
        ); 
    }, 1000);

Note:
=> Use setInterval function the Date will update without refreshing the page.
-----------------------------------------------------
// Nested Components:
    import React from 'react'

    const InnerComponent = () =>{
        return <h1>Inner Component</h1>
    }

    const PrintName =()=>{
        return <InnerComponent/>
    }

    function App() {
        const user={
            firstName:"Emma",
            lastName:"Watson"
        }
    return (
        <section>
        {user.firstName} {user.lastName}
        <PrintName/>
        <PrintName/>
        <PrintName/>
        <PrintName/>
        <PrintName/>
        </section>
    )
    }

    export default App
-----------------------------------------------------------------------
//Netfix Small project & styling using CSS in React

    import React from 'react'

    function App() {
    return(
        <section className='movie-container'>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        </section>
    )
    }

    const Movie=()=>{
    return (
        <article className='each-movie'>
        <ImageComponet/>
        <Title/>
        </article>
    )
    }

    const ImageComponet=()=>{
    return (
        <div>
        <img 
            src="https://occ-0-2040-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326"
            alt="Money Heist image" 
        />
        </div>
    )
    }

    const Title=()=>{
    const styles = {
        heading:{
        color:"blue",
        fontSize:"15px",
        },
        smallHeading:{
        color:"red",
        fontSize:"20px",
        }

    }
    return (
    <h3 className='heading' style={{color:"red",fontFamily:"Arial",}}>Money heist {1+1} <span style={styles.heading}>Small title</span></h3>
    )
    }

    export default App

// index.css
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
        letter-spacing: 1px;
    }
    .movie-container{
        background: whitesmoke;
        width: 100%;
        max-width: 1200px;
        margin: 3rem auto;
    }
    .each-movie{
        background: white;
        border: 1px solid rgb(108, 108, 108);
        text-align: center;
    }
    .heading{
        margin: 1rem;
        font-size: 25px;
    }

    @media screen and (min-width:992px) {
        .movie-container{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }
    }
----------------------------------------------------------------------------------------
// React Components and Props:
=> props:(properties) -pass aruguments to components.
=>looping Methods 
=>instead of using props use Destructuring[removing props to read code flexible] 

Example:1 
    import React from 'react'

    function Welcome(){
        return(
            <Hello name="Srikanth"  />
        )
    }

    const Hello=(props)=>{
        return <h1>{props.name}</h1>
    }

    export default Welcome;



Example:2 
    import React from 'react'

    function PropsLooping() {
        const names =["Mayuri","Abhay","Kavya"];

        const students = [
            {
                name:"Mayuri",
                pic:"https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp"
            },
            {
                name:"Abhay",
                pic:"https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png"
            },
            {
                name:"Kavya",
                pic:"https://lh3.googleusercontent.com/proxy/vZikguU11qZpIr5SgoBHDixru7qQYP3KFoXJQuGVUQwmaW1tOABH0jLlqFjFBH0bWZ4-TsP956vXScnfbo14sc4bjzDTwAtWxUaHetXijjXc_gizWe3FN01r3CUhkUZJ5Ogudyo98mZg406rnq27lvgAZkI8Nk4N4A"
            },
        ]

    return (
        <div>
            // component + loop
            {names.map((nm)=>{
                return <NameComp names={nm} />
                })}
        
                {students.map((stu)=>{
                    const {name, pic} = stu
                    return <LoopingMethod name={name} pic={pic} />
                })}
            </div>
        )
        }
        
        const LoopingMethod=({name,pic})=>{
            return(
                <section>
                    
                    <div className='profile-container'>
                        <img className='profile-pic' src={pic} alt={name} />
                        <h1>Hello,{name} </h1>
                    </div>
                </section>
            )
        }
        
        const NameComp=({names})=>{
            return <div>
            <h2>{names}</h2>
        </div>
        }
        
    export default PropsLooping
 -------------------------------------------------------------------------------------------   
// Event Handling: 
=>  onClick, onMouseEnter

    import React from 'react'

    function EventHandling() {
        // const clickHandle =(e)=>{
        //     return console.log(e)
        // }

        function clickHandle(e, firstName){
            return(
                console.log("I am cooming from regular fun",e, firstName)
            )
        }

    return (
        <div>
        <button onClick={()=> console.log("I am coming from Inline")} className='button'>Click Me</button>
        <br /><br />

        <button onClick={(e)=>{
            return clickHandle(e,"srikanth")
        }} className='button'>Click here</button>
        </div>
    )
    }

    export default EventHandling

Note:
onClick ={clickHandle("Srikanth")} //Don't pass aruguments like the issue are:
-> without Clicking function will called
-> suppose if you click function it will not work
-> event is not coming insted of (e) srikanth
->first name place showing undefined

---------------------------------------------------------------------------
//Types of exports:
// 1.named import/exports - preferred - add multiple
// 2.default import/exports - only one, accept different name while importing.

//named import
function Welcome(props){
    return(
      <div>
        <h1>Hello {props.name} ⭐👍</h1>
      </div>
    )
    
  }

const double = (n)=>n*2;

// export default Welcome;   // default export    //accept different name while importing.


export {Welcome, double};  // named export
============================================================================
//React Hooks:
=>Hooks - functions - react development will be easy
=>hooks - can be used inside the function component.

types of hooks : useState,useEffect,useContext,
1.useState 
=> It is a function calling using useState()
=>to store value in variable 
=>in state you can take value,string, object,array of object,

Note:
// count => default value 
// setCount => function to change the default value
// to store values we will use states


 const [count, setCount ]=useState(10);
  console.log(count);  
  console.log(setCount)

Example:1 

    import React, {useState} from 'react'
    const Index =()=>{
    // const arr = useState(20);
    // console.log(arr);
    // console.log(arr[0]);
    // console.log(arr[1]);

    const [count, setCount ]=useState(0);
    // console.log(count);  
    // console.log(setCount)

    const incrementCount =()=>{
        // setCount(count+1);
        setCount((prevCount)=>{
        return  prevCount +1;
        })
        setCount((prevCount)=> prevCount+1)

    }

    const decrementCount =()=>{
        // setCount(count-1);
        setCount((prevCount)=>prevCount-1)
        setCount((prevCount)=>prevCount-1)
    }
    
    
    return(
        <div>
        <button onClick={decrementCount} >DECREMENT</button>
        <span > Count: {count} </span>
        <button onClick={incrementCount} >INCREMENT</button>
        </div>
    )
    }

// condition Rendering 
import React,{useState} from 'react'

function UseStateEx1() {
    const [show, setShow]=useState(true);

    const handleShow=()=>{
        // setShow(!show)
        setShow(!show)
    }


  return (
    <div>
      <button onClick={handleShow} className='btn'>{show ? "hide":"show" }</button>
      {show ? <p className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Placeat doloribus non unde saepe deserunt iste et vero voluptate hic quam?
      </p> : null}
      {show && <p>ssssssssssssssssss</p>}
      
    </div>
  )
}

export default UseStateEx1
----------------------------------------------
// useEffect:
=> useEffect is a function passing another function as a argument (callback)
mounting => Component mounting 
when ever useState func State changes component re-render is called useEffect.

button click - state changes - component re-Render - useEffect call avuthundi.

=>useEffect take 2 aruguments(callback function , dependencies)
=> useState - used for data saving
=> useEfect - used for Api fetching

//Api => https://jsonplaceholder.typicode.com/users & cocktail api

----------------------------------------------------------

//useContext:
props Drilling : to avoid props drilling we use useContext
1.performance
2.Resuability
3.Forceful

*/







