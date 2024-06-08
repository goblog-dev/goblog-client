'use client'

import {Button} from "@/components/button";
import {Auth} from "@/models/auth";
import {useEffect} from "react";
import { useRouter } from 'next/navigation'

export const LoginPage = (props:any) => {
    const router = useRouter();

    useEffect(() => {
        props.setModalContent(content());
        props.setModalFooter(false);
        props.setModalHeader(false);
        props.setModalTitle("");
    }, [])

    const login = async (e: any) => {
        e.preventDefault();
        const {email, password} = e.target;
        const url: string = "api/v1/auths/login";

        const auth: Auth = {
            email: email.value,
            password: password.value,
        };

        try {
            const res: Response = await fetch(
                url, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        accept: "application/json",
                    },
                    body: JSON.stringify(auth)
                })

            const response = await res.json();

            if (response.status === 'error') {
                props.setAlertTitle("Login Error")
                props.setAlertMessage(response.translate);
                props.setAlertVisible(true);
                props.setAlertSeverity("error");

                return
            }

            props.setAlertTitle("Login Success")
            props.setAlertMessage(response.translate);
            props.setAlertVisible(true);
            props.setAlertSeverity("success");

            props.setModalOpen(false);
            router.push("/");
        } catch (err: any) {
            console.error("err:", err);

            props.setAlertTitle("Login Error")
            props.setAlertMessage(err.message);
            props.setAlertVisible(true);
            props.setAlertSeverity("error");
        }
    }

    const content = () => {return <>
        <div className="p-6
                    space-y-4
                    md:space-y-6
                    sm:p-8">
            <h1 className="text-xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-gray-900
                        md:text-2xl">
                Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={login}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email"
                           className="
                                bg-gray-100
                                border-b border-gray-300
                                text-gray-900
                                sm:text-sm
                                focus:ring-primary-600 focus:border-primary-600
                                block w-full
                                p-2.5"
                           placeholder="name@company.com" required={true}/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="
                                bg-gray-100
                                border-b border-gray-300
                                text-gray-900
                                sm:text-sm
                                focus:ring-primary-600 focus:border-primary-600
                                block w-full
                                p-2.5"
                           required={true}/>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                                   className="
                                        w-4 h-4
                                        border border-gray-300 rounded
                                        bg-gray-50
                                        focus:ring-3 focus:ring-primary-300
                                        dark:bg-gray-700
                                        dark:border-gray-600
                                        dark:focus:ring-primary-600
                                        dark:ring-offset-gray-800"
                                   required={false}/>
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Forgot password?
                    </a>
                </div>
                <div className="
                        space-x-2
                        justify-center
                        flex flex-row">
                    <Button type="primary" label="Sign in"/>
                    <Button type="secondary" label="Cancel" onClick={() => {props.setModalOpen(false)}}/>
                </div>
                <p className="text-sm font-light text-gray-500 space-x-1.5">
                    <span>Don’t have an account yet?</span>
                    <a href="#" className="font-medium text-primary-800 hover:underline">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    </>}

    return (<Button type="primary" label="Login" onClick={() => props.setModalOpen(true)}/>);
}