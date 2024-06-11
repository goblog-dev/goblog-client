import {useRouter} from "next/navigation";
import {useContext, useState} from "react";
import {Auth} from "@/models/auth";
import {Button} from "@/components/button";
import {Spin} from "@/components/spin";

const AuthLoginForm = (props: any) => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const setupShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const login = async (e: any) => {
        e.preventDefault();

       setLoading(true);

        const {email, password, remember} = e.target;
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

                props.setModalOpen(true);
                return
            }

            props.setAlertTitle("Login Success")
            props.setAlertMessage(response.translate);
            props.setAlertVisible(true);
            props.setAlertSeverity("success");

            setRememberMe(remember.checked, response.data.token);

            props.setModalOpen(false);
            router.push("/");
        } catch (err: any) {
            console.error("err:", err);

            props.setAlertTitle("Login Error")
            props.setAlertMessage(err.message);
            props.setAlertVisible(true);
            props.setAlertSeverity("error");
        } finally {
            setLoading(false);
        }
    }

    const setRememberMe = (remember: boolean, token: string) => {
        if (remember) {
            window.localStorage.setItem("token", token);
        }
    }

    const openEyeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    </svg>

    const closeEyeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                              stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>
    </svg>


    return <>
        <Spin open={loading} />
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
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                        email</label>
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
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Password
                    </label>
                    <div className="flex flex-row items-center space-x-1">
                        <input type={showPassword ? "text" : "password"} name="password" id="password"
                               placeholder="••••••••" autoComplete="current-password"
                               className="
                                bg-gray-100
                                border-b border-gray-300
                                text-gray-900
                                sm:text-sm
                                focus:ring-primary-600 focus:border-primary-600
                                block w-full
                                p-2.5"
                               required={true}/>

                        <div className="hover:cursor-grab" onClick={setupShowPassword}>
                            {showPassword ? closeEyeIcon : openEyeIcon}
                        </div>
                    </div>
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
                    <a href="#"
                       className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Forgot password?
                    </a>
                </div>
                <div className="
                        space-x-2
                        justify-center
                        flex flex-row">

                    <Button type="primary" label="Sign in"/>
                    <Button type="secondary" label="Cancel" onClick={() => {
                        props.setModalOpen(false)
                    }}/>
                </div>
                <p className="text-sm font-light text-gray-500 space-x-1.5">
                    <span>Don’t have an account yet?</span>
                    <a href="#" className="font-medium text-primary-800 hover:underline">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    </>
}

export default AuthLoginForm;