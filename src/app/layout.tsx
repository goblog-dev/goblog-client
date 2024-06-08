import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.css";
import App from './app';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoBlog",
  description: "Personal blog @michaelwp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // eslint-disable-next-line react/no-children-prop
    <App children={children} inter={inter} />
  );
}
