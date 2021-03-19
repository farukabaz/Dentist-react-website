import React, {Component} from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='navbar'>
                    <div className='navbar-container'>
                        
                        <Link to="herosection" className='navbar-logo'>
                            S.O. Hajradinovic
                        </Link>

                        <ul className='nav-menu'>
                            <li className='nav-item'>
                                <Link 
                                className='nav-links' 
                                activeClass="active" 
                                to="herosection" 
                                spy={true} 
                                smooth={true}>
                                    Početna
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                className='nav-links' 
                                to="services" 
                                spy={true} 
                                smooth={true}>
                                    Usluge
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                className='nav-links' 
                                to="ourteam" 
                                spy={true} 
                                smooth={true}>
                                    O nama
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                className='nav-links' 
                                to="footer" 
                                spy={true} 
                                smooth={true}>
                                    Kontakt
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}
