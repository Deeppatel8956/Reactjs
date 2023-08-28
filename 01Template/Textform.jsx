import React, { useState } from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');

    const Btn=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert('Converted to uppearcase',"warning");
    }

    const Bou=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);    
    props.showAlert('Converted to lowearcase',"danger");
    }
    
    const Change=(event)=>{
        setText(event.target.value);
        
    }
    const trim=()=>{
        let result=text;
        let input=result.trim();
        setText(input);
        props.showAlert("Method does not change the original string ","secondary")
    }

    const clear=()=>{
        setText("")
        props.showAlert('text is clear',"dark");
    }
    let Space=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert('text is Removespace',"success");
    }
    let ahange=()=>{
      alert("one time change");
    // confirm('are you confrom change text');
    }
    return (
        <>
<div className='container' style={{color:props.mode==='dark'?'white':'#2a4056'}} >
            <div className='mb-3' >
                <h1>{props.heading}</h1>
                <textarea class="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#2a4056'}}onChange={Change}id="exampleFormControlTextarea1" rows="10"></textarea>
               <button className='btn btn-warning mt-2' onClick={Btn}>change uppercase</button>
               <button className='btn btn-danger mt-2 mx-2' onClick={Bou}>change lowercase</button>
               <button className='btn btn-dark mt-2 mx-2' onClick={clear}>Clear</button>
               <button className='btn btn-success mt-2 mx-2' onClick={Space}>Removespace</button>
               <button className='btn btn-primary mt-2 mx-2' onClick={ahange}>change</button>
               <button className='btn btn-secondary mt-2 mx-2' onClick={trim}>trim text</button>
            </div>
            </div>

            <div className='container my-3'style={{color:props.mode==='dark'?'white':'#2a4056'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length}words and {text.length} text length</p>
            <p>{0.008*text.split(" ").length}</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter the summary  text! " }</p>
           </div>

        </>
    )
}
