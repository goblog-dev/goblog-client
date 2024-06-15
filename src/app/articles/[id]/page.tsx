'use client'

import {useContext} from "react";
import useSWR from "swr";
import {Alert} from "@/components/alert";
import {CommonContext} from "@/app/commonContext";
import {Article} from "@/models/articles";
import ErrorPage from "@/components/errorPage";
import ArticleContent from "@/pages/article/articleContent";

const fetcher: any = (url: string) => fetch(url).then((res) => res.json());

const ArticleId = ({ params }: { params: { id: string } }) => {
    const {setIsGlobalLoading} = useContext(CommonContext);
    const {data, error, isLoading} = useSWR(`/api/v1/articles/${params.id}`, fetcher);

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


