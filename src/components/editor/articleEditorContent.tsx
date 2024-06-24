import {QuillEditor} from '@/components/editor/quillToolbar';

const ArticleEditorContent = (props: any) => {
    const setupContent = (content: string) => {
        props.setContent(content);
    }

    const contentEditor = <>
        <div className="w-full">
            <QuillEditor setupContent={setupContent}
                         handleEditorSaveCallback={props.handleEditorSaveCallback}
                         data={props.data}/>
        </div>
    </>

    return (<>{contentEditor}</>)
}

export default ArticleEditorContent;