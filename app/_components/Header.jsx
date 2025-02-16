"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Lookup from '../_data/Lookup'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'


function Header() {
  const {user}=useUser();
  return (
    <div className='px-10 lg:px-32 xl:px-40 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
      <Image src={'logo.svg'} alt='logo' width={180} height={100}/> 
      <div className='flex gap-3 items-center'>
        
        {user? <Link href='/dashboard'><Button  className='bg-[#f50541]'>Dashboar</Button></Link> :
      <Button className=' bg-[#f50541]'>Get Started</Button>}
      <UserButton/>
      </div>
    </div>
  )
}

export default Header
