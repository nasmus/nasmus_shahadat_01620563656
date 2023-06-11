import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Header.css'
import HeaderOption from './HeaderOption';
import short_logo from '../image/short-logo.png'
import DehazeIcon from '@mui/icons-material/Dehaze';



function Header() {
    const [click, setClick] = useState(false);
    const hendelClick = () => setClick(!click);

    return (
        <div>
        <div className="header">
            <div className="header__left">
                <div className="header__logo" >
                   <h1><img src={short_logo} alt='short logo' /></h1> 
                </div>
                
                <div className="header__mobile__button" onClick={hendelClick} >
                     {click? <DehazeIcon className="zz" /> : <DehazeIcon className="zz" />}
                </div>
            </div>
            <div className={click ? "header__mobile__button" : "header__right" }>
                <Link to="/" className="header__link"  >
                    <HeaderOption title="Home" />
                </Link>
                <Link to="/" className="header__link"  >
                    <HeaderOption title="Privacy Policy" />
                </Link>

                <Link to="/" className="header__link"  >
                    <HeaderOption title="Terms Condition" />
                </Link>
                <Link to="/about/us" className="header__link" >
                    <HeaderOption title="About Us" />
                </Link>
                <Link to="/" className="header__link" >
                    <HeaderOption title="Contact Us" />
                </Link>
                <Link to="/" className="header__link" >
                    <HeaderOption title="Advertise" />
                </Link>
                <button className='header_button' >Join Now</button>
            </div>
        </div>

        </div>
    )
}

export default Header