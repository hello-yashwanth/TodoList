 import React from "react";
 import { Keypad as Key } from "./ckeypad"
 import { useState } from "react";
 import './calculators.css';
 export function Calculator(){
   let [inp, inpval] = useState("");
    function handleCl(val){
      inpval(inp+val)
    }
    function Calu(){
        let oper = eval(inp)
        inpval(oper)
    }
    function Clear(){
        inpval("")
    }
    return(
        <div className="cal">
            <h1>Calculator App using React</h1>
            <div className="inp">
                <input type="text" value={inp} className="output" />
                <Key handleCl={handleCl} Clear = {Clear} Calu = {Calu}></Key>
            </div>
        </div>
    )
}
