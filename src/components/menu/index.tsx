import Link from "next/link";

export const Menu = () => {
    return (
        <menu className="z-50 top-0 left-0 fixed bg-gray-800 text-white p-5 pl-6 w-full">
            <Link href="/">
                <span className="text-5xl font-thin">GoBlog</span><span>.dev</span>
            </Link>
        </menu>
    );
}
