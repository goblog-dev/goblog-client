'use server'

import {ApiResponse} from "@/app/api";
import AuthModel from "@/models/auth";
import {cookies} from "next/headers";

export async function POST(request: Request) {
    const apiResponse: ApiResponse = {message: "", status: "", translate: ""}

    try {
        const {email, password} = await request.json();
        const authModel:AuthModel = new AuthModel();
        const resp: ApiResponse = await authModel.Login({email,  password});

        apiResponse.status = resp.status;
        apiResponse.message = resp.message
        apiResponse.translate = resp.translate;
        apiResponse.data = resp.data;

        cookies().set({
            name: 'token',
            value: resp.data.token,
            httpOnly: false,
            path: '/',
        });

        return Response.json(apiResponse);
    } catch (err: any) {
        apiResponse.status = err.status;
        apiResponse.message = err.message;
        apiResponse.translate =  err.translate;

        return Response.json(apiResponse);
    }
}