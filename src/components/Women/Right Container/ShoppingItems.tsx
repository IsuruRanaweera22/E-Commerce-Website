'use client';
import styles from './ShoppingItems.module.scss';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { shoppingList } from './ShoppingList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import { IoHeartCircleSharp } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";

const ShoppingItems = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.shoppingItems} ${theme==='dark'?styles.darkShoppingItems:''}`}>
    //   {
    //       shoppingList.map((item:any, key:any)=>{
    //         return(
    //           <div className={styles.item}>
    //             <Link href={{pathname: "/women/#", query: {id: item.id, name: item.des}}}  className={styles.link}>
    //               <Image src={item.name} alt='item' className={styles.image}/>
    //               {!item.favourite?(<Image src={notFav} alt='notFav' className={styles.notFav} />):(<FaHeart className={styles.fav}/>)}        
    //               <p>{item.des}</p>
    //               <p>{item.price}</p>
    //             </Link>
    //           </div>
    //         )
    //       })
    //     }
    // </div>

    <div className="row mx-0 ">
        {
          shoppingList.map((item:any, key:any)=>{
            return(
              
                <div className={`${styles.imageContainer} col-4 position-relative d-flex flex-column align-items-center text-capitalize my-md-3 my-sm-2 my-2`} key={key}>
                  <Link href={{pathname: "/women/#", query: {id: item.id, name: item.des}}} className='text-decoration-none text-black'>
                    <Image src={item.name} alt='item' className='img-fluid'/>
                    {!item.favourite?(<i className={`${styles.heart} bi bi-heart-fill position-absolute fs-xxl-5 btn m-0 p-0`}></i>):(<i className={`${styles.heart} bi bi-heart  position-absolute fs-xxl-5 btn m-0 p-0`}></i>)}    
                    <div className='row mx-0 d-flex align-items-center' style={{height:'50px'}}>
                      <p className='text-start fs-7 fs-sm-7 fs-md-6 fs-xxl-5 fs-xl-6 fs-lg-6 p-0 m-sm-0 m-0' style={{color:'#5A5A5A'}}>{item.des}</p>
                    </div>
                    <div className='row mx-0 d-flex align-items-center py-0 py-sm-0 py-md-1 py-xxl-2 py-xl-2 py-lg-2 '>
                      <p className='text-start fw-bold p-0 fs-7 fs-sm-6 fs-md-5 fs-xxl-4 fs-xl-5 fs-lg-4' style={{color:'#5A5A5A'}}>{item.price}</p>
                    </div>
                  </Link>
                </div>
              
            )
          })
        }
    </div>
  )
}

export default ShoppingItems