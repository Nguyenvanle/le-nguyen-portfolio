import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar/sidebar";
import { ThemeProvider } from "@/contexts/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Nguyen Portfolio",
  description: "Design by Nguyen Van Le",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col sm:flex-row container py-8 gap-4">
            <Sidebar />
            <header className="container flex flex-col gap-4 bg-card rounded px-0 min-w-72">
              <Header />
              <div className="container flex-col">{children}</div>
            </header>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
