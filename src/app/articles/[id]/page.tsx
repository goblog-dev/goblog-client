import {Metadata} from "next";
import ArticleId from "@/pages/article/articleId";

type Props = {
    params: { id: string };
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const url: string = process.env.NEXT_PUBLIC_APP_SERVER_HOST + "/api/v1/articles/" + params.id;
    const post = await fetch(url).then((res) => res.json());

    console.log("title:", post.data.title)
    console.log("description:", post.data.description)

    return {
        title: post.data.title,
        description: post.data.description,
    };
}

const ArticlePageId = ({params}: Props) => {
    return (
        <>
            <ArticleId params={params}/>
        </>
    )
}

export default ArticlePageId;


