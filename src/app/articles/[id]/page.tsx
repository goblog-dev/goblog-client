import {Metadata} from "next";
import ArticleId from "@/pages/article/articleId";

type Props = {
    params: { id: string };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const url: string = process.env.NEXT_PUBLIC_APP_SERVER_HOST + "/api/v1/articles/" + params.id;
    const post = await fetch(url).then((res) => res.json());

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
        }
    };
}

const ArticlePageId = ({params}: Props) => {
    return (
        <>
            <ArticleId {...params}/>
        </>
    )
}

export default ArticlePageId;


