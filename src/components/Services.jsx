import React from 'react'
import ServiceCard from './subcomponents/ServiceCard'
import { services } from '../constants/services';

const Services = () => {
  return (
    <section className='flex justify-center items-center gap-4 flex-wrap px-5 mb-0'>
      {services.map(service => {
        return <ServiceCard key={service.id} icon={service.icon} title={service.title} content={service.content} />
      })}
    </section>
  )
}


export default Services