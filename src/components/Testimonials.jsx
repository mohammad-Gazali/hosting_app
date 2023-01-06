import React from 'react';
import { testimonials as data } from '../constants/testimonials';


const Testimonials = () => {
  return (
    <section className='flex flex-col gap-4 px-4 mb-24'>
        <h2 className='text-center font-bold text-primary text-4xl mb-5'>
            Our Customers ⚡
        </h2>
        {data.map((testi) => {
            return <Testimonial key={testi.id} image={testi.image} content={testi.content} />
        })}
    </section>
  )
}


const Testimonial = ({ image, content }) => {
    return (
        <div className='bg-secondary rounded-box w-full flex p-6 overflow-hidden group'> 
            <div className="avatar">
                <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 group-hover:ring-[2000px] transition-all duration-500">
                    <img src={image} />
                </div>
            </div>
            <div className='text-secondary-content px-3 z-20'>
                {content}
            </div>
        </div>
    )
}

export default Testimonials