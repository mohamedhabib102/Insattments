import { Rubik } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/utils/contextapi";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  title: "نظام إدارة الأقساط",
  description: "نظام احترافي لإدارة الأقساط والمدفوعات والعملاء بكل سهولة وأمان.",
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
  openGraph: {
    title: "نظام إدارة الأقساط",
    description: "نظام احترافي لإدارة الأقساط والمدفوعات والعملاء بكل سهولة وأمان.",
    images: [
      {
        url: "/logo.PNG",
        width: 800,
        height: 600,
        alt: "شعار نظام إدارة الأقساط",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "نظام إدارة الأقساط",
    description: "نظام احترافي لإدارة الأقساط والمدفوعات والعملاء بكل سهولة وأمان.",
    images: ["/logo.PNG"],
  },
};

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="ar" dir="rtl" className={`${rubik.variable}`}>
      <body className={`antialiased flex flex-col min-h-screen`}>
        <div className="grow">
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
