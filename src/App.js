import React, { useState } from 'react'
import './App.css'

const App=()=> {
      const [result, setResult] = useState('')
      const handleClick = (e)=>{
            setResult(result=>result+=e.target.innerText)
      }
      const clear = ()=>{
            setResult('')
      }
      const back = ()=>{
            setResult(result => result.slice(0,-1))
      }
      const equal = ()=>{
            setResult(result=>eval(result))
      }
      const MouseDown = (e)=> {
           Object.assign(e.target.style,{
                 opacity:0.6,
                  border:'0.5px solid #fff'
           })
      }
      const MouseUp = (e) =>{
            Object.assign(e.target.style,{
                  opacity:1,
                  border:'none'
            })
      }


      return (
            <>
                 <div className="container">
                       <input type="text" value={result} />
                       <div className="keypad">
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} className="clear highlight blackColor" onClick={clear} >Clear</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={back} className="highlight blackColor" >C</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} className="highlight" >/</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >7</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >8</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >9</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} className="highlight" >*</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >4</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >5</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >6</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} className="highlight" >-</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >1</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >2</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >3</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} className="highlight" >+</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >0</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} onClick={handleClick} >.</button>
                             <button onMouseDown={MouseDown} onMouseUp={MouseUp} className="equal highlight blackColor" onClick={equal} >=</button>
                             
                       </div>
                 </div>
            </>
      )
}

export default App
