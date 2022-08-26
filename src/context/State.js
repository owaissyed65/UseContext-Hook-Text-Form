import Context from './Context'
import React, { useState } from 'react'

const State = (props) => {
  const [mode, setMode] = useState({ text: "Dark Mode" });
  const [text, setText] = useState("");
  const [alert, setAlert] = useState();
  const showAlert =(type,message) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  // this is for input in textform to change 
  const changeMode = () => {
    console.log("hello")
    if (mode.text === 'Dark Mode') {
      setMode({
        text: "Light Mode",
        body: document.body.style.backgroundColor = 'Black'
      })
    }
    else
      setMode({ body: document.body.style.backgroundColor = 'white', text: "Dark Mode" })
  }
  // for on change function in text form
  const handleChange = (event) => {
    setText(event.target.value)
  }
  // function to clear text form
  const handleClear = () => {
    setText('');
    showAlert('secondary','Cleared');
  }
  // function to covert in upper case text form
  const handleUpperCase = () => {
    const newText = text.toUpperCase()
    setText(newText)
    showAlert('success','Convert Into UpperCase');
  }
  
  // function to covert in Lower case text form
  const handleLowerCase = () => {
    const newText = text.toLowerCase()
    setText(newText)
    showAlert('success','Convert Into LowerCase');
  }
  // capitalize the function
  const handleCapatilize = () =>{
    const newText = text.toLowerCase();
    const exText =newText.charAt(0).toUpperCase() + text.slice(1) 
    setText(exText)
    showAlert('success','Convert first letter into Capital Letter');
    
  }
  // Remove Special Letters
  const handleSpecialLetter = () => {
    const newText = text.replace(/[&/\\#|+()$+`~%^'"*_?<>{}]/g, '');
    showAlert('success','Remove All Special letters if it have');
    setText(newText)
  }
  // copy the input item
  const handleCopy = () => {
    const newText = document.getElementById("copy");
    newText.select();
    newText.setSelectionRange(0,9999);
    navigator.clipboard.writeText(newText.value);
    showAlert('success','Copy All Text');
  }
  // remoove extra space
  const handleRemoveSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    showAlert('success','Remove All Extra Spaces');
}

  return (
    <Context.Provider value={{ mode, changeMode: changeMode, text, handleChange, handleClear ,handleUpperCase,handleLowerCase,handleCapatilize,handleSpecialLetter,handleCopy,handleRemoveSpaces,alert}}>
      {props.children}
    </Context.Provider>
  )
}

export default State

