import {Context, createContext, Dispatch, SetStateAction} from "react";

type globalLoading = {
    isGlobalLoading: boolean,
    setIsGlobalLoading: Dispatch<SetStateAction<boolean>>
}

const globalLoading: globalLoading = {
    isGlobalLoading: false
    , setIsGlobalLoading: value => {}
}

export const CommonContext: Context<globalLoading> = createContext(globalLoading);