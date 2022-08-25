import Context from './Context'
import React, { useState } from 'react'

const State = (props) => {
  const [mode, setMode] = useState({ text: "Dark Mode" });
  const [text, setText] = useState("");
  const [copy, Setcopy] = useState({text:"Copy"});
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
  }
  // function to covert in upper case text form
  const handleUpperCase = () => {
    const newText = text.toUpperCase()
    setText(newText)
  }
  
  // function to covert in Lower case text form
  const handleLowerCase = () => {
    const newText = text.toLowerCase()
    setText(newText)
  }
  // capitalize the function
  const handleCapatilize = () =>{
    const newText = text.charAt(0).toUpperCase() + text.slice(1) 
    setText(newText)
}
// Remove Special Letters
const handleSpecialLetter = () => {
  const newText = text.replace(/[&\/\\#+()$+`~%^'"*_?<>{}]/g, '');
  setText(newText)
}
const handleCopy = () => {
  const newText = document.getElementById("copy");
  newText.select();
  newText.setSelectionRange(0,9999);
  navigator.clipboard.writeText(newText.value);
    Setcopy({text:"Copied"})

  
}
const handleRemoveSpaces = () => {
  const newText = text.split(/[ ]+/)
  setText(newText.join(" "))
}
  return (
    <Context.Provider value={{ mode, changeMode: changeMode, text, handleChange, handleClear ,handleUpperCase,handleLowerCase,handleCapatilize,handleSpecialLetter,handleCopy,handleRemoveSpaces,copy}}>
      {props.children}
    </Context.Provider>
  )
}

export default State

