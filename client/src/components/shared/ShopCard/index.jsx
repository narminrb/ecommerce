import React, { useState } from 'react'
import s from './style.module.scss'
import { Link } from 'react-router'
const ShopCard = ({starCount, LinkId,openModal, Color,
    addToCart,
    ProductName, DefaultImg, HoverImg,price,DiscountPrice, ...props}) => {


    const CheckColorProduct = (color) => {
        switch(color){
            case 'Red':
                return 'bg-red'
            case 'Blue':
                return 'bg-blue'
            case 'Green':
                return 'bg-green'
            default:
                return ''
        }
    }
  return (
    <div className={s.card}>
        <div className={s.root}>
            <div className={s.corner}>
                <div className={s.new}>
                    <p>New</p>
                </div>
                <div className={s.sale}>
                    <p>
                    -50%
                    </p>
                </div>
            </div>
            <img className='w-full h-full object-cover' src={`http://localhost:1337${DefaultImg}`} alt="" />
            <div className={s.product_action}>
                <ul>
                    <li 
                    onClick={() => {
                        addToCart(); 
                        openModal();
                      }}>
                    Add to cart
                    </li>
                </ul>
            </div>

        </div>
        <div>
            <div>
            <ul className="flex gap-0">
                {new Array(starCount).fill(0).map((_, index) => (
                    <li key={index}>
                    <i className="ri-star-fill"></i>
                    </li>
                ))
                }
                </ul>
            </div>
            <h1 className={s.name}>{ProductName}</h1>

            <p className={s.discountprice}>
                ${DiscountPrice} <span className={s.price}>${price}</span>
            </p>
            <div className='flex justify-center items-center gap-2'>
               {
                Color && Color.map((color, index) =>(
                    <>
                     <span 
                     key={index}
                     className={clsx('inline-block w-6 h-6 rounded-full', CheckColorProduct(color))}></span>
                    
                    </>
                ))
               }
            </div>
            <Link to={`/shop/${LinkId}`} className='bg-black my-4 text-white p-2 rounded-md'>View Product</Link>
        </div>

    </div>
  )
}

export default ShopCard