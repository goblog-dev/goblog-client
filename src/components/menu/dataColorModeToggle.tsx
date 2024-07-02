import {SwitchComponent} from "@/components/switch";
import {useContext} from "react";
import {CommonContext} from "@/app/commonContext";

const DataColorModeToggle = () => {
    const {setDarkMode, darkMode} = useContext(CommonContext);

    const onSelect = (e: any) => {
        setDarkMode(e.target.checked);
    }

    return (
        <div className={`flex flex-row 
                         space-x-2 
                         cursor-pointer 
                         items-center 
                         dark:text-gray-200
                         xl:border-r xl:border-gray-500
                         lg:border-r lg:border-gray-500
                         md:border-r md:border-gray-500
                         pr-3 pl-3`}>
            <span className={"invisible xl:visible lg:visible md:visible"}>
                {darkMode ? "dark" : "light"}</span>
            <SwitchComponent onSelect={onSelect} checked={darkMode} onChange={onSelect}/>
        </div>
    )
}

export default DataColorModeToggle;