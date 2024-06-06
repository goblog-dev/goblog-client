'use client'

import {Article} from '@/components/article';
import {Spin} from "@/components/spin";
import {useState} from "react";
import {CommonContext} from "@/app/commonContext";

export default function Home() {
    const [isGlobalLoading, setIsGlobalLoading] = useState<boolean>(false);

    return (
        <CommonContext.Provider value={{isGlobalLoading, setIsGlobalLoading}}>
            <div className={isGlobalLoading ? 'visible' : 'invisible'}>
                <Spin />
            </div>
            <main>
                <Article/>
            </main>
        </CommonContext.Provider>
    );
}
