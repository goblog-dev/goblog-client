import React, {useContext, useRef, useState} from "react";
import {CommonContext} from "@/app/commonContext";
import Article from "@/pages/article";
import { useRouter } from "next/navigation"

const scrollPos = {
    UP: "up"
    , DOWN: "down"
}

const SideMenu = () => {
    const {setIsDrawerOpen, isDrawerOpen, darkMode} = useContext(CommonContext);
    const [scrollIcon, setScrollIcon] = useState<string>(scrollPos.DOWN);
    const [scrollPosition, setMenuPosition] = useState<number>(0);
    const articleListRef = useRef(null);
    const router = useRouter();

    const drawerOpenIcon =
        <div onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="cursor-pointer">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#26355D" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>

    const drawerButton =
        <div className={`absolute 
                        -right-4 top-0 
                        rounded-full border border-gray-500 
                        p-0.5 
                        bg-gray-100
                        delay-300
                        duration-300
                        ${isDrawerOpen ? "-rotate-180" : "rotate-0"}`}>
            {drawerOpenIcon}
        </div>

    const setupScrollPosition = () => {
        if (scrollIcon === scrollPos.DOWN) {
            setScrollIcon(scrollPos.UP);
            router.push("/#yBottom");
        } else {
            setScrollIcon(scrollPos.DOWN);
            router.push("/#yTop");

        }
    }

    const scrollButtonIcon =
        <div onClick={setupScrollPosition} className="cursor-pointer">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={darkMode ? "#000" : "#fff"} strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>

    const scrollButton = <div className={`absolute 
                        right-5 ${scrollIcon === scrollPos.DOWN ? "bottom-10" : "top-10"}
                        p-0.5 
                        ${darkMode ? "bg-gray-200" : "bg-gray-950"}
                        bg-opacity-50
                        transition-all
                        delay-300
                        duration-300
                        z-20
                        ${scrollIcon === scrollPos.DOWN ? "rotate-90" : "-rotate-90"}`}>
        {scrollButtonIcon}
    </div>

    const onScroll = (e: any) => {
        const {scrollTop, scrollHeight, clientHeight} = e.target;
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );

        setScrollIcon(position > 20 ? scrollPos.UP : scrollPos.DOWN);
    }

    return (
        <>
            <div className={`delay-400
                            duration-500
                            ease-in-out
                            transition-all
                            transform
                            ${isDrawerOpen ? "left-0" : "left-5"}
                            ${isDrawerOpen ? "xl:relative lg:relative md:relative fixed" : "fixed"}
                            ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
                            xl:w-80 lg:w-80 md:w-80 w-11/12
                            xl:top-auto lg:top-auto md:top-auto top-20
                            xl:pl-10 lg:pl-10 pl-5
                            border-r border-gray-500
                            dark:bg-gray-950 bg-gray-100
                            z-20`}>
                <div className={`w-full
                                p-3
                                top-20
                                sticky`}>
                    {drawerButton}
                    <div className={`h-[35rem] overflow-y-scroll`} onScroll={onScroll} ref={articleListRef}>
                        {scrollButton}
                        <div id="yTop"/>
                        <Article/>
                        <div id="yBottom"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu;