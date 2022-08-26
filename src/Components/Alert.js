import React,{useContext} from 'react'
import Context from '../context/Context';

const Alert = () => {
    const context = useContext(Context);
    const {alert,text} = context;
    const capitalizeLetter = (type) => {
      const newWord = type.toLowerCase();
      return newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
    {alert && text.length===0 && <div className={`alert alert-${alert.type}`} role="alert">
  <strong>{capitalizeLetter(alert.type)==='Success'?'Congratulations':'Congratulations'|| !capitalizeLetter(alert.type)==='dark'?'Boom':'Boom'}</strong> <p style={{display:"inline",fontSize:'22px' }}>!&nbsp;{alert.msg}</p>
</div>}
    </div>
  )
}

export default Alert
