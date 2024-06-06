import {ApiResponse} from "@/app/api";
import ArticleModel from "@/models/articles";

export const POST = async (request: Request) => {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const {title, category_id, content} = await request.json();
        const auth: string | null = request.headers.get("Authorization")

        const articleModel:ArticleModel = new ArticleModel();
        const resp: ApiResponse = await articleModel.PostArticle(
            {title,  category_id: parseInt(category_id), content}, auth
        );

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