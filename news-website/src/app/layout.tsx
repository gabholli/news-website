import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "News Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" type="image/x-icon" href="/newspaper.ico" />
      <body
        className="font-serif bg-black text-white"
      >
        {children}
      </body>
    </html>
  );
}
