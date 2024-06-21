import ArticleId from "@/pages/article/articleId";
import ArticlesModel from "@/models/articles";
import {Metadata} from "next";

export type Props = {
    params: { id: string };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const articlesModel: ArticlesModel = new ArticlesModel();
    const post = await articlesModel.GetArticle(parseInt(params.id));

    return {
        title: post.data.title
        , description: post.data.description
        , category: post.data.category
        , keywords: post.data.tags.split("#")
        , creator: post.data.user_name
        , twitter: {
            images: {
                url: post.data.image
                , alt: post.data.description
                , width: '1200px'}
            , card: "summary_large_image"
            , title: post.data.title
            , description: post.data.description
            , creator: post.data.user_name
        }
        , openGraph : {
            images: {
                url: post.data.image
                , alt: post.data.description
                , width: '1200px'}
            , title: post.data.title
            , description: post.data.description
            , url: 'http://goblog.dev/articles/' + post.data.id
        }
    };
}

const ArticlePageId = async ({params}: Props) => {
    return (
        <>
            <ArticleId {...params}/>
        </>
    )
}

export default ArticlePageId;


