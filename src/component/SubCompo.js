import React from 'react';
import './SubCompo.css'
import { useState } from 'react';


function SubCompo(props) {

    const lowercase = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }
    const uppercase = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const cleartext = () => {
        const newText = '';
        setText(newText);
    }
    const removespaces=()=>{
        let text=document.getElementById('exampleFormControlTextarea1');
       let trtext= text.trim();
    //    let stext=trtext.split(' ')
       setText(trtext.value)

    }
    const handleCopy=()=>{
        let text= document.getElementById('exampleFormControlTextarea1');
        text.select()
        // text.setSelectionRange(0,5);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
   
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')
       let ntext=text.trim()
       let wtex = ntext.split(/\s+/);
       let clean=wtex.filter(function(elm){
    return elm.length!==0;
     } )
    
    return (
        <div>
         <div className='word'>
            <h2 >{props.title}</h2>
            <div className="mb-3">
                <textarea style={{backgroundColor:props.mode==='rgb(181, 181, 209)'?'white':'#6c757d',color:props.mode==='rgb(181, 181, 209)'?'black':'white'}} className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows='10' cols='80'></textarea>
            </div>
            <div>
                <button onClick={uppercase} disabled={text.length===0} type="button" className="btn btn-primary mx-2">Upper Case</button>
                <button onClick={lowercase} disabled={text.length===0} type="button" className="btn btn-primary">lower case</button>
                <button onClick={cleartext} disabled={text.length===0} type="button" className="btn btn-primary mx-2">Clear</button>
                <button onClick={removespaces} disabled={text.length===0} type="button" className="btn btn-primary mx-2">Remove Extra Spaces</button>
                <button onClick={handleCopy} disabled={text.length===0} type="button" className="btn btn-primary mx-2">Copy Text</button>
            </div>
            </div>
            <div className='summary'>
                <h3>Your Text Summary</h3>
                {clean.length} Words and {text.length} Character
            </div>
            <div className="summary">
                <h3>Preview</h3>
                {text.length===0?'Enter Your Text To Preview':text}
            </div>
            
        </div>
    );
}
export default SubCompo;
