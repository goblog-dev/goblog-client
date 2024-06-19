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
            images: post.data.image
            , card: "summary_large_image"
            , title: post.data.title
            , description: post.data.description
            , creator: post.data.user_name
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


