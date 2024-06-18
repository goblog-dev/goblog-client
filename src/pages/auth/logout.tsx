'use client'

import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {useContext, useLayoutEffect} from "react";
import {CommonContext} from "@/app/commonContext";

const LogoutPage = () => {
    const router = useRouter();
    const {
        setAlertVisible,
        setAlertTitle,
        setAlertMessage,
        setAlertSeverity,
        setIsGlobalLoading,
    } = useContext(CommonContext);

    useLayoutEffect(() => {
        setAlertVisible(false);
    }, []);

    const logout = async () => {
        setAlertVisible(false);
        setIsGlobalLoading(true);

        try {
            const res: Response = await fetch(`/api/v1/auths/logout`);
            const response = await res.json();

            if (response.status === 'error') {
                setAlertTitle("Login Error")
                setAlertMessage(response.translate);
                setAlertVisible(true);
                setAlertSeverity("error");

                return
            }

            setAlertTitle("Login Success")
            setAlertMessage(response.translate);
            setAlertVisible(true);
            setAlertSeverity("success");

            router.push("/");
        } catch (err: any) {
            console.error("err:", err);

            setAlertTitle("Login Error")
            setAlertMessage(err.message);
            setAlertVisible(true);
            setAlertSeverity("error");
        } finally {
            window.localStorage.removeItem("token");
            setIsGlobalLoading(false);
        }
    }

    return (
        <>
            <Button type="secondary" label="Logout" onClick={() => logout()}/>
        </>
    );
}

export default LogoutPage;