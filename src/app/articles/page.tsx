'use client'

import {ArticleEditor} from "@/pages/article/articleEditor";
import {isAuth} from "@/pages/auth/isAuth";

const ArticlePage = () => {
    return (
        <>
            <ArticleEditor/>
        </>
    )
}

export default isAuth(ArticlePage);