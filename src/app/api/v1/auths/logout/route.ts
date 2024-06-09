import {ApiResponse} from "@/app/api";
import AuthModel from "@/models/auth";
import {cookies} from "next/headers";

export const GET = async (request: Request) => {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const cookieToken = cookies().get("token");
        let token: string = "Bearer "

        if (cookieToken) {
            token += cookieToken.value
        }

        const authModel:AuthModel = new AuthModel();
        const resp: ApiResponse = await authModel.Logout(token);

        apiResponse.status = resp.status;
        apiResponse.message = resp.message
        apiResponse.translate = resp.translate;
        apiResponse.http_code = resp.http_code;
        apiResponse.data = resp.data;

        cookies().delete("token");
        return Response.json(apiResponse);
    } catch (err: any) {
        apiResponse.status = err.status;
        apiResponse.message = err.message;
        apiResponse.translate =  err.translate;
        apiResponse.http_code = err.http_code;

        cookies().delete("token");
        return Response.json(apiResponse);
    }
}