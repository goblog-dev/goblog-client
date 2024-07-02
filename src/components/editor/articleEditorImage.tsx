const ArticleEditorImage = (props: any) => {
    const setupImage = (image: string) => {
        props.setImage(image);
    }

    const imageEditor = <>
        <div className="pl-3 pr-3 w-full flex-col">
            <div>
                <input
                    type='text'
                    className="border-gray-500 bg-gray-100 border-b p-2 w-full"
                    value={props.image}
                    onChange={(e) => setupImage(e.target.value)}
                    maxLength={100}
                    placeholder={'image'}
                />
            </div>
        </div>
    </>

    return (<>{imageEditor}</>)
}

export default ArticleEditorImage;