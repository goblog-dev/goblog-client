"use client";

import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import Cookies from "js-cookie";

export const isAuthenticated = (): boolean => {
    const localStorageToken: string | null = window.localStorage.getItem("token") || null;
    const cookieToken: string | undefined = Cookies.get("token") || undefined;

    if (localStorageToken !== null && cookieToken === undefined) {
        Cookies.set("token", localStorageToken);
    }

    return Cookies.get("token") !== undefined ||
        window.localStorage.getItem("token") !== null;
}

const isAuth = (Component: any) => {

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

export default isAuth;