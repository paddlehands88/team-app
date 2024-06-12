import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manchester Thunder Ball Hockey Club",
  description: "MTBHC Events Management App",
  icons: {
    icon: '/yellowMT.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/yellowMT.png"/>
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
