"use client";
import {useEffect} from "react";
import {redirect} from "next/navigation";
import Cookies from "js-cookie";

export const isRememberMe = () => {
    const localStorageToken = window.localStorage.getItem("token");
    if (localStorageToken !== null) {
        Cookies.set("token", localStorageToken);
    }
}

export const isAuthenticated = (): boolean => {
    isRememberMe();
    return Cookies.get("token") !== undefined ||
        window.localStorage.getItem("token") !== null;
}

export const isAuth = (Component: any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const auth: boolean = isAuthenticated();

        useEffect(() => {
            if (!auth) {
                return redirect("/");
            }
        }, []);


        if (!auth) {
            return null;
        }

        return <Component {...props} />;
    };
}