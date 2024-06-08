'use client'

import useSWR from 'swr';
import {ErrorAlert} from "@/components/alert";
import {Spin} from "@/components/spin";
import {Dropdown, DropdownStruct} from "@/components/dropdown";
import {Category as categoryStruct} from "@/models/categories";
import {useState} from "react";


const fetcher: any = (url: string) => fetch(url).then((res) => res.json());

export const Category = (props: any) => {
    const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_APP_CLIENT_HOST}/api/v1/categories`, fetcher);

    if (error) return (<ErrorAlert title={'Article'} message={data.translate}/>);
    if (isLoading) return (<Spin/>)

    const dropdownData = data.data.map((item: categoryStruct, id: number): DropdownStruct => {
        return {key: id, label: item.name, value: item.id}
    })

    const setupCategoryId = (categoryId: number) => {
        props.setCategoryId(categoryId);
    }

    return (<Dropdown data={dropdownData} setValue={setupCategoryId}/>)
}