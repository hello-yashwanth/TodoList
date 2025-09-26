import './calculators.css';

export function Keypad({ handleCl , Calu , Clear }) {
    return (
        <div className="Key">
            <div className='row'>
                <button onClick={() => handleCl("7")} className='digit'>7</button>
                <button onClick={() => handleCl("8")} className='digit'>8</button>
                <button onClick={() => handleCl("9")} className='digit'>9</button>
                <button onClick={() => handleCl("/")} className='op'>/</button>
            </div>
            <div className='row'>
                <button onClick={() => handleCl("4")} className='digit'>4</button>
                <button onClick={() => handleCl("5")} className='digit'>5</button>
                <button onClick={() => handleCl("6")} className='digit'>6</button>
                <button onClick={() => handleCl("*")} className='op'>*</button>
            </div>
            <div className='row'>
                <button onClick={() => handleCl("1")} className='digit'>1</button>
                <button onClick={() => handleCl("2")} className='digit'>2</button>
                <button onClick={() => handleCl("3")} className='digit'>3</button>
                <button onClick={() => handleCl("-")} className='op'>-</button>
            </div>
            <div className='row'>
                <button onClick={() => handleCl("0")} className='digit'>0</button>
                <button onClick={()=>Calu()} className='op'>=</button>
                <button onClick={()=> Clear()} className='op'>C</button>
                <button onClick={() => handleCl("+")} className='op'>+</button>
            </div>
        </div>
    );
}
