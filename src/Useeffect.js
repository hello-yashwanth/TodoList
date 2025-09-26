import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './index.css'
export function App(){
    let [timer , uptimer] = useState(0)

    useEffect(
        ()=>{
            console.log("effect")
        }
    ,[])
    return(
        <>
            <h1>Time is{timer}</h1>
        <button onClick={
            ()=>{
                setInterval(()=>{
                uptimer(timer+1)
                })
            }
        }>Click me</button>
        </>
    )
}


//calling apis using useeffect
function ProductCart({title,price , image}){
    return(
        <div className="card">
        <img src={image} />
           <p>{title}</p>
           <p>price:{price}</p>
        </div>
        
    )
}
export function CallApi(){
    const [products , upproducts] = useState([])
    useEffect(
        ()=>{
            GetProduct()
        },[]
    )
    async function GetProduct(){
        let res = await fetch("https://fakestoreapi.com/products")
         var list = await res.json()
         upproducts(list)
         console.log(list)
    }
    if(products.length === 0){
        return(<h1>No products</h1>)
    }
     return(
        <div className="productss">
            {
        products.map((p) =>
            <ProductCart {...p}></ProductCart>
        
        )
    }
</div>
     )
}