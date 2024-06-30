'use client'

import ArticleEditor, {ActionType} from "@/pages/article/articleEditor";
import isAuth from "@/pages/auth/isAuth";

type Props = {
    params: { id: string};
};

const ArticleCreate = ({params}: Props) => {
    return (
        <div className="flex justify-center">
            <ArticleEditor {...params} type={ActionType.CREATE}/>
        </div>
    )
}

export default isAuth(ArticleCreate);