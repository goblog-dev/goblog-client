'use client'

import {useLayoutEffect, useState} from "react";
import LoginPage from "@/pages/auth/login";
import LogoutPage from "@/pages/auth/logout";
import {isAuthenticated} from "@/pages/auth/isAuth";

const AuthPage = (props: any) => {
    const [isClient, setIsClient] = useState(false)

    useLayoutEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {
                isClient ?
                    isAuthenticated()
                        ? <LogoutPage {...props}/>
                        : <LoginPage {...props}/>
                    : <></>
            }
        </>
    );
}

export default AuthPage;