import ShopCard from '@/components/shared/ShopCard'
import { QueryKeys } from '@/constants/QueryKeys'
import { getApi } from '@/http/api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const ShopPage = () => {
  const {data, isLoading, isError, error} = useQuery({
    queryKey:[QueryKeys.products],
    queryFn: () => getApi("/products?populate=*")
  })
  console.log(data);
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-4'>
           <div className='col-span-4'>
           <div>
           Filter Section
           </div>
           </div>
           <div className='col-span-8'>
             <div className='grid grid-cols-3 gap-4'>
           {
            data?.data && data?.data.map((el,index)=>(
              <ShopCard 
              DefaultImg={el.image.url}
              ProductName={el.name}
              price={el.number}
              DiscountPrice={el.discountprice}
              starCount={el?.commentCount} key={index}/>
            ))
           }
             </div>
            </div>
        </div>
    </div>
  )
}

export default ShopPage