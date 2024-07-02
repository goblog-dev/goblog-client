const ArticleEditorTitle = (props: any) => {
    const setupTitle = (title: string) => {
        props.setTitle(title);
    }

    const titleEditor = <>
        <div className="pl-3 pr-3 w-full flex-col">
            <div>
                <input
                    type='text'
                    className="border-gray-500 bg-gray-100 border-b p-2 w-full"
                    value={props.title}
                    onChange={(e) => setupTitle(e.target.value)}
                    maxLength={100}
                    placeholder={'title'}
                />
            </div>
        </div>
    </>

    return (<>{titleEditor}</>)
}

export default ArticleEditorTitle;