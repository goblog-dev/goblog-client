const ArticleEditorTitle = (props: any) => {
    const setupTitle = (title: string) => {
        props.setAlertVisible(false);
        props.setTitle(title);
    }

    const titleEditor = <>
        <div className="pl-10 pr-10 w-full flex-col">
            {/*<div className="font-bold mb-3">Title:</div>*/}
            <div>
                <input
                    type='text'
                    className="border-gray-300 bg-gray-100 border-b-2 p-2 w-full"
                    value={props.title}
                    onChange={(e) => setupTitle(e.target.value)}
                    maxLength={50}
                    placeholder={'title'}
                />
            </div>
        </div>
    </>

    return (<>{titleEditor}</>)
}

export default ArticleEditorTitle;