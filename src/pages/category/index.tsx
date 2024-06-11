'use client'

import useSWR from 'swr';
import {Spin} from "@/components/spin";
import {Dropdown, DropdownStruct} from "@/components/dropdown";
import {Category as categoryStruct} from "@/models/categories";
import {Alert} from "@/components/alert";


const fetcher: any = (url: string) => fetch(url).then((res) => res.json());

const Category = (props: any) => {
    const {data, error, isLoading} = useSWR(`/api/v1/categories`, fetcher);

    if (error) return (<Alert type="error" title={'Article'} message={data ? data.translate : "cannot reach server"}/>);
    if (isLoading) return (<Spin/>)

    if (data.data == undefined) {
        return <Dropdown data={[]} />
    }

    const dropdownData = data.data.map((item: categoryStruct, id: number): DropdownStruct => {
        return {key: id, label: item.name, value: item.id}
    })

    const setupCategoryId = (categoryId: number) => {
        props.setCategoryId(categoryId);
    }

    return (<Dropdown data={dropdownData} setValue={setupCategoryId}/>)
}

export default Category;