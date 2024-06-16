import type {Metadata} from "next";
import "./layout.css";
import '@mantine/tiptap/styles.css';
import App from '@/app/app';

export const metadata: Metadata = {
    title: "GoBlog",
    description: "Personal blog @michaelwp",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <App>
                {children}
            </App>
        </>
    );
}
