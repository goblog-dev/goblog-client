import CategoryModel from "@/models/categories";
import {ApiResponse} from "@/app/api";

export async function GET() {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const categoryModel: CategoryModel = new CategoryModel();
        const resp: ApiResponse = await categoryModel.List();

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