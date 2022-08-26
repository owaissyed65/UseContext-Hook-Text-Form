 import { useContext } from 'react';
import Context from '../context/Context';
const Button = () => {
    const context = useContext(Context);
    const {handleClear,handleUpperCase,handleLowerCase,handleCapatilize,handleSpecialLetter,handleCopy,handleRemoveSpaces} = context
  return (
    <div>
        {/* Button for Clear */}
        <div className='row'>
            <div className='col-md-12'>
      <button className="btn btn-primary mx-2" onClick={handleClear}> Clear </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleUpperCase}> UpperCase </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleLowerCase}> LowerCase </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleCapatilize}> Capitalize </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleSpecialLetter}> Remove Special Letter </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleRemoveSpaces}> Remove Extra spaces </button>
    </div>
    </div>
    </div>
  )
}

export default Button
