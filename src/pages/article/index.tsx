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
    const {data, error, isLoading} = useSWR("/api/v1/articles", fetcher);
    const {setIsGlobalLoading} = useContext(CommonContext);
    const [currentArticle, setCurrentArticle] = useState<articleInterface>({
        category_id: 0,
        category_name: "",
        content: "",
        created_at: "",
        created_by: 0,
        id: 0,
        title: "",
        updated_at: "",
        updated_by: 0,
        user_id: 0,
        user_name: ""
    });

    const currentArticleMemo: articleInterface = useMemo(() => {
        return currentArticle;
    }, [currentArticle])

    if (error) return (<Alert type="error" title={'Article'} message={data ? data.translate : "cannot reach server"}/>);
    if (isLoading) return (<>{setIsGlobalLoading(true)}</>);
    if (data) {
        setIsGlobalLoading(false)
        return <>
            <div className="flex flex-row translate-y-2 w-10/12 space-x-20">
                <div className="left-0 w-fit border-r border-gray-200">
                    <ArticleList data={data.data} setCurrentArticle={setCurrentArticle}/>
                </div>
                <div className="p-3 w-full">
                    <ArticleContent data={currentArticleMemo}/>
                </div>
            </div>
        </>
    }
}

export default Article;