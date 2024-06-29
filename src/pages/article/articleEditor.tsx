'use client'

import {useCallback, useContext, useMemo, useState} from "react";
import {CommonContext} from "@/app/commonContext";
import ArticleEditorTitle from "@/components/editor/articleEditorTitle";
import ArticleEditorCategory from "@/components/editor/articleEditorCategory";
import ArticleEditorContent from "@/components/editor/articleEditorContent";
import ArticleEditorTags from "@/components/editor/articleEditorTags";
import ArticleEditorDescription from "@/components/editor/articleEditorDescription";
import MarkdownEditorComponent from "@/components/editor/markdownEditor";

type contentData = {
    content: string;
    title: string;
    category_id: number;
    tags?: string;
    description?: string;
    image?: string;
}

const ArticleEditor = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
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

    const descriptionMemo = useMemo(() => {
        return description;
    }, [description])

    const handleEditorSaveCallback = useCallback((data: contentData) => {
        alert("the data has being saving")
        return handleEditorSave(data);
    }, [content, title, categoryId, tags, description, image])


    return (
        <div className="w-full flex flex-col min-w-80 space-y-5">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row mt-3">
                    <ArticleEditorTitle title={titleMemo} setTitle={setTitle}/>
                    <ArticleEditorCategory categoryId={categoryIdMemo} setCategoryId={setCategoryId}/>
                </div>
                <div>
                    <ArticleEditorTags setTags={setTags} tags={tagsMemo}/>
                </div>
                <div>
                    <ArticleEditorDescription setDescription={setDescription} description={descriptionMemo}/>
                </div>
            </div>
            <div>
                <MarkdownEditorComponent setContent={setContent}
                                      handleEditorSaveCallback={handleEditorSaveCallback}
                                      data={{
                                          content: contentMemo
                                          , title: titleMemo
                                          , category_id: categoryIdMemo
                                          , tags: tagsMemo
                                          , description: descriptionMemo
                                      }}/>
            </div>
        </div>
    )
}

export default ArticleEditor;