import SharedComments from '@/components/shared/SharedComments'
import { QueryKeys } from '@/constants/QueryKeys'
import { getApi, postApi } from '@/http/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import ReactStars from 'react-stars'

const ShopDetail = ({shopId}) => {
    const { id } = useParams();

    const queryClient = useQueryClient();
  const [form, setForm] =useState({
    name: '',
    desc: '',
    stars:0,
    product:id
  })

  const {mutate, isPending} = useMutation({
    mutationKey:["AddComment"],
    mutationFn: () => postApi('/comments', {data:
      {...form}}
      
    ),
    onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.shopDetail,id)
        setForm({
            name: '',
            desc: '',
            stars: 0,
            product: id
        })
    }
  })
  const handleChange=(e) =>{
    setForm({...form, 
      [e.target.name]: e.target.value})
  }
    const {data, isLoading, isError, error} = useQuery({
        queryKey: [QueryKeys.shopDetail, id],
        queryFn: () => getApi(`/products?populate=*&filters[id]=${id}`)
  
    })

    // const handleStarChange = (newRating) => {
    //     setForm((prevForm) => ({ ...prevForm, stars: newRating }));
    //   };
      
  return (
    <div>
<div className="min-h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div className="container mx-auto px-4 py-4">
    </div>
    <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                    <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Reebok Zig Kinetica 3" className="w-full h-full object-cover"/>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <button className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-primary">
                        <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 1" className="w-full h-full object-cover"/>
                    </button>
                    <button className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 2" className="w-full h-full object-cover"/>
                    </button>
                    <button className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 3" className="w-full h-full object-cover"/>
                    </button>
                    <button className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative group">
                        <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Thumbnail 4" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">+4</div>
                    </button>
                </div>
            </div>
            <div className="space-y-6">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp" alt="Reebok" className="w-6 h-6 rounded-full"/>
                            <span className="font-medium">Zudio</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Shoes Zudio 1299</h1>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <svg className="w-5 h-5 text-gray-300 dark:text-gray-600 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">(42 reviews)</span>
                        </div>
                    </div>
                    <div className="text-3xl font-bold">₹1299.00</div>
                </div>
                <div>
                    <h3 className="font-medium mb-3">Color</h3>
                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-primary p-0.5">
                            <span className="block w-full h-full bg-white rounded"></span>
                        </button>
                        <button className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
                            <span className="block w-full h-full bg-gray-200 rounded"></span>
                        </button>
                        <button className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
                            <span className="block w-full h-full bg-black rounded"></span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Size</h3>
                        <button className="text-primary text-sm">Size guide</button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">40.5</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-primary text-white">41</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">42</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">43</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">43.5</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">44</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">44.5</button>
                        <button className="py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary">45</button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-white py-4 rounded-xl hover:bg-primary/90">
                    <a href="https://abhirajk.vercel.app/">
                      Add to cart
                      </a>
                  </button>
                    <button className="w-14 h-14 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                    </svg>
                     <a href="https://abhirajk.vercel.app/">
                       Free delivery on orders over rs: 300.0
                      </a>
                   
                </div>
            </div>
        </div>
        <div className="mt-16">
            <div className="border-b border-gray-200 dark:border-gray-800">
                <div className="flex gap-8">
                    <button className="px-4 py-2 text-primary border-b-2 border-primary">Details</button>
                    <button className="px-4 py-2 text-gray-500 dark:text-gray-400">Reviews</button>
                    <button className="px-4 py-2 text-gray-500 dark:text-gray-400">Discussion</button>
                </div>
            </div>

            {
                                data?.data[0]?.comments?.map((el, index) => (
                                    <SharedComments key={index}
                                        PersonName={el?.name}
                                        Time={el?.created_at}
                                        starCount={el?.stars}
                                        Title={el?.desc} />
                                ))
                            }
            </div>
            <div>
                 <form 
                      onSubmit={(e) => {
                        e.preventDefault()
                        mutate()
                       
                      }}
                      className="mt-8 bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                          <input
                           onChange={handleChange}
                           value={form.name}
                           type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">Comment</label>
                          <textarea 
                           onChange={handleChange}
                           value={form.desc}
                          id="desc" name="desc" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                        </div>
                        <div className='my-4'>
                        <ReactStars
                             count={5}
                            value={form.stars}
                            onChange={ (e) => { setForm({
                                                    ...form,
                                                    stars: e
                                                })
                                            }
                                        }
                            size={24}
                            color2={'#ffd700'} />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          {isPending ? 'Loading...' : 'Add Comment...'}
                        </button>
                      </form>
            </div>

    </main>
    </div>
    </div>
  )
}

export default ShopDetail