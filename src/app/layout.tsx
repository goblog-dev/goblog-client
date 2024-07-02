import "@/app/layout.css";
import '@mantine/tiptap/styles.css';
import App from '@/app/app';

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <App>
            {children}
        </App>
    );
}
