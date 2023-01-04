import React from 'react'
import { numbers } from '../constants/numbers'
import NumbersSectionCard from './subcomponents/NumbersSectionCard'

const Numbers = () => {
  return (
    <section className='flex flex-wrap justify-center items-center px-4 mb-32 gap-7 bg-primary-focus py-5 border-y-[6px] border-secondary'>
        {numbers.map(number => {
            return <NumbersSectionCard key={number.id} icon={number.icon} title={number.title} number={number.number} />
        })}
    </section>
  )
}

export default Numbers