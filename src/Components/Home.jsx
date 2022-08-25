import React from 'react'
import Context from '../context/Context';
import { useContext } from 'react';
import Button from './Button';
const Home = () => {
  const context = useContext(Context);
  const {mode,changeMode,text,handleChange} = context;  
  return (
    <> 
      <h2 className=' container me-3 my-3'>Enter In Text Field</h2>
    <div className="container " >
    <div className="mb-3 col-12 container">
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" id="copy" value={text} onChange={handleChange} rows="10"></textarea>
  </div>
  <Button/>
  <h2 className='mt-3'>Your Text Preview </h2>
  {text.replace(/[ ]/g,'').length}
  </div>
    </>
  )
}

export default Home
