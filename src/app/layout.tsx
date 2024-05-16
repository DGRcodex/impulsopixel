import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impulso Pixel",
  description: "Diseñamos tu futuro digital pixel a pixel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon-16.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
