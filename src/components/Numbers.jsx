import React from 'react'
import { numbers } from '../constants/numbers'

const Numbers = () => {
  return (
    <section className='flex flex-wrap justify-center items-center px-4 mb-32 gap-7 bg-primary-focus py-5 border-y-[6px] border-secondary'>
        {numbers.map(number => {
            return <NumbersSectionCard key={number.id} icon={number.icon} title={number.title} number={number.number} />
        })}
    </section>
  )
}


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

export default Numbers