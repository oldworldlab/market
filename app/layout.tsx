import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SecretShopLayout } from "@/components/from-the-abyss-layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Secret Shop",
  description: "Uncover legendary items in our mystical marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SecretShopLayout>{children}</SecretShopLayout>
      </body>
    </html>
  );
}
