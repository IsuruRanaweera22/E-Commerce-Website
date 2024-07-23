'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { ThemeContext } from "@/components/ThemeContext";
import { LoginContext } from "@/components/LoginContext";
import '/node_modules/bootstrap/scss/bootstrap.scss';
import '../../custom.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from '@/components/Side Bar/SideBar';
import './global.css';
import { useEffect } from "react";
import Header from "@/components/Home/Header/Header";
import NavBar from "@/components/Home/NavBar/NavBar";
const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [theme, setTheme] = useState('light');
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <LoginContext.Provider value={{isLogIn, setIsLogIn}}>
      <html lang="en">
      
        <body className='container-fluid d-flex justify-content-center m-0 p-0 overflow-x-hidden'>

          <aside className="d-xxl-block d-xl-block d-lg-block d-none" style={{width:'70px'}}>
            <SideBar />
          </aside>
          <header className='container-fluid ms-0 ps-0 row bg-white m-0 p-xxl-2 d-flex align-items-start justify-content-sm-center justify-content-center justify-content-lg-around justify-content-md-between justify-content-xxl-around justify-content-xl-around p-0 w-100 position-fixed top-0 bg-white w-100' style={{zIndex:1000,height:'125px'}}>
            <Header />
            <NavBar />
          </header>
          <main className='container-xl container-xxl container-lg container-fluid-md container-fluid-sm container-fluid p-0 m-0 overflow-y-scroll'>
            <div style={{paddingTop:'125px', overflow:'clip'}}>
              {children}
            </div>
          </main>
   
        </body>
      </html>
    </LoginContext.Provider>
  );
}

{/* <ThemeContext.Provider value={{theme, toggleTheme:()=>setTheme(theme === 'light'?'dark':'light')}}></ThemeContext.Provider> */}