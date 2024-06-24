const ArticleEditorDescription = (props: any) => {
    const setupDescription = (description: string) => {
        props.setDescription(description);
    }

    const descriptionEditor = <>
        <div className="pl-10 pr-10 w-full flex-col">
            <div>
                <textarea
                    rows={4}
                    className="border-gray-300 bg-gray-100 border-b-2 p-2 w-full"
                    value={props.description}
                    onChange={(e) => setupDescription(e.target.value)}
                    placeholder={'description'}
                    aria-multiline={true}
                    minLength={100}
                />
            </div>
        </div>
    </>

    return (<>{descriptionEditor}</>)
}

export default ArticleEditorDescription;