import React from 'react';
import {useContext} from 'react';
import Auth from "../Context/Auth.js";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ path, element }) => {
    const { isAuth } = useContext(Auth);

    return isAuth ? (
        <Route exact path={path} element={"<" + element + "/>"}/>
    ) : (
        <Navigate to={"/Auth/FormLogin"} replace={true} />
    )
}

export default AuthRoute;