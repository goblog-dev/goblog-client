import {ApiResponse} from "@/app/api";
import ArticleModel from "@/models/articles";
import {cookies} from "next/headers";

export async function PUT(request: Request) {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const {
            id
            , title
            , category_id
            , content
            , tags
            , description
            , image
        } = await request.json();
        const cookieToken = cookies().get("token");
        let token: string = "Bearer "

        if (cookieToken) {
            token += cookieToken.value
        }

        const articleModel: ArticleModel = new ArticleModel();
        const resp: ApiResponse = await articleModel.PutArticle(
            {
                id
                , title
                , category_id: parseInt(category_id)
                , content
                , tags
                , description
                , image
            }, token
        );

        apiResponse.status = resp.status;
        apiResponse.message = resp.message
        apiResponse.translate = resp.translate;
        apiResponse.data = resp.data;

        return Response.json(apiResponse);
    } catch (err: any) {
        apiResponse.status = err.status;
        apiResponse.message = err.message;
        apiResponse.translate = err.translate;

        return Response.json(apiResponse);
    }
}