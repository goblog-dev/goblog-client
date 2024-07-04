import "@/app/layout.css";
import '@mantine/tiptap/styles.css';
import App from '@/app/app';
import {ReactNode} from "react";

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <App>
            {children}
        </App>
    );
}
