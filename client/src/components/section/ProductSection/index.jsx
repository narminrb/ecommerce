import ShopCard from '@/components/shared/ShopCard'
import { QueryKeys } from '@/constants/QueryKeys'
import { getApi } from '@/http/api'
import { useQuery } from '@tanstack/react-query'
import React, {  useState } from 'react'
import s from './style.module.scss'
import firstBtn from '../../../assets/firstbtn.png'
import secondBtn from '../../../assets/secondbtn.png'
import thirdBtn from '../../../assets/thirdbtn.png'
import button from '../../../assets/button.png'
import fourthBtn from '../../../assets/fourthbtn.png'
import { useCartContext } from '@/providers/CartContext'
import { toast } from 'sonner'
import SharedModal from '@/components/shared/SharedModal'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';




const ProductSection = () => {
  const [pageSize, setPageSize] = useState(9);
  const [pageLimit, setPageLimit] = useState(1);
  const [startValue, setStartValue] = React.useState(0);
  const [endValue, setEndValue] = React.useState(1000);
    const [collection, setCollection] = useState('');
    const [starStart, setStartStars] = useState(1);
    const [starEnd, setEndStars] = useState(5);
    const [gridCount, setGridCount] = useState(3);

    const {carts, addToCart,removeFromCart, totalAmount} =useCartContext();

    const [openModal, setOpenModal] = useState(false);
    console.log(carts);
  const {data, isLoading, isError, error} = useQuery({
    queryKey:[QueryKeys.products,collection,startValue,endValue,starStart,starEnd,pageSize, pageLimit,],
    queryFn: () => getApi(`/products?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*&filters[collections][name][$contains]=${collection}&filters[number][$gte]=${starStart}&filters[number][$lte]=${starEnd}&filters[number][$gte]=${startValue}&filters[number][$lte]=${endValue}`)
  })


  const {data:collectionData, isLoading:collectionLoading, isError:isCollectionError, error:collectionErr} = useQuery({
    queryKey:[QueryKeys.collections],
    queryFn: () => getApi("/collections?populate=*")
  })
  const {data:starData, isLoading:starLoading, isError:isStarError, error:starError} = useQuery({
    queryKey:[QueryKeys.stars],
    queryFn: () => getApi("/stars?populate=*")
  })

  const totalPage = Math.ceil(data?.meta?.pagination.total / pageSize);


  return (
    <div className={s.productsection}>
        <div className='container mx-auto max-w-screen-xl'>
            <div>

            </div>
        <div className='grid grid-cols-12 gap-2'>
        <div className="hidden md:block md:col-span-3">
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
                    </li>
                ))
            }
           </ul>
           </div>
           <div>
            <h1 className={s.catname}>Star Count</h1>
            <ul className={s.ul}>
          {starData?.data?.map((el, index) => (
            <li 
              onClick={() => setStars(el.commentCount || 0)} 
              className={s.categories} 
              key={index}
              style={{ color: "black", fontSize: "16px" }} 
            >
              {el.commentCount || "N/A"}
            </li>
          ))}
        </ul>
         </div>
           <div>
            <h1 className={s.catname}>PRICE</h1>
            <RangeSlider
            min={0}
            max={1000}
            defaultValue={[0, 200]}
            value={0}
            onInput={(value) => {
              setStartValue(value[0]);
              setEndValue(value[1]);
            }}
             />
             <div className='flex justify-between items-center my-3'>
              <button>{startValue}</button>
              <button>{endValue}</button>
             </div>
           </div>

           </div>
           <div className='col-span-12 md:col-span-9'>
                <div className={s.prodheader}>
                    <h2 className={s.living}>Living Room</h2>
                    <div className={s.leftgrids}>
                        <div>
                          <img src={button} alt="" />
                        </div>
                        <div className={s.btns}>
                        <div 
                        onClick={()=>setGridCount(3)}
                        className={s.grids}>
                        <img src={firstBtn} alt="" />
                        </div>
                        <div 
                        onClick={()=>setGridCount(2)}
                        className={s.grids}>
                        <img src={secondBtn} alt="" />
                        </div>
                        <div
                        onClick={()=>setGridCount(2)}
                         className={s.grids}>
                        <img src={thirdBtn} alt="" />
                        </div>
                        <div 
                        onClick={()=>setGridCount(1)}
                        className={s.grids}>
                        <img src={fourthBtn} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
                {
                  openModal && <SharedModal 
                  onClose={() => setOpenModal(false)}
                  />
                }
         <div className={`grid gap-6 grid-cols-1 ${gridCount === 2 ? 'md:grid-cols-2' : gridCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>


           {
            data?.data && data?.data.map((el,index)=>(
              <ShopCard 
              LinkId = {el.id}
              openModal={()=>setOpenModal(true)}
              addToCart={() => {
                addToCart(el)
                toast.success("Product added to cart successfully")
              }
              }
              DefaultImg={el.image.url}
              ProductName={el.name}
              price={el?.number}
              DiscountPrice={el.discountprice}
              starCount={el?.commentCount}
               key={index}/>
            ))
           }
             </div>
            </div>
        </div>
        <div>
        <ul className='flex items-center gap-1 justify-center my-10'>
          {totalPage > 0 &&
            new Array(totalPage).fill(1).map((_, index) => (
              <li
                className="bg-white text-black border w-10 h-10 rounded-[5px] flex items-center justify-center"
                key={index}
                onClick={() => setPageLimit(index + 1)}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </div>

    </div>
  )
}

export default ProductSection