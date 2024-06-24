const ArticleEditorTags = (props: any) => {
    const setupTags = (tags: string) => {
        props.setTags(tags);
    }

    const tagEditor = <>
        <div className="pl-10 pr-10 w-full flex-col">
            <div>
                <input
                    type='tags'
                    className="border-gray-300 bg-gray-100 border-b-2 p-2 w-full"
                    value={props.tags}
                    onChange={(e) => setupTags(e.target.value)}
                    maxLength={50}
                    placeholder={'#tag1 #tag2 #tag3'}
                />
            </div>
        </div>
    </>

    return (<>{tagEditor}</>)
}

export default ArticleEditorTags;