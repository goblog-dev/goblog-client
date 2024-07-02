'use client'

import AuthPage from "@/pages/auth";
import AuthLoginForm from "@/pages/auth/loginForm";
import {Modal} from "@/components/modal";
import {useLayoutEffect, useState} from "react";
import {Button} from "@/components/button";
import {useRouter} from "next/navigation";
import {isAuthenticated} from "@/pages/auth/isAuth";
import DropdownMenu from "@/components/menu/dropdownMenu";
import Logo from "@/components/menu/logo";
import DataColorModeToggle from "@/components/menu/dataColorModeToggle";

export const Menu = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useLayoutEffect(() => {
        setModalOpen(false)
    }, []);

    const showLoginForm = () => {
        setModalOpen(true);
    }

    return (
        <div className="xl:sticky lg:sticky md:sticky fixed left-0 top-0 z-40 shadow w-full">
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
                bg-opacity-90
                border-b border-gray-500
                pt-3 pb-3 xl:pl-16 lg:pl-16 pl-5 xl:pr-16 lg:pr-16 pr-5
                w-full
                dark:bg-gray-950
                bg-gray-100
            ">
                <div className="visible xl:invisible lg:invisible md:invisible">
                    <DropdownMenu showLoginForm={showLoginForm} setModalOpen={setModalOpen}/>
                </div>
                <div className="flex items-center space-x-2 invisible xl:visible lg:visible md:visible">
                    <div className="pl-5 pr-5 border-r border-gray-500">
                        <Logo/>
                    </div>
                    <div className="flex w-full text-sm text-gray-500 space-x-2 justify-end items-center">
                        <DataColorModeToggle />
                        <Button type="label" label="Home" onClick={() => router.push("/")}/>
                        <Button type="label" label="Write" onClick={() => {
                            isAuthenticated() ?
                                router.push("/articles/create") :
                                showLoginForm()
                        }}/>
                        <Button type="label" label="About Me"
                                onClick={() => router.push("https://www.michaelputong.com")}/>
                    </div>
                    <div>
                        <AuthPage setModalOpen={setModalOpen}/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
