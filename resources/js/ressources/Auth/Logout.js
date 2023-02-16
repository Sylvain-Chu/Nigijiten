import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";

export default function Logout(){

    useEffect(() => {
        console.log('je suis passé par le logout')
        Cookies.remove('session');
        Cookies.remove("sessionFirstName");
        Cookies.remove("sessionLastName");
        Cookies.remove("sessionEmail");
        Cookies.remove("sessionPseudo");
        Cookies.remove("sessionId");
        console.log('cookie session :', Cookies.get('session'))
      }, []);
      
    return (
        <div>
            <Navigate to={"/"} replace={true} />
        </div>
    )
}