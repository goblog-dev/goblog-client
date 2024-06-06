'use client'

import {useEffect, useMemo, useState} from "react";
import {Article} from "@/models/articles";
import {it} from "node:test";

export const ArticleList = (props: any) => {
    const [articleList, setArticleList] = useState<Article[]>([])

    useEffect(() => {
        setList();
        if (props.data.length > 0) {
            props.setCurrentArticle(props.data[0]);
        }
    }, [props.data])

    const setList = () => {
        setArticleList(props.data.map((item: Article): Article => {
            return {
                category_id: item.category_id,
                category_name: item.category_name,
                content: item.content,
                created_at: item.created_at,
                created_by: item.created_by,
                id: item.id,
                title: item.title,
                updated_at: item.updated_at,
                updated_by: item.updated_by,
                user_id: item.user_id,
                user_name: item.user_name,

            }
        }))
    }

    const articleListMemo: Article[] = useMemo(() => {
        return articleList
    }, [articleList])


    const list = () => {
        return (
            <ul className="max-w-md divide-y divide-gray-500">
                {
                    articleListMemo.map((item: Article) => {
                        return (
                            <li key={item.id} className="p-3 text-left hover:bg-gray-500 hover:text-white">
                                <button className="text-left" onClick={() => props.setCurrentArticle(item)}>
                                    {item.title}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    return (
        <div className="border-l-8 border-gray-400 p-3 bg-gray-200 mr-10">
            <div className="text-black font-bold text-xl border-b-2 border-black p-2">Article List</div>
            {list()}
        </div>
    )
}