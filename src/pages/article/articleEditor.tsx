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
    tags?: string;
}

export const ArticleEditor = () => {
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [categoryId, setCategoryId] = useState<number>(0);
    const {
        setAlertVisible
        , setAlertMessage
        , setAlertTitle
        , setAlertSeverity
    } = useContext(CommonContext);

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

    const tagsMemo = useMemo(() => {
        return tags;
    }, [tags])

    const handleEditorSaveCallback = useCallback((data: contentData) => {
        return handleEditorSave(data);
    }, [content, title, categoryId])


    const setupTitle = (title: string) => {
        setAlertVisible(false);
        setTitle(title);
    }

    const titleEditor = <>
        <div className="pl-10 pr-10 w-full flex-col">
            {/*<div className="font-bold mb-3">Title:</div>*/}
            <div>
                <input
                    type='text'
                    className="border-gray-300 bg-gray-100 border-b-2 p-2 w-full"
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
        <div className="pl-10 pr-10 w-full">
            {/*<div className="font-bold mb-3">Category:</div>*/}
            <div>
                <Category setCategoryId={setupCategoryId}/>
            </div>
        </div>
    </>

    const setupTags = (tags: string) => {
        setAlertVisible(false);
        setTags(tags);
    }

    const tagEditor = <>
        <div className="pl-10 pr-10 w-full flex-col">
            {/*<div className="font-bold mb-3">Title:</div>*/}
            <div>
                <input
                    type='tags'
                    className="border-gray-300 bg-gray-100 border-b-2 p-2 w-full"
                    value={tags}
                    onChange={(e) => setupTags(e.target.value)}
                    maxLength={50}
                    placeholder={'#tag1 #tag2 #tag3'}
                />
            </div>
        </div>
    </>

    const setupContent = (content: string) => {
        setAlertVisible(false);
        setContent(content);
    }

    const contentEditor = <>
        <div className="w-full">
            <QuillToolbar
                handleEditorSaveCallback={handleEditorSaveCallback}
                data={{
                    content: contentMemo
                    , title: titleMemo
                    , category_id: categoryIdMemo
                    , tags: tagsMemo
                }}
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
        <div className="w-10/12 flex flex-col pl-16 pr-16 pt-5 min-w-80 space-y-5">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row mt-3">
                    {titleEditor}
                    {categoryEditor}
                </div>
                <div>
                    {tagEditor}
                </div>
            </div>
            <div>
                {contentEditor}
            </div>
        </div>
    )
}