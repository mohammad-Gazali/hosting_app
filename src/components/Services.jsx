import React from 'react'
import { Link } from 'react-router-dom';
import { services } from '../constants/services';

const Services = () => {
  return (
    <section id="services" className='flex justify-center items-center gap-4 flex-wrap px-5 mb-0'>
      {services.map(service => {
        return <ServiceCard key={service.id} icon={service.icon} title={service.title} content={service.content} link={service.link} />
      })}
    </section>
  )
}


const ServiceCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <p className='text-primary text-7xl mx-auto'>
              {props.icon}
            </p>
            <h2 className="card-title self-center text-primary">{props.title}</h2>
            <p>{props.content}</p>
            <div className="card-actions justify-center mt-5">
                <Link to={props.link} className="btn btn-secondary">Compare Plans</Link>
            </div>
        </div>
    </div>
  )
}

export default Services