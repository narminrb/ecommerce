import ShopCard from '@/components/shared/ShopCard'
import { QueryKeys } from '@/constants/QueryKeys'
import { getApi } from '@/http/api'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import s from './style.module.scss'
import firstBtn from '../../../assets/firstbtn.png'
import secondBtn from '../../../assets/secondbtn.png'
import thirdBtn from '../../../assets/thirdbtn.png'
const ProductSection = () => {
    const [collection, setCollection] = useState('');

  const {data, isLoading, isError, error} = useQuery({
    queryKey:[QueryKeys.products,collection],
    queryFn: () => getApi(`/products?populate=*&filters[collections][name][$contains]=${collection}`)
  })


  const {data:collectionData, isLoading:collectionLoading, isError:isCollectionError, error:collectionErr} = useQuery({
    queryKey:[QueryKeys.collections],
    queryFn: () => getApi("/collections?populate=*")
  })
  console.log(collectionData);

  return (
    <div className={s.productsection}>
        <div className='container mx-auto max-w-screen-xl'>
            <div>

            </div>
        <div className='grid grid-cols-12 gap-2'>
           <div className='col-span-3'>
            <div className={s.filtdiv}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21" stroke="#141718" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h1 className={s.filter}>Filter</h1>
            </div>
           <div>
            <h1 className={s.catname}>CATEGORIES</h1>
           <ul className={s.ul}>
           <li 
                    onClick={()=>setCollection('')}
                    className={s.categories}>
                        All rooms
                    </li>
            {
                collectionData?.data && collectionData?.data.map((el,index) => (
                    <li 
                    onClick={()=>setCollection(el.name)}
                    className={s.categories} key={index}>
                        {el.name}
                    {/* <Link to={`/collection/${el._id}`}>{el.name}</Link> */}
                    </li>
                ))
            }
           </ul>
           </div>
           </div>
           <div className='col-span-9'>
                <div className={s.prodheader}>
                    <h2 className={s.living}>Living Room</h2>
                    <div className={s.leftgrids}>
                        <p className={s.sort}>Sort by</p>
                        <div className={s.grids}>
                        <img src={firstBtn} alt="" />
                        </div>
                        <div className={s.grids}>
                        <img src={secondBtn} alt="" />
                        </div>
                        <div className={s.grids}>
                        <img src={thirdBtn} alt="" />
                        </div>
                    </div>
                </div>
             <div className='grid grid-cols-3 gap-4'>
           {
            data?.data && data?.data.map((el,index)=>(
              <ShopCard 
              DefaultImg={el.image.url}
              ProductName={el.name}
              price={el.number}
              DiscountPrice={el.discountprice}
              starCount={el?.commentCount}
               key={index}/>
            ))
           }
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductSection