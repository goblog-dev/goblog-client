import dynamic from 'next/dynamic';
import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import React from "react";
import {Button} from "@/components/button";

const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);

const MarkdownEditorComponent = (props:any) => {
    return (
        <div>
            <Button type="primary" label={props.actionType} onClick={()=> props.handleEditorSaveCallback(props.data)} />
            <MarkdownEditor value={props.data.content}
                            onChange={props.setContent}
                            enablePreview={true}
                            className={"w-full h-[35rem]"} />
        </div>
    );
}

export default MarkdownEditorComponent;