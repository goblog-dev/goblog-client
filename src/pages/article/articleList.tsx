'use client'

import React, {useEffect, useState} from "react";
import {Article} from "@/models/articles";
import {Button} from "@/components/button";

export const ArticleList = (props: any) => {
    const [categoryList, setCategoryList] = useState<string[]>([]);
    const [articleListMap, setArticleListMap] = useState<Map<string, Article[]>>();

    useEffect(() => {
        if (props.data) {
            setupArticleList(props.data);
            props.setCurrentArticle(props.data[0]);
        }
    }, [props.data])

    const setupArticle = (item: Article): Article => {
        return {
            id: item.id
            , user_id: item.user_id
            , category_id: item.category_id
            , title: item.title
            , content: item.content
            , created_at: item.created_at
            , updated_at: item.updated_at
            , created_by: item.created_by
            , updated_by: item.updated_by
            , user_name: item.user_name
            , category_name: item.category_name
        }
    }

    const setupArticleMap = (data: Article[]): Map<string, Article[]> => {
        const articleMapList: Map<string, Article[]> = new Map();
        data.forEach((item: Article) => {
            // @ts-ignore
            if (articleMapList[item.category_name] !== undefined) {
                // @ts-ignore
                articleMapList[item.category_name].push(setupArticle(item));
            } else {
                // @ts-ignore
                articleMapList[item.category_name] = [setupArticle(item)];
            }
        })

        return articleMapList;
    }

    const setupArticleList = (data: Article[]) => {
        const articleMap: Map<string, Article[]> = setupArticleMap(data);

        setArticleListMap(articleMap);
        setCategoryList(Object.keys(articleMap));
    }

    const listArticle = () => {
        return <ul>
            {
                categoryList.map((item: string, index: number) => {
                    const itemSplit: string[] = item.split(" ");
                    const categorySplit: string[] = itemSplit.map((word: string) => {
                        return word.substring(0,1).toUpperCase() + word.substring(1);
                    });
                    const category: string = categorySplit.join(" ");

                    return <li key={index}>
                        <span className="text-gray-800 font-bold text-sm">
                            {category}
                        </span>
                        <ul className="mb-5">
                            {
                                // @ts-ignore
                                articleListMap[item].map((item: Article) => {
                                    return <li key={index} className="pl-2 pt-2 pb-2 text-sm">
                                        <Button type="label" onClick={() => props.setCurrentArticle(item)} label={item.title} />
                                    </li>
                                })
                            }
                        </ul>
                    </li>
                })
            }
        </ul>
    }

    return (
        <div className="bg-gray-100 mr-10 p-5 sticky top-10 left-0">
            {listArticle()}
        </div>
    )
}