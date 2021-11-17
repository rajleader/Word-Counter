import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar(props){

    return(
        <div>
           <div className='nav'>
             <ul className='navul'>
                 <li className='navli'><Link to="/home"> Home</Link></li>
                 <li className='navli'><Link to="/about"> About Us</Link></li>
                 <li className='navli'><Link to="/contact"> Contact Us</Link></li>
             </ul>
             <div className="form-check form-switch" id='navmode'>
                <input onClick={props.changeMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>{props.textMode}</strong></label>
            </div>
           </div>

        </div>
    )
}
export default Navbar;