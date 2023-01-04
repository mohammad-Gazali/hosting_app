import React from 'react'

const NumbersSectionCard = ({ icon, title, number }) => {
  return (
    <div className='w-[20rem] rounded-lg flex flex-col items-center bg-white shadow py-6 gap-3'>
        <p className='text-6xl text-primary'>
            {icon}
        </p>
        <h2 className='text-3xl text-secondary'>
            {title}
        </h2>
        <span className='text-4xl font-bold text-accent-focus'>
            +{number}
        </span>
    </div>
  )
}

export default NumbersSectionCard