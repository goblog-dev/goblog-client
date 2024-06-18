'use client'

import {Button} from "@/components/button";

const LoginPage = (props: any) => {
    return (<Button type="primary"
                    label="Login"
                    onClick={() => {
                        props.setModalOpen(true);
                    }}/>);
}

export default LoginPage;