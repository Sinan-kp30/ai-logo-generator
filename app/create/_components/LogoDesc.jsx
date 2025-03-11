import React from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({ onHandleInputChange, formData = {} }) {
  return (
    <div className='my-10'>
      <HeadDesc title={Lookup.LogoDescTitle} description={Lookup.LogoDescDesc} />

      <input
        className='p-4 border rounded-lg mt-5 w-full'
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        value={formData?.desc || ""} // Ensure it's always defined
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoDesc

