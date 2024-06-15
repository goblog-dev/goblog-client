'use client'

import {useState} from "react";
import {CommonContext} from "@/app/commonContext";
import {Modal} from "@/components/modal";
import {Spin} from "@/components/spin";
import {Alert} from "@/components/alert";
import Article from "@/pages/article";

const Home = () => {
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
            <Alert severity={alertSeverity} title={alertTitle} message={alertMessage} open={alertVisible}/>
            <Spin open={isGlobalLoading}/>
            <Modal open={modalOpen}
                   content={modalContent}
                   title={modalTitle}
                   footer={modalFooter}
                   header={modalHeader}/>
            <main className="pl-16 pr-16">
                <Article/>
            </main>
        </CommonContext.Provider>
    );
}

export default Home;
