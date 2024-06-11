'use client'

import {Button} from "@/components/button";
import AuthLoginForm from "@/pages/auth/loginForm";
import {useLayoutEffect} from "react";

const LoginPage = (props: any) => {
    useLayoutEffect(() => {
            props.setModalContent(<AuthLoginForm {...props} />);
            props.setModalFooter(false);
            props.setModalHeader(false);
            props.setModalTitle("");
        },
        [])

    return (<Button type="primary" label="Login" onClick={() => props.setModalOpen(true)}/>);
}

export default LoginPage;