import {ApiResponse} from "@/app/api";
import { NextResponse } from 'next/server'
import ArticleModel from "@/models/articles";

export const GET = async () => {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const articleModel:ArticleModel = new ArticleModel();
        const resp: ApiResponse = await articleModel.List();

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

