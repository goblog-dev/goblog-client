import Category from "@/pages/category";

const ArticleEditorCategory = (props: any) => {
    const setupCategoryId = (categoryId: number) => {
        props.setCategoryId(categoryId);
    }

    const categoryEditor = <>
        <div className="pl-10 pr-10 w-full">
            <div>
                <Category setCategoryId={setupCategoryId}/>
            </div>
        </div>
    </>

    return (<>{categoryEditor}</>)
}

export default ArticleEditorCategory;