import dynamic from 'next/dynamic';
import '@uiw/react-markdown-editor/markdown-editor.css';
import React from "react";
import {Button} from "@/components/button";

const MarkdownEditor = dynamic(
    () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
    { ssr: false }
);

const MarkdownEditorComponent = (props:any) => {
    return (
        <div>
            <Button type="primary" label="save" onClick={()=> props.handleEditorSaveCallback(props.data)} />
            <MarkdownEditor value={props.data.content}
                            onChange={props.setContent}
                            className={"w-full h-screen"} />
        </div>
    );
}

export default MarkdownEditorComponent;