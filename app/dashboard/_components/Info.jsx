"use client"
import { UserDetailConstext} from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'

function info() {
    const {userDetail,setUserDetail}=useContext(UserDetailConstext);
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-3xl text-[#f50541]'>Hello, {userDetail?.name}</h2>
            <div className='flex items-center gap-2 '>
                <Image src={'/coin.png'} alt='coin' width={30} height={30}/>
                <h2 className='font-bold text-xl'>You are in Free Mode</h2>
            </div>
        </div>

        <div className='flex justify-between items-center mt-6'>
            <h2 className='font-bold text-2xl'>Dashboard</h2>
           <Link href='/create'>
            <Button className='bg-[#f50541] shadow-lg'>+ Create New Logo</Button>
           </Link>
        </div>
    </div>
  )
}

export default info