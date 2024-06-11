'use client'

import ArticleEditor from "@/pages/article/articleEditor";
import isAuth from "@/pages/auth/isAuth";

const ArticlePage = () => {
    return (
        <div className="flex justify-center">
            <ArticleEditor/>
        </div>
    )
}

export default isAuth(ArticlePage);