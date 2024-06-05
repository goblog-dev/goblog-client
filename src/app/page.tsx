'use client'

import {Menu} from '@/components/menu';
import {Main} from '@/components/main';
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
            <main className="flex min-h-screen flex-col">
                <Menu/>
                <Main/>
            </main>
        </CommonContext.Provider>
    );
}
