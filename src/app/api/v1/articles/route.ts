import {ApiResponse} from "@/app/api";
import ArticleModel from "@/models/articles";

export const GET = async (request: Request) => {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const articleModel:ArticleModel = new ArticleModel();
        const resp: ApiResponse = await articleModel.List();

        apiResponse.status = resp.status;
        apiResponse.message = resp.message
        apiResponse.translate = resp.translate;
        apiResponse.data = resp.data;

        return Response.json(apiResponse);
    } catch (err: any) {
        apiResponse.status = err.status;
        apiResponse.message = err.message;
        apiResponse.translate =  err.translate;

        return Response.json(apiResponse);
    }
}