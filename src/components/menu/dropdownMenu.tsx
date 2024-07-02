import {Button} from "@/components/button";
import {isAuthenticated} from "@/pages/auth/isAuth";
import AuthPage from "@/pages/auth";
import {useRouter} from "next/navigation";
import {useMemo, useState} from "react";
import Logo from "@/components/menu/logo";
import DataColorModeToggle from "@/components/menu/dataColorModeToggle";

const DropdownMenu = (props: any) => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const isMenuOpenMemo: Boolean = useMemo(() => {
        return isMenuOpen;
    }, [isMenuOpen])

    return (
        <>
            {isMenuOpenMemo ? <div className="fixed
                                              w-full h-screen
                                              top-0 left-0
                                              bg-gray-100 bg-opacity-50"
                                   onClick={() => setIsMenuOpen(false)}/> : <></>}
            <div className="absolute">
                <div className="flex items-center space-x-2 w-full">
                    <svg className={`border border-gray-500 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}
                         onClick={() => setIsMenuOpen(!isMenuOpen)}
                         width="40px" height="40px"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H20" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 17H20" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 7H20" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Logo />
                    </div>
                    <div className={"pl-20"}>
                        <DataColorModeToggle />
                    </div>
                </div>
                {
                    isMenuOpenMemo ?
                        <ul className="pl-2 pr-2 shadow-2xl bg-gray-100 dark:bg-gray-900 max-w-52">
                            <li className="border-b border-b-gray-300 pt-3 pb-3 pl-2 pr-2">
                                <Button type="label" label="Home" onClick={() => {
                                    router.push("/");
                                    setIsMenuOpen(false);
                                }}/>
                            </li>
                            <li className="border-b border-b-gray-300 pt-3 pb-3 pl-2 pr-2">
                                <Button type="label" label="Write" onClick={() => {
                                    isAuthenticated() ?
                                        router.push("/articles/create") :
                                        props.showLoginForm();

                                    setIsMenuOpen(false);
                                }}/>
                            </li>
                            <li className="border-b border-b-gray-300 pt-3 pb-3 pl-2 pr-2">
                                <Button type="label" label="About Me"
                                        onClick={() => {
                                            router.push("https://www.michaelputong.com");
                                            setIsMenuOpen(false);
                                        }}/>
                            </li>
                            <li className="pt-3 pb-3 pl-2 pr-2"
                                onClick={() => setIsMenuOpen(false)}>
                                <AuthPage setModalOpen={props.setModalOpen}
                                          setAlertVisible={props.setAlertVisible}
                                          setAlertTitle={props.setAlertTitle}
                                          setAlertMessage={props.setAlertMessage}
                                          setAlertSeverity={props.setAlertSeverity}
                                          setLoading={props.setLoading}/>
                            </li>
                        </ul> : <></>
                }
            </div>
        </>
    )
}

export default DropdownMenu;