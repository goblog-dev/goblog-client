import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import {Button} from "@/components/button";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

export const QuillEditor = (props: any) => {
    const quillModules = {
        toolbar: [
            ['clean'],
            [{header: [1, 2, 3, false]}],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'direction'],
            [{list: 'ordered'}, {list: 'bullet'}],
            [{indent: '-1'}, {indent: '+1'}],
            ['link', 'image', 'video'],
            [{align: []}],
            [{color: []}, {background: []}],
            ['code-block'],
            [{script: 'super'}, {script: 'sub'}],
            ['formula']
        ],
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true
        }
    };


    const quillFormats: string[] = [
        'header', 'font', 'size',
        'background', 'color',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'script', 'code-block',
        'list', 'bullet',
        'align', 'indent',
        'link', 'image'
    ];


    return (
        <div>
            <Button type="success" label="save" onClick={()=> props.handleEditorSaveCallback(props.data)} />
            <ReactQuill
                theme="snow"
                value={props.data.content}
                onChange={props.setupContent}
                modules={quillModules}
                formats={quillFormats}
                className="bg-white -z-0 min-h-96 sticky top-20"
            />
        </div>
    );
}