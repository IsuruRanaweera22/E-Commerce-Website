'use client';
import React from 'react';
import styles from './page.module.scss';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import Heading from '@/components/Mens/Left Container/All Categories/Heading';
import Mens from '@/components/Mens/Left Container/Mens/Mens';
import Sizes from '@/components/Mens/Left Container/Sizes/Sizes';
import Colors from '@/components/Mens/Left Container/Colors/Colors';
import Price from '@/components/Mens/Left Container/Price/Price';
import ShoppingItems from '@/components/Mens/Right Container/ShoppingItems';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';

const page = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.mensContainer} ${theme==='dark'?styles.darkMensContainer:''}`}>
    //   <div className={styles.aside}>
    //     <SideBar/>
    //   </div>
    //   <div className={styles.wrapper}>
    //     <Header />
    //     <NavBar />
    //     <Path prevPath={'home'} currentPath={">men's"}/>
    //     <div className={styles.content}>
    //       <div className={styles.left}>
    //         <Heading />
    //         <Mens />
    //         <Sizes />
    //         <Colors />
    //         <Price />
    //       </div>
    //       <div className={styles.right}>
    //         <ShoppingItems />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={`${styles.mensContainer} ${theme==='dark'?styles.darkMensContainer:''} container-fluid h-100`}>
      <div className='row m-2 p-2 justify-content-between' style={{height:'110px'}}>
        <Header />
      </div>

      <div className='row m-2 ' style={{height:'70px'}}>
        <NavBar />
      </div>

      <div className='row m-2 ' style={{height:'70px'}}>
        <nav aria-label="breadcrumb" className=' my-auto'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Men's</li>
          </ol>
        </nav>
      </div>

      <div className='row m-2 p-2 justify-content-between h-100 d-flex '>
        <div className="col-3 d-flex flex-column justify-content-evenly" style={{background: 'rgba(249, 249, 249, 1)'}}>
          <Heading />
          <Mens />
          <Sizes />
          <Colors />
          <Price />
        </div>
        <div className="card col-8 border-0">
          <ShoppingItems />
        </div>
      </div>

      {/* <Path prevPath={'home'} currentPath={">men's"}/>
      <div className={styles.content}>
        <div className={styles.left}>
          <Heading />
          <Mens />
          <Sizes />
          <Colors />
          <Price />
        </div>
        <div className={styles.right}>
          <ShoppingItems />
        </div>
      </div> */}
    </div>
  )
}

export default page