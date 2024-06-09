'use client'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useCallback, useContext, useMemo, useState} from "react";
import QuillToolbar, {formats, modules} from "@/components/editor";
import {Category} from "../category";
import {CommonContext} from "@/app/commonContext";

type contentData = {
    content: string;
    title: string;
    category_id: number;
}

export const ArticleEditor = () => {
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [categoryId, setCategoryId] = useState<number>(0);
    const {setAlertVisible
        , setAlertMessage
        , setAlertTitle
        , setAlertSeverity} = useContext(CommonContext);

    const saveArticle = async (url: string, data: contentData): Promise<any> => {
        try {
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

        saveArticle("api/v1/articles/create", data).then();
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

    const handleEditorSaveCallback = useCallback((data: contentData) => {
        return handleEditorSave(data);
    }, [content, title, categoryId])


    const setupTitle = (title: string) => {
        setAlertVisible(false);
        setTitle(title);
    }

    const titleEditor = <>
        <div className="pl-10 pr-10 m-5 w-full flex-col">
            <div className="font-bold mb-3">Title:</div>
            <div>
                <input
                    type='text'
                    className="border-gray-300 border-b-2 p-2 w-full"
                    value={title}
                    onChange={(e) => setupTitle(e.target.value)}
                    maxLength={50}
                    placeholder={'title'}
                />
            </div>
        </div>
    </>

    const setupCategoryId = (categoryId: number) => {
        setAlertVisible(false);
        setCategoryId(categoryId);
    }

    const categoryEditor = <>
        <div className="pl-10 pr-10 m-5 w-full">
            <div className="font-bold mb-3">Category:</div>
            <div>
                <Category setCategoryId={setupCategoryId}/>
            </div>
        </div>
    </>

    const setupContent = (content: string) => {
        setAlertVisible(false);
        setContent(content);
    }

    const contentEditor = <>
        <div className="pl-10 pr-10 m-5">
            <QuillToolbar
                handleEditorSaveCallback={() => handleEditorSaveCallback(
                    {category_id: categoryId, content: content, title: title})}
                data={{content: contentMemo, title: titleMemo, category_id: categoryIdMemo}}
            />
            <ReactQuill
                theme="snow"
                value={contentMemo}
                onChange={setupContent}
                modules={modules}
                formats={formats}
                className="bg-white -z-0 min-h-96"
            />
        </div>
    </>

    return (
        <div className="pl-48 pr-48">
            <div className="flex flex-row">
                {titleEditor}
                {categoryEditor}
            </div>
            {contentEditor}
        </div>
    )
}