import React, { useState } from "react";
import ReactDom from 'react-dom/client'
// import {Apple as APP} from './App'
import { User as USER , named as Named} from "./header";
import { UseSt as usee, UseSt,Login} from "./clickerrorhook";
import { TodoList as Todo } from "./todolist";
import { Calculator as Cal } from "./calculator";
import {App as UseEf , CallApi} from "./Useeffect"
import { Exmaple } from "./eexample";
let root = ReactDom.createRoot( document.getElementById('root'))

// let Menu =   (<ul>
// <li>home</li>
// <li>About</li>
// </ul>);

 function Call(){
     var [userD , userData] = useState(null);
     const Handle = ()=>{
        var g = prompt("enter id")
        var h = prompt("enter name")
        var f = prompt("enter age")
        var e = prompt("enter place")
        userData({id : g ,name : h ,age:f, place:e  })
     };
     return(
        <>
        <button onClick={Handle}>Enter</button>
        {userD &&<Named id = {userD.id}  name = {userD.name} age= {userD.age} place ={userD.place}></Named>}
        </>
     )
    }




//using map
function Maped(){
    let user =[
        {
            id:1,
            names: "hai",
            placed : "kkd"
        },
    ]
    return(
        <>
    {
        user.map(
        (u)=>{
           return <Maped id={u.id} names = {u.names}></Maped> 
        }
    )
    }
    </>

)}
//Fragment --> it is used for multiple siblings
// function Frag(){
//     return(
//         <div style={{'display':'flex'}}>
//             <div>hai</div>
//             <div>hai</div>
//             <div>hai</div>
//         </div >
//     )
// }

//twowaydatabinding

function Twoway(){
    let[data , updata] = useState(0);
    return(
        <>
        <h1>{data}</h1>
        <input type="text" onChange={
               (e)=>{
              let temp = e.target.value
              updata(temp)
            }
        } />
        <button >Change</button>
        </>
    )
}

// root.render(<APP/>);
// root.render(<Maped/>);
root.render(<Todo/>);