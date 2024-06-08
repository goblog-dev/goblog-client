import Link from "next/link";
import {AuthPage} from "@/pages/auth";

export const Menu = () => {
    return (
        <nav
            className="backdrop-blur
                sticky
                z-30
                top-0 left-0
                bg-gray-100 bg-opacity-90
                border-b-2 border-gray-200
                text-black
                pt-3 pb-3 pl-16 pr-16
                w-full
                overflow-hidden
            ">
            <div className="flex items-center justify-between">
                <div className="pl-5 pr-5 border-r-2 border-gray-200 w-fit">
                    <Link href="/">
                        <span className="text-4xl">GoBlog</span><span>.dev</span>
                    </Link>
                </div>
                <div>
                    <AuthPage />
                </div>
            </div>
        </nav>
    );
}
