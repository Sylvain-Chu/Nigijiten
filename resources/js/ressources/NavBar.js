import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import '../css/NavBar.css'
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
import Auth from './Context/Auth';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);

export default function NavBar() {
    const { isAuth } = useContext(Auth);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if(Cookies.get('session')){
            console.log('oui navbar')
            setLogin(true)
        } else {
            console.log('non nvabar')
            setLogin(false)
        }
    }, [login])

    return (
        <nav>
            <ul>
                <div className="NBgauche">
                    <li>
                        <NavLink to={"/"}><img src="../../public/logo.png" alt="logo" id='NBlogo' /></NavLink>
                    </li>
                </div>
                <div className="NBdroite">
                    <div className="NBsearch">
                        <div className='NBimgLogo'>
                            <a href="#">
                                <lord-icon
                                    src="https://cdn.lordicon.com/xfftupfv.json"
                                    trigger="click"
                                    colors="primary:#ffffff"
                                    id="NBimgLogo"
                                    target=".NBsearch">
                                </lord-icon>
                            </a>
                        </div>
                        <div className='NBcontenaireInput'>
                            <input type="text" name="search" id="NBsearch" placeholder='Rechercher...'/>
                        </div>
                    </div>
                    <div className="NBmenuderoulant">
                        <li className='NBmenuDeroulant NBgauche'>
                            <NavLink to={"/search/anime"} className='NBContenaireLink'>
                                <div className='NBiconanime'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/ycwlopoz.json"
                                        trigger="hover"
                                        colors="primary:#ffffff"
                                        className="NBlogoAnimate"
                                        target=".NBmenuDeroulant.NBgauche">
                                    </lord-icon>
                                </div>
                                <div className='NBcontenaireTextLink'>
                                    <span className="NBtextlink">Animes</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='NBmenuDeroulant NBdroite'>
                            <NavLink to={"/search/manga"} className='NBContenaireLink'>
                                <div>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/kipaqhoz.json"
                                        trigger="morph"
                                        colors="primary:#ffffff"
                                        className="NBlogoAnimate"
                                        target=".NBmenuDeroulant.NBdroite">
                                    </lord-icon>
                                </div>
                                <div className='NBcontenaireTextLink'>
                                    <span className="NBtextlink">Mangas</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className='NBauth'>
                            {(isAuth && (
                                <>
                                    <NavLink to={"/Auth/Profil"}>Profil</NavLink>
                                    {/* <NavLink to={"/Auth/logout"}>Déconnexion</NavLink> */}
                                </>
                            
                                )) || (
                                <>
                                    {/* <NavLink to={"/Auth/FormRegister"}>Register</NavLink> */}
                                        <NavLink to={"/search/anime"} className='NBContenaireLink'>
                                            <div className='NBiconanime'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/bhfjfgqz.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff"
                                                    className="NBlogoAnimate"
                                                    target=".NBauth">
                                                </lord-icon>
                                            </div>
                                            <div className='NBcontenaireTextLink'>
                                                <span className="NBtextlink">Connexion</span>
                                            </div>
                                        </NavLink>
                                </>
                            )}
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}
