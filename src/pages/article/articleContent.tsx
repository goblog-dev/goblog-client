import {DateFormat} from "@/tool/dateTime";
import {useLayoutEffect, useMemo, useState} from "react";
import {Article} from "@/models/articles";
import {useRouter} from "next/navigation";
import {Button} from "@/components/button";

const ArticleContent = (props: any) => {
    const router = useRouter();
    const [dataArticle, setDataArticle] = useState<Article>({
        category_id: 0,
        category_name: "",
        content: "",
        created_at: "",
        created_by: 0,
        id: 0,
        tags: "",
        title: "",
        updated_at: "",
        updated_by: 0,
        user_id: 0,
        user_name: "",
        page: ""
    });

    useLayoutEffect(() => {
        setDataArticle(props.data);
    }, [props.data]);

    const articleDataMemo = useMemo(() => {
        return dataArticle;
    }, [dataArticle])

    return (
        <>
            <div className="border-b-gray-300 border-b-2 pb-5 mb-5">
                <div className="font-extrabold text-4xl pb-2">{articleDataMemo.title}</div>
                <span className="text-sm text-gray-500 flex flex-row space-x-2">
                    <Button type="label"
                            label={articleDataMemo.user_name}
                            onClick={() => router.push(`${articleDataMemo.page}`)} />
                    <span>{articleDataMemo.created_at ? DateFormat(articleDataMemo.created_at) : ""}</span>
                </span>
            </div>
            <div
                className="ql-editor border-b-2 border-gray-300 pb-5 text-gray-600 text-sm"
                dangerouslySetInnerHTML={{__html: articleDataMemo.content}}
            />
            <div className="text-sm text-gray-500 pt-2 flex space-x-1">
                {
                    articleDataMemo.tags ? articleDataMemo.tags.split("#")
                        .map((tag: string, index: number) => {
                            return <div key={index}>
                                {
                                    tag.length > 0 ?
                                        <div key={index + tag}
                                             className="bg-gray-600
                                                        text-white text-xs
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


