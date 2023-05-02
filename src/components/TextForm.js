import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLowClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleCopyClick = () => {
    // let newText = navigator.clipboard.writeText(newText)
    // setText(newText)
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied", "success");
  }

  const handleClearClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text Cleared", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="cointainer" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy to clipboard</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box to preview here"}</p>
      </div>
    </>
  )
}
