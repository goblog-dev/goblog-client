import {SwitchComponent} from "@/components/switch";
import React, {useContext, useState} from "react";
import {CommonContext} from "@/app/commonContext";

const DataColorModeToggle = () => {
    const {setDarkMode, darkMode} = useContext(CommonContext);
    const [label, setLabel] =useState<string>("");

    const onSelect = (e: any) => {
        setDarkMode(e.target.checked);
    }

    return (
        <div className={`flex flex-row 
                         space-x-2 
                         cursor-pointer 
                         items-center
                         xl:border-r lg:border-r md:border-r
                         xl:border-gray-500  lg:border-gray-500  md:border-gray-500
                         pr-3 pl-3`}>
            <SwitchComponent onSelect={onSelect} checked={darkMode} onChange={onSelect}/>
        </div>
    )
}

export default DataColorModeToggle;