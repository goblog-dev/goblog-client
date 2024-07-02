'use client'

import {useContext} from "react";
import {CommonContext} from "@/app/commonContext";

const Home = (props: any) => {
    const {setIsDrawerOpen} = useContext(CommonContext);

    return (
        <div className="xl:space-y-10 lg:space-y-10 space-y-5 dark:text-gray-200">
            <div className="font-bold xl:text-8xl l:text-8xl md:text-6xl text-4xl">
                &ldquo;{props.title}&rdquo;
            </div>
            <div className="text-gray-500 dark:text-gray-400 xl:text-2xl lg:text-2xl text-sm w-full">
                {props.description}
            </div>
            <div>
                <div className="border-black border rounded-3xl
                                dark:bg-gray-200 dark:text-gray-950
                                p-2
                                justify-center
                                flex
                                hover:bg-gray-800 hover:text-gray-200 hover:cursor-pointer"
                     onClick={() => setIsDrawerOpen(true)}>
                    Start Reading
                </div>
            </div>
        </div>
    )
}

export default Home;
