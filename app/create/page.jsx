"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import LogoPallete from './_components/LogoPallete'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import PricingModel from './_components/PricingModel'

function CreateLogo() {
    const [step,setStep]=useState(1);
    const [formData,setFormData]=useState()
    const onHandleInputChange=(field,value)=>{

        setFormData(prev=>({
            ...prev,
            [field]:value
        }))

        console.log(formData)
    }
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
        {
            step==1?
            <LogoTitle  onHandleInputChange={(v)=>onHandleInputChange('title',v)}
            formData={formData}/>:
            step==2?
            <LogoDesc onHandleInputChange={(v)=>onHandleInputChange('desc',v)}
            formData={formData}/>:
            step==3?
            <LogoPallete onHandleInputChange={(v)=>onHandleInputChange('palette',v)}
            formData={formData}/>:
            step==4?
            <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange('design',v)}
            formData={formData}/>:
            step==5?
            <LogoIdea formData={formData} onHandleInputChange={(v)=>onHandleInputChange('idea',v)}/>:
            step==6?
            <PricingModel formData={formData} onHandleInputChange={(v)=>onHandleInputChange('pricing',v)}/>:
            
            null
        }
      
      <div className='flex items-center justify-between mt-10'>
        {step!=1&& <Button variant="outline" onClick={()=>setStep(step-1)}> <ArrowLeft/> Previous</Button>}
        <Button className='bg-[#f50541]' onClick={()=>setStep(step+1)} > <ArrowRight/>Countinues</Button>
      </div>
    </div>
  )
}

export default CreateLogo
