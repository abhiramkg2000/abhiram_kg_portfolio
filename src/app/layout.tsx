import type { Metadata } from "next";

import webDevelopmentImage from "../assests/web-development.png";

import "./globals.css";

export const metadata: Metadata = {
  title: "Abhiram K G",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={webDevelopmentImage.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
