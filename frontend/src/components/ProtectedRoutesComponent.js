import axios from "axios";
import React, {useEffect, useState} from "react";
import LoginPage from "../pages/LoginPage";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRoutesComponent = ({admin}) => {
    const [isAuth, setIsAuth] = useState()
    useEffect(() => {
        axios.get("/api/get-token").then(function (data) {
            if (data.data.token) {
                setIsAuth(data.data.token)
            }
            return isAuth
        }).catch(error => console.log(error.response.data.message ? error.response.data.message : error.response.data))
    }, [isAuth])
    if (isAuth === undefined) 
        return <LoginPage/>
    return isAuth && admin && isAuth !== "admin" ? (<Navigate to="/login"/>) : isAuth && admin ? (<Outlet/>) : isAuth && !admin ? (<><UserChatComponent/> <Outlet/></>) : (<Navigate to="/login"/>)
};

export default ProtectedRoutesComponent;