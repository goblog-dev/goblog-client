import {QuillEditor} from '@/components/editor/quillToolbar';
import Demo from "@/components/editor/mantineTextEditor";

const ArticleEditorContent = (props: any) => {
    const setupContent = (content: string) => {
        props.setAlertVisible(false);
        props.setContent(content);
    }

    const contentEditor = <>
        <div className="w-full">
            <QuillEditor setupContent={setupContent}
                         handleEditorSaveCallback={props.handleEditorSaveCallback}
                         data={{
                             content: props.contentMemo
                             , title: props.titleMemo
                             , category_id: props.categoryIdMemo
                             , tags: props.tagsMemo
                         }}/>
        </div>
    </>

    return (<>{contentEditor}</>)
}

export default ArticleEditorContent;