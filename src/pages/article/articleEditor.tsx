'use client'

import {useCallback, useContext, useMemo, useState} from "react";
import {CommonContext} from "@/app/commonContext";
import ArticleEditorTitle from "@/pages/article/articleEditorTitle";
import ArticleEditorCategory from "@/pages/article/articleEditorCategory";
import ArticleEditorContent from "@/pages/article/articleEditorContent";
import ArticleEditorTags from "@/pages/article/articleEditorTags";

type contentData = {
    content: string;
    title: string;
    category_id: number;
    tags?: string;
}

const ArticleEditor = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [categoryId, setCategoryId] = useState<number>(0);
    const {
        setAlertVisible
        , setAlertMessage
        , setAlertTitle
        , setAlertSeverity
        , setIsGlobalLoading
    } = useContext(CommonContext);

    const saveArticle = async (url: string, data: contentData): Promise<any> => {
        try {
            setIsGlobalLoading(true);

            const res: Response = await fetch(
                url, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        accept: "application/json",
                    },
                    body: JSON.stringify(data)
                })

            const response = await res.json();
            if (response.status === 'error') {
                setAlertTitle("Save Article Error")
                setAlertMessage(response.translate);
                setAlertVisible(true);
                setAlertSeverity("error");
                return
            }

            setAlertTitle("Save Article Success")
            setAlertMessage(response.translate);
            setAlertVisible(true);
            setAlertSeverity("success");
        } catch (err: any) {
            console.error("err:", err);
            setAlertTitle("Save Article Error")
            setAlertMessage(err.message);
            setAlertVisible(true);
            setAlertSeverity("error");
        } finally {
            setIsGlobalLoading(false);
        }
    };

    const handleEditorSave = (data: contentData) => {
        setAlertTitle("Save Article Error")
        setAlertVisible(true);
        setAlertSeverity("error");

        if (data.content.length <= 0) {
            setAlertMessage("required.content");
            return
        } else if (data.title.length <= 0) {
            setAlertMessage("required.title");
            return;
        } else if (data.category_id <= 0) {
            setAlertMessage("required.category");
            return;
        }

        saveArticle(`/api/v1/articles/create`, data).then();
    }

    const contentMemo = useMemo(() => {
        return content;
    }, [content])

    const titleMemo = useMemo(() => {
        return title;
    }, [title])

    const categoryIdMemo = useMemo(() => {
        return categoryId;
    }, [categoryId])

    const tagsMemo = useMemo(() => {
        return tags;
    }, [tags])

    const handleEditorSaveCallback = useCallback((data: contentData) => {
        return handleEditorSave(data);
    }, [content, title, categoryId])


    return (
        <div className="w-10/12 flex flex-col pl-16 pr-16 pt-5 min-w-80 space-y-5">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row mt-3">
                    <ArticleEditorTitle title={titleMemo}
                                        setTitle={setTitle}
                                        setAlertVisible={setAlertVisible}/>
                    <ArticleEditorCategory categoryId={categoryIdMemo}
                                           setCategoryId={setCategoryId}
                                           setAlertVisible={setAlertVisible}/>
                </div>
                <div>
                    <ArticleEditorTags setAlertVisible={setAlertVisible}
                                       setTags={setTags}
                                       tags={tagsMemo}/>
                </div>
            </div>
            <div>
                <ArticleEditorContent setAlertVisible={setAlertVisible}
                                      setContent={setContent}
                                      handleEditorSaveCallback={handleEditorSaveCallback}
                                      contentMemo={contentMemo}
                                      titleMemo={titleMemo}
                                      categoryIdMemo={categoryIdMemo}
                                      tagsMemo={tagsMemo}/>
            </div>
        </div>
    )
}

export default ArticleEditor;