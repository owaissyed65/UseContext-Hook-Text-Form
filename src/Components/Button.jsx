 import { useContext } from 'react';
import Context from '../context/Context';
const Button = () => {
    const context = useContext(Context);
    const {handleClear,handleUpperCase,handleLowerCase,handleCapatilize,handleSpecialLetter,handleCopy,handleRemoveSpaces,copy} = context
  return (
    <div>
        {/* Button for Clear */}
        <div className='row'>
            <div className='col-md-12'>
      <button className="btn btn-primary" onClick={handleClear}> Clear </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>{copy.text} </button>
      <button className="btn btn-primary mx-2" onClick={handleUpperCase}> UpperCase </button>
      <button className="btn btn-primary mx-2" onClick={handleLowerCase}> LowerCase </button>
      <button className="btn btn-primary mx-2" onClick={handleCapatilize}> Capitalize </button>
      <button className="btn btn-primary mx-2" onClick={handleSpecialLetter}> Remove Special Letter </button>
      <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}> Remove Extra spaces </button>
    </div>
    </div>
    </div>
  )
}

export default Button
