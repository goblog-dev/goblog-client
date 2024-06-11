'use client'

import Cookies from "js-cookie";

export const IsRememberMe = () => {
    const localStorageToken: string | null = window.localStorage.getItem("token") || null;
    if (localStorageToken !== null) {
        Cookies.set("token", localStorageToken);
    }
}