'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { ThemeContext } from "@/components/ThemeContext";
import { LoginContext } from "@/components/LoginContext";
import '/node_modules/bootstrap/scss/bootstrap.scss';
import '../../../custom.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from '@/components/Side Bar/SideBar';
import './components.css';
import { useEffect } from "react";
import Header from "@/components/Home/Header/Header";
import NavBar from "@/components/Home/NavBar/NavBar";
const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
      <html lang="en">
      
        <body className='container-fluid d-flex justify-content-center m-0 p-0 overflow-x-hidden'>

          <aside className="d-xxl-block d-xl-block d-lg-block d-none bg-black" style={{width:'70px',zIndex:1001}}>
            <SideBar />
          </aside>
          <main className='container-xl container-xxl container-lg container-fluid-md container-fluid-sm container-fluid p-0 m-0 overflow-y-scroll'>
            <div className="mainContainer" style={{overflow:'clip'}}>
              {children}
            </div>
          </main>
   
        </body>
      </html>
  );
}