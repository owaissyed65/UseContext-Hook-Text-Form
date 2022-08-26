import React ,{useContext}from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Context from '../context/Context';
const Navbar = () => {
    const location = useLocation()
    const context = useContext(Context);
    const {changeMode,mode} = context
    return (
        <div>
            <div className="container-fluid nav_bg " >
                <div className="row ">
                    <div className="col-10 mx-auto ">
                        <nav className="navbar navbar-expand-lg " style={{backgroundColor:mode.backgroundColor}}>
                            <div className="container-fluid ">
                                <Link className="navbar-brand" to="/" style={{color:`${mode.nav}`}}>Web Technical</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="form-check form-switch rel">
                                        <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode}/>
                                        <label className="form-check-label extra" htmlFor="flexSwitchCheckDefault" style={{color:mode.color}}>{ mode.text}</label>
                                    </div>
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className={`nav-link ${location.pathname === '/home' ? "menu-active active " : ""}`} aria-current="page" to="/home" style={{color:mode.color}}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link  ${location.pathname === '/about' ? "menu-active active" : "nav-link"}`} to="/about" style={{color:mode.color}}>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link  ${location.pathname === '/contactus' ? "menu-active active" : ""}`} to="/contactus"style={{color:mode.color}}>Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={`nav-link  ${location.pathname === '/service' ? "menu-active active" : ""}`} to="/service"style={{color:mode.color}}>Our Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
