import './App.css'
export let person = {
  name:"hai",
  age:25,
  salary:1400,
  marriage:"unmarried"
}
 export function hai(){
  let ss = {
    Color :'white'
  }
  return(
    <div>
    <h1 style={ss}>hai bro how are you</h1>
    <input type="text"></input>
    <label htmlFor="login">Login</label>
    <button type="submit">submit</button>
    </div>

  )
}

export let Apple = ()=>{
  return(
    <div>
  <h1>Details</h1>
  </div>
  )
}