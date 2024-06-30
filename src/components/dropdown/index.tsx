'use client'

import {useEffect, useState} from "react";

export interface DropdownStruct {
    key: number;
    value: any;
    label: string;
}

export const Dropdown = (props: any) => {
    const [listDropdown, setListDropdown] = useState<DropdownStruct[]>([])

    useEffect(() => {
        setListDropdown(props.data)
    }, [props.data]);

    const dropdownList =
        <select
            id="options"
            onChange={(e) => props.setValue(e.target.value)}
            className="border-gray-300 border-b-2 p-2 w-full bg-gray-100">
            <option key={0} value={0} selected={true}>-- select ---</option>
            {
                listDropdown.map((item: DropdownStruct) => {
                    return <option
                        key={item.key}
                        value={item.value}
                        selected={props.categoryId === item.value}
                    >{item.value}. {item.label}</option>
                })
            }
        </select>

    return (<>{dropdownList}</>);
}