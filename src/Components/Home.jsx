import React from 'react'
import Context from '../context/Context';
import { useContext } from 'react';
import Button from './Button';
const Home = () => {
  const context = useContext(Context);
  const { mode,text, handleChange } = context;

  const getWordCount = (str) => {
    return str.split(' ')
      .filter((n) => { return n !== '' }).length;
  }
  const char = text.replace(/[ ]/g, '').length
  return (
    <>
      <h1 className=' container my-3' style={{ color: mode.color }}>Enter In Text Field</h1>
      <div className="container" >
        <div className="mb-3 col-12 container">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control" id="copy" value={text} onChange={handleChange} rows="10" style={{ backgroundColor: `${mode.textInput}`, color: mode.color, fontSize: '20px' }} ></textarea>
        </div>
        <Button />
        <div style={{color:mode.color,fontSize:'20px'}}>
        <h2 className='mt-3 my-3' >Your Text Preview </h2>
        <strong >{char}</strong> 
        <p style={{ display: "inline" ,color:mode.color}}>&nbsp;{char === 0 || char === 1 ? 'Character' : "Characters"}</p>&nbsp;And
        <strong> {getWordCount(text)}</strong> 
        <p style={{ display: "inline" }}> {getWordCount(text) === 0 || getWordCount(text) === 1 ? 'Word' : 'Words'} are found </p>  
        <strong>{char * 0.008} </strong> Minutes Required To read
        <h2 className='mt-3'>Your Text Summary</h2>
        <p style={{fontSize:'20px'}}>{text.length === 0 ? 'No words are Found' : text}</p>
        </div>
      </div>
    </>
  )
}

export default Home
