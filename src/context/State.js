import Context from './Context'
import React, { useState } from 'react'

const State = (props) => {
  const [mode, setMode] = useState({
    text: "Enable Dark Mode",
    color: 'Black',
    backgroundColor:'White',
    nav:'#565387',
    textInput:'White',
    about:'White',
    aboutCollapse:'White',

  });
  const [text, setText] = useState("");
  const [alert, setAlert] = useState();
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  // this is for input in textform to change 
  const changeMode = () => {
    console.log("hello")
    if (mode.color === 'Black') {
      setMode({
        text: "Enable Light Mode",
        body: document.body.style.backgroundColor = 'Black',
        color: 'White',
        backgroundColor:'Black',
        nav:'White',
        textInput:'#514a62',
        about:'#383843',
        aboutCollapse:'#5f5f7f',
      })
      showAlert('dark',"Dark Mode Enabled");
    }
    else{
    setMode({
      body: document.body.style.backgroundColor = 'white',
      text: "Enable Dark Mode",
      color: 'Black',
      backgroundColor:'White',
      nav:'#565387',
      textInput:'White',
      about:'White',
      aboutCollapse:'White'
    })
    showAlert('light','Light Mode Enabled');
  }
  }
  // for on change function in text form
  const handleChange = (event) => {
    setText(event.target.value)
  }
  // function to clear text form
  const handleClear = () => {
    setText('');
    showAlert('secondary', 'Cleared');
  }
  // function to covert in upper case text form
  const handleUpperCase = () => {
    const newText = text.toUpperCase()
    setText(newText)
    showAlert('success', 'Convert Into UpperCase');
  }

  // function to covert in Lower case text form
  const handleLowerCase = () => {
    const newText = text.toLowerCase()
    setText(newText)
    showAlert('success', 'Convert Into LowerCase');
  }
  // capitalize the function
  const handleCapatilize = () => {
    // const exText =(ex)=> ex.charAt(0).toUpperCase() + ex.slice(1)
    const newText =text.charAt(0).toUpperCase() + text.slice(1)
    setText(newText)
    showAlert('success', 'Convert first letter into Capital Letter');

  }
  // Remove Special Letters
  const handleSpecialLetter = () => {
    const newText = text.replace(/[&/\\#|+()$+`~%^'"*_?<>{}]/g, '');
    showAlert('success', 'Remove All Special letters if it have');
    setText(newText)
  }
  // copy the input item
  const handleCopy = () => {
    const newText = document.getElementById("copy");
    newText.select();
    newText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(newText.value);
    showAlert('dark', 'Copy All Text');
  }
  // remoove extra space
  const handleRemoveSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    showAlert('success', 'Remove All Extra Spaces');
  }

  return (
    <Context.Provider value={{ mode, changeMode: changeMode, text, handleChange, handleClear, handleUpperCase, handleLowerCase, handleCapatilize, handleSpecialLetter, handleCopy, handleRemoveSpaces, alert }}>
      {props.children}
    </Context.Provider>
  )
}

export default State

