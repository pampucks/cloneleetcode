"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LeetClone",
  description:
    "Web application that contains leetcode problems and video solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <body className={inter.className}>{children}</body>
      </html>
    </RecoilRoot>
  );
}
