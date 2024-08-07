'use client'

import {DateFormat} from "@/tool/dateTime";
import {useLayoutEffect, useMemo, useState} from "react";
import {Article} from "@/models/articles";
import {useRouter} from "next/navigation";
import Like from "@/components/like";
import Comment from "@/components/comment";
import dynamic from 'next/dynamic';
import '@uiw/react-markdown-preview/markdown.css';
import Facebook from "@/components/socialMedia/facebook";
import Linkedin from "@/components/socialMedia/linkedin";

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    {ssr: false}
);

const ArticleContent = (props: any) => {
    const router = useRouter();
    const [dataArticle, setDataArticle] = useState<Article>({
        category_id: 0, category_name: ""
        , content: ""
        , created_at: "", created_by: 0
        , id: 0
        , tags: ""
        , title: ""
        , updated_at: "", updated_by: 0
        , user_id: 0, user_name: ""
        , page: ""
        , description: ""
        , image: ""
        , avatar: ""
    });

    useLayoutEffect(() => {
        setDataArticle(props.data);
    }, [props.data]);

    const articleDataMemo: Article = useMemo(() => {
        return dataArticle;
    }, [dataArticle])

    const userName = (name: string) => {
        const splitUserName: string[] = name.split(" ");

        return splitUserName.map((n) => {
            const fChar: string = n.slice(0, 1).toUpperCase();
            const restName: string = n.slice(1, n.length);

            return fChar + restName
        }).join(" ")
    }

    return (
        <>
            <div className="pb-2 mb-2 dark:text-gray-200">
                <div
                    className="font-extrabold xl:text-4xl lg:text-4xl md:text-3xl text-2xl pb-2 mb-2 border-b border-gray-500">
                    {articleDataMemo.title}
                </div>
                <div className="pb-2 mb-2">
                    <div className="xl:text-2xl lg:text-2xl md:text-2xl pb-2 mb-2">
                        {articleDataMemo.description}
                    </div>
                    <div className="xl:text-sm lg:text-sm md:text-sm text-xs
                                    xl:flex-row lg:flex-row md:flex-row flex-col flex
                                    xl:items-end lg:items-end md:items-end items-start
                                    justify-start
                                    xl:space-x-2 lg:space-x-2 md:space-x-2 space-y-2
                                    pb-2
                                    mb-2
                                    border-b border-gray-500">
                        <div className="flex flex-row space-x-2 cursor-pointer"
                             onClick={() => router.push(`${articleDataMemo.page}`)}>
                            <img className={"w-10 h-10 border-gray-300 border rounded-[50%]"}
                                 src={articleDataMemo.avatar} alt={articleDataMemo.user_name}/>
                            <div className={"flex flex-col justify-center"}>
                                <div>{articleDataMemo.created_at ? DateFormat(articleDataMemo.created_at) : ""}</div>
                                <div>{userName(articleDataMemo.user_name ? articleDataMemo.user_name : "")}</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <Like/>
                            <Comment/>
                            <Facebook url={"https://goblog.dev/articles/" + articleDataMemo.id}
                                      articleId={articleDataMemo.id + ""}/>
                            <Linkedin url={"https://goblog.dev/articles/" + articleDataMemo.id}/>
                        </div>
                    </div>
                    <div className="pt-2 pb-2">
                        <img src={articleDataMemo.image} alt={articleDataMemo.title} className="w-full"/>
                    </div>
                </div>
            </div>
            <MarkdownPreview source={articleDataMemo.content} className="p-2"/>
            <div className="text-sm text-gray-500 pt-2 flex space-x-1">
                {
                    articleDataMemo.tags ? articleDataMemo.tags.split("#")
                        .map((tag: string, index: number) => {
                            return <div key={index}>
                                {
                                    tag.length > 0 ?
                                        <div key={index + tag}
                                             className="bg-gray-600
                                                        text-gray-200 text-xs
                                                        pt-1 pb-1 pr-2 pl-2
                                                        rounded">{tag}</div>
                                        : <div key={index + tag}></div>
                                }
                            </div>
                        }) : <></>
                }
            </div>
        </>
    )
}

export default ArticleContent;


