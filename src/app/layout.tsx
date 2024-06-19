import "./layout.css";
import '@mantine/tiptap/styles.css';
import App from '@/app/app';
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <App>
                {children}
            </App>
        </body>
        </html>
    );
}
