import {Context, createContext, Dispatch, SetStateAction} from "react";

type globalContext = {
    isGlobalLoading: boolean,
    setIsGlobalLoading: Dispatch<SetStateAction<boolean>>
    setModalOpen: Dispatch<SetStateAction<boolean>>
    setModalContent: Dispatch<SetStateAction<any>>
    setModalTitle: Dispatch<SetStateAction<string>>
    setModalFooter: Dispatch<SetStateAction<boolean>>
    setModalHeader: Dispatch<SetStateAction<boolean>>
    setAlertVisible: Dispatch<SetStateAction<boolean>>
    setAlertTitle: Dispatch<SetStateAction<string>>
    setAlertMessage: Dispatch<SetStateAction<string>>
    setAlertSeverity: Dispatch<SetStateAction<string>>
}

const globalContextValue: globalContext = {
    isGlobalLoading: false
    , setIsGlobalLoading: value => {}
    , setModalOpen: value => {}
    , setModalContent: value => {}
    , setModalTitle: value => {}
    , setModalFooter: value => {}
    , setModalHeader: value => {}
    , setAlertVisible: value => {}
    , setAlertTitle: value => {}
    , setAlertMessage: value => {}
    , setAlertSeverity: value => {}
}

export const CommonContext: Context<globalContext> = createContext(globalContextValue);