"use client";

import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import Cookies from "js-cookie";
import {IsRememberMe} from "@/pages/auth/isRememberMe";

export const isAuthenticated = (): boolean => {
    IsRememberMe();
    return Cookies.get("token") !== undefined ||
        window.localStorage.getItem("token") !== null;
}

export const isAuth = (Component: any) => {

    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const [isAuthenticatedStatus, setIsAuthenticatedStatus] = useState<boolean>(false);

        useEffect(() => {
            if (!isAuthenticated()) {
                setIsAuthenticatedStatus(false);
                return redirect("/");
            } else {
                setIsAuthenticatedStatus(true);
            }
        }, [isAuthenticatedStatus]);

        return (isAuthenticatedStatus ? <Component {...props} /> : null);
    };
}