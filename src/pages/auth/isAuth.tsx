"use client";
import {isAuthenticated} from "@/pages/auth";
import {useEffect} from "react";
import {redirect} from "next/navigation";


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