'use client'

import ArticleList from "@/pages/article/articleList";
import ArticleContent from "@/pages/article/articleContent";
import useSWR from 'swr';
import {useContext, useMemo, useState} from "react";
import {Article as articleInterface} from "@/models/articles";
import {Alert} from "@/components/alert";
import {CommonContext} from "@/app/commonContext";

const fetcher: any = (url: string) => fetch(url).then((res) => res.json());

const Article = () => {
    const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_APP_SERVER_HOST}/api/v1/articles`, fetcher);
    const {setIsGlobalLoading} = useContext(CommonContext);

    if (error) return (<Alert type="error" title={'Article'} message={data ? data.translate : "cannot reach server"}/>);
    if (isLoading) return (<>{setIsGlobalLoading(true)}</>);
    if (data) {
        setIsGlobalLoading(false)
        return <>
            <div className="flex flex-row translate-y-2 w-10/12 space-x-20">
                <div className="left-0 w-fit border-r border-gray-200">
                    <ArticleList data={data.data} />
                </div>
            </div>
        </>
    }
}

export default Article;