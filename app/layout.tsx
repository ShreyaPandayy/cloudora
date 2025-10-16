import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cloudora",
  description: "Secure cloud storage for your images, powered by ImageKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* ✅ Removed hardcoded dark, added suppressHydrationWarning */}
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} antialiased bg-background text-foreground`}
        >
          {/* ✅ Providers should handle ThemeProvider (next-themes + HeroUI) */}
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
