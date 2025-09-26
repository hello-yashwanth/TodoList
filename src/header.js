import { useState } from 'react'
import './index.css'
// let name = "hello"
// export function Headered(){
//       return(
//         <div>

//             {/* {alert("hello")} */}
//         <h1 className='hel' >hello</h1>
//         Subscribe TO My {name}:<input type='checkbox' id='hee'></input>
//         <label htmlFor = 'hee' >bros</label>
//         </div>
//       )
// }

// export function Apps(){
//     let s1 = {
//         position:"absolute",
//         background: 'blue',
//         color:"black",
//         top:"200px",
//         left:"300px"
     
//     };
//     return(
//         <div>
//         <h1 style={s1}>My webpage</h1>
//         </div>
//     )
// }
// export default Apps
//props is a bojects its add propertied
export function named(props){
       return(
       <div >
       <h1>user name is {props.id}</h1>
       <h1>user age  is {props.name}</h1>
       <h1>user age  is {props.age}</h1>
       <h1>user place is {props.place}</h1>
       </div>
       )
}

export function User(){
    let [ProductName , upProducted] = useState("reamlme");
    let price = 12000
    return(
        
        <>
        <h1 >My product is {ProductName}</h1>
        <h1>My price  is {price}</h1>
      <input type='text' id='Text'/>
        
        <button onClick={
            ()=>{

                var Text = document.getElementById('Text').value
                ProductName = Text
               upProducted((prev)=>{
                return prev+Text
               })

            }
        }>Click me</button>
       </>
    )
}
