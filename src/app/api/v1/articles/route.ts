import {ApiResponse} from "@/app/api";
import { NextResponse } from 'next/server'
import ArticleModel from "@/models/articles";

export const GET = async () => {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        // const articleModel:ArticleModel = new ArticleModel();
        // const resp: ApiResponse = await articleModel.List();

        const response = await fetch('http://localhost:9000/api/v1/articles', {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        // const response = await fetch('http://localhost:9000/api/v1/articles');
        const resp = await response.json();

        apiResponse.status = resp.status;
        apiResponse.message = resp.message
        apiResponse.translate = resp.translate;
        apiResponse.data = resp.data;

        return NextResponse.json(apiResponse)
    } catch (err: any) {
        apiResponse.status = err.status;
        apiResponse.message = err.message;
        apiResponse.translate =  err.translate

        return NextResponse.json(apiResponse);
    }
}