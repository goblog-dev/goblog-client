'use client'

import Link from "next/link";
import AuthPage from "@/pages/auth";
import AuthLoginForm from "@/pages/auth/loginForm";
import {Modal} from "@/components/modal";
import {useLayoutEffect, useState} from "react";
import {Alert} from "@/components/alert";
import {Spin} from "@/components/spin";
import {Button} from "@/components/button";

export const Menu = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [alertTitle, setAlertTitle] = useState<string>("title");
    const [alertMessage, setAlertMessage] = useState<string>("message");
    const [alertSeverity, setAlertSeverity] = useState<string>("success");
    const [loading, setLoading] = useState<boolean>(false);

    useLayoutEffect(() => {
        setModalOpen(false)
        setAlertVisible(false);
    }, []);

    return (
        <div className="sticky z-30 top-0 left-0">
            <Spin open={loading} />
            <Alert severity={alertSeverity} title={alertTitle} message={alertMessage} open={alertVisible}/>
            <Modal open={modalOpen}
                   content={<AuthLoginForm setModalOpen={setModalOpen}/>}
                   modalTitle=""
                   modalFooter={false}
                   modalHeader={false}/>
            <nav
                className="backdrop-blur
                sticky
                z-30
                top-0 left-0
                bg-gray-100 bg-opacity-90
                border-b-2 border-gray-200
                text-black
                pt-3 pb-3 pl-16 pr-16
                w-full
            ">
                <div className="flex items-center justify-start space-x-2">
                    <div className="pl-5 pr-5 border-r-2 border-gray-200">
                        <Link href="/">
                            <span className="text-4xl">GoBlog</span><span>.dev</span>
                        </Link>
                    </div>
                    {/*<div className="ml-2 mr-2 mb-1*/}
                    {/*                    pl-2 pr-2*/}
                    {/*                    text-sm text-gray-800*/}
                    {/*                    border-2 border-gray-500*/}
                    {/*                    flex*/}
                    {/*                    justify-end*/}
                    {/*                    space-x-6*/}
                    {/*                    w-full">*/}
                    <div className="w-full text-sm text-gray-500 space-x-2">
                        <a href="https://www.michaelputong.com" className="w-fit
                                                                            hover:font-semibold
                                                                            pr-3 pl-3 pt-1 pb-1">
                            About Me
                        </a>
                    </div>
                    <div>
                        <AuthPage setModalOpen={setModalOpen}
                                  setAlertVisible={setAlertVisible}
                                  setAlertTitle={setAlertTitle}
                                  setAlertMessage={setAlertMessage}
                                  setAlertSeverity={setAlertSeverity}
                                  setLoading={setLoading}/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
