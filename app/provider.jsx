"use client"

import React, { useEffect, useState } from 'react'
import Header from './_components/Header'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { UserDetailConstext } from './_context/UserDetailContext'

function Provider({children}) {

  const {user}=useUser();
  const [userDetail,setUserDetail]=useState();

  useEffect(()=>{
    user&&CheckUserAuth();
  },[user])

  //Save user data
  const CheckUserAuth=async()=>{
    //Save user to database
    const result=await axios.post('/api/users',{
      userName:user?.fullName,
      userEmail:user?.primaryEmailAddress?.emailAddress
    });
    console.log(result.data);
    setUserDetail(result.data);
  }


  return (
    <div>
      <UserDetailConstext.Provider value={{userDetail,setUserDetail}}>
      <Header/>
      <div className='px-10 lg:px-32 xl:px-40 2xl:px-56'>
      {children}
      </div>
      </UserDetailConstext.Provider>
    </div>
  )
}

export default Provider
