"use client"
import React, { useState } from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

function LogoTitle({onHandleInputChange,formData}) {
    const searchParam=useSearchParams();
    
    const [title,setTitle]=useState(searchParam?.get('title')??'')

  return (
    <div className='my-10'>
      <HeadDesc 
      title={Lookup?.LogoTitle}
      description={Lookup?.LogoTitleDesc}/>

      <input className='p-4 border rounded-lg mt-5 w-full'
       type="text" placeholder={Lookup.InputTitlePlaceholder} 
       defaultValue={title}
       onChange={(e)=>onHandleInputChange(e.target.value)}/>
    </div>
  )
}

export default LogoTitle
