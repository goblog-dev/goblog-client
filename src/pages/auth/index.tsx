'use client'

import {CommonContext} from "@/app/commonContext";
import {useContext} from "react";
import {LoginPage} from "@/pages/auth/login";
import {LogoutPage} from "@/pages/auth/logout";
import Cookies from "js-cookie";

export const isAuthenticated = (): boolean => {
    return Cookies.get("token") !== undefined;
}

export const AuthPage = () => {
    const {
        setModalOpen
        , setModalContent
        , setModalTitle, setModalFooter
        , setModalHeader
        , setAlertVisible
        , setAlertTitle
        , setAlertMessage
        , setAlertSeverity
    } = useContext(CommonContext);

    return (
        <>
            {
                isAuthenticated()
                    ? <LogoutPage setAlertVisible={setAlertVisible}
                                  setAlertSeverity={setAlertSeverity}
                                  setAlertTitle={setAlertTitle}
                                  setAlertMessage={setAlertMessage}/>
                    : <LoginPage setModalOpen={setModalOpen}
                                 setModalTitle={setModalTitle}
                                 setModalFooter={setModalFooter}
                                 setModalHeader={setModalHeader}
                                 setModalContent={setModalContent}
                                 setAlertVisible={setAlertVisible}
                                 setAlertSeverity={setAlertSeverity}
                                 setAlertTitle={setAlertTitle}
                                 setAlertMessage={setAlertMessage}/>
            }

        </>
    );
}