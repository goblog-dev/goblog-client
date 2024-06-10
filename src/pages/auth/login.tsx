'use client'

import {Button} from "@/components/button";
import {Auth} from "@/models/auth";
import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import {AuthLoginForm} from "@/pages/auth/loginForm";

export const LoginPage = (props: any) => {
    useEffect(() => {
        props.setModalContent(<AuthLoginForm {...props} />);
        props.setModalFooter(false);
        props.setModalHeader(false);
        props.setModalTitle("");
    }, [])

    return (<Button type="primary" label="Login" onClick={() => props.setModalOpen(true)}/>);
}