'use client'

import {useContext} from "react";
import {CommonContext} from "@/app/commonContext";

const Home = () => {
    const {setIsDrawerOpen} = useContext(CommonContext);

    return (
        <div className="space-y-10">
            <div className="font-bold text-8xl">
                &ldquo;a
                <span className="font-semibold text-gray-500 text-7xl m-2">
                    little
                </span>
                share better than
                <span className="opacity-20 m-2">
                    none
                </span>
                &rdquo;
            </div>
            <div className="text-2xl text-gray-500">
                A place where I share my
                <span className="font-bold m-1">
                    Experience
                </span>,
                <span className="font-bold m-1">
                    Knowledge
                </span>&
                <span className="font-bold m-1">
                    Thought
                </span>
            </div>
            <div>
                <div className="border-black border-2 rounded-3xl
                                p-2
                                justify-center
                                flex
                                hover:bg-gray-800 hover:text-white hover:cursor-pointer"
                     onClick={() => setIsDrawerOpen(true)}>
                    Start Reading
                </div>
            </div>
        </div>
    )
}

export default Home;
