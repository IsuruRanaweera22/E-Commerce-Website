'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { ThemeContext } from "@/components/ThemeContext";

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, toggleTheme:()=>setTheme(theme === 'light'?'dark':'light')}}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
