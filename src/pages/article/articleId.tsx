'use client'

import useSWR from "swr";
import {Alert} from "@/components/alert";
import {Article} from "@/models/articles";
import ErrorPage from "@/components/errorPage";
import ArticleContent from "@/pages/article/articleContent";
import {useContext} from "react";
import {CommonContext} from "@/app/commonContext";

const fetcher: any = (url: string) => fetch(url).then((res) => res.json());

const ArticleId = (props: any) => {
    const {setIsGlobalLoading} = useContext(CommonContext);
    const {data, error, isLoading} = useSWR("/api/v1/articles/" + props.params.id, fetcher);

    if (error) return (<Alert type="error" title={'Article'} message={data ? data.translate : "cannot reach server"}/>);
    if (isLoading) return (<>{setIsGlobalLoading(true)}</>);
    if (data) {
        setIsGlobalLoading(false);
        const dataArticle: Article = data.data;
        if (!dataArticle) return (<ErrorPage type="not-found" />);
        return (
            <>
                <ArticleContent data={dataArticle}/>
            </>
        )
    }
}

export default ArticleId;