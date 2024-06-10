'use client'

import {Button} from "@/components/button";
import {useRouter} from "next/navigation";

export const LogoutPage = (props: any) => {
    const router = useRouter();

    const logout = async () => {
        try {
            const res: Response = await fetch(process.env.NEXT_PUBLIC_APP_CLIENT_HOST + "/api/v1/auths/logout");
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

            window.localStorage.removeItem("token");
            router.push("/");
        } catch (err: any) {
            console.error("err:", err);

            props.setAlertTitle("Login Error")
            props.setAlertMessage(err.message);
            props.setAlertVisible(true);
            props.setAlertSeverity("error");

            window.localStorage.removeItem("token");
        }
    }

    return (<Button type="secondary" label="Logout" onClick={() => logout()}/>);
}