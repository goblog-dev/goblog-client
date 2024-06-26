'use client'

import React, {useContext, useEffect, useState} from "react";
import {Article} from "@/models/articles";
import {useRouter} from "next/navigation";
import {Button} from "@/components/button";
import {CommonContext} from "@/app/commonContext";

const ArticleList = (props: any) => {
    const router = useRouter();
    const {setIsDrawerOpen} = useContext(CommonContext);
    const [categoryList, setCategoryList] = useState<string[]>([]);
    const [articleListMap, setArticleListMap] = useState<Map<string, Article[]>>();

    useEffect(() => {
        if (props.data) {
            setupArticleList(props.data);
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
            , tags: item.tags
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
                categoryList.map((item: string, catIndex: number) => {
                    const itemSplit: string[] = item.split(" ");
                    const categorySplit: string[] = itemSplit.map((word: string) => {
                        return word.substring(0, 1).toUpperCase() + word.substring(1);
                    });
                    const category: string = categorySplit.join(" ");

                    return <li key={catIndex}>
                        <span className="text-gray-800 font-bold text-sm">
                            {category}
                        </span>
                        <ul className="mb-5">
                            {
                                // @ts-ignore
                                articleListMap[item].map((item: Article, titleIndex: number) => {
                                    return <li key={titleIndex} className="pl-2 pt-2 pb-2 text-sm w-full">
                                        <Button type="label" label={item.title}
                                                onClick={() => {
                                                    router.push(`/articles/${item.id}`);
                                                    setIsDrawerOpen(false);
                                                }}/>
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
        <>
            {listArticle()}
        </>
    )
}

export default ArticleList;