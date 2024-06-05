import {useEffect, useMemo, useState} from "react";
import {Article as articleInterface} from "@/models/articles";
import {DateFormat, TimeFormat} from "@/app/tools";

export const ArticleContent = (props: any) => {
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

    useEffect(() => {
        setCurrentArticle(props.data);
    }, [props.data])

    const currentArticleMemo = useMemo(() => {
        return currentArticle;
    }, [currentArticle])

    return (
        <div className="p-3">
            <div className="border-b-gray-500 border-b-2 pb-5 mb-5">
                <div className="font-extrabold text-4xl pb-2">{currentArticleMemo.title}</div>
                <span className="text-sm text-gray-500">
                    {`${currentArticleMemo.user_name} - 
                    ${DateFormat(currentArticleMemo.created_at)} ${TimeFormat(currentArticleMemo.created_at)}`}
                </span>
            </div>
            <div>{currentArticleMemo.content}</div>
        </div>
    )
}