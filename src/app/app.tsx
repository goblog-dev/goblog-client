'use client'

import {Menu} from "@/components/menu";
import {useState} from "react";
import {CommonContext} from "@/app/commonContext";
import {Alert} from "@/components/alert";
import {Spin} from "@/components/spin";
import {Modal} from "@/components/modal";
import Article from "@/pages/article";

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

    const drawerButton =
        <div className={`absolute 
                        -right-4 top-0 
                        rounded-full border border-gray-300 
                        p-0.5 
                        bg-gray-100
                        delay-300
                        duration-300
                        ${isDrawerOpen ? "-rotate-180" : "rotate-0"}`}>
            {drawerOpenIcon}
        </div>

    return (
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
            <div onClick={() => {
                setAlertVisible(false);
                isDrawerOpen ? setIsDrawerOpen(false) : null
            }}>

                <Alert severity={alertSeverity} title={alertTitle} message={alertMessage} open={alertVisible}/>
                <Spin open={isGlobalLoading}/>
                <Modal open={modalOpen}
                       content={modalContent}
                       title={modalTitle}
                       footer={modalFooter}
                       header={modalHeader}/>
                <Menu/>
                <div className={`flex
                             w-full
                             pt-5
                             xl:pr-20 lg:pr-20 pr-10 pl-0
                             xl:${isDrawerOpen ? "justify-start" : "justify-center"}
                             lg:${isDrawerOpen ? "justify-start" : "justify-center"}
                             md:${isDrawerOpen ? "justify-start" : "justify-center"}
                             justify-center`}>
                    <div className={`delay-400
                                    duration-500
                                    ease-in-out
                                    transition-all
                                    transform
                                    ${isDrawerOpen ? "left-0" : "left-5"}
                                    ${isDrawerOpen ? "xl:relative lg:relative md:relative fixed" : "fixed"}
                                    ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
                                    bg-gray-100
                                    xl:w-80 lg:w-80 md:w-80 w-11/12
                                    xl:top-auto lg:top-auto md:top-auto top-20
                                    xl:pl-10 lg:pl-10 pl-5
                                    border-r border-gray-300
                                    z-20`}
                         onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                        <div className={`w-full
                                    p-3
                                    top-20
                                    sticky
                                    bg-gray-100`}>
                            {drawerButton}
                            <Article/>
                        </div>
                    </div>
                    <div className={`p-5 pl-5
                                 xl:w-4/6 lg:w-4/6 w-5/6
                                 xl:relative lg:relative md:relative absolute
                                 xl:top-0 lg:top-0 md:top-0 top-20
                                 bg-gray-100 
                                 z-10
                                 ${isDrawerOpen ? "xl:visible lg:visible md:visible invisible" : "visible"}
                                 overflow-scroll`}>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </CommonContext.Provider>
    );
}