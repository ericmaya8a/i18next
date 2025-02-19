import { MainFooter } from "@/components/Footer/MainFooter";
import { Header } from "@/components/Header/Header";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${inter.className} main-container`}>
        <Header />
        <main className="bg-slate-200 py-4">
          <div className="container mx-auto">{children}</div>
        </main>
        <MainFooter lng={lng} />
      </body>
    </html>
  );
}
