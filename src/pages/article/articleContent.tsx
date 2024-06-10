import {useLayoutEffect, useMemo, useState} from "react";
import {Article as articleInterface} from "@/models/articles";
import {DateFormat} from "@/tool/dateTime";

export const ArticleContent = (props: any) => {
    const [currentArticle, setCurrentArticle] = useState<articleInterface>({
        category_id: 0
        , category_name: ""
        , content: ""
        , created_at: ""
        , created_by: 0
        , id: 0
        , title: ""
        , updated_at: ""
        , updated_by: 0
        , user_id: 0
        , user_name: ""
        , tags: ""
    });

    useLayoutEffect(() => {
        if (props.data) {
            setCurrentArticle(props.data);
        }
    }, [props.data])

    const currentArticleMemo = useMemo(() => {
        return currentArticle;
    }, [currentArticle])

    const tagsMemoList: string[] | undefined = useMemo(() => {
        if (currentArticle.tags) {
            return currentArticle.tags.split("#");
        }
    }, [currentArticle.tags])

    return (
        <div className="p-3">
            <div className="border-b-gray-300 border-b-2 pb-5 mb-5">
                <div className="font-extrabold text-4xl pb-2">{currentArticleMemo.title}</div>
                <span className="text-sm text-gray-500 flex flex-row space-x-2">
                    <span>{currentArticleMemo.user_name}</span>
                    <span>{currentArticleMemo.created_at ? DateFormat(currentArticleMemo.created_at) : ""}</span>
                </span>
            </div>
            <div
                className="ql-editor border-b-2 border-gray-300 pb-5 text-gray-600 text-sm"
                dangerouslySetInnerHTML={{__html: currentArticleMemo.content}}
            />
            <div className="text-sm text-gray-500 pt-2 flex space-x-1">
                {
                    tagsMemoList ?
                        tagsMemoList.map((tag: string, index: number) => {
                            return <>
                                {
                                    tag.length > 0 ?
                                        <div key={index} className="
                                                            rounded
                                                            border border-gray-500
                                                            p-1
                                                            text-xs text-white
                                                            font-light
                                                            bg-gray-500">
                                            {tag}
                                        </div> : <></>
                                }
                            </>
                        }) : <></>
                }
            </div>
        </div>
    )
}