import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }
    
    const handleCommasClick = ()=>{
        let newText = text.replaceAll(',', '')
        setText(newText)
        props.showAlert("All commas removed", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',
                 color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary me-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary me-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary me-2" onClick={handleCommasClick}>Remove Commas</button>
            <button className="btn btn-primary me-2" onClick={handleCopyClick}>Copy</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}