'use client'

import {useState} from "react";
import {CommonContext} from "@/app/commonContext";
import {Modal} from "@/components/modal";
import {Spin} from "@/components/spin";
import {Menu} from "@/components/menu";
import {Alert} from "@/components/alert";

const App = (props: any) => {
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
        }}>
            <html lang="en">
                <body className={props.inter.className}>
                    <Alert severity={alertSeverity} title={alertTitle} message={alertMessage} open={alertVisible} />
                    <Spin open={isGlobalLoading} />
                    <Modal open={modalOpen}
                           content={modalContent}
                           title={modalTitle}
                           footer={modalFooter}
                           header={modalHeader}/>
                    <Menu/>
                    {props.children}
                </body>
            </html>

        </CommonContext.Provider>
    );
}

export default App;