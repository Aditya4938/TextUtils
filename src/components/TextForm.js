import React, { useState } from "react";

export default function TextForm(props) {
  

  let handleUppercase = () => {
    // console.log("Text changing to uppercase..." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert=("Converted to uppercase","Success")
  };
  let handleLowercase = () => {
    // console.log("Text changing to uppercase..." + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert=("Converted to uppercase","Success")
  };

  let clearText = () => {
    // console.log("Text changing to uppercase..." + text);
    let newText = "";
    setText(newText);
  };
  let toggleCase=()=>{
    // console.log(text)
    let s=text.length;
    let newText=""
    // console.log(text[1]==text.toLowerCase())
    console.log(text[0]===text.toUpperCase())
    for (let index = 0; index < s; index++) {
      if(text[index]===text.toLowerCase()){

        let k=text[index].toUpperCase()
        console.log("Present")
        newText+=k
      }
      else{
        let k=text[index].toLowerCase()
        console.log(k)
        newText+=k
      }
      
    }
    setText(newText)
  }

  let capitalizeWord=()=>{
    let s=text.length;
    let newText="";
    for(let i=0;i<s;i++){
      if(text[i]===" "){
        let k=text[i+1].toUpperCase();
        console.log(i+1)

        newText+=k
      }
      else{
        newText+=text[i];
      }
    }
    console.log(text)
    setText(newText);

  }
  let alternate=()=>{
    let s=text.length
    let newText="";
    for(let i=0;i<s;i++){
      if(i%2===0){
        let k=text[i].toLowerCase()
        newText+=k;
      }
      else{
        let k=text[i].toUpperCase()
        newText+=k;
      }
    }
    setText(newText)
  }

  let copyToClipboard=()=>{
    navigator.clipboard.writeText(text);
  }
  let handleOnChange = (event) => {
    console.log("Text changing");
    setText(event.target.value);
  };
  const [text, setText] = useState("Text goes here...");
  // setText("Welcome to the text editor site!!")
  return (
    <>
      <div>
        <div className="container mb-3" >
          {/* style={{color: props.mode==='dark'? 'white':'black'}}  */}
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          {/* style={{backgroundColor: props.mode==='light'? 'white':'grey',color: props.mode==='dark'? 'white':'black'}} */}
        </div>
        <div className="btn btn-primary mx-1" onClick={handleUppercase}>
          Change to uppercase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleLowercase}>
          Change to lowercase
        </div>
        <div className="btn btn-primary mx-1" onClick={clearText}>
          Clear inserted text
        </div>
        <div className="btn btn-primary mx-1" onClick={alternate}>
          Alternate Case
        </div>
        <div className="btn btn-primary mx-1" onClick={copyToClipboard}>
          Copy to clipboard
        </div>
      </div>
      <div className="container mb-10" >
        {/* style={{color: props.mode==='dark'? 'white':'black'}} */}
        <h1>Your Text Summary</h1>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0? 'Enter your text to preview it here':text}</p>
      </div>
    </>
  );
}

// export default TextForm