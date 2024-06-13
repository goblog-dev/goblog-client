'use client'

import {Button} from "@/components/button";

const LoginPage = (props: any) => {
    return (<Button type="primary"
                    label="Login"
                    onClick={() => {
                        props.setModalOpen(true);
                        props.setAlertVisible(false);
                    }}/>);
}

export default LoginPage;