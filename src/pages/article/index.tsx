'use client'

import ArticleList from "@/pages/article/articleList";
import useSWR from 'swr';
import {useContext} from "react";
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
        return (
            <>
                <ArticleList data={data.data}/>
            </>
        )
    }
}

export default Article;