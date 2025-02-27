import React, { useState } from 'react'
import dayjs from 'dayjs'
import ReactStars from 'react-stars'
import { useMutation } from '@tanstack/react-query'
import {  postApi } from '@/http/api'
import { useParams } from 'react-router'

const SharedComments = ({PersonName, Time,Comment,starCount}) => {
  const { id } = useParams()
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
      
    )
  })
  const handleChange=(e) =>{
    setForm({...form, 
      [e.target.name]: e.target.value})
  }

  console.log(form)
  return (
    <div>
      <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Customer Comments</h2>
  
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div>
              <h3 className="font-semibold">{PersonName}</h3>
              <p className="text-sm text-gray-500">Posted on {dayjs(Time).format(`MM-DD-YYYY`)}</p>
            </div>
          </div>
          <p className="text-gray-700">{Comment}</p>
          <div className="flex items-center mt-2">
            
          <ul className='flex items-center gap-1'>
                    {
                        new Array(Math.ceil(starCount)).fill(0).map((_, index) => (
                            <li key={index}>
                                <i className="ri-star-fill text-amber-300 text-2xl"></i>
                            </li>
                        ))
                    }
                </ul>
          </div>
        </div>
      </div>
  
    </div>
  </section></div>
  )
}

export default SharedComments