'use client'

import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";

const ArticleList = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push("/");
    }, []);
}

export default ArticleList;