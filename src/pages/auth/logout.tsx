'use client'

import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {useContext, useState} from "react";
import {CommonContext} from "@/app/commonContext";

const LogoutPage = (props: any) => {
    const router = useRouter();

    const logout = async () => {
        props.setAlertVisible(false);
        props.setLoading(true);

        try {
            const res: Response = await fetch("/api/v1/auths/logout");
            const response = await res.json();

            if (response.status === 'error') {
                props.setAlertTitle("Login Error")
                props.setAlertMessage(response.translate);
                props.setAlertVisible(true);
                props.setAlertSeverity("error");

                return
            }

            props.setAlertTitle("Login Success")
            props.setAlertMessage(response.translate);
            props.setAlertVisible(true);
            props.setAlertSeverity("success");

            router.push("/");
        } catch (err: any) {
            console.error("err:", err);

            props.setAlertTitle("Login Error")
            props.setAlertMessage(err.message);
            props.setAlertVisible(true);
            props.setAlertSeverity("error");
        } finally {
            window.localStorage.removeItem("token");
            props.setLoading(false);
        }
    }

    return (<Button type="secondary" label="Logout" onClick={() => logout()}/>);
}

export default LogoutPage;