import React from 'react'
import { supporters } from '../constants/supporters'

const Supporters = () => {
  return (
    <section className='flex flex-col items-center gap-7 px-4 mb-40 bg-base-200 py-16 shadow-inner'>
      <h2 className='font-bold text-primary text-4xl'>
        Major Supporters ✨
      </h2>
      <ul className='flex gap-5'>
        {supporters.map(supporter => {
          return (
            <li key={supporter.id} className="flex flex-col items-center gap-4 p-4 w-32 shadow-lg rounded-lg bg-white">
              <p className='text-secondary text-5xl'>
                {supporter.icon}
              </p>
              <h3 className='text-xl font-bold text-accent'>
                {supporter.name}
              </h3>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Supporters