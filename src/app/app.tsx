'use client'

import {Menu} from "@/components/menu";
import {ReactNode, useState} from "react";
import {CommonContext} from "@/app/commonContext";
import {Alert} from "@/components/alert";
import {Spin} from "@/components/spin";
import {Modal} from "@/components/modal";
import {Inter} from "next/font/google";
import SideMenu from "@/components/menu/sideMenu";

const inter = Inter({subsets: ["latin"]});

export const ColorMode = {
    LIGHT: "light"
    , DARK: "dark"
}

export default function App({children}: Readonly<{ children: ReactNode }>) {
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
    const [darkMode, setDarkMode] = useState<boolean>(true);

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
            , setDarkMode
            , darkMode
            , isDrawerOpen
        }}>
            <html lang="en"
                  data-color-mode={darkMode ? ColorMode.DARK : ColorMode.LIGHT}
                  className={darkMode ? ColorMode.DARK : ColorMode.LIGHT}>
            <body className={`${inter.className} dark:bg-gray-950`}>
            <div onClick={() => {
                setAlertVisible(false)
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
                    <SideMenu/>
                    <div className={`p-5 pl-5
                                 xl:w-4/6 lg:w-4/6 w-5/6
                                 xl:relative lg:relative md:relative absolute
                                 xl:top-0 lg:top-0 md:top-0 top-20
                                 z-10
                                 ${isDrawerOpen ? "xl:visible lg:visible md:visible invisible" : "visible"}
                                 overflow-scroll`}>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
            </body>
            </html>
        </CommonContext.Provider>
    );
}