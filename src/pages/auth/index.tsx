'use client'

import {CommonContext} from "@/app/commonContext";
import {useContext, useEffect, useLayoutEffect, useState} from "react";
import {LoginPage} from "@/pages/auth/login";
import {LogoutPage} from "@/pages/auth/logout";
import Cookies from "js-cookie";
import {isAuthenticated} from "@/pages/auth/isAuth";



export const AuthPage = () => {
    const [isClient, setIsClient] = useState(false)

    useLayoutEffect(() => {
        setIsClient(true)
    }, [])

    const {
        setModalOpen
        , setModalContent
        , setModalTitle
        , setModalFooter
        , setModalHeader
        , setAlertVisible
        , setAlertTitle
        , setAlertMessage
        , setAlertSeverity
    } = useContext(CommonContext);

    return (
        <>
            {
                isClient ?
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
                    : <></>
            }
        </>
    );
}