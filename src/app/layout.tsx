import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { Providers } from "./providers";
import { Suspense } from "react";
import { PageSkeleton } from "@/components/ui/skeleton-loader";

export const metadata: Metadata = {
  title: "Timeless - Deep Tech Platforms and Capabilities That Scale in the Real World",
  description: "We build, operate, and harden AI for enterprises. Our teams combine research, product, and operations to deliver safe systems that run every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          <Suspense fallback={<PageSkeleton />}>
            <main>{children}</main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
