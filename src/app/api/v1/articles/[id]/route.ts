import {ApiResponse} from "@/app/api";
import ArticleModel from "@/models/articles";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, {params}: { params: { id: string } }) {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""};
    const articleId: number = parseInt(params.id);

    try {
        const articleModel: ArticleModel = new ArticleModel();
        const resp: ApiResponse = await articleModel.GetArticle(articleId);

        apiResponse.status = resp.status;
        apiResponse.message = resp.message
        apiResponse.translate = resp.translate;
        apiResponse.data = resp.data;

        return NextResponse.json(apiResponse)
    } catch (err: any) {
        apiResponse.status = err.status;
        apiResponse.message = err.message;
        apiResponse.translate = err.translate

        return NextResponse.json(apiResponse);
    }
}