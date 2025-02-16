import React from 'react'

function HeadDesc({title,description}) {
  return (
    <div>
      <h2 className='font-bold text-3xl text-[#f50541]'>{title} </h2>
      <p className='text-lg text-gray-500 mt-2'>{description} </p>
    </div>
  )
}

export default HeadDesc
