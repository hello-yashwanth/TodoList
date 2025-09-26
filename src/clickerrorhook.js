import React,{useState} from "react";
import './App.css'
export function Clicked(){
    function change(h){
        alert(h)
    }
    return(
    <>
        <button onMouseMove={change(20)}>ClickMe</button>
        <Login></Login>
        </>
    )
}

export function Count(){
    let [count , counter] = useState(0);
  
    return(
    <>
    <h1>Increasing by {count}</h1>
    <button onClick={()=>{
        counter(++count)
    }}>ClickME</button>
    </>
    )
   
    
} 
export class hai extends React.Component{

    //state is used to changed the values
  state={  id: 1,
    produucts:"hai",
  }
    render(){
        return(
            <>
            <h1>my products is{this.state.produucts}</h1>
            <h1>my id is{this.state.id}</h1>
            <input id="val" type="text" />
            <button onClick={()=>{
                           var val =  document.getElementById('val').value
           this.setState({
            produucts:val
           })
         console.log(val)
            }}>Update</button>
            </>
        )
    
    }
  
}

//background Color changer
export function Backgr(){
    return(
        <div className="Wrapper">
        <h1>BAckground</h1>
        <input type="color" onChange={(e)=>{
            document.body.style.backgroundColor =  e.target.value 
        }} />
        </div>
       
    )
}
//counter
export function Appcount(){
    let[count ,Setcount]  = useState(0)
    return(
    <div>
        <button onClick={()=>
{         Setcount(count+1)
    }
        }>+</button>
        <h1>counter incremented {count}</h1>

        <button onClick={()=>{
               Setcount(count-1)
        }
            
        }>-</button>
    </div>
    )
}

export function UseSt(){
    let id = 1
    let prod = "realme"
    return(

      <>
        <h1 >id is{id}</h1>
        <h1 >product is {prod}</h1>
        <Login></Login>
        </>
    )
}

//login and logout
let login = true;
export function Login(){
    return(
        
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {
                login ? (<li>Login</li>):(<li>logout</li>)
            }
        </ul>
        
    )
}
