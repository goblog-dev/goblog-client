'use client'

import {Inter} from "next/font/google";
import {Menu} from "@/components/menu";
import {useState} from "react";
import {CommonContext} from "@/app/commonContext";
import {Alert} from "@/components/alert";
import {Spin} from "@/components/spin";
import {Modal} from "@/components/modal";
import Article from "@/pages/article";

const inter = Inter({subsets: ["latin"]});

export default function App({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isGlobalLoading, setIsGlobalLoading] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<any>();
    const [modalTitle, setModalTitle] = useState<string>("title");
    const [modalFooter, setModalFooter] = useState<boolean>(true);
    const [modalHeader, setModalHeader] = useState<boolean>(true);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [alertTitle, setAlertTitle] = useState<string>("title");
    const [alertMessage, setAlertMessage] = useState<string>("message");
    const [alertSeverity, setAlertSeverity] = useState<string>("success");
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const drawerOpenIcon =
        <div onClick={() => setIsDrawerOpen(true)} className="cursor-pointer">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 onClick={() => setIsDrawerOpen(true)}>
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#26355D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>


    const drawerCloseIcon =
        <div onClick={() => setIsDrawerOpen(false)} className="cursor-pointer">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 onClick={() => setIsDrawerOpen(false)}>
                <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#26355D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>

    return (
        <html lang="en">
        <body className={inter.className}>
        <CommonContext.Provider value={{
            isGlobalLoading
            , setIsGlobalLoading
            , setModalOpen
            , setModalContent
            , setModalTitle
            , setModalFooter
            , setModalHeader
            , setAlertVisible
            , setAlertTitle
            , setAlertMessage
            , setAlertSeverity
            , setIsDrawerOpen
        }}>
            <Alert severity={alertSeverity} title={alertTitle} message={alertMessage} open={alertVisible}/>
            <Spin open={isGlobalLoading}/>
            <Modal open={modalOpen}
                   content={modalContent}
                   title={modalTitle}
                   footer={modalFooter}
                   header={modalHeader}/>
            <Menu/>
            <div className="flex w-full p-5 pl-20 pr-20 justify-center">
                <div className={`delay-400
                                    duration-500
                                    ease-in-out
                                    transition-all
                                    transform
                                    ${isDrawerOpen ? " left-0 " : " left-1.5 "}
                                    ${isDrawerOpen ? " relative " : " absolute "}
                                    ${isDrawerOpen ? " translate-x-0 " : " -translate-x-full"}
                                    w-80`}>
                    <div className={`w-full
                                    border-r border-gray-300
                                    p-3
                                    sticky
                                    top-20`}>
                        <div className="absolute -right-4 top-0 rounded-full border border-gray-300 p-0.5 bg-gray-100">
                            {isDrawerOpen ? drawerCloseIcon : drawerOpenIcon}
                        </div>
                        <Article/>
                    </div>
                </div>
                <div className={`p-5 w-5/6 ${isDrawerOpen ? " relative " : " absolute "}`}>
                    <div>{children}</div>
                </div>
            </div>
        </CommonContext.Provider>
        </body>
        </html>
    );
}